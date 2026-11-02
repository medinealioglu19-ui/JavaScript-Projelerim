let toplamFiyat = 0;

function urunEkle() {

    let urun = document.getElementById("urun").value;
    let fiyat = Number(document.getElementById("fiyat").value);

    if (urun === "" || document.getElementById("fiyat").value === "") {
        alert("Lütfen ürün adı ve fiyatı giriniz.");
        return;
    }

    if (fiyat < 0 || !Number.isFinite(fiyat)) {
        alert("Geçerli bir fiyat giriniz.");
        return;
    }

    let liste = document.getElementById("urunListesi");

    let yeniUrun = document.createElement("li");

    yeniUrun.innerHTML = urun + " - " + fiyat + " TL";

    liste.appendChild(yeniUrun);

    toplamFiyat = toplamFiyat + fiyat;

    document.getElementById("toplam").innerHTML =
        "Toplam: " + toplamFiyat.toFixed(2) + " TL";

    document.getElementById("urun").value = "";
    document.getElementById("fiyat").value = "";
}