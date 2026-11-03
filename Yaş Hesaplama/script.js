function yasHesapla() {

    let dogumYili = Number(document.getElementById("dogumYili").value);

    let suankiYil = new Date().getFullYear();

    let yas = suankiYil - dogumYili;

    if (dogumYili == "") {
        document.getElementById("sonuc").innerHTML = "Lütfen doğum yılınızı giriniz.";
    }
    else if (dogumYili > suankiYil || dogumYili < 1900) {
        document.getElementById("sonuc").innerHTML = "Geçerli bir yıl giriniz.";
    }
    else {
        document.getElementById("sonuc").innerHTML = "Yaşınız: " + yas;
    }
}