function saatGoster() {

    let simdi = new Date();

    let saat = simdi.getHours();
    let dakika = simdi.getMinutes();
    let saniye = simdi.getSeconds();

    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    document.getElementById("saat").innerHTML =
        saat + ":" + dakika + ":" + saniye;
}

saatGoster();

setInterval(saatGoster, 1000);