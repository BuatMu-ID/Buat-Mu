/* =========================
   CUSTOMER DATA
========================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  message: `
Selamat ulang tahun, Aisyah.

Hari ini bukan cuma tentang bertambahnya
satu angka dalam usiamu.

Hari ini adalah tentang merayakan
seseorang yang sudah melewati banyak hal
dan masih terus berjalan sampai sekarang.

Semoga kamu tahu,
betapa berharganya perjalananmu.
  `,

  memories: {
    beginning: {
      category: "THE BEGINNING",

      title: `
It started<br />
somewhere.
      `,

      content: `
Tidak semua cerita dimulai
dengan sesuatu yang besar.

Kadang semuanya dimulai
dari sebuah percakapan sederhana,
sebuah pertemuan,
atau satu momen kecil
yang awalnya tidak kita pikirkan
akan menjadi penting.

Tapi ternyata,
di situlah cerita ini dimulai.
      `,
    },

    moment: {
      category: "THE MOMENT",

      title: `
One moment<br />
I remember.
      `,

      content: `
Ada satu momen yang sampai sekarang
masih terasa berbeda.

Bukan karena sesuatu yang luar biasa terjadi,
tetapi karena pada saat itu
aku menyadari bahwa beberapa momen
memang tidak perlu dibuat sempurna
untuk menjadi berharga.

Cukup menjadi nyata.
      `,
    },

    "little-things": {
      category: "THE LITTLE THINGS",

      title: `
It was never<br />
the big things.
      `,

      content: `
Kalau dipikir lagi,
mungkin bukan hal-hal besar
yang paling aku ingat.

Justru hal-hal kecil.

Cara kamu berbicara,
cara kamu tertawa,
cara kamu memperhatikan sesuatu,
dan semua detail kecil
yang mungkin tidak pernah kamu sadari.

Itulah yang membuat sebuah cerita
terasa benar-benar milik kita.
      `,
    },
  },

  photos: [
    {
      src: "assets/photos/photo-1.jpg",
      caption: "A moment worth keeping.",
    },

    {
      src: "assets/photos/photo-2.jpg",
      caption: "One of the little memories.",
    },

    {
      src: "assets/photos/photo-3.jpg",
      caption: "A day I still remember.",
    },

    {
      src: "assets/photos/photo-4.jpg",
      caption: "Another piece of the story.",
    },

    {
      src: "assets/photos/photo-5.jpg",
      caption: "Some moments stay.",
    },

    {
      src: "assets/photos/photo-6.jpg",
      caption: "A memory frozen in time.",
    },

    {
      src: "assets/photos/photo-7.jpg",
      caption: "One more for the collection.",
    },

    {
      src: "assets/photos/photo-8.jpg",
      caption: "And one last memory.",
    },
  ],

  letter: `
Kalau ada sesuatu yang ingin aku sampaikan
di hari ulang tahunmu ini,
mungkin sesederhana:

Terima kasih.

Terima kasih untuk semua percakapan,
semua tawa,
semua momen kecil,
dan semua bagian dari perjalanan
yang mungkin tidak terasa penting
ketika sedang dijalani.

Tapi ketika melihatnya kembali,
semuanya ternyata punya tempat
di dalam sebuah cerita.

Semoga kamu selalu tahu
bahwa keberadaanmu berarti.
  `,

  finalMessage: `
Semoga di usia yang baru ini,
kamu tidak hanya mendapatkan
lebih banyak hari,

tetapi juga lebih banyak alasan
untuk menikmati setiap harinya.

Happy Birthday.
  `,

  closing: `
Semoga halaman berikutnya
membawa cerita yang lebih indah,
lebih banyak tawa,
dan lebih banyak momen
yang layak untuk dikenang.
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

const messageText = document.getElementById("message-text");

const memoryCategory = document.getElementById("memory-category");

const memoryTitle = document.getElementById("memory-title");

const memoryContent = document.getElementById("memory-content");

const letterText = document.getElementById("letter-text");

const finalMessage = document.getElementById("final-message");

const closingText = document.getElementById("closing-text");

const journeyPhoto = document.getElementById("journey-photo");

const photoCaption = document.getElementById("photo-caption");

const photoCurrent = document.getElementById("photo-current");

const photoTotal = document.getElementById("photo-total");

const photoPrev = document.getElementById("photo-prev");

const photoNext = document.getElementById("photo-next");

/* =========================
   STATE
========================= */

let currentSection = 0;

let currentPhoto = 0;

/* =========================
   BASIC DATA
========================= */

recipientName.textContent = data.recipient;

senderName.textContent = data.sender;

messageText.textContent = data.message.trim();

letterText.textContent = data.letter.trim();

finalMessage.textContent = data.finalMessage.trim();

closingText.textContent = data.closing.trim();

photoTotal.textContent = String(data.photos.length).padStart(2, "0");

/* =========================
   START BUTTON
========================= */

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  showSection(1);
});

/* =========================
   UNLOCK
========================= */

const unlockButton = document.getElementById("unlock-btn");

unlockButton.addEventListener("click", () => {
  unlockButton.textContent = "Unlocked ✓";

  setTimeout(() => {
    showSection(2);
  }, 500);
});

/* =========================
   MEMORY CHOICES
========================= */

const memoryOptions = document.querySelectorAll(".memory-option");

memoryOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedMemory = option.dataset.memory;

    const memory = data.memories[selectedMemory];

    if (!memory) {
      return;
    }

    memoryCategory.textContent = memory.category;

    memoryTitle.innerHTML = memory.title.trim();

    memoryContent.textContent = memory.content.trim();

    showSection(4);
  });
});

/* =========================
   PHOTO SYSTEM
========================= */

function showPhoto(index) {
  if (index < 0) {
    index = data.photos.length - 1;
  }

  if (index >= data.photos.length) {
    index = 0;
  }

  currentPhoto = index;

  const photo = data.photos[currentPhoto];

  journeyPhoto.classList.remove("loaded");

  journeyPhoto.src = photo.src;

  photoCaption.textContent = photo.caption;

  photoCurrent.textContent = String(currentPhoto + 1).padStart(2, "0");
}

journeyPhoto.addEventListener("load", () => {
  journeyPhoto.classList.add("loaded");
});

photoPrev.addEventListener("click", () => {
  showPhoto(currentPhoto - 1);
});

photoNext.addEventListener("click", () => {
  showPhoto(currentPhoto + 1);
});

showPhoto(0);

/* =========================
   PROMISE BUTTON
========================= */

const promiseButton = document.getElementById("promise-btn");

promiseButton.addEventListener("click", () => {
  promiseButton.textContent = "Promise kept ✦";

  setTimeout(() => {
    showSection(8);
  }, 600);
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
   NAVIGATION
========================= */

function updateNavigation() {
  currentNumber.textContent = String(currentSection + 1).padStart(2, "0");

  totalNumber.textContent = String(sections.length).padStart(2, "0");

  /*
    Hide navigation on special
    interaction sections.
  */

  const isWelcome = currentSection === 0;

  const isUnlock = currentSection === 1;

  const isMemoryChoice = currentSection === 3;

  const isQuestion = currentSection === 7;

  prevButton.style.visibility =
    isWelcome || isUnlock || isMemoryChoice || isQuestion
      ? "hidden"
      : "visible";

  nextButton.style.visibility =
    currentSection === sections.length - 1 ||
    isWelcome ||
    isUnlock ||
    isMemoryChoice ||
    isQuestion
      ? "hidden"
      : "visible";
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
   NEXT BUTTONS
========================= */

nextButtons.forEach((button) => {
  button.addEventListener("click", nextSection);
});

/* =========================
   NAVIGATION BUTTONS
========================= */

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
  {
    passive: true,
  },
);

document.addEventListener(
  "touchend",
  (event) => {
    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();
  },
  {
    passive: true,
  },
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
   INITIALIZE
========================= */

showSection(0);
