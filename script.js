function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById("hasilLuas").textContent = luas.toFixed(2) + " cm²"
        document.getElementById("ya").textContent = `Jadi luas segitiga diperoleh dengan mengalikan alas pada segitiga dengan tinggi nya lalu di bagi dua. sehingga rumus nya menjadi ½(a×t)=½(${alas} cm × ${tinggi} cm) = ½(${alas*tinggi} cm²)=${luas} cm²`
    } else {
        alert("Masukkan panjang alas dan tinggi yang valid.");
    }
}

function persegi() {
    var p = parseFloat(document.getElementById("panjang").value);
    var l = parseFloat(document.getElementById("lebar").value);

    if (!isNaN(p) && !isNaN(l)) {
        var luas = p * l;
        document.getElementById("luas").textContent = luas.toFixed(2) + " cm²"
        document.getElementById("fur").textContent = `Persegi panjang (bahasa Inggris: rectangle) adalah bangun datar dua dimensi yang dibentuk oleh dua pasang sisi yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Luas persegi panjang dapat dicari menggunakan rumus p × l = ${p} cm × ${l} cm = ${p*l} cm²`
    } else {
        alert("Masukkan panjang dan lebar yang valid.");
    }
}

function lingkaran() {
    let j = parseFloat(document.getElementById("jarijari").value);

    if (!isNaN(j)) {
        var luas = Math.PI * j * j;
        document.getElementById("luas").textContent = luas.toFixed(2) + " cm²"
        document.getElementById("qan").textContent = `Jadi rumus untuk mencari luas lingkaran yaitu menggunakan π × r² dimana r adalah jari jari jarinya, sehingga diperoleh :
        L = π × r² = ${Math.PI.toFixed(2)} × ${j}² = ${Math.PI.toFixed(2)} × ${j*j} = ${(Math.PI * j * j).toFixed(3)} cm²`
    } else {
        alert("Masukkan jari jarinya");
    }
}