<script setup>
import { ref } from "vue";
let isModalOpen = ref(false);
const modalData = [
  "Anda dapat melakukan daftar akun dan login terlebih dahulu, agar dapat melakukan reservasi",
  "Isi semua form pada halaman reservasiTanggal reservasi => tanggal yang anda inginkan untuk sewa tempatJam reservasi => tepat jam berapa, anda akan melangsungkan acaraJumlah tamu => jumlah tamu yang akan datang mengikuti acara (untuk mengatur jumlah kursi)Menu => anda dapat memilih menu yang diinginkan untuk disuguhkan saat acara (atur jumlah menu)Tambah catatan => anda dapat memberikan catatan untuk admin terkait menu yang dipesan. Contoh: 5 ayam geprek pedasnya sedang",
  "Klik reservasi",
  "Tunggu konfirmasi dari admin terkait status reservasi anda",
  "Cek profil pada bagian status reservasi",
  "Segera bayar apabila reservasi diterima",
];

function handleModalIsOpen() {
  isModalOpen.value = false;
}
function handleModalOpen() {
  isModalOpen.value = true;
}
</script>
<template>
  <div
    v-if="isModalOpen"
    class="fixed left-0 right-0 mx-auto z-[11] flex w-full h-full items-center justify-center bg-dark bg-opacity-50"
  >
    <div
      class="bg-white rounded-md w-full h-1/2 lg:h-9/12 lg:w-1/3 border shadow-md px-4 py-8 overflow-scroll"
    >
      <h4 class="title text-dark font-semibold text-xl text-center mb-4">
        Langkah - langkah melakukan reservasi
      </h4>
      <div class="" v-for="(data, index) in modalData" :key="index">
        <p>{{ index + 1 }}. {{ data }}</p>
      </div>
      <button
        class="bg-primary rounded-full text-white font-semibold py-2 w-full mt-8"
        @click="handleModalIsOpen()"
      >
        Mengerti
      </button>
    </div>
  </div>
  <div class="pt-28">
    <section class="container px-5 lg:px-10 mx-auto">
      <p
        class="text-primary text-left lg:text-right"
        @click="handleModalOpen()"
      >
        Baca langkah-langkah reservasi
      </p>
      <div class="flex flex-col lg:flex-row w-full gap-10 mt-8">
        <div class="w-full lg:w-1/2">
          <div class="header flex items-center gap-5">
            <h4 class="text-dark text-xl font-semibold">Data Pemesan</h4>
            <p>
              (Punya akun?)
              <span class="ml-1 text-primary font-semibold">Masuk</span>
            </p>
          </div>
          <form class="mt-4 flex flex-col gap-4">
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Nama</label>
              <input type="text" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Email</label>
              <input type="text" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Nomor Hp</label>
              <input type="text" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
          </form>
        </div>
        <div class="w-full lg:w-1/2">
          <h4 class="text-dark text-xl font-semibold">Detail Reservasi</h4>
          <form class="mt-4 flex flex-col gap-4">
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Tanggal Reservasi</label>
              <input type="date" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Waktu Reservasi</label>
              <input type="text" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Jumlah Tamu</label>
              <input type="number" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Menu</label>
              <input type="text" class="rounded-md border py-1 px-5 w-7/12" />
            </div>
            <p class="mt-8 text-primary font-semibold cursor-pointer">
              Tambah Catatan
            </p>
          </form>
        </div>
      </div>
      <button
        class="w-full lg:w-1/4 font-semibold mt-10 px-10 py-3 bg-primary block mx-auto rounded-full text-white"
      >
        Reservasi
      </button>
    </section>
  </div>
</template>
