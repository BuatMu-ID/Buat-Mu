/* =========================================
   BUATMU SIGNATURE #3
   Gift Reveal Experience
========================================= */

/* =========================================
   CENTRAL DATA
   Semua personalisasi customer
   cukup diubah di sini
========================================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  message: `
    Aku tahu sebuah hadiah tidak selalu harus
    berupa sesuatu yang bisa dibungkus.

    Kadang sebuah pesan kecil,
    sebuah kenangan,
    atau sebuah cerita sederhana
    bisa menjadi sesuatu yang jauh lebih berarti.
  `,

  memory: {
    text: `
      Aku masih ingat salah satu momen
      ketika semuanya terasa sederhana.

      Tidak ada sesuatu yang terlalu istimewa,
      tapi entah kenapa justru momen seperti itu
      yang paling lama tinggal di ingatan.
    `,

    date: "ONE OF MY FAVORITE MEMORIES",
  },

  photos: [
    {
      src: "assets/photos/photo-1.jpg",
      caption: "A moment worth remembering.",
    },

    {
      src: "assets/photos/photo-2.jpg",
      caption: "One of those little moments.",
    },

    {
      src: "assets/photos/photo-3.jpg",
      caption: "A memory I still keep.",
    },

    {
      src: "assets/photos/photo-4.jpg",
      caption: "Some days become memories.",
    },

    {
      src: "assets/photos/photo-5.jpg",
      caption: "And some memories stay.",
    },

    {
      src: "assets/photos/photo-6.jpg",
      caption: "A small piece of our story.",
    },

    {
      src: "assets/photos/photo-7.jpg",
      caption: "Another moment worth keeping.",
    },

    {
      src: "assets/photos/photo-8.jpg",
      caption: "One last memory.",
    },
  ],

  letter: `
    Kalau suatu hari nanti kamu melihat kembali
    semua hal yang pernah kita lalui,
    semoga kamu juga bisa mengingat
    betapa banyak hal kecil yang ternyata berarti.

    Terima kasih sudah menjadi bagian
    dari cerita ini.

    Dan semoga masih ada banyak cerita
    yang belum kita tulis.
  `,

  finalMessage: `
    Kalau ada satu hal yang ingin aku sampaikan
    dari semua ini...

    aku harap kamu selalu tahu
    kalau keberadaanmu berarti.

    Selamat untuk hari ini,
    dan untuk semua hari baik
    yang masih menunggu di depan.
  `,

  closing: `
    Sebuah hadiah kecil mungkin hanya membutuhkan
    beberapa menit untuk dibuat.

    Tapi semoga perasaan di baliknya
    bisa tinggal sedikit lebih lama.
  `,
};

/* =========================================
   ELEMENTS
========================================= */

const loadingScreen = document.getElementById("loadingScreen");

const giftScreen = document.getElementById("giftScreen");

const revealScreen = document.getElementById("revealScreen");

const memoryScreen = document.getElementById("memoryScreen");

const photoScreen = document.getElementById("photoScreen");

const letterScreen = document.getElementById("letterScreen");

const finalScreen = document.getElementById("finalScreen");

const closingScreen = document.getElementById("closingScreen");

const navigation = document.getElementById("navigation");

const currentSection = document.getElementById("currentSection");

const progressFill = document.getElementById("progressFill");

/* =========================================
   SECTION SYSTEM
========================================= */

const sections = [
  loadingScreen,
  giftScreen,
  revealScreen,
  memoryScreen,
  photoScreen,
  letterScreen,
  finalScreen,
  closingScreen,
];

let currentIndex = 1;

const totalNavigableSections = sections.length - 1;

/* =========================================
   PERSONAL DATA
========================================= */

document.getElementById("recipientReveal").textContent = data.recipient;

document.getElementById("senderReveal").textContent = data.sender;

document.getElementById("mainMessage").textContent = data.message.trim();

document.getElementById("memoryText").textContent = data.memory.text.trim();

document.getElementById("memoryDate").textContent = data.memory.date;

document.getElementById("letterText").textContent = data.letter.trim();

document.getElementById("letterSender").textContent = data.sender;

document.querySelector("#finalMessage p").textContent =
  data.finalMessage.trim();

document.getElementById("closingText").textContent = data.closing.trim();

document.getElementById("closingSender").textContent = data.sender;

/* =========================================
   SHOW SECTION
========================================= */

function showSection(index) {
  if (index < 1) index = 1;

  if (index > sections.length - 1) {
    index = sections.length - 1;
  }

  currentIndex = index;

  sections.forEach((section, i) => {
    section.classList.toggle("active", i === index);
  });

  navigation.classList.toggle("show", index > 1);

  updateNavigation();
}

/* =========================================
   NAVIGATION UI
========================================= */

function updateNavigation() {
  const displayNumber = String(currentIndex).padStart(2, "0");

  currentSection.textContent = displayNumber;

  const progress = ((currentIndex - 1) / (sections.length - 2)) * 100;

  progressFill.style.width = `${progress}%`;
}

/* =========================================
   LOADING
========================================= */

setTimeout(() => {
  loadingScreen.classList.remove("active");

  giftScreen.classList.add("active");
}, 2400);

/* =========================================
   GIFT OPENING
========================================= */

const giftContainer = document.getElementById("giftContainer");

let giftOpened = false;

function openGift() {
  if (giftOpened) return;

  giftOpened = true;

  giftScreen.classList.add("opening");

  createConfetti();

  setTimeout(() => {
    showSection(2);
  }, 850);
}

giftScreen.addEventListener("click", openGift);

/* =========================================
   CONFETTI
========================================= */

function createConfetti() {
  const amount = 30;

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");

    piece.style.position = "absolute";
    piece.style.left = "50%";
    piece.style.top = "50%";

    piece.style.width = `${5 + Math.random() * 7}px`;

    piece.style.height = `${10 + Math.random() * 12}px`;

    piece.style.background = ["#d8b36a", "#f0d59b", "#ffffff", "#8f7040"][
      Math.floor(Math.random() * 4)
    ];

    piece.style.opacity = "1";

    piece.style.pointerEvents = "none";

    piece.style.zIndex = "20";

    const x = (Math.random() - 0.5) * 320;

    const y = -(120 + Math.random() * 300);

    const rotation = Math.random() * 720;

    piece.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(.5)",
          opacity: 1,
        },

        {
          transform: `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            )
            rotate(${rotation}deg)
            scale(1)`,

          opacity: 0,
        },
      ],
      {
        duration: 900 + Math.random() * 700,

        delay: Math.random() * 150,

        easing: "cubic-bezier(.15,.7,.3,1)",

        fill: "forwards",
      },
    );

    giftScreen.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1800);
  }
}

/* =========================================
   BUTTON NAVIGATION
========================================= */

document.getElementById("continueButton").addEventListener("click", () => {
  showSection(3);
});

document.getElementById("memoryButton").addEventListener("click", () => {
  showSection(4);
});

document.getElementById("photoContinue").addEventListener("click", () => {
  showSection(5);
});

document.getElementById("letterButton").addEventListener("click", () => {
  showSection(6);
});

/* =========================================
   FINAL UNLOCK
========================================= */

const unlockButton = document.getElementById("unlockButton");

const finalMessage = document.getElementById("finalMessage");

let unlocked = false;

unlockButton.addEventListener("click", () => {
  if (unlocked) return;

  unlocked = true;

  finalMessage.classList.add("show");

  unlockButton.querySelector("span:first-child").textContent = "Unlocked";

  setTimeout(() => {
    showSection(7);
  }, 2600);
});

/* =========================================
   PHOTO JOURNEY
========================================= */

const journeyPhoto = document.getElementById("journeyPhoto");

const photoCaption = document.getElementById("photoCaption");

const photoCounter = document.getElementById("photoCounter");

let photoIndex = 0;

function renderPhoto() {
  const photo = data.photos[photoIndex];

  journeyPhoto.style.opacity = "0";

  setTimeout(() => {
    journeyPhoto.src = photo.src;

    photoCaption.textContent = photo.caption;

    photoCounter.textContent = `${photoIndex + 1} / ${data.photos.length}`;

    journeyPhoto.style.opacity = "1";
  }, 180);
}

document.getElementById("nextPhoto").addEventListener("click", () => {
  photoIndex++;

  if (photoIndex >= data.photos.length) {
    photoIndex = 0;
  }

  renderPhoto();
});

document.getElementById("previousPhoto").addEventListener("click", () => {
  photoIndex--;

  if (photoIndex < 0) {
    photoIndex = data.photos.length - 1;
  }

  renderPhoto();
});

renderPhoto();

/* =========================================
   MAIN NAVIGATION
========================================= */

document.getElementById("prevSection").addEventListener("click", () => {
  if (currentIndex > 1) {
    showSection(currentIndex - 1);
  }
});

document.getElementById("nextSection").addEventListener("click", () => {
  if (currentIndex < sections.length - 1) {
    showSection(currentIndex + 1);
  }
});

/* =========================================
   KEYBOARD
========================================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (currentIndex < sections.length - 1) {
      showSection(currentIndex + 1);
    }
  }

  if (event.key === "ArrowLeft") {
    if (currentIndex > 1) {
      showSection(currentIndex - 1);
    }
  }
});

/* =========================================
   SWIPE
========================================= */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.touches[0].clientX;

    touchStartY = event.touches[0].clientY;
  },
  { passive: true },
);

document.addEventListener(
  "touchend",
  (event) => {
    const touchEndX = event.changedTouches[0].clientX;

    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;

    const deltaY = touchEndY - touchStartY;

    /* Gift screen uses upward swipe */
    if (currentIndex === 1 && deltaY < -45) {
      openGift();

      return;
    }

    /* Normal horizontal navigation */

    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        if (currentIndex < sections.length - 1) {
          showSection(currentIndex + 1);
        }
      } else {
        if (currentIndex > 1) {
          showSection(currentIndex - 1);
        }
      }
    }
  },
  { passive: true },
);

/* =========================================
   INITIAL STATE
========================================= */

updateNavigation();
