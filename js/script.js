function formValidation() {
    let name = document.getElementById('input').value;
    let email = document.getElementById('email').value;

    console.log(name);

    // pengecekkan Nama dan email tidak boleh ''
    if (name, email == '') {
        // Code ini akan dieksekusi ketika name/email = ''
        alert('Nama dan Email Tidak boleh kosong');
    } else {
        // Code ini akan dieksekusi ketika name/email tidak = ''
        alert('Sukses menginput');
    }
}

let indexSlide = 1; //[0, 1, 2]
showSlide();

function nextSlide(n) {
    showSlide(indexSlide += n)

}

function showSlide(n) {
    let listimage = document.getElementsByClassName('main-content-banner');
    console.log(listimage);

    // Algoritma untuk mereset index dari slidenya
    if(n > listimage.length) indexSlide = 1;

    // Algoritma untuk menghilangkan semua gambar
    let index = 0;
    while(index < listimage.length) {
        listimage[index].style.display = 'none';
        index++;
    }

    // Algoritma untuk memunculkan satu gambar
    listimage[indexSlide -1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000)