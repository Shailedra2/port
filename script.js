const playerForm = document.getElementById('player-form');
const playerNameInput = document.getElementById('player-name');
const playerPhotoInput = document.getElementById('player-photo');
const playerInfoDiv = document.getElementById('player-info');

const team = {
  "Raja": { skill: "Bat" },
  "Shivam Diwedi": { skill: "Bat" },
  "Golu Tiwari": { skill: "Bat" },
  "Jatin": { skill: "Bat" },
  "Chotu Yadav": { skill: "Bat" },
  "Amit": { skill: "Bat" },
  "Kaku Gupta": { skill: "Bat/Bowl" },
  "Veeru Gupta": { skill: "Bat/Bowl" },
  "Raghav Tiwari": { skill: "Bat/Bowl" },
  "Bhola": { skill: "Bat/Bowl" },
  "Sumit Prjapati": { skill: "Bowl" },
};

playerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = playerNameInput.value.trim().toLowerCase();
  const playerPhoto = playerPhotoInput.files[0];
  const playerKey = Object.keys(team).find(key => key.toLowerCase() === playerName);

  if (playerKey) {
    const playerInfo = team[playerKey];
    const photoURL = URL.createObjectURL(playerPhoto);

    playerInfoDiv.innerHTML = `
      <h2>${playerKey}</h2>
      <img src="${photoURL}" alt="${playerKey}" id="player-photo-preview">
      <p>Skill: ${playerInfo.skill}</p>
    `;

    // Display popup message
    alert("Photo uploaded successfully!");
  } else {
    playerInfoDiv.innerHTML = `<p>Player not found!</p>`;
  }
});
