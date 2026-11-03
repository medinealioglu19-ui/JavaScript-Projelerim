function kontrolEt() {

    let cevap = document.getElementById("cevap").value;

    if (cevap.toLowerCase() == "ankara") {

        document.getElementById("sonuc").innerHTML =
            "Tebrikler! Doğru cevap.";

    } else {

        document.getElementById("sonuc").innerHTML =
            "Yanlış cevap. Tekrar deneyiniz.";

    }

}