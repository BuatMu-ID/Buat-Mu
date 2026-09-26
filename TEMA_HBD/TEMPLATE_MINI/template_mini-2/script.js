/* =========================
   CUSTOMER DATA
========================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  message: `
Selamat ulang tahun, Aisyah.

Semoga di usia yang baru ini,
ada lebih banyak hal baik yang datang
dan lebih banyak alasan untuk tersenyum.

Terima kasih sudah menjadi seseorang
yang begitu berarti.
  `,

  photo: "assets/photos/photo-1.jpg",

  wish: `
Semoga langkahmu selalu dipertemukan
dengan hal-hal baik.

Semoga apa pun yang sedang kamu perjuangkan
perlahan menemukan jalannya.

Dan semoga tahun ini membawa
banyak cerita yang layak untuk dikenang.
  `,

  closing: "Happy Birthday, Aisyah. 🤍",
};

/* =========================
   ELEMENTS
========================= */

const sections = document.querySelectorAll(".section");

const nextButtons = document.querySelectorAll("[data-next]");

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const currentNumber = document.getElementById("current-number");
const totalNumber = document.getElementById("total-number");

const recipientNames = document.querySelectorAll(".recipient-name");

const messageText = document.getElementById("message-text");

const mainPhoto = document.getElementById("main-photo");

const wishText = document.getElementById("wish-text");

const closingText = document.getElementById("closing-text");

const senderName = document.getElementById("sender-name");

/* =========================
   INITIAL DATA
========================= */

let currentSection = 0;

totalNumber.textContent = String(sections.length).padStart(2, "0");

/* =========================
   INSERT CUSTOMER DATA
========================= */

recipientNames.forEach((element) => {
  element.textContent = data.recipient;
});

messageText.textContent = data.message.trim();

wishText.textContent = data.wish.trim();

mainPhoto.src = data.photo;

closingText.textContent = data.closing;

senderName.textContent = data.sender;

/* =========================
   PHOTO LOADING
========================= */

mainPhoto.addEventListener("load", () => {
  mainPhoto.classList.add("loaded");
});

mainPhoto.addEventListener("error", () => {
  mainPhoto.alt = "Photo belum tersedia";
});

/* =========================
   SHOW SECTION
========================= */

function showSection(index) {
  if (index < 0) {
    index = 0;
  }

  if (index >= sections.length) {
    index = sections.length - 1;
  }

  sections.forEach((section, i) => {
    section.classList.toggle("active", i === index);
  });

  currentSection = index;

  updateNavigation();
}

/* =========================
   NAVIGATION UPDATE
========================= */

function updateNavigation() {
  currentNumber.textContent = String(currentSection + 1).padStart(2, "0");

  prevButton.style.visibility = currentSection === 0 ? "hidden" : "visible";

  nextButton.style.visibility =
    currentSection === sections.length - 1 ? "hidden" : "visible";
}

/* =========================
   NEXT
========================= */

function nextSection() {
  if (currentSection < sections.length - 1) {
    showSection(currentSection + 1);
  }
}

/* =========================
   PREVIOUS
========================= */

function previousSection() {
  if (currentSection > 0) {
    showSection(currentSection - 1);
  }
}

/* =========================
   BUTTON EVENTS
========================= */

nextButtons.forEach((button) => {
  button.addEventListener("click", nextSection);
});

nextButton.addEventListener("click", nextSection);

prevButton.addEventListener("click", previousSection);

/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSection();
  }

  if (event.key === "ArrowLeft") {
    previousSection();
  }
});

/* =========================
   TOUCH / SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].screenX;
  },
  { passive: true },
);

document.addEventListener(
  "touchend",
  (event) => {
    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();
  },
  { passive: true },
);

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  const minimumSwipe = 50;

  if (Math.abs(swipeDistance) < minimumSwipe) {
    return;
  }

  if (swipeDistance < 0) {
    nextSection();
  } else {
    previousSection();
  }
}

/* =========================
   START
========================= */

showSection(0);
