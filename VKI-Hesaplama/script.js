function hesapla() {

    let boy = Number(document.getElementById("boy").value);
    let kilo = Number(document.getElementById("kilo").value);

    if (boy <= 0 || kilo <= 0 ||
        document.getElementById("boy").value === "" ||
        document.getElementById("kilo").value === "") {

        document.getElementById("sonuc").innerHTML =
            "Lütfen geçerli değerler giriniz.";

        return;
    }

    let boyMetre = boy / 100;

    let indeks = kilo / (boyMetre * boyMetre);

    document.getElementById("sonuc").innerHTML =
        "Vücut kitle indeksiniz: " + indeks.toFixed(2);
}