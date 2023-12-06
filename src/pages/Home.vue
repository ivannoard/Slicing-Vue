<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { MenuCard, MenuPay, MenuCart } from "../assets/svg";
import {
  JumbotronImage,
  AboutKahuripan,
  Menu1,
  Menu2,
  Menu3,
} from "../assets/images";

let active = ref("Makanan");
const menuButtons = ["Makanan", "Minuman", "Snack"];
const router = useRouter();
const user = localStorage.getItem("t");

function handleLS() {
  localStorage.setItem("t", "token");
}

function handleRemoveLS() {
  localStorage.clear();
}
</script>

<template>
  <section class="container mx-auto flex h-[450px]">
    <div
      class="w-8/12 flex items-center text-white bg-primary px-10 pt-20 rounded-br-[50px] rounded-bl-[50px]"
    >
      <div class="content flex flex-col gap-9">
        <h1 class="text-6xl">Makanan Enak dan Murah Hanya Untuk Anda</h1>
        <p>
          Kami menjamin kualitas dengan standart yang telah berlaku dengan
          <br />
          memperhatikan kebersihan dari restaurant, driver, dan juga karyawan.
        </p>
        <div class="buttons flex gap-4">
          <button class="px-10 py-2 text-white bg-dark rounded-full">
            Lihat Menu
          </button>
          <button class="px-10 py-2 text-dark bg-secondary rounded-full">
            Pesan Meja
          </button>
        </div>
      </div>
    </div>
    <div class="w-4/12 relative">
      <img
        :src="JumbotronImage"
        alt=""
        class="object-cover w-[450px] h-[450px] absolute -bottom-40 -left-40"
      />
    </div>
  </section>
  <section class="container mx-auto px-10 mt-60">
    <div class="section-header text-center">
      <h3 class="text-2xl font-semibold">Cara Memesan</h3>
      <p>
        Kami menjamin kualitas dengan standart yang telah berlaku dengan <br />
        memperhatikan kebersihan dari restaurant, driver, dan juga karyawan.
      </p>
    </div>
    <div class="cards grid grid-cols-11 mt-8">
      <div
        class="card border col-span-3 bg-primary rounded-3xl py-8 px-10 shadow-md"
      >
        <div class="image-wrapper h-[100px] flex items-center">
          <img :src="MenuCard" alt="" />
        </div>
        <h4 class="text-xl text-white font-semibold my-3">Pilih Menu</h4>
        <p class="text-white">
          Disediakan pilihan menu yang sudah dikategorikan kemudian
          dideskripsikan guna untuk mempermudah pelanggan dalam memilih menu
        </p>
      </div>
      <div class="col-span-1 flex justify-center items-center w-full h-full">
        <!-- <div class="arrow rounded-full bg-primary w-[40px] h-[40px]">
          <v-icon name="fa-chevron-right" stroke="white" />
        </div> -->
      </div>
      <div
        class="card border col-span-3 bg-white rounded-3xl py-8 px-10 shadow-md"
      >
        <div class="image-wrapper h-[100px] flex items-center">
          <img :src="MenuPay" alt="" />
        </div>
        <h4 class="text-xl text-dark font-semibold my-3">Bayar Pesanan</h4>
        <p>
          Dapat dilakukan pembayaran menggunakan mbanking, setelah selesai
          melakukan pesan menu
        </p>
      </div>
      <div
        class="col-span-1 flex justify-center items-center w-full h-full"
      ></div>
      <div
        class="card border col-span-3 bg-white rounded-3xl py-8 px-10 shadow-md"
      >
        <div class="image-wrapper h-[100px] flex items-center">
          <img :src="MenuCart" alt="" />
        </div>
        <h4 class="text-xl text-dark font-semibold my-3">Tunggu Pengiriman</h4>
        <p>
          Menu akan segera dibuat dan dikirimkan oleh driver ke alamat tujuan
        </p>
      </div>
    </div>
  </section>
  <section class="container mx-auto px-10 mt-48 grid grid-cols-12">
    <div class="col-span-6">
      <div class="image-wrapper flex w-full items-center justify-center">
        <img :src="AboutKahuripan" alt="" class="w-[450px] h-[450px]" />
      </div>
    </div>
    <div class="col-span-6">
      <h5 class="font-semibold text-primary">Tentang Kahuripan</h5>
      <h1 class="text-dark font-semibold text-4xl mt-3">
        Bersantai Sejenak Menikmati Hari di Kahuripan Caffe
      </h1>
      <p class="text-dark mt-3">
        Cafe kahuripan merupakan tempat usaha milik keluarga yang dikelola oleh
        Dwiki Ramadhani untuk diberikan kepercayaan dalam mengatur dan
        menjalankan usaha tersebut.Pemilik mempunyai visi misi untuk memberikan
        pelayanan yang baik kepada pelanggan secara langsung maupun ...
      </p>
      <button class="px-10 py-2 text-secondary bg-primary rounded-full mt-5">
        Selengkapnya
      </button>
    </div>
  </section>
  <section class="container mx-auto px-10 mt-20">
    <div class="section-header text-center">
      <h3 class="text-2xl font-semibold">Menu Cafe Kahuripan</h3>
      <p>Kami menyajikan makanan dengan sebaik mungkin</p>
      <div
        class="menus w-1/3 rounded-full border p-2 mx-auto flex justify-center gap-2"
      >
        <div
          class="menu w-1/3 rounded-full px-5 py-2 text-dark cursor-pointer"
          v-for="button in menuButtons"
          :key="button"
          :class="active === button && 'bg-primary text-secondary'"
          @click="
            () => {
              return (active = button);
            }
          "
        >
          <p>{{ button }}</p>
        </div>
        <!-- <div
          class="menu w-1/3 rounded-full bg-primary px-5 py-2 text-secondary"
        >
          <p>Makanan</p>
        </div>
        <div class="menu w-1/3 rounded-full px-5 py-2 text-dark">
          <p>Minuman</p>
        </div>
        <div class="menu w-1/3 rounded-full px-5 py-2 text-dark">
          <p>Snack</p>
        </div> -->
      </div>
    </div>
    <div class="cards flex justify-center mt-8 gap-10">
      <div class="card w-1/4 border shadow-md p-4 rounded-md">
        <div class="card-image-wrapper flex items-center justify-center">
          <img
            :src="Menu1"
            alt=""
            class="object-fit max-h-full max-w-full w-[350px] h-[300px]"
          />
        </div>
        <div class="card-content-wrapper mt-4">
          <h5 class="card-content-title text-dark font-semibold text-xl">
            Ayam Geprek
          </h5>
          <p class="card-content-description text-dark">
            Dengan tingkat kepedasan : <br />
            pedas, sedang, tidak pedas
          </p>
          <div class="card-price-button flex items-center justify-between mt-5">
            <h5 class="font-semibold text-lg">Rp. 12.000</h5>
            <button class="bg-primary text-white px-10 py-2 rounded-full">
              + Keranjang
            </button>
          </div>
        </div>
      </div>
      <div class="card w-1/4 border shadow-md p-4 rounded-md">
        <div class="card-image-wrapper flex items-center justify-center">
          <img
            :src="Menu2"
            alt=""
            class="object-fit max-h-full max-w-full w-[350px] h-[300px]"
          />
        </div>
        <div class="card-content-wrapper mt-4">
          <h5 class="card-content-title text-dark font-semibold text-xl">
            Mie Ayam
          </h5>
          <p class="card-content-description text-dark">
            Terdapat ayam, caesim, daun bawang dan pangsit. Dengan kecap, saus
            dan sambal terpisah
          </p>
          <div class="card-price-button flex items-center justify-between mt-5">
            <h5 class="font-semibold text-lg">Rp. 10.000</h5>
            <button class="bg-primary text-white px-10 py-2 rounded-full">
              + Keranjang
            </button>
          </div>
        </div>
      </div>
      <div class="card w-1/4 border shadow-md p-4 rounded-md">
        <div class="card-image-wrapper flex items-center justify-center">
          <img
            :src="Menu3"
            alt=""
            class="object-fit max-h-full max-w-full w-[350px] h-[300px]"
          />
        </div>
        <div class="card-content-wrapper mt-4">
          <h5 class="card-content-title text-dark font-semibold text-xl">
            Mie Level
          </h5>
          <p class="card-content-description text-dark">
            Terdapat taburan ayam, caesim, bakso dan pangsit, level kepedasan
            1-5
          </p>
          <div class="card-price-button flex items-center justify-between mt-5">
            <h5 class="font-semibold text-lg">Rp. 10.000</h5>
            <button class="bg-primary text-white px-10 py-2 rounded-full">
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="block mx-auto px-16 py-3 bg-primary text-white font-semibold rounded-full mt-10"
      @click="() => router.push('/menu')"
    >
      Lihat Selengkapnya
    </button>
  </section>
</template>

<style scoped></style>
