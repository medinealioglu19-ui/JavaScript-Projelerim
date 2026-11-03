function sifreOlustur() {

    let uzunluk = Number(document.getElementById("uzunluk").value);

    let karakterler = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let sifre = "";

    if (uzunluk < 8 || uzunluk > 32 || !Number.isInteger(uzunluk)) {
        document.getElementById("sonuc").innerHTML =
            "Lütfen 8 ile 32 arasında bir uzunluk giriniz.";
        return;
    }

    for (let i = 0; i < uzunluk; i++) {

        let rastgele = Math.floor(Math.random() * karakterler.length);

        sifre = sifre + karakterler[rastgele];
    }

    document.getElementById("sonuc").innerHTML =
        "Oluşturulan şifre: " + sifre;
}