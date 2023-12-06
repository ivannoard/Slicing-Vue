<script setup>
import {
  About1,
  About2,
  About3,
  About4,
  About5,
  About6,
} from "../assets/images";
</script>
<template>
  <div class="pt-28">
    <section class="container mx-auto">
      <h4 class="font-semibold text-xl text-center">Tentang Kahuripan Cafe</h4>
      <div class="about-content w-10/12 mx-auto text-xl">
        <p class="mt-4">
          Cafe kahuripan merupakan tempat usaha milik keluarga yang dikelola
          oleh Dwiki Ramadhani untuk diberikan kepercayaan dalam mengatur dan
          menjalankan usaha tersebut. Pemilik mempunyai visi misi untuk
          memberikan pelayanan yang baik kepada pelanggan secara langsung maupun
          melalui media digital.
        </p>
        <p class="mt-4">
          Cafe Kahuripan merupakan tempat usaha yang menjual makanan dan minuman
          dengan menu masakan standar rumah makan pada umumnya. Disini
          pengunjung dapat memesan menu masakan diantaranya ada paket nasi ayam,
          aneka masakan dari olahan mie, aneka masakan sayur dan minuman ada
          teh, kopi dan jus buah.
        </p>
        <p class="mt-4">
          Cafe Kahuripan berlokasi di jalan Kenanga Rt 005 Rw 002 Desa Kuripan
          Kidul Kecamatan Kesugihan Kabupaten Cilacap dengan luas 9 m2 × 30 m2
          serta terdapat parkiran yang cukup luas. Pada lokasi tersebut belum
          terdapat tempat makan lainnya sehingga Cafe Kahuripan merupakan tempat
          makan pertama pada daerah tersebut. Cafe Kahuripan mulai buka pada
          2021 dan sekarang memiliki jumlah pelanggan yang sudah cukup ramai
          dengan pembelian di tempat maupun pesanan online.
        </p>
      </div>
    </section>
    <section class="container mx-auto mt-10">
      <h4 class="font-semibold text-xl text-center">
        Berikut Dokumentasi Kegiatan pada Cafe Kahuripan
      </h4>
      <div class="w-full mx-auto flex flex-wrap gap-4 mt-4 justify-center">
        <div class="w-1/4 h-[200px] rounded-md overflow-hidden">
          <img :src="About1" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/4 h-[200px] rounded-md overflow-hidden">
          <img :src="About2" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/4 h-[200px] rounded-md overflow-hidden">
          <img :src="About3" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/4 h-[200px] rounded-md overflow-hidden">
          <img :src="About4" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/4 h-[200px] rounded-md overflow-hidden">
          <img :src="About5" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/4 h-[200px] rounded-md overflow-hidden">
          <img :src="About6" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  </div>
</template>
