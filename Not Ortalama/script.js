function ortalamaHesapla() {

    let not1 = Number(document.getElementById("not1").value);
    let not2 = Number(document.getElementById("not2").value);
    let not3 = Number(document.getElementById("not3").value);

    let ortalama = (not1 + not2 + not3) / 3;

    if (
        document.getElementById("not1").value === "" ||
        document.getElementById("not2").value === "" ||
        document.getElementById("not3").value === ""
    ) {
        document.getElementById("sonuc").innerHTML = "Bütün notları giriniz.";
    }
    else if (
        not1 < 0 || not1 > 100 ||
        not2 < 0 || not2 > 100 ||
        not3 < 0 || not3 > 100
    ) {
        document.getElementById("sonuc").innerHTML = "Notlar 0-100 arasında olmalıdır.";
    }
    else {
        document.getElementById("sonuc").innerHTML =
            "Ortalamanız: " + ortalama.toFixed(2);

        if (ortalama >= 50) {
            document.getElementById("sonuc").innerHTML += " - Başarılı";
        }
        else {
            document.getElementById("sonuc").innerHTML += " - Başarısız";
        }
    }
}