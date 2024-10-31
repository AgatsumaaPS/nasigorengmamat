// Ambil elemen dari HTML
const btnTambahPesanan = document.querySelector("button");
const listOrderContainer = document.querySelector(".listOrder");
const inputNama = document.getElementById("input1");
const selectMakanan = document.getElementById("select1");
const selectMinuman = document.getElementById("select2");

let nomorPesanan = 1; // Inisialisasi nomor pesanan

// Fungsi untuk menambah pesanan
btnTambahPesanan.addEventListener("click", () => {
  // Ambil nilai dari input
  const nama = inputNama.value.trim();
  const makanan = selectMakanan.value;
  const minuman = selectMinuman.value;

  // Validasi agar semua pilihan terisi
  if (!nama || makanan === "----- Select here ------" || minuman === "----- Select here ------") {
    alert("Silakan isi semua kolom!");
    return;
  }

  // Buat elemen div untuk pesanan
  const orderItem = document.createElement("div");
  orderItem.classList.add("items");

  // Isi elemen dengan nama pelanggan, makanan, minuman, dan nomor pesanan
  orderItem.innerHTML = `
        <p><strong>Nama Pelanggan:</strong> ${nama}</p>
        <p><strong>Nama Makanan:</strong> ${makanan}</p>
        <p><strong>Nama Minuman:</strong> ${minuman}</p>
        <p><strong>Nomor Pesanan:</strong> ${nomorPesanan}</p>
        <button class="btnHapus">Hapus Pesanan</button>
    `;

  // Tambahkan event listener untuk tombol hapus
  const btnHapus = orderItem.querySelector(".btnHapus");
  btnHapus.addEventListener("click", () => {
    orderItem.remove(); // Hapus elemen pesanan ini
  });

  // Tambahkan pesanan ke dalam daftar
  listOrderContainer.appendChild(orderItem);

  // Naikkan nomor pesanan untuk pesanan berikutnya
  nomorPesanan++;

  // Reset form setelah menambah pesanan
  inputNama.value = "";
  selectMakanan.value = "----- Select here ------";
  selectMinuman.value = "----- Select here ------";
});
