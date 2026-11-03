function ekle() {

    let ad = document.getElementById("ad").value;

    let numara = document.getElementById("numara").value;

    if (ad == "" || numara == "") {
        alert("Lütfen bütün bilgileri giriniz!");
        return;
    }

    let yeniOgrenci = document.createElement("li");

    yeniOgrenci.innerHTML = ad + " - " + numara;

    document.getElementById("liste").appendChild(yeniOgrenci);

    document.getElementById("ad").value = "";

    document.getElementById("numara").value = "";

}