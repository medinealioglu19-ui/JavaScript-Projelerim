let zaman;

function baslat() {

    let sayi = Number(document.getElementById("sayi").value);

    if (sayi <= 0) {
        alert("Lütfen geçerli bir saniye giriniz!");
        return;
    }

    clearInterval(zaman);

    document.getElementById("sonuc").innerHTML = sayi;

    zaman = setInterval(function() {

        sayi--;

        document.getElementById("sonuc").innerHTML = sayi;

        if (sayi <= 0) {
            clearInterval(zaman);
            alert("Süre doldu!");
        }

    }, 1000);
}