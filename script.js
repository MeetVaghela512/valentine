let messageIndex = 0;
let musicStarted = false;

const messages = [
  "No 😐",
  "Are you sure? 🥺",
  "Think again 😳",
  "Last chance 😤",
  "Okay you have no choice 😌"
];

function startMusic() {
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }
}

function handleNoClick() {
  const noButton = document.querySelector(".no-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick(e) {
  e.stopPropagation();
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#ffdde1;
      text-align:center;
      font-family:Poppins;
    ">
      <h1 style="color:#ff4d6d;">Knew you would say YES! 💕</h1>
      <p style="font-size:20px;">This music was played just for you 🎸</p>
    </div>
  `;
}
