function hesapla(islem) {

    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);

    let sonuc;

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
            document.getElementById("sonuc").innerHTML = "Sıfıra bölme yapılamaz!";
            return;
        }

        sonuc = sayi1 / sayi2;
    }

    document.getElementById("sonuc").innerHTML = "Sonuç: " + sonuc;
}