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
function showMain(e) {
  e.stopPropagation();

  startMusic(); // 🎵 music starts AFTER shhh screen

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  intro.style.opacity = 0;

  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
    main.style.animation = "fadeIn 0.6s ease";
  }, 400);
}

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const buttons = document.querySelector(".buttons");

  // change text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // move inside buttons area
  const area = buttons.getBoundingClientRect();
  const btn = noButton.getBoundingClientRect();

  const maxX = area.width - btn.width;
  const maxY = area.height - btn.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}


function handleYesClick(e) {
  e.stopPropagation();

  startMusic(); // 🔥 force music to start here

  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg, #ffdde1, #ee9ca7);
      text-align:center;
      padding:20px;
    ">
      <h1 style="
        color:#ff4d6d;
        font-family:'Dancing Script', cursive;
        font-size:48px;
        margin-bottom:15px;
      ">
        I knew you’d say YES 💕
      </h1>

      <p style="
        font-family:'Poppins', sans-serif;
        font-size:20px;
        color:#333;
        max-width:320px;
      ">
        This music playing right now…<br>
        <strong>I played it specially for you 🎸</strong>
      </p>
    </div>
  `;
}

