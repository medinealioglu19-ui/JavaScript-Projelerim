let rastgeleSayi = Math.floor(Math.random() * 100) + 1;

function tahminEt() {

    let tahmin = Number(document.getElementById("tahmin").value);

    if (document.getElementById("tahmin").value === "") {
        document.getElementById("sonuc").innerHTML = "Lütfen bir sayı giriniz.";
    }
    else if (tahmin < 1 || tahmin > 100 || !Number.isInteger(tahmin)) {
        document.getElementById("sonuc").innerHTML = "1 ile 100 arasında tam sayı giriniz.";
    }
    else if (tahmin < rastgeleSayi) {
        document.getElementById("sonuc").innerHTML = "Daha büyük bir sayı deneyin.";
    }
    else if (tahmin > rastgeleSayi) {
        document.getElementById("sonuc").innerHTML = "Daha küçük bir sayı deneyin.";
    }
    else {
        document.getElementById("sonuc").innerHTML = "Tebrikler! Doğru tahmin ettiniz.";
    }
}

function yenidenBaslat() {

    rastgeleSayi = Math.floor(Math.random() * 100) + 1;

    document.getElementById("tahmin").value = "";
    document.getElementById("sonuc").innerHTML = "Yeni oyun başladı!";
}