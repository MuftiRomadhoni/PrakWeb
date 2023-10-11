const angkakiri = document.getElementById("kiri");
const angkakanan = document.getElementById("kanan");

function getData() {
  const kiriValue = parseFloat(angkakiri.value);
  const kananValue = parseFloat(angkakanan.value);

  if (isNaN(kiriValue) || isNaN(kananValue)) {
    alert("Inputan tidak sesuai");
    return;
  }
  const product = kiriValue + kananValue;
  alert("hasil penjumlahan = ", product);
}

function resetPage() {
  angkakiri.value = "";
  angkakanan.value = "";
}
