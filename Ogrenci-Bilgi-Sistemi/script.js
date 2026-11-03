function ogrenciEkle() {

    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let numara = document.getElementById("numara").value;

    if (ad === "" || soyad === "" || numara === "") {
        alert("Lütfen bütün alanları doldurunuz.");
        return;
    }

    let liste = document.getElementById("liste");

    let yeniOgrenci = document.createElement("li");

    yeniOgrenci.innerHTML = 
        "Ad: " + ad + 
        " Soyad: " + soyad + 
        " Numara: " + numara;

    liste.appendChild(yeniOgrenci);

    document.getElementById("ad").value = "";
    document.getElementById("soyad").value = "";
    document.getElementById("numara").value = "";
}