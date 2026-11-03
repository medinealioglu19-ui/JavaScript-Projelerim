function ekle() {

    let gorev = document.getElementById("gorev").value;

    if (gorev == "") {
        alert("Lütfen bir görev yazınız!");
        return;
    }

    let yeniGorev = document.createElement("li");

    yeniGorev.innerHTML = gorev;

    document.getElementById("liste").appendChild(yeniGorev);

    document.getElementById("gorev").value = "";

}