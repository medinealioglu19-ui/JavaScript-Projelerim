function goster() {

    let sehir = document.getElementById("sehir").value;

    if (sehir == "") {
        alert("Lütfen bir şehir seçiniz!");
        return;
    }

    let sicaklik = 20;
    let durum = "Güneşli";

    if (sehir == "Van") {
        sicaklik = 15;
        durum = "Parçalı Bulutlu";
    }

    else if (sehir == "Ankara") {
        sicaklik = 18;
        durum = "Bulutlu";
    }

    else if (sehir == "İstanbul") {
        sicaklik = 22;
        durum = "Güneşli";
    }

    else if (sehir == "İzmir") {
        sicaklik = 25;
        durum = "Açık";
    }

    document.getElementById("sonuc").innerHTML =
        sehir + "<br>" +
        "Sıcaklık: " + sicaklik + " °C<br>" +
        "Hava Durumu: " + durum;

}