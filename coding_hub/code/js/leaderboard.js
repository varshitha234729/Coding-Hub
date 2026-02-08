async function loadLeaderboard() {
  try {
    const response = await fetch('/scores.json');
    const allScores = await response.json();
    const currentUser = localStorage.getItem('userName');

    const quizGroups = {};
    allScores.forEach(entry => {
      if (!quizGroups[entry.quiz]) {
        quizGroups[entry.quiz] = [];
      }
      quizGroups[entry.quiz].push(entry);
    });

    const leaderboardTable = document.querySelector('.leaderboard-table tbody');
    leaderboardTable.innerHTML = "";

    for (const quizName in quizGroups) {
      const headingRow = document.createElement('tr');
      headingRow.innerHTML = `<td colspan="4" style="font-weight:bold; background-color:#f0f0f0;">${quizName}</td>`;
      leaderboardTable.appendChild(headingRow);

      const sortedUsers = quizGroups[quizName].sort((a, b) => b.score - a.score);
      sortedUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.quiz}</td>
          <td>${user.score}</td>
        `;
        leaderboardTable.appendChild(row);
      });
    }

    const userNameElem = document.getElementById("user-name");
    const userRankElem = document.getElementById("user-rank");
    const userScoreElem = document.getElementById("user-score");

    if (currentUser) {
      const userScores = allScores.filter(u => u.name?.toLowerCase() === currentUser.toLowerCase());
      const totalScore = userScores.reduce((acc, u) => acc + (u.score || 0), 0);
      const sortedTotal = allScores
        .reduce((acc, u) => {
          acc[u.name] = (acc[u.name] || 0) + (u.score || 0);
          return acc;
        }, {});
      const sortedRanks = Object.entries(sortedTotal).sort((a, b) => b[1] - a[1]);
      const userRank = sortedRanks.findIndex(([name]) => name.toLowerCase() === currentUser.toLowerCase()) + 1;

      userNameElem.textContent = currentUser;
      userRankElem.textContent = userRank;
      userScoreElem.textContent = totalScore;
    } else {
      userNameElem.textContent = "Guest";
      userRankElem.textContent = "N/A";
      userScoreElem.textContent = "0";
    }

  } catch (error) {
    console.error('Error loading leaderboard:', error);
  }
}

function toggleSignInSignOut() {
  const userName = localStorage.getItem('userName');
  if (userName) {
    localStorage.removeItem('userName');
    document.getElementById('status-change').textContent = 'Sign In';
    window.location.href = "login.html";
  } else {
    window.location.href = "login.html";
  }
}

window.onload = () => {
  loadLeaderboard();

  const userName = localStorage.getItem('userName');
  if (userName) {
    document.getElementById('status-change').textContent = 'Sign Out';
    if (userName === 'admin') {
      const homeLink = document.getElementById('home-link');
      if (homeLink) homeLink.href = 'admin.html';
    }
  }
};
