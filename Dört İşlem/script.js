function islemYap(islem) {

    let sayi1 = document.getElementById("sayi1").value;
    let sayi2 = document.getElementById("sayi2").value;

    let sonuc;

    if (sayi1 === "" || sayi2 === "") {
        document.getElementById("sonuc").innerHTML = "İki sayı da girilmelidir.";
        return;
    }

    sayi1 = Number(sayi1);
    sayi2 = Number(sayi2);

    if (islem == "+") {
        sonuc = sayi1 + sayi2;
    }
    else if (islem == "-") {
        sonuc = sayi1 - sayi2;
    }
    else if (islem == "*") {
        sonuc = sayi1 * sayi2;
    }
    else if (islem == "/") {

        if (sayi2 == 0) {
            document.getElementById("sonuc").innerHTML = "Sıfıra bölme yapılamaz.";
            return;
        }

        sonuc = sayi1 / sayi2;
    }

    document.getElementById("sonuc").innerHTML = "Sonuç: " + sonuc;
}