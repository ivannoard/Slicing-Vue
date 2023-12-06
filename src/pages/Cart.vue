<script setup>
import { useRouter } from "vue-router";
import { Menu1 } from "../assets/images";

const router = useRouter();
</script>
<template>
  <div class="pt-28">
    <section class="container mx-auto px-10">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-8">
          <div
            class="header-cart flex w-full justify-between border-b-4 border-gray-100 pb-3"
          >
            <form class="flex items-center gap-5">
              <input type="checkbox" class="w-[20px] h-[20px]" />
              <p>Pilih semua</p>
            </form>
            <p class="text-primary font-semibold">Hapus</p>
          </div>
          <div class="card-cart mt-8 border-b-4 border-gray-100 pb-8">
            <div class="flex gap-6 justify-between">
              <div class="checkbox">
                <input type="checkbox" class="w-[20px] h-[20px]" />
              </div>
              <div class="card-cart-display">
                <img :src="Menu1" alt="" class="w-[367px] h-[195px]" />
                <p class="text-primary mt-4 cursor-pointer">Tambah catatan</p>
              </div>
              <div
                class="card-cart-content flex-1 flex flex-col justify-between"
              >
                <div class="cart-cart-content-text">
                  <h3 class="text-dark font-semibold text-2xl">
                    Ayam GeprekAyam Geprek
                  </h3>
                  <p class="mt-4">
                    Dengan tingkat kepedasan : pedas, sedang, tidak pedas
                  </p>
                  <h3 class="text-dark font-semibold text-2xl mt-4">
                    Rp. 15.000
                  </h3>
                </div>
                <div class="buttons flex items-center gap-8 ml-auto">
                  <p>trash</p>
                  <div class="inc-dec-button">
                    <button
                      class="bg-white border px-5 py-2 font-semibold"
                      @click="(e) => e.preventDefault()"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="1"
                      class="py-2 text-center border"
                    />
                    <button
                      class="bg-white border px-5 py-2 font-semibold text-primary"
                      @click="(e) => e.preventDefault()"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-cart mt-8 border-b-4 border-gray-100 pb-8">
            <div class="flex gap-6 justify-between">
              <div class="checkbox">
                <input type="checkbox" class="w-[20px] h-[20px]" />
              </div>
              <div class="card-cart-display">
                <img :src="Menu1" alt="" class="w-[367px] h-[195px]" />
                <p class="text-primary mt-4 cursor-pointer">Tambah catatan</p>
              </div>
              <div
                class="card-cart-content flex-1 flex flex-col justify-between"
              >
                <div class="cart-cart-content-text">
                  <h3 class="text-dark font-semibold text-2xl">
                    Ayam GeprekAyam Geprek
                  </h3>
                  <p class="mt-4">
                    Dengan tingkat kepedasan : pedas, sedang, tidak pedas
                  </p>
                  <h3 class="text-dark font-semibold text-2xl mt-4">
                    Rp. 15.000
                  </h3>
                </div>
                <div class="buttons flex items-center gap-8 ml-auto">
                  <p>trash</p>
                  <div class="inc-dec-button">
                    <button
                      class="bg-white border px-5 py-2 font-semibold"
                      @click="(e) => e.preventDefault()"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="1"
                      class="py-2 text-center border"
                    />
                    <button
                      class="bg-white border px-5 py-2 font-semibold text-primary"
                      @click="(e) => e.preventDefault()"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-cart mt-8 border-b-4 border-gray-100 pb-8">
            <div class="flex gap-6 justify-between">
              <div class="checkbox">
                <input type="checkbox" class="w-[20px] h-[20px]" />
              </div>
              <div class="card-cart-display">
                <img :src="Menu1" alt="" class="w-[367px] h-[195px]" />
                <p class="text-primary mt-4 cursor-pointer">Tambah catatan</p>
              </div>
              <div
                class="card-cart-content flex-1 flex flex-col justify-between"
              >
                <div class="cart-cart-content-text">
                  <h3 class="text-dark font-semibold text-2xl">
                    Ayam GeprekAyam Geprek
                  </h3>
                  <p class="mt-4">
                    Dengan tingkat kepedasan : pedas, sedang, tidak pedas
                  </p>
                  <h3 class="text-dark font-semibold text-2xl mt-4">
                    Rp. 15.000
                  </h3>
                </div>
                <div class="buttons flex items-center gap-8 ml-auto">
                  <p>trash</p>
                  <div class="inc-dec-button">
                    <button
                      class="bg-white border px-5 py-2 font-semibold"
                      @click="(e) => e.preventDefault()"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name=""
                      id=""
                      value="1"
                      class="py-2 text-center border"
                    />
                    <button
                      class="bg-white border px-5 py-2 font-semibold text-primary"
                      @click="(e) => e.preventDefault()"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div class="card border border-gray-100 shadow md p-4">
            <h4 class="font-semibold text-dark text-lg">Keranjang</h4>
            <p class="text-gray-500 mt-2">Total Harga (2 Menu)</p>
            <hr class="mt-4" />
            <div
              class="flex w-full justify-between items-center font-semibold text-gray text-lg mt-4"
            >
              <h4>Total Harga</h4>
              <h4>Rp. 593.633</h4>
            </div>
            <button
              class="mt-4 w-full py-2 text-white bg-primary font-semibold rounded-xl"
              @click="() => router.push('/check-out')"
            >
              Beli (2)
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
