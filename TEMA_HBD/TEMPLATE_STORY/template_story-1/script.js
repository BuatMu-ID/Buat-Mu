/* =========================
   BUATMU STORY #1
   PERSONAL DATA
========================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  opening: `
    Ada sebuah cerita kecil yang mungkin tidak pernah
    benar-benar direncanakan.

    Tentang seseorang yang datang,
    lalu perlahan menjadi bagian dari banyak hal.
  `,

  firstMemory: `
    Kalau mengingat kembali semuanya,
    selalu ada satu momen yang terasa sederhana.

    Tidak ada yang terlalu istimewa saat itu.

    Tapi entah kenapa, momen itu tetap tinggal
    lebih lama dari yang seharusnya.
  `,

  moments: `
    Setelah itu, ada banyak hal lain yang terjadi.

    Percakapan yang panjang.
    Tawa yang sederhana.
    Hari-hari yang mungkin terlihat biasa.

    Tapi justru kumpulan hal kecil itulah
    yang akhirnya membuat sebuah cerita menjadi berarti.
  `,

  littleThings: `
    Mungkin bukan tentang hal-hal besar.

    Bisa jadi tentang cara seseorang berbicara,
    cara mereka tertawa,
    atau sekadar kehadiran mereka
    di hari yang biasa.

    Hal-hal kecil seperti itu terkadang
    justru menjadi bagian yang paling sulit dilupakan.
  `,

  letter: `
    Terima kasih karena sudah menjadi bagian
    dari cerita ini.

    Mungkin tidak semua momen bisa dijelaskan
    dengan kata-kata.

    Tapi setiap kenangan yang pernah dibuat
    tetap memiliki tempatnya sendiri.

    Semoga hari-hari berikutnya membawa
    lebih banyak alasan untuk tersenyum,
    lebih banyak cerita untuk dikenang,
    dan lebih banyak hal baik yang datang.

    Selamat untuk hari ini.
    Dan semoga cerita baikmu terus berlanjut.
  `,

  present: `
    Hari ini adalah salah satu halaman
    dari cerita yang masih terus berjalan.

    Kita tidak pernah benar-benar tahu
    apa yang akan ada di halaman berikutnya.

    Tapi mungkin justru itu yang membuat
    sebuah cerita terasa menarik.
  `,

  closing: `
    Beberapa cerita memang tidak membutuhkan
    akhir yang sempurna.

    Cukup menjadi cerita yang pernah berarti.
  `,

  photos: [
    "assets/photos/photo-1.jpg",
    "assets/photos/photo-2.jpg",
    "assets/photos/photo-3.jpg",
    "assets/photos/photo-4.jpg",
    "assets/photos/photo-5.jpg",
    "assets/photos/photo-6.jpg",
  ],
};

/* =========================
   ELEMENTS
========================= */

const sections = [
  document.getElementById("opening"),
  document.getElementById("beginning"),
  document.getElementById("firstMemory"),
  document.getElementById("moments"),
  document.getElementById("littleThings"),
  document.getElementById("gallery"),
  document.getElementById("letter"),
  document.getElementById("present"),
  document.getElementById("closing"),
];

let currentSection = 0;

/* =========================
   PERSONALIZATION
========================= */

document.getElementById("recipientName").textContent = data.recipient;

document.getElementById("letterRecipient").textContent = data.recipient;

document.getElementById("closingRecipient").textContent = data.recipient;

document.getElementById("senderName").textContent = data.sender;

document.getElementById("openingText").textContent = data.opening;

document.getElementById("firstMemoryText").textContent = data.firstMemory;

document.getElementById("momentsText").textContent = data.moments;

document.getElementById("littleThingsText").textContent = data.littleThings;

document.getElementById("letterText").textContent = data.letter;

document.getElementById("presentText").textContent = data.present;

document.getElementById("closingText").textContent = data.closing;

/* =========================
   PHOTO GALLERY
========================= */

const photoGrid = document.getElementById("photoGrid");

data.photos.forEach((photo, index) => {
  const item = document.createElement("div");

  item.className = "photo-item";

  item.innerHTML = `
    <img
      src="${photo}"
      alt="Memory ${index + 1}"
      loading="lazy"
    >
  `;

  photoGrid.appendChild(item);
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

  updateProgress();
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
   PROGRESS
========================= */

function updateProgress() {
  const current = String(currentSection + 1).padStart(2, "0");

  document.getElementById("progressCurrent").textContent = current;
}

/* =========================
   BUTTONS
========================= */

document.getElementById("startBtn").addEventListener("click", () => {
  showSection(1);
});

document.getElementById("nextBtn").addEventListener("click", nextSection);

document.getElementById("prevBtn").addEventListener("click", previousSection);

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

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;

  handleSwipe();
});

function handleSwipe() {
  const difference = touchStartX - touchEndX;

  const minimumSwipe = 50;

  if (Math.abs(difference) < minimumSwipe) {
    return;
  }

  if (difference > 0) {
    nextSection();
  } else {
    previousSection();
  }
}

/* =========================
   INITIAL STATE
========================= */

showSection(0);
