/* =========================================
   BUATMU SWEET #1
   CUSTOMER DATA
========================================= */

const data = {
  recipient: "Aisyah",

  sender: "Hakram",

  opening: "Ada sebuah cerita kecil yang ingin kubagikan.",

  message: `
Selamat ulang tahun, Aisyah.

Hari ini mungkin hanya terlihat seperti
satu tanggal biasa di kalender.

Tapi buatku, hari ini layak dirayakan.
  `,

  story: `
Kalau mengingat kembali semua hal yang
sudah kita lewati, ternyata banyak sekali
momen kecil yang masih tersimpan.

Percakapan sederhana.
Tawa yang muncul tiba-tiba.
Dan hari-hari biasa yang ternyata
menjadi kenangan.

Mungkin saat menjalaninya kita tidak
sadar bahwa suatu hari nanti kita akan
mengingat semua ini.
  `,

  letter: `
Untuk Aisyah,

Terima kasih sudah menjadi bagian
dari begitu banyak cerita.

Aku tidak tahu seperti apa perjalanan
kita ke depannya.

Tapi untuk hari ini, aku hanya ingin
kamu tahu bahwa kehadiranmu berarti.

Selamat ulang tahun.

Semoga langkahmu selalu menemukan
tempat yang baik untuk dituju.

Dengan tulus,
Hakram
  `,

  closing: `
Beberapa cerita tidak membutuhkan
akhir yang besar.

Cukup menjadi sesuatu yang
selalu ingin kita ingat.
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

/* =========================================
   ELEMENTS
========================================= */

const startButton = document.getElementById("startButton");

const reveal = document.getElementById("reveal");

const message = document.getElementById("message");

const gallery = document.getElementById("gallery");

const story = document.getElementById("story");

const letter = document.getElementById("letter");

const closing = document.getElementById("closing");

const recipientName = document.getElementById("recipientName");

const mainMessage = document.getElementById("mainMessage");

const storyText = document.getElementById("storyText");

const letterText = document.getElementById("letterText");

const closingText = document.getElementById("closingText");

const senderName = document.getElementById("senderName");

const photoGrid = document.getElementById("photoGrid");

/* =========================================
   LOAD DATA
========================================= */

recipientName.textContent = data.recipient;

mainMessage.textContent = data.message.trim();

storyText.textContent = data.story.trim();

letterText.textContent = data.letter.trim();

closingText.textContent = data.closing.trim();

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
   SHOW EXPERIENCE
========================================= */

const sections = [reveal, message, gallery, story, letter, closing];

startButton.addEventListener("click", () => {
  startButton.disabled = true;

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.remove("hidden");

      section.classList.add("show-section");
    }, index * 250);
  });

  setTimeout(() => {
    reveal.scrollIntoView({
      behavior: "smooth",
    });
  }, 150);
});
