const testCorp = [
	{
		auth: 'Catullus',
		text: 'Carmina',
		sections: [[0, 116]],
		total: 2328,
	},
	{
		auth: 'Tacitus',
		text: 'Annals',
		sections: [[13, 58], [14, 65], [15, 74], [16, 35]],
		total: 4640
	}
];

// READING LIST CORPUS
const rlCorp = [
	// LATIN
	{
		auth: 'Caesar',
		text: 'On the Civil War',
		sections: [[1, 29]],
		total: 580,
		approx: true
	},
	{
		auth: 'Caesar',
		text: 'On the Gallic War',
		sections: [[1, 54]],
		total: 1080,
		approx: true
	},
	{
		auth: 'Catullus',
		text: 'Carmina',
		sections: [[0, 116]],
		total: 2328,
		approx: false
	},
	{
		auth: 'Cicero',
		text: 'On Duty',
		sections: [[1, 161]],
		total: 2185,
		approx: true
	},
	{
		auth: 'Cicero',
		text: 'On Oratory',
		sections: [[1, 265]],
		total: 3930,
		approx: true
	},
	{
		auth: 'Cicero',
		text: 'Against Cataline',
		sections: [[1, 33]],
		total: 363,
		approx: true
	},
	{
		auth: 'Cicero',
		text: 'Against M. Antony',
		sections: [[2, 119]],
		total: 1488,
		approx: true
	},
	{
		auth: 'Cicero',
		text: 'Pro Archia',
		sections: [[0, 32]],
		total: 448,
		approx: true
	},
	{
		auth: 'Cicero',
		text: 'Pro Caelio',
		sections: [[0, 80]],
		total: 1000,
		approx: true
	},
	{
		auth: 'Horace',
		text: 'Ars Poetica',
		sections: [[0, 476]],
		total: 0,
		approx: false
	},
	{
		auth: 'Horace',
		text: 'Odes',
		sections: [[1, 38], [2, 20], [3, 30]],
		total: 1064,
		approx: false
	},
	{
		auth: 'Horace',
		text: 'Satires',
		sections: [[1, 10]],
		total: 1029,
	},
	{
		auth: 'Juvenal',
		text: 'Satires',
		sections: [[1, 171], [3, 322], [6, 695]]
	},
	{
		auth: 'Livy',
		text: 'Ab Urbe Condita',
		sections: [[1, 60], [21, 63]],
		total: 1805, 
		approx: true
	}, 
	{
		auth: 'Lucan',
		text: 'Pharsalia',
		sections: [[1, 695]]
	}, 
	{
		auth: 'Lucretius',
		text: 'De Rerum Naturae',
		sections: [[1, 1117], [3, 1094]]
	}, 
	{
		auth: 'Ovid',
		text: 'Amores',
		sections: [[1.1, 34], [1.2, 52], [1.3, 26], [1.4, 70], [1.5, 26], [1.6, 74], [1.7, 68], [1.8, 114], [1.9, 46], [1.10, 64], [1.11, 28], [1.12, 30], [1.13, 48], [1.14, 56], [1.15, 42]]
	}, 
	{
		auth: 'Ovid',
		text: 'Fasti',
		sections: [[4, 954]]
	}, 
	{
		auth: 'Ovid',
		text: 'Metamorphoses',
		sections: [[1, 779]]
	}, 
	{
		auth: 'Plautus',
		text: 'Amphitruo',
		sections: [[0, 1146]]
	}, 
	{
		auth: 'Plautus',
		text: 'Menaechmi',
		sections: [[0, 1162]]
	}, 
	{
		auth: 'Pertius',
		text: 'Elegies',
		sections: [[1, 22]],
		total: 330,
		approx: true
	},
	{
		auth: 'Propertius',
		text: 'Elegies',
		sections: [[4.7, 96]]
	},
	{
		auth: 'Quintilian',
		text: 'Institutio Oratoriae',
		sections: [[10.1, 131]],
		total: 655, 
		approx: true
	},
	{
		auth: 'Sallust',
		text: 'Bellum Catilinae',
		sections: [[0, 61]],
		total: 1342, 
		approx: true
	},
	{
		auth: 'Seneca Minor',
		text: 'Moral Letters',
		sections: [[51, 13], [77, 20], [78, 29], [90, 46], [114, 27], [122, 19]],
		total: 1155,
	},
	{
		auth: 'Seneca Minor',
		text: 'Phaedra',
		sections: [[0, 1280]]
	}, 
	{
		auth: 'Statius',
		text: 'Silvae',
		sections: [[4.0, 37], [4.1, 47], [4.2, 67], [4.3, 163], [4.4, 105], [4.5, 60], [4.6, 109], [4.7, 56], [4.8, 62], [4.9, 55]]
	},
	{
		auth: 'Suetonius',
		text: 'Vita Augustae',
		sections: [[0, 101]],
		total: 750, 
		approx: true
	}, 
	{
		auth: 'Sulpicia',
		text: 'Elegies',
		sections: [[0, 6]],
		total: 40,
	},
	{
		auth: 'Tacitus',
		text: 'Agricola',
		sections: [[0, 46]],
		total: 650,
	},
	{
		auth: 'Tacitus',
		text: 'Annales',
		sections: [[1, 81], [4, 75]],
		total: 3200, 
		approx: true
	},
	{
		auth: 'Tacitus',
		text: 'Dialogus',
		sections: [[0, 42]],
		total: 840, 
		approx: true
	},
	{
		auth: 'Terence',
		text: 'Adelphoe',
		sections: [[0, 997]]
	}, 
	{
		auth: 'Terence',
		text: 'Hecyra',
		sections: [[0, 849]]
	}, 
	{
		auth: 'Tibullus',
		text: 'Elegies',
		sections: [[1.1, 78], [1.3, 94], [1.4, 84], [2.3, 80]]
	}, 
	{
		auth: 'Vergil',
		text: 'Aeneid',
		sections: [[1, 756], [2, 804], [3, 718], [4, 705], [6, 901], [7, 865], [8, 817], [12, 952]]
	}, 
	{
		auth: 'Vergil',
		text: 'Eclogues',
		sections: [[1, 83], [2, 73], [3, 111], [4, 63], [5, 90], [6, 86], [7, 70], [8, 109], [9, 67], [10, 77]]
	}, 
	{
		auth: 'Vergil',
		text: 'Georgics',
		sections: [[1, 514], [4, 566]]
	},

	// GREEK
	{
		auth: 'Aeschylus',
		text: 'Agamemnon',
		sections: [[0, 1673]]
	}, 
	{
		auth: 'Aeschylus',
		text: 'Seven against Thebes',
		sections: [[0, 1047]]
	}, 
	{
		auth: 'Aristophanes',
		text: 'Clouds',
		sections: [[0, 1510]]
	}, 
	{
		auth: 'Aristophanes',
		text: 'Frogs',
		sections: [[0, 1533]]
	},
	{
		auth: 'Demosthenes',
		text: 'Olynthiacs',
		sections: [[1, 28], [2, 31]],
		total: 714, 
		approx: true
	},
	{
		auth: 'Demosthenes',
		text: 'Against Neiara',
		sections: [[0, 123]],
		total: 923, 
		approx: true
	},
	{
		auth: 'Euripides',
		text: 'Bacchae',
		sections: [[0, 1392]]
	}, 
	{
		auth: 'Euripides',
		text: 'Medea',
		sections: [[0, 1419]]
	}, 
	{
		auth: 'Herodotus',
		text: 'Histories',
		sections: [[1, 216]],
		total: 3240, 
		approx: true
	}, 
	{
		auth: 'Hesiod',
		text: 'Theogony',
		sections: [[0, 1022]]
	},
	{
		auth: 'Homer',
		text: 'Iliad',
		sections: [[1, 611], [2, 877], [3, 461], [4, 544], [6, 529], [9, 713], [16, 867], [18, 617], [19, 424], [22, 515], [23, 897], [24, 804]]
	}, 
	{
		auth: 'Homer',
		text: 'Odyssey',
		sections: [[1, 444], [5, 493], [6, 331], [7, 347], [8, 586], [9, 566], [10, 574], [11, 640], [12, 543], [19, 604], [21, 434], [22, 501], [23, 548]]
	},
	{
		auth: 'Lucian',
		text: 'True Histories',
		sections: [[0, 47]],
		total: 705, 
		approx: true
	},
	{
		auth: 'Lysias',
		text: 'On the Murder of Eratosthenes',
		sections: [[0, 50]],
		total: 300, 
		approx: true
	},
	{
		auth: 'Lysias',
		text: 'Against Eratosthenes',
		sections: [[0, 100]],
		total: 750, 
		approx: true
	}, 
	{
		auth: 'Menander',
		text: 'Dyscolus',
		sections: [[0, 964]]
	}, 
	{
		auth: 'Pindar',
		text: 'Isthmian Ode',
		sections: [[7, 51]]
	}, 
	{
		auth: 'Pindar',
		text: 'Olympian Ode',
		sections: [[1, 116], [2, 100], [7, 95]]
	}, 
	{
		auth: 'Pindar',
		text: 'Pythian Ode',
		sections: [[1, 100], [8, 100], [10, 72]]
	},
	{
		auth: 'Plutarch',
		text: 'Life of Cicero',
		sections: [[0, 49]],
		total: 1764,
	},
	{
		auth: 'Sophocles',
		text: 'Antigone',
		sections: [[0, 1353]]
	}, 
	{
		auth: 'Sophocles',
		text: 'Oedipus Tyrannos',
		sections: [[0, 1530]]
	}, 
	{
		auth: 'Thucydides',
		text: 'Peloponnesian War',
		sections: [[1, 146], [6, 105], [7, 87]],
		total: 10140, 
		approx: true
	},
	{
		auth: 'Xenophon',
		text: 'Anabasis',
		sections: [[3.1, 47], [3.2, 39], [3.3, 20], [3.4, 49], [3.5, 18]],
		total: 865,
		approx: true
	}
];

// FUNCTIONS
function textLengths(corpus) {
	var len = [];

	for (let i of corpus) {
		let x = 0;

		if (i.approx) {
			x = i.total;
		} else {
			for (let j of i.sections) {x += j[1]};
		}

		len.push(x);
	}

	return(len);
}

function weightedRandom(items, weights) {
	// via https://www.codementor.io/@trehleb/weighted-random-in-javascript-1mxquk46q0
  
	// Preparing the cumulative weights array.
	const cumulativeWeights = [];
	for (let i = 0; i < weights.length; i += 1) {
	  cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
	}
  
	// Getting the random number in a range of [0...sum(weights)]
	const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
	const randomNumber = maxCumulativeWeight * Math.random();
  
	// Picking the random item based on its weight.
	for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
	  if (cumulativeWeights[itemIndex] >= randomNumber) {
		return items[itemIndex];
	  }
	}
  }

function randomLine(corpus) {
	length = textLengths(corpus);

	// (PSEUDO-)RANDOM SELECTION
	let choice = weightedRandom(corpus, length);

	const auth = choice.auth;
	const text = choice.text;

	let lns = [];

	for (let i of choice.sections) {
		let x = i[1];
		lns.push(x);
	}

	let loc = weightedRandom(choice.sections, lns)

	const bk = loc[0];
	const ln = Math.floor(Math.random() * loc[1]) + 1;

	// MARK NON-LINE RESULTS
	let star = '';

	if (choice.total) {
		sections = 0;

		for (let i of choice.sections) {
			sections += i[1];
		}

		avgLen = choice.approx / sections;
		provRand = Math.floor(Math.random() * avgLen) + 1;
		star = '.' + provRand.toString() + '*';
	}

	// PRINT RESULT
	let result = '';

	if (bk == 0){
		result = auth + ", <em>" + text + "</em> " + ln.toString() + star;
	} else {
		result = auth + ", <em>" +  text + "</em> " + bk.toString() + "." + ln.toString() + star;
	}

	resultHTML = '<p class="result">' + result + '</p>';

	return(resultHTML);
}

function corpList(corpus) {
	let resultHTML = '<details><summary>reading list</summary>';
	resultHTML += '<ul>'

	for (let i of corpus) {
		auth = i.auth;
		text = i.text;

		range = '';

		for (let j of i.sections) {
			if (j[0] == 0) {
				range += '1–' + j[1].toString();
				break;
			} else if (i.sections.indexOf(j) < i.sections.length - 1) {
				range += j[0].toString() + '.1–' + j[1].toString() + ', ';
			} else {
				range += j[0].toString() + '.1–' + j[1].toString();
			}
		}

		if (i[3]) {
			ct = i[3].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

			if (i[4]) {
				range += ' (approx. ' + ct + ' lns.)'
			} else {
				range += ' (' + ct + ' lns.)'
			}
		}

		resultHTML += '<li>' + auth + ', <em>' + text + '</em>: ' + range + '</li>';
	}

	resultHTML += '</ul></details>';

	return(resultHTML);
}

// TEST RESULTS
// let pageHTML = randomLine(testCorp, testlen)

// PRODUCE HTML
let pageHTML = '';

// RANDOM SELECTIONS
pageHTML += '<div>' + randomLine(rlCorp) + '</div>';

// CORPORA LISTS
pageHTML += corpList(rlCorp, 'reading list');

// INSERT HTML
const element = document.getElementById('result');
if (element) element.innerHTML = pageHTML;