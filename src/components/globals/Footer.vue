<script setup>
import { Map, WA, FB } from "../../assets/images";
import TextLogo from "./TextLogo.vue";
</script>
<template>
  <footer
    class="bg-primary text-secondary w-full grid grid-cols-12 container mx-auto px-10 py-12"
  >
    <div class="col-span-7">
      <div class="w-1/2">
        <div class="w-[200px]">
          <div class="text-logo font-logo hidden lg:block text-white">
            <h1 class="text-xl lg:text-5xl leading-6">Kahuripan</h1>
            <p class="text-2xl text-right pr-2">Cafe</p>
          </div>
        </div>
        <p class="mt-3">
          Kami menjamin kualitas dengan standart yang telah berlaku dengan
          memperhatikan kebersihan dari restaurant, driver dam juga karyawan
        </p>
        <p class="mt-4">+6285869404965</p>
        <p>cafekahuipan@gmail.com</p>
        <div class="social-medias flex gap-4 mt-6">
          <img :src="WA" alt="" />
          <img :src="FB" alt="" />
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <h4 class="font-semibold text-white">Navigasi</h4>
      <div class="menus flex flex-col gap-3 mt-3">
        <p>Tentang Kami</p>
        <p>Menu</p>
        <p>Reservasi</p>
      </div>
    </div>
    <div class="col-span-3">
      <h4 class="font-semibold text-white">Alamat</h4>
      <img :src="Map" alt="" class="mt-3" />
      <p class="mt-3">
        Kuripan Kidul, Kesugihan, Cilacap Regency, Central Java 53274, Indonesia
      </p>
    </div>
  </footer>
</template>
