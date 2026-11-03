function hesapla() {

    let maas = Number(document.getElementById("maas").value);

    let zam = Number(document.getElementById("zam").value);

    if (maas <= 0 || zam < 0) {
        alert("Lütfen geçerli bilgiler giriniz!");
        return;
    }

    let zamliMaas = maas + (maas * zam / 100);

    document.getElementById("sonuc").innerHTML =
        "Yeni Maaş: " + zamliMaas.toFixed(2) + " TL";

}