// Standings for Men's Basketball
const basketballmenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Women's Basketball
const basketballwomenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Women's Volleyball
const volleyballwomenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Men's Volleyball
const volleyballmenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Futsal
const futsalScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Takraw
const takrawScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Single Men's Badminton
const badmintonMenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Single Women's Badminton
const badmintonWomenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Double Men's Badminton
const doubleBadmintonMenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Double Women's Badminton
const doubleBadmintonWomenScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Chess
const chessScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for MLBB
const mlbbScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for CODM
const codmScores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Standings for Dota2
const dota2Scores = {
    teamA: { wins: 0, losses: 0 },
    teamB: { wins: 0, losses: 0 },
    teamC: { wins: 0, losses: 0 }
};

// Function to update the DOM with scores for any sport
function updateScores(sport, scores) {
    document.getElementById(`${sport}-teamA-wins`).innerText = scores.teamA.wins;
    document.getElementById(`${sport}-teamA-losses`).innerText = scores.teamA.losses;
    document.getElementById(`${sport}-teamB-wins`).innerText = scores.teamB.wins;
    document.getElementById(`${sport}-teamB-losses`).innerText = scores.teamB.losses;
    document.getElementById(`${sport}-teamC-wins`).innerText = scores.teamC.wins;
    document.getElementById(`${sport}-teamC-losses`).innerText = scores.teamC.losses;
}

// Update all scores on page load
updateScores('basketball-men', basketballmenScores); // Men's Basketball
updateScores('basketball-women', basketballwomenScores); // Women's Basketball
updateScores('volleyball-women', volleyballwomenScores); // Women's Volleyball
updateScores('volleyball-men', volleyballmenScores); // Men's Volleyball
updateScores('single-badminton-men', badmintonMenScores); // Single Men's Badminton
updateScores('single-badminton-women', badmintonWomenScores); // Single Women's Badminton
updateScores('double-badminton-men', doubleBadmintonMenScores); // Double Men's Badminton
updateScores('double-badminton-women', doubleBadmintonWomenScores); // Double Women's Badminton
updateScores('futsal', futsalScores); // Futsal
updateScores('takraw', takrawScores); // Takraw
updateScores('chess', chessScores);//Chess
updateScores('mlbb', mlbbScores);//MLBB
updateScores('codm', codmScores);//CODM
updateScores('dota2', dota2Scores);//DOTA2

window.onload = function() {
    // Function to get wins from the table
    function getWins(teamId) {
        return parseInt(document.getElementById(teamId).textContent || '0', 14);
    }

    // Calculate total wins for each team
   function getWins(teamId) {
    return parseInt(document.getElementById(teamId).textContent || '0', 10);
}

// Calculate the total wins for each team
/*let totalWins = {
    'Team A': getWins('basketball-men-teamA-wins') 
            + getWins('basketball-women-teamA-wins') 
            + getWins('volleyball-men-teamA-wins') 
            + getWins('volleyball-women-teamA-wins')
            + getWins('single-badminton-men-teamA-wins')
            + getWins('single-badminton-women-teamA-wins')
            + getWins('double-badminton-men-teamA-wins')
            + getWins('double-badminton-women-teamA-wins')
            + getWins('futsal-teamA-wins')
            + getWins('takraw-teamA-wins')
            + getWins('chess-teamA-wins')
            + getWins('mlbb-teamA-wins')
            + getWins('codm-teamA-wins')
            + getWins('dota2-women-teamA-wins'),
    
    'Team B': getWins('basketball-men-teamB-wins') 
            + getWins('basketball-women-teamB-wins') 
            + getWins('volleyball-men-teamB-wins') 
            + getWins('volleyball-women-teamB-wins')
            + getWins('single-badminton-men-teamB-wins')
            + getWins('single-badminton-women-teamB-wins')
            + getWins('double-badminton-men-teamB-wins')
            + getWins('double-badminton-women-teamB-wins')
            + getWins('futsal-teamB-wins')
            + getWins('takraw-teamB-wins')
            + getWins('chess-teamB-wins')
            + getWins('mlbb-teamB-wins')
            + getWins('codm-teamB-wins')
            + getWins('dota2-women-teamB-wins'),
    
    'Team C': getWins('basketball-men-teamC-wins') 
            + getWins('basketball-women-teamC-wins') 
            + getWins('volleyball-men-teamC-wins') 
            + getWins('volleyball-women-teamC-wins')
            + getWins('single-badminton-men-teamC-wins')
            + getWins('single-badminton-women-teamC-wins')
            + getWins('double-badminton-men-teamC-wins')
            + getWins('double-badminton-women-teamC-wins')
            + getWins('futsal-teamC-wins')
            + getWins('takraw-teamC-wins')
            + getWins('chess-teamC-wins')
            + getWins('mlbb-teamC-wins')
            + getWins('codm-teamC-wins')
            + getWins('dota2-women-teamC-wins')
};*/
    
	 let totalWins = {
         'Team A': getWins('basketball-men-teamA-wins') 
				+ getWins('basketball-women-teamA-wins') 
				+ getWins('volleyball-men-teamA-wins') 
				+ getWins('volleyball-women-teamA-wins')
				+ getWins('single-badminton-men-teamA-wins')
				+ getWins('single-badminton-women-teamA-wins')
				+ getWins('double-badminton-men-teamA-wins')
				+ getWins('double-badminton-women-teamA-wins')
				+ getWins('futsal-teamA-wins')
				+ getWins('takraw-teamA-wins')
				+ getWins('chess-teamA-wins')
				+ getWins('mlbb-teamA-wins')
				+ getWins('codm-teamA-wins')
				+ getWins('dota2-teamA-wins'),
				
        'Team B': getWins('basketball-men-teamB-wins') 
				+ getWins('basketball-women-teamB-wins') 
				+ getWins('volleyball-men-teamB-wins') 
				+ getWins('volleyball-women-teamB-wins')
				+ getWins('single-badminton-men-teamB-wins')
				+ getWins('single-badminton-women-teamB-wins')
				+ getWins('double-badminton-men-teamB-wins')
				+ getWins('double-badminton-women-teamB-wins')
				+ getWins('futsal-teamB-wins')
				+ getWins('takraw-teamB-wins')
				+ getWins('chess-teamB-wins')
				+ getWins('mlbb-teamB-wins')
				+ getWins('codm-teamB-wins')
				+ getWins('dota2-teamB-wins'),
        'Team C': getWins('basketball-men-teamC-wins') 
				+ getWins('basketball-women-teamC-wins') 
				+ getWins('volleyball-men-teamC-wins') 
				+ getWins('volleyball-women-teamC-wins')
				+ getWins('single-badminton-men-teamC-wins')
				+ getWins('single-badminton-women-teamC-wins')
				+ getWins('double-badminton-men-teamC-wins')
				+ getWins('double-badminton-women-teamC-wins')
				+ getWins('futsal-teamC-wins')
				+ getWins('takraw-teamC-wins')
				+ getWins('chess-teamC-wins')
				+ getWins('mlbb-teamC-wins')
				+ getWins('codm-teamC-wins')
				+ getWins('dota2-teamC-wins')
    };
	
	// Sort teams by total wins
    let sortedTeams = Object.keys(totalWins).sort((a, b) => totalWins[b] - totalWins[a]);
	  // Sort teams by total wins
  

    // Mapping of team logos
    const teamLogos = {
        'Team A': 'assets/logo/teamA-logo.png',
        'Team B': 'assets/logo/teamB-logo.png',
        'Team C': 'assets/logo/teamC-logo.png'
    };

    // Update placement section dynamically
    document.getElementById('champion-name').textContent = sortedTeams[0];
    document.getElementById('champion-logo').src = teamLogos[sortedTeams[0]];

    document.getElementById('second-place-name').textContent = sortedTeams[1];
    document.getElementById('second-place-logo').src = teamLogos[sortedTeams[1]];

    document.getElementById('third-place-name').textContent = sortedTeams[2];
    document.getElementById('third-place-logo').src = teamLogos[sortedTeams[2]];
};
