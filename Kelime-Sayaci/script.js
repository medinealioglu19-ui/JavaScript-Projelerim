function say() {

    let metin = document.getElementById("metin").value;

    let kelimeler = metin.trim().split(/\s+/);

    let sayi = 0;

    if (metin.trim() != "") {
        sayi = kelimeler.length;
    }

    document.getElementById("sonuc").innerHTML = sayi;

}