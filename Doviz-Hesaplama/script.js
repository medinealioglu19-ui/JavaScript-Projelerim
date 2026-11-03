function hesapla() {

    let tl = Number(document.getElementById("tl").value);

    let dolarKuru = 40;

    if (tl <= 0) {
        alert("Lütfen geçerli bir miktar giriniz!");
        return;
    }

    let dolar = tl / dolarKuru;

    document.getElementById("sonuc").innerHTML =
        dolar.toFixed(2) + " Dolar";

}