const resultsDiv = document.getElementById('results');
    const detailsDiv = document.getElementById('details');
    const okBtn = document.getElementById('ok-btn');
    const retestBtn = document.getElementById('retest-btn');

    const data = JSON.parse(sessionStorage.getItem('quizResults'));

    if (!data) {
      resultsDiv.textContent = 'No results found. Please take a quiz first.';
      okBtn.style.display = 'none';
    } else {
      resultsDiv.innerHTML = `
        <h2>Results for ${data.language} - ${data.subtopic}</h2>
        <p><strong>Correct:</strong> ${data.correct}</p>
        <p><strong>Incorrect:</strong> ${data.wrong}</p>
      `;

      okBtn.addEventListener('click', () => {
        detailsDiv.style.display = 'block';
        detailsDiv.innerHTML = '<h3>Question Review</h3>';

        data.questions.forEach((q, i) => {
          const userAns = data.userAnswers[i];
          const correctAns = q.answer;
          const isCorrect = userAns === correctAns;

          const qDiv = document.createElement('div');
          qDiv.className = 'question';
          qDiv.innerHTML = `
            <p><strong>Q${i + 1}:</strong> ${q.question}</p>
            <p>Your Answer: <span class="${isCorrect ? 'correct' : 'incorrect'}">
              ${userAns !== null ? q.options[userAns] : 'No answer'}
            </span></p>
            <p>Correct Answer: <span class="correct">${q.options[correctAns]}</span></p>
            <p><em>Explanation:</em> ${q.explanation}</p>
          `;
          detailsDiv.appendChild(qDiv);
        });

        retestBtn.style.display = 'block';
        okBtn.style.display = 'none';
      });

      retestBtn.addEventListener('click', () => {
        const url = `quiz-page.html?language=${encodeURIComponent(data.language)}&subtopic=${encodeURIComponent(data.subtopic)}`;
        window.location.href = url;
      });
    }