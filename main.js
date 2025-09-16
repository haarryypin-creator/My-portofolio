// section 1
const words = ["- boo? ", "- purbo?", "- ryy? ", "- harii? ", "- wowo? "]; // daftar teks
let i = 0; // index kata
let j = 0; // index huruf
let currentWord = "";
let isDeleting = false;
function type() {
    currentWord = words[i];
    if (isDeleting) {
        // hapus huruf
        j--;
    } else {
        // tambah huruf
        j++;
    }
    document.getElementById("typewriter").textContent = currentWord.substring(0, j);
    let speed = isDeleting ? 100 : 150; // kecepatan ketik/hapus
    if (!isDeleting && j === currentWord.length) {
        // selesai ketik → tunggu sebentar, lalu hapus
        isDeleting = true;
        speed = 1000;
    } else if (isDeleting && j === 0) {
        // selesai hapus → lanjut kata berikutnya
        isDeleting = false;
        i = (i + 1) % words.length;
        speed = 200;
    }
    setTimeout(type, speed);
}
type();
