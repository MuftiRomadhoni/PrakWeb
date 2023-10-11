document.getElementById("CDLB2").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (name === "" || email === "" || alamat === "") {
    alert("Tolong diisi semua bagian");
  } else {
    alert("Pesan telah dikirim");
  }
});
