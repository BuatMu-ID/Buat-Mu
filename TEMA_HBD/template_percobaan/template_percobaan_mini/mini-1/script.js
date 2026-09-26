/* =================================
   BUATMU MINI
   DATA EXPERIENCE
================================= */

const surprise = {
  recipient: "Aisyah",

  sender: "Hakram",

  message: `
Selamat ulang tahun, Aisyah.

Hari ini mungkin hanya terlihat seperti
satu tanggal biasa di kalender.

Tapi buatku, hari ini layak dirayakan.

Semoga di usia yang baru ini,
ada lebih banyak hal baik yang datang
ke hidupmu.

Semoga langkahmu selalu dipermudah,
dan semoga kamu selalu punya alasan
untuk tersenyum.

Selamat bertambah usia.
Semoga harimu indah.
    `.trim(),

  photo: "assets/photo.jpg",
};

/* =================================
   ELEMENTS
================================= */

const openButton = document.getElementById("openButton");

const openingScreen = document.getElementById("openingScreen");

const surpriseContent = document.getElementById("surpriseContent");

const recipientName = document.getElementById("recipientName");

const senderName = document.getElementById("senderName");

const messageText = document.getElementById("messageText");

const recipientPhoto = document.getElementById("recipientPhoto");

/* =================================
   LOAD DATA
================================= */

recipientName.textContent = surprise.recipient;

senderName.textContent = surprise.sender;

messageText.textContent = surprise.message;

recipientPhoto.src = surprise.photo;

/* =================================
   OPEN EXPERIENCE
================================= */

openButton.addEventListener("click", () => {
  openingScreen.classList.add("hide");

  setTimeout(() => {
    openingScreen.style.display = "none";

    surpriseContent.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 700);
});
