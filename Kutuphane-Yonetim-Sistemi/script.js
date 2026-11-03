function ekle() {

    let kitap = document.getElementById("kitap").value;

    if (kitap == "") {
        alert("Lütfen kitap adı giriniz!");
        return;
    }

    let yeniKitap = document.createElement("li");

    yeniKitap.innerHTML = kitap;

    document.getElementById("liste").appendChild(yeniKitap);

    document.getElementById("kitap").value = "";

}