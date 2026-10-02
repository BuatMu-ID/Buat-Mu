/* =========================================
   BUATMU MINI #1
   DATA CUSTOMER
========================================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  message: `
Selamat ulang tahun, Aisyah.

Semoga di umur yang baru ini,
kamu menemukan lebih banyak
alasan untuk tersenyum.

Semoga hal-hal baik datang
ke dalam hidupmu, satu per satu,
di waktu yang tepat.

Tetap jadi dirimu sendiri.
  `,

  closing: `
Semoga hari ini menjadi
salah satu hari yang
kamu ingat dengan senyum.
  `,

  photos: [
    "assets/photos/photo1 (1).jpeg",
    "assets/photos/photo1 (2).jpeg",
    "assets/photos/photo1 (3).jpeg",
  ],
};

/* =========================================
   ELEMENTS
========================================= */

const startButton = document.getElementById("startButton");

const reveal = document.getElementById("reveal");
const message = document.getElementById("message");
const photos = document.getElementById("photos");
const closing = document.getElementById("closing");

const recipientName = document.getElementById("recipientName");
const mainMessage = document.getElementById("mainMessage");
const closingMessage = document.getElementById("closingMessage");
const senderName = document.getElementById("senderName");

const photoGrid = document.getElementById("photoGrid");

/* =========================================
   LOAD CUSTOMER DATA
========================================= */

recipientName.textContent = data.recipient;

mainMessage.textContent = data.message.trim();

closingMessage.textContent = data.closing.trim();

senderName.textContent = data.sender;

/* =========================================
   LOAD PHOTOS
========================================= */

data.photos.forEach((photo, index) => {
  const wrapper = document.createElement("div");

  wrapper.className = "photo";

  const image = document.createElement("img");

  image.src = photo;

  image.alt = `Kenangan ${index + 1}`;

  wrapper.appendChild(image);

  photoGrid.appendChild(wrapper);
});

/* =========================================
   OPEN EXPERIENCE
========================================= */

startButton.addEventListener("click", () => {
  startButton.disabled = true;

  reveal.classList.remove("hidden");

  reveal.classList.add("reveal-animation");

  setTimeout(() => {
    reveal.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);

  setTimeout(() => {
    message.classList.remove("hidden");
    photos.classList.remove("hidden");
    closing.classList.remove("hidden");
  }, 700);
});
