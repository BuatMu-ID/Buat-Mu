/* =========================
   CUSTOMER DATA
========================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  birthdayDate: "18 SEPTEMBER",

  things: [
    {
      title: "Your kindness",
      text: `
Ada sesuatu tentang caramu
memperlakukan orang lain yang
selalu terasa tulus.
      `,
    },

    {
      title: "Your smile",
      text: `
Hal sederhana yang entah bagaimana
selalu bisa membuat suasana
terasa sedikit lebih ringan.
      `,
    },

    {
      title: "The way you care",
      text: `
Mungkin kamu tidak selalu menyadarinya,
tapi perhatian kecilmu berarti
lebih banyak daripada yang kamu kira.
      `,
    },
  ],

  memory: `
Kadang bukan momen besar yang paling
kita ingat.

Justru percakapan sederhana,
tawa yang tidak direncanakan,
atau satu hari biasa yang akhirnya
menjadi kenangan.

Dan entah kenapa,
beberapa momen seperti itu
selalu punya tempatnya sendiri.
  `,

  photos: [
    "assets/photos/photo-1.jpg",
    "assets/photos/photo-2.jpg",
    "assets/photos/photo-3.jpg",
    "assets/photos/photo-4.jpg",
    "assets/photos/photo-5.jpg",
  ],

  wish: `
Semoga di usia yang baru ini,
kamu menemukan lebih banyak alasan
untuk tersenyum.

Semoga hal-hal yang sedang kamu perjuangkan
perlahan menemukan jalannya.

Dan semoga selalu ada orang-orang baik
yang menemani perjalananmu.
  `,

  closing: "Happy Birthday, Aisyah.",
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

const recipientName = document.getElementById("recipient-name");

const senderName = document.getElementById("sender-name");

const birthdayDate = document.querySelector("#birthday .eyebrow");

const memoryText = document.getElementById("memory-text");

const wishText = document.getElementById("wish-text");

const closingText = document.getElementById("closing-text");

const gallery = document.getElementById("gallery");

/* =========================
   STATE
========================= */

let currentSection = 0;

/* =========================
   BASIC DATA
========================= */

recipientName.textContent = data.recipient;

senderName.textContent = data.sender;

birthdayDate.textContent = data.birthdayDate;

memoryText.textContent = data.memory.trim();

wishText.textContent = data.wish.trim();

closingText.textContent = data.closing;

/* =========================
   THREE LITTLE THINGS
========================= */

data.things.forEach((thing, index) => {
  const number = index + 1;

  const title = document.getElementById(`thing-title-${number}`);

  const text = document.getElementById(`thing-text-${number}`);

  if (title) {
    title.textContent = thing.title;
  }

  if (text) {
    text.textContent = thing.text.trim();
  }
});

/* =========================
   GALLERY
========================= */

function createGallery() {
  gallery.innerHTML = "";

  data.photos.forEach((photo, index) => {
    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = photo;

    image.alt = `Birthday memory ${index + 1}`;

    image.loading = index === 0 ? "eager" : "lazy";

    item.appendChild(image);

    gallery.appendChild(item);
  });
}

createGallery();

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
   UPDATE NAVIGATION
========================= */

function updateNavigation() {
  currentNumber.textContent = String(currentSection + 1).padStart(2, "0");

  totalNumber.textContent = String(sections.length).padStart(2, "0");

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
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextSection();
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    previousSection();
  }
});

/* =========================
   SWIPE
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
  const distance = touchEndX - touchStartX;

  const minimumSwipe = 50;

  if (Math.abs(distance) < minimumSwipe) {
    return;
  }

  if (distance < 0) {
    nextSection();
  } else {
    previousSection();
  }
}

/* =========================
   START EXPERIENCE
========================= */

showSection(0);
