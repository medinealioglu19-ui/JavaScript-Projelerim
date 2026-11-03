function kontrolEt() {

    let sayi = document.getElementById("sayi").value;

    if (sayi === "") {
        document.getElementById("sonuc").innerHTML = "Lütfen bir sayı giriniz.";
    }
    else if (sayi % 2 == 0) {
        document.getElementById("sonuc").innerHTML = "Girilen sayı çifttir.";
    }
    else {
        document.getElementById("sonuc").innerHTML = "Girilen sayı tektir.";
    }
}