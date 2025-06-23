import markdown
import os
import random
import re
from roman import toRoman
from weasyprint import HTML, CSS



def diogenes(text):
	text = re.sub(r">", '&gt;', text)
	text = re.sub(r"<", '&lt;', text)
	text = re.sub(r"^\s*$", "<br>", text, flags = re.MULTILINE)
	text = re.sub(r"^(\d*\.)*(\d*\.)*(\d+)$", r'<div class="lnno">\1\2\3</div>', text, flags = re.MULTILINE)
	text = re.sub(r"^\t|^\s{2,}", r'<span class="tab"></span>', text, flags = re.MULTILINE)
	text = re.sub(r"\n", r'\n\n', text)

	return(text)

def fread(path):
	with open(path, "r") as f:
		return f.read()
	
def fadd(path, text):
	with open(path, "a") as f:
		f.write(text)

def html_pdf(path, html):
	html = HTML(string = html)
	css = CSS("_assets/style.css")

	html.write_pdf(path, stylesheets = [css], presentational_hints = True)

def md_html(md):
	html = markdown.markdown(md, extensions=["footnotes", "nl2br", 'tables'])

	return html

def tf(text):
	if text == "true":
		return True
	else:
		return False



if __name__ == "__main__":
	# GET EXAM ID
	exams = os.listdir("exams")
	if len(exams) > 0:
		mx = int(re.sub(r"\D", "", max(exams)))
	else:
		mx = 0

	exam = str(mx + 1).zfill(3)
	path = "exams/" + exam + ".pdf"

	# GET FILES
	files = [f for f in os.listdir("_assets/passages") 
		  if os.path.isfile(os.path.join("_assets/passages", f))]
	files.sort()
	random.shuffle(files)
	select = files[0:6]

	html = "<h1>Exam " + toRoman(mx + 1) + "</h1>\n"
	csv = ""

	for s in select:
		file = fread("_assets/passages/" + s)
		
		meta = re.sub(r"\n---\n\n[\s\S]*", "", file)

		author = re.sub(r"[\s\S]*author: \"([^\"]*)[\s\S]*", r"\1", meta)
		title = re.sub(r"[\s\S]*title: \"([^\"]*)[\s\S]*", r"\1", meta)
		section = re.sub(r"[\s\S]*section: \"([^\"]*)[\s\S]*", r"\1", meta)
		verse = tf(re.sub(r"[\s\S]*verse: (.*)[\s\S]*", r"\1", meta))
		genre = re.sub(r"[\s\S]*genre: \"([^\"]*)[\s\S]*", r"\1", meta)

		text = re.sub(r"[\s\S]*\n---\n\n", "", file)
		text = diogenes(text)
		text = md_html(text)
		
		html += "<h2>" + author + ", <em>" + title + "</em> " + section + "</h2>\n"
		html += text + "\n"

		csv += "\n" + author + "," + title + "," + section + "," + str(verse)
		csv += "," + genre + "," + s.replace(".md", "") + "," + exam

		os.rename("_assets/passages/" + s, "_assets/used/" + s)

	fadd("_assets/record.csv", csv)
	html_pdf(path, html)

	# TEST CODE — COMMENT OUT LNS. 89–92
	# head = "<head><link rel=\"stylesheet\" href=\"/_assets/style.css\" type=\"text/css\" media=\"all\"></head>"
	# html = head + html
	# fadd("exams/" + exam + ".html", html)