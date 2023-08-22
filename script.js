function submitForm(event) {
	event.preventDefault();

	let q1Answer = document.querySelector('input[name="q1"]:checked').value;
	let q2Answer = document.querySelector('input[name="q2"]:checked').value;
	let q3Answer = document.querySelector('input[name="q3"]:checked').value;
	let q4Answer = document.querySelector('input[name="q4"]:checked').value;

	let result = 0;

	if (q1Answer === 'HTML') {
		result = result + 1;
	}

	if (q2Answer === 'ECMAScript') {
		result = result + 1;
	}
	if (q3Answer === 'Styling') {
		result = result + 1;
	}
	if (q4Answer === 'Random List') {
		result = result + 1;
	}

	let percentageScore = (result / 4) * 100;

	hideQuestions();

	showScore();

	document.querySelector('.score').innerHTML = percentageScore + ' %';
}

function showQuestions() {
	$('.form').show();
}

function hideQuestions() {
	$('.form').hide(); // Using jQuery to hide the element
}

function showScore() {
	$('.scoreboard').show(); // Using jQuery to hide the element
}
