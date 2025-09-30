const tombolSapa = document.getElementById('SapaButton');
tombolSapa.addEventListener('click', function() {
  alert('Halo! Terima kasih telah berkunjung!');
 // Tambahkan kelas animasi
  tombolSapa.classList.add('klik-efek');
  // Hapus kelas setelah 300ms supaya bisa dipakai lagi
  setTimeout(() => {
    tombolSapa.classList.remove('klik-efek');
  }, 300);
});
