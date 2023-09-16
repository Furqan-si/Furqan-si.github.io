function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById("hasilLuas").textContent = luas.toFixed(0) + ' cm²';
    } else {
        alert("Masukkan panjang alas dan tinggi yang valid.");
    }
}
