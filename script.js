const randomMessages = [
  "You don't need to feel confident every second to do something brave. Keep going, Elene. 💗",
  "A score can measure a test performance. It cannot measure your kindness, your potential, or your worth.",
  "Future you is going to be so proud that you kept showing up, even when it felt hard. ✨",
  "Drink some water, relax your shoulders, and take the next tiny step. That's enough for this moment.",
  "You're allowed to learn slowly. You're allowed to need breaks. You're allowed to be human. 🌷",
  "Your brain is trying to protect you by worrying. Thank it for trying, then remind it: 'I can handle one step at a time.'",
  "Friendly reminder: you are not competing with everyone on the planet. You're just working toward your own goals. 🫶",
  "IELTS is an exam you are preparing for, not a verdict on who you are. You've got this!"
];

const feelingMessages = {
  anxious: {
    title: "Let's make this moment smaller. 💗",
    body: "Put both feet on the floor. Breathe in gently for 4, then out for 6. Do that a few times. You don't have to solve the whole exam right now—just this one moment."
  },
  overwhelmed: {
    title: "One thing. Not everything. 🌷",
    body: "Write down the very next small thing you can do: one speaking answer, five vocabulary words, or a short break. Ignore the rest for now. Small steps still move you forward."
  },
  tired: {
    title: "Rest is part of the plan, bestie. 💤",
    body: "You don't have to earn rest by exhausting yourself first. Have some water, eat something if you need to, and take a proper break. Your brain deserves kindness, too."
  },
  doubtful: {
    title: "A thought is not a fact. 🫶",
    body: "Feeling unprepared doesn't automatically mean you are unprepared. Remember what you've already learned. Pick one thing you can practice today and let that be enough."
  },
  okay: {
    title: "Let's save a little of this good energy. ☀️",
    body: "Take a second to notice that you're doing okay right now. You can come back to this feeling on a harder day. Keep going at your own pace—you are doing your best."
  }
};

const messageText = document.getElementById("messageText");
const messageCard = document.getElementById("messageCard");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function popHearts(count = 8) {
  const hearts = ["💗", "♡", "💖", "✨", "💕"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${12 + Math.random() * 76}%`;
    heart.style.top = `${45 + Math.random() * 35}%`;
    heart.style.animationDelay = `${Math.random() * 0.35}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1800);
  }
}

document.querySelectorAll(".big-sticker").forEach((button) => {
  button.addEventListener("click", () => {
    messageText.textContent = button.dataset.message;
    messageCard.animate([{ transform: "scale(.98)", opacity: .7 }, { transform: "scale(1)", opacity: 1 }], { duration: 260 });
    showToast("A little reminder, just for you ♡");
    popHearts(4);
  });
});

document.getElementById("randomMessage").addEventListener("click", () => {
  const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  messageText.textContent = message;
  showToast("A fresh pep talk has arrived ✨");
  popHearts(5);
});

document.getElementById("openLove").addEventListener("click", () => {
  document.getElementById("messageCard").scrollIntoView({ behavior: "smooth", block: "center" });
  messageText.textContent = "Hi Elene. This is your reminder that you are loved, you are capable, and you do not have to earn your place in this world. Take a breath. You're doing better than you think. ❤️";
  popHearts(10);
});

document.getElementById("hugButton").addEventListener("click", () => {
  const hugResult = document.getElementById("hugResult");
  hugResult.textContent = "HUUUUGGGG! 🫂💗 Imagine the biggest, safest, coziest hug. You can borrow my confidence until you find yours again.";
  popHearts(14);
  showToast("Virtual hug delivered successfully 🫂");
});

document.getElementById("ieltsButton").addEventListener("click", () => {
  const result = document.getElementById("ieltsResult");
  const messages = [
    "Pause. Unclench your jaw. Breathe out slowly. You only need to answer the question in front of you—not every question that could ever exist. 💗",
    "Your IELTS score matters for your goal, but it does not define your intelligence or your future. Practice, rest, and try again. One step at a time.",
    "If you freeze during speaking, take a breath and keep it simple. You don't need a perfect answer; you need to communicate. You can recover and continue. 🌷",
    "Tiny plan: choose one skill, practice for 15 minutes, then take a break. You do not have to study everything at once."
  ];
  result.textContent = messages[Math.floor(Math.random() * messages.length)];
  result.animate([{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 250 });
  popHearts(4);
});

document.querySelectorAll(".feeling-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".feeling-option").forEach((option) => option.classList.remove("selected"));
    button.classList.add("selected");
    const result = feelingMessages[button.dataset.feeling];
    const box = document.getElementById("feelingResult");
    box.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
    box.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 260 });
  });
});

const letterButton = document.getElementById("letterButton");
const secretLetter = document.getElementById("secretLetter");
letterButton.addEventListener("click", () => {
  const opening = secretLetter.hidden;
  secretLetter.hidden = !opening;
  letterButton.textContent = opening ? "Close your letter 💌" : "Open your secret letter 💌";
  letterButton.setAttribute("aria-expanded", String(opening));
  if (opening) {
    secretLetter.scrollIntoView({ behavior: "smooth", block: "nearest" });
    popHearts(7);
    showToast("A letter from your bestie, with love 💗");
  }
});

document.getElementById("topButton").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !secretLetter.hidden) {
    secretLetter.hidden = true;
    letterButton.textContent = "Open your secret letter 💌";
    letterButton.setAttribute("aria-expanded", "false");
  }
});


// Scrapbook photo lightbox
const photoModal = document.getElementById('photoModal');
const photoModalImage = document.getElementById('photoModalImage');
const photoModalCaption = document.getElementById('photoModalCaption');
const photoModalClose = document.getElementById('photoModalClose');
document.querySelectorAll('.photo-open').forEach((button) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    photoModalImage.src = button.dataset.photo;
    photoModalImage.alt = img.alt;
    photoModalCaption.textContent = button.closest('figure').querySelector('figcaption').textContent;
    photoModal.hidden = false;
    document.body.style.overflow = 'hidden';
    photoModalClose.focus();
  });
});
function closePhotoModal() {
  photoModal.hidden = true;
  photoModalImage.src = '';
  document.body.style.overflow = '';
}
photoModalClose.addEventListener('click', closePhotoModal);
photoModal.addEventListener('click', (event) => { if (event.target === photoModal) closePhotoModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !photoModal.hidden) closePhotoModal(); });
