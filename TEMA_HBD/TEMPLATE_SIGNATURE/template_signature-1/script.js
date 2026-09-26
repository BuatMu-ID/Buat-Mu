/* =========================
   BUATMU SIGNATURE #1
   PERSONAL DATA
========================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  mainMessage: `
    Ada banyak hal yang mungkin sulit
    untuk dijelaskan hanya dengan satu kalimat.

    Jadi kali ini, aku ingin membuat sesuatu
    yang bisa kamu lihat, baca, dan rasakan
    sedikit demi sedikit.
  `,

  memories: {
    first: `
      Semuanya mungkin dimulai
      dari sesuatu yang sederhana.

      Tidak ada yang tahu bahwa
      momen kecil itu nantinya
      akan menjadi bagian dari cerita.
    `,

    moment: `
      Kemudian ada satu momen
      yang membuat semuanya terasa berbeda.

      Sesuatu yang mungkin terlihat biasa
      bagi orang lain,
      tapi memiliki arti tersendiri.
    `,

    little: `
      Dan tentu saja,
      ada hal-hal kecil yang sering
      tidak disadari.

      Percakapan.
      Tawa.
      Kebiasaan.

      Justru hal-hal sederhana itulah
      yang akhirnya paling mudah diingat.
    `,
  },

  storyTitle: `
    Some stories<br>
    are worth keeping.
  `,

  story: `
    Kalau semua kenangan dikumpulkan,
    mungkin ceritanya tidak akan pernah
    benar-benar selesai.

    Akan selalu ada halaman baru,
    momen baru,
    dan sesuatu yang belum diketahui.

    Tapi untuk hari ini,
    cukup berhenti sebentar
    dan melihat kembali
    betapa banyak hal yang sudah terjadi.
  `,

  choiceResults: {
    first: `
      Mungkin karena semua cerita
      selalu punya satu titik awal.
    `,

    moment: `
      Mungkin karena ada satu momen
      yang membuat semuanya terasa berarti.
    `,

    little: `
      Mungkin karena hal kecil
      justru sering menjadi kenangan terbesar.
    `,
  },

  letter: `
    Aku tidak tahu akan seperti apa
    halaman-halaman berikutnya.

    Tapi aku tahu bahwa beberapa orang
    memang meninggalkan sesuatu
    yang sulit digantikan oleh siapa pun.

    Terima kasih untuk semua percakapan,
    semua tawa,
    semua momen sederhana,
    dan semua kenangan yang pernah dibuat.

    Semoga apa pun yang sedang kamu perjuangkan
    bisa membawa kamu ke tempat
    yang benar-benar kamu inginkan.

    Dan semoga kamu selalu punya alasan
    untuk tersenyum pada hari-hari berikutnya.
  `,

  special: `
    Kalau ada satu hal yang ingin
    aku ingat dari semua ini,

    mungkin bukan satu foto,
    bukan satu tanggal,
    atau satu kejadian.

    Tapi fakta bahwa pernah ada seseorang
    yang membuat sebuah bagian dari hidup
    terasa sedikit lebih berarti.
  `,

  final: `
    Cerita ini mungkin selesai di halaman ini.

    Tapi kenangan tidak selalu
    membutuhkan halaman terakhir.

    Some memories are meant to stay.
  `,

  photos: [
    "assets/photos/photo-1.jpg",
    "assets/photos/photo-2.jpg",
    "assets/photos/photo-3.jpg",
    "assets/photos/photo-4.jpg",
    "assets/photos/photo-5.jpg",
    "assets/photos/photo-6.jpg",
    "assets/photos/photo-7.jpg",
    "assets/photos/photo-8.jpg",
  ],
};

/* =========================
   ELEMENTS
========================= */

const screens = [
  document.getElementById("opening"),
  document.getElementById("reveal"),
  document.getElementById("message"),
  document.getElementById("journey"),
  document.getElementById("story"),
  document.getElementById("choice"),
  document.getElementById("gallery"),
  document.getElementById("letter"),
  document.getElementById("special"),
  document.getElementById("final"),
];

let currentScreen = 0;

/* =========================
   PERSONALIZATION
========================= */

document.getElementById("recipientName").textContent = data.recipient;

document.getElementById("messageRecipient").textContent = data.recipient;

document.getElementById("letterRecipient").textContent = data.recipient;

document.getElementById("finalRecipient").textContent = data.recipient;

document.getElementById("senderName").textContent = data.sender;

document.getElementById("finalSender").textContent = data.sender;

document.getElementById("mainMessage").textContent = data.mainMessage;

document.getElementById("memory1").textContent = data.memories.first;

document.getElementById("memory2").textContent = data.memories.moment;

document.getElementById("memory3").textContent = data.memories.little;

document.getElementById("storyTitle").innerHTML = data.storyTitle;

document.getElementById("storyText").textContent = data.story;

document.getElementById("letterText").textContent = data.letter;

document.getElementById("specialText").textContent = data.special;

document.getElementById("finalMessage").textContent = data.final;

/* =========================
   GALLERY
========================= */

const gallery = document.getElementById("galleryContainer");

data.photos.forEach((photo, index) => {
  const item = document.createElement("div");

  item.className = "gallery-item";

  item.innerHTML = `
    <img
      src="${photo}"
      alt="Memory ${index + 1}"
      loading="lazy"
    >
  `;

  gallery.appendChild(item);
});

/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(index) {
  if (index < 0) {
    index = 0;
  }

  if (index >= screens.length) {
    index = screens.length - 1;
  }

  screens.forEach((screen, i) => {
    screen.classList.toggle("active", i === index);
  });

  currentScreen = index;

  updateProgress();
}

/* =========================
   NEXT
========================= */

function nextScreen() {
  if (currentScreen < screens.length - 1) {
    showScreen(currentScreen + 1);
  }
}

/* =========================
   PREVIOUS
========================= */

function previousScreen() {
  if (currentScreen > 0) {
    showScreen(currentScreen - 1);
  }
}

/* =========================
   PROGRESS
========================= */

function updateProgress() {
  const current = String(currentScreen + 1).padStart(2, "0");

  document.getElementById("currentProgress").textContent = current;

  const percentage = ((currentScreen + 1) / screens.length) * 100;

  document.getElementById("progressFill").style.width = `${percentage}%`;
}

/* =========================
   START
========================= */

document.getElementById("beginButton").addEventListener("click", () => {
  showScreen(1);
});

/* =========================
   NAV BUTTONS
========================= */

document.getElementById("nextButton").addEventListener("click", nextScreen);

document
  .getElementById("previousButton")
  .addEventListener("click", previousScreen);

/* =========================
   INTERACTIVE REVEAL
========================= */

const revealButton = document.getElementById("revealButton");

const hiddenMessage = document.getElementById("hiddenMessage");

revealButton.addEventListener("click", () => {
  hiddenMessage.classList.add("visible");

  revealButton.querySelector("span").textContent = "Revealed";
});

/* =========================
   CHOICE INTERACTION
========================= */

const choiceButtons = document.querySelectorAll(".choice-button");

const choiceResult = document.getElementById("choiceResult");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    choiceButtons.forEach((item) => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");

    const choice = button.dataset.choice;

    choiceResult.textContent = data.choiceResults[choice];

    choiceResult.classList.add("visible");
  });
});

/* =========================
   SPECIAL REVEAL
========================= */

const specialButton = document.getElementById("specialButton");

const specialMessage = document.getElementById("specialMessage");

specialButton.addEventListener("click", () => {
  specialMessage.classList.add("visible");

  specialButton.textContent = "Revealed";
});

/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    nextScreen();
  }

  if (event.key === "ArrowLeft") {
    previousScreen();
  }
});

/* =========================
   SWIPE
========================= */

let touchStartX = 0;

let touchEndX = 0;

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;

  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) < 50) {
    return;
  }

  if (difference > 0) {
    nextScreen();
  } else {
    previousScreen();
  }
});

/* =========================
   INITIAL STATE
========================= */

showScreen(0);
