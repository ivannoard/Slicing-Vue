<script setup>
import { Menu1, Menu2, Menu3 } from "../assets/images";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
let active = ref("Makanan");
const menuButtons = ["Makanan", "Minuman", "Snack"];
</script>
<template>
  <div class="pt-28 px-5 lg:px-10 container mx-auto">
    <section>
      <div class="menus w-full lg:w-1/3 rounded-full p-2 flex flex-col gap-2">
        <div
          class="menu w-full lg:w-1/3 rounded-full border px-5 py-1 text-dark cursor-pointer"
          v-for="button in menuButtons"
          :key="button"
          :class="active === button && 'bg-primary text-secondary'"
          @click="
            () => {
              return (active = button);
            }
          "
        >
          <p class="text-center lg:text-start">{{ button }}</p>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <div class="cards flex flex-wrap justify-center lg:justify-around gap-10">
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/1')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 12.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/2')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/3')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/4')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 12.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/5')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/6')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/7')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 12.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/8')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div class="card w-full lg:w-1/4 border shadow-md p-4 rounded-md">
          <div
            class="card-image-wrapper flex items-center justify-center"
            @click="() => router.push('/menu/9')"
          >
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
            <div
              class="card-price-button flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button
                class="mt-3 lg:mt-0 bg-primary text-white px-10 py-2 rounded-full w-full lg:w-auto"
              >
                + Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
