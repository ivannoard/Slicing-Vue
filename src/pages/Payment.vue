<script setup>
import VueCountdown from "@hebertsilva/vue-countdown";
</script>
<template>
  <div class="pt-28 px-10 container mx-auto">
    <div class="text-center">
      <h2 class="font-semibold text-2xl">Selesaikan Pembayaranmu dalam</h2>
      <h2 class="text-primary text-2xl font-semibold mt-3">20:13:34</h2>
      <p class="mt-3">Batas akhir pembayaran</p>
      <h2 class="font-semibold text-2xl mt-3">Senin, 23 Agustus 2023 08:30</h2>
    </div>
    <div class="flex justify-center">
      <div class="border shadow-md rounded-[3px] w-8/12 p-5">
        <div class="flex justify-between items-center border-b-2 pb-4">
          <h5 class="font-semibold">BRIVA</h5>
          <p>Logo BRIVA</p>
        </div>
        <p class="mt-4">Nomor Virtual Account</p>
        <h5 class="font-semibold text-xl mt-2">80777089530139897</h5>
        <p class="mt-4">Total Pembayaran</p>
        <h5 class="font-semibold text-xl mt-2">Rp44.000</h5>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <div class="w-8/12">
        <h4 class="text-xl font-semibold">Cara Pembayaran</h4>
        <div class="menus flex flex-col gap-6 mt-6 px-3">
          <div class="menu flex w-full items-center justify-between">
            <p class="text-[#5C5C5C] font-semibold">ATM BRI</p>
            <p>Chevron Down</p>
          </div>
          <div class="menu flex w-full items-center justify-between">
            <p class="text-[#5C5C5C] font-semibold">Mobile Banking BRI</p>
            <p>Chevron Down</p>
          </div>
          <div class="menu flex w-full items-center justify-between">
            <p class="text-[#5C5C5C] font-semibold">Internet Banking BRI</p>
            <p>Chevron Down</p>
          </div>
          <div class="menu flex w-full items-center justify-between">
            <p class="text-[#5C5C5C] font-semibold">Kantor Bank BRI</p>
            <p>Chevron Down</p>
          </div>
          <div class="menu flex w-full items-center justify-between">
            <p class="text-[#5C5C5C] font-semibold">ATM Bank Lain</p>
            <p>Chevron Down</p>
          </div>
          <div class="menu-detail flex flex-col gap-4 px-6">
            <p>1. Masukkan Kartu Debit dan PIN Anda</p>
            <p>2. Pilih menu Transaksi Lainnya > Transfer > Ke Rek Bank Lain</p>
            <p>
              3. Masukkan kode bank BRI (002) kemudian diikuti dengan 5 angka
              kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang
              terdaftar di akun Tokopedia Anda (Contoh: 00280777089530139897)
            </p>
            <p>4. Ikuti instruksi untuk menyelesaikan transaksi</p>
            <p>5. Simpan struk transaksi sebagai bukti pembayaran</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
