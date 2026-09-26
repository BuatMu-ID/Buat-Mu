/* =========================
   CUSTOMER DATA
========================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  openingMessage: `
Hari ini bukan hanya tentang bertambahnya
satu angka dalam usiamu.

Ini tentang semua hal yang sudah kamu lewati,
semua hal yang sedang kamu perjuangkan,
dan semua cerita yang masih menunggumu
di depan sana.
  `,

  thatDay: `
Aku masih ingat hari itu.

Hari yang mungkin awalnya terasa biasa saja,
tetapi entah bagaimana akhirnya menjadi
salah satu bagian kecil dari cerita
yang masih aku ingat sampai sekarang.

Tidak ada yang benar-benar tahu
bahwa sebuah momen sederhana
bisa memiliki tempat sebesar itu
di dalam ingatan seseorang.
  `,

  remember: `
Kalau ada satu hal yang aku pelajari
dari semua yang sudah terjadi,
ternyata kenangan tidak selalu datang
dari sesuatu yang besar.

Kadang ia datang dari percakapan kecil.

Dari tawa yang tidak direncanakan.

Dari cara seseorang mengatakan sesuatu.

Dari sebuah hari biasa yang,
setelah semuanya berlalu,
ternyata tidak biasa sama sekali.
  `,

  details: [
    `
Cara kamu tertawa ketika sesuatu
benar-benar membuatmu senang.
    `,

    `
Hal-hal kecil yang kamu lakukan
tanpa pernah menganggapnya penting.
    `,

    `
Percakapan sederhana yang ternyata
masih aku ingat sampai sekarang.
    `,

    `
Dan keberadaanmu yang sering kali
membuat hari biasa terasa sedikit berbeda.
    `,
  ],

  photos: [
    "assets/photos/photo-1.jpg",
    "assets/photos/photo-2.jpg",
    "assets/photos/photo-3.jpg",
    "assets/photos/photo-4.jpg",
    "assets/photos/photo-5.jpg",
    "assets/photos/photo-6.jpg",
  ],

  neverSaid: `
Mungkin ada banyak hal yang tidak pernah
benar-benar aku katakan.

Tentang betapa berartinya beberapa momen.

Tentang betapa aku menghargai keberadaanmu.

Dan tentang bagaimana beberapa orang
datang ke dalam hidup kita lalu,
tanpa banyak suara,
meninggalkan cerita yang sulit dilupakan.

Hari ini mungkin adalah kesempatan kecil
untuk akhirnya mengatakan salah satunya.

Terima kasih sudah menjadi bagian
dari cerita ini.
  `,

  today: `
Dan sekarang kita sampai di hari ini.

Hari ulang tahunmu.

Sebuah halaman baru yang belum ditulis.

Aku tidak tahu seperti apa cerita
yang akan datang setelah ini.

Tapi aku berharap,
ketika kamu membacanya suatu hari nanti,
kamu akan melihat betapa banyak hal baik
yang sudah berhasil kamu lewati
dan betapa banyak hal indah
yang masih menunggumu.
  `,

  closing: "Happy Birthday, Aisyah.",

  closingMessage: `
Semoga cerita berikutnya
jauh lebih indah daripada
yang pernah kamu bayangkan.
  `,
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

const openingMessage = document.getElementById("opening-message");

const thatDayText = document.getElementById("that-day-text");

const rememberText = document.getElementById("remember-text");

const memoryDetails = [
  document.getElementById("detail-1"),
  document.getElementById("detail-2"),
  document.getElementById("detail-3"),
  document.getElementById("detail-4"),
];

const photoGrid = document.getElementById("photo-grid");

const neverSaidText = document.getElementById("never-said-text");

const todayText = document.getElementById("today-text");

const closingText = document.getElementById("closing-text");

const closingMessage = document.getElementById("closing-message");

/* =========================
   STATE
========================= */

let currentSection = 0;

/* =========================
   INSERT DATA
========================= */

recipientName.textContent = data.recipient;

senderName.textContent = data.sender;

openingMessage.textContent = data.openingMessage.trim();

thatDayText.textContent = data.thatDay.trim();

rememberText.textContent = data.remember.trim();

neverSaidText.textContent = data.neverSaid.trim();

todayText.textContent = data.today.trim();

closingText.textContent = data.closing;

closingMessage.textContent = data.closingMessage.trim();

/* =========================
   DETAILS
========================= */

memoryDetails.forEach((element, index) => {
  if (data.details[index]) {
    element.textContent = data.details[index].trim();
  }
});

/* =========================
   PHOTO GRID
========================= */

function createPhotoGallery() {
  photoGrid.innerHTML = "";

  data.photos.forEach((photo, index) => {
    const item = document.createElement("div");

    item.className = "photo-item";

    const image = document.createElement("img");

    image.src = photo;

    image.alt = `Memory ${index + 1}`;

    image.loading = index === 0 ? "eager" : "lazy";

    item.appendChild(image);

    photoGrid.appendChild(item);
  });
}

createPhotoGallery();

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
   NAVIGATION
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
   START
========================= */

showSection(0);
