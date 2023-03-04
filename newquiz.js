const quizForm = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('results');

quizForm.addEventListener('submit', e => {
	e.preventDefault();
	
	let score = 0;
	
	const q1Answer = document.querySelector('input[name="q1"]:checked').value;
	if (q1Answer === 'b') {
		score++;
	}

	const q2Answer = document.querySelector('input[name="q2"]:checked').value;
	if (q2Answer === 'a') {
		score++;
	}

	resultsDiv.innerHTML = `<h2>Results:</h2><p>You scored ${score} out of 2</p>`;
});
