
  function calculateResults() {
    const groupAQuestions = [1, 3, 6, 9, 12, 15];
    const groupBQuestions = [4, 7, 10, 11, 14, 17];
    const groupCQuestions = [2, 5, 8, 13, 16, 18];

    let totalA = 0;
    let totalB = 0;
    let totalC = 0;

    groupAQuestions.forEach(questionNumber => {
        const answer = document.querySelector(`input[name="alt${questionNumber}"]:checked`);
        if (answer) {
            totalA += parseInt(answer.value);
        }
    });

    groupBQuestions.forEach(questionNumber => {
        const answer = document.querySelector(`input[name="alt${questionNumber}"]:checked`);
        if (answer) {
            totalB += parseInt(answer.value);
        }
    });

    groupCQuestions.forEach(questionNumber => {
        const answer = document.querySelector(`input[name="alt${questionNumber}"]:checked`);
        if (answer) {
            totalC += parseInt(answer.value);
        }
    });

    const total = totalA + totalB + totalC;

    const resultA = (totalA * 100) / total;
    const resultB = (totalB * 100) / total;
    const resultC = (totalC * 100) / total;

    // document.getElementById('resultA').textContent = resultA.toFixed(2);
    // document.getElementById('resultB').textContent = resultB.toFixed(2);
    // document.getElementById('resultC').textContent = resultC.toFixed(2);

    localStorage.setItem('exibeA', `${resultA.toFixed()}%`)
    localStorage.setItem('exibeB', `${resultB.toFixed()}%`)
    localStorage.setItem('exibeC', `${resultC.toFixed()}%`)
}

