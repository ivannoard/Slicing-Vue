<script setup>
import { Menu1, Menu2, Menu3 } from "../assets/images";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="pt-28">
    <section class="container mx-auto px-10">
      <div class="flex gap-10 w-full">
        <div class="w-1/4">
          <img :src="Menu1" alt="" />
        </div>
        <div class="w-1/4">
          <div class="menu-details pt-5 flex flex-col gap-5">
            <h4 class="text-dark font-semibold text-3xl">Ayam Geprek</h4>
            <p class="text-gray-500">
              Dengan tingkat kepedasan : pedas, sedang, tidak pedas
            </p>
            <h4 class="text-dark font-semibold text-3xl">Rp. 15.000</h4>
          </div>
        </div>
        <div class="w-1/4 block ml-auto">
          <div class="card bg-white border shadow-md rounded-2xl p-4">
            <h4 class="card-title font-semibold text-dark text-lg text-center">
              Atur jumlah dan catatan
            </h4>
            <form class="mt-3">
              <div class="form-group">
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
                <p class="text-primary text-sm mt-2">Tambah catatan</p>
                <div class="flex w-full justify-between items-center">
                  <p class="text-gray-500 mt-2">Subtotal</p>
                  <p class="font-semibold">Rp. 15.000</p>
                </div>
              </div>
              <div class="buttons flex w-full items-center gap-4 mt-2">
                <button
                  class="w-1/2 bg-primary text-white rounded-[10px] px-5 py-2"
                  @click="() => router.push('/cart')"
                >
                  + Keranjang
                </button>
                <button
                  class="w-1/2 border border-primary text-primary rounded-[10px] px-5 py-2"
                  @click="() => router.push('/check-out')"
                >
                  Beli
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto px-10 mt-10">
      <div class="flex flex-col gap-5">
        <div class="review flex gap-8">
          <div
            class="review-image-wrapper rounded-full w-[80px] h-[80px] bg-red-500"
          >
            <img src="" alt="" class="" />
          </div>
          <div class="review-content flex-1">
            <h4 class="font-semibold text-lg">Abdul Aziz</h4>
            <p class="text-gray-500">
              Ayam Geprek Sambal Matah di Kahuripan Cafe benar-benar menggoyang
              lidah! Ayamnya digeprek dengan sempurna, crispy di luar dan juicy
              di dalam. Sambal matahnya segar dan pedasnya pas, memberikan aroma
              yang sedap dan sensasi pedas yang nikmat. Saya suka tekstur ayam
              yang tetap renyah meskipun disiram dengan sambal. Porsinya yang
              cukup besar membuatnya cocok untuk berbagi bersama teman. Ayam
              geprek ini adalah pilihan yang tepat bagi pecinta sambal matah dan
              cita rasa khas Indonesia!
            </p>
          </div>
        </div>
        <div class="review flex gap-8">
          <div
            class="review-image-wrapper rounded-full w-[80px] h-[80px] bg-red-500"
          >
            <img src="" alt="" class="" />
          </div>
          <div class="review-content flex-1">
            <h4 class="font-semibold text-lg">Alya Putri</h4>
            <p class="text-gray-500">
              Ayam Geprek Bumbu Original di Kahuripan Cafe benar-benar menggugah
              selera! Ayamnya empuk dan renyah dengan bumbu yang meresap
              sempurna. Pedasnya pas dan tidak terlalu menggantikan rasa asli
              dari ayam. Saya suka tekstur yang seimbang antara ayam, tepung,
              dan bumbu. Porsinya juga cukup besar dan harganya terjangkau.
              Sangat direkomendasikan bagi pecinta ayam geprek yang mencari rasa
              autentik!
            </p>
          </div>
        </div>
        <div class="review flex gap-8">
          <div
            class="review-image-wrapper rounded-full w-[80px] h-[80px] bg-red-500"
          >
            <img src="" alt="" class="" />
          </div>
          <div class="review-content flex-1">
            <h4 class="font-semibold text-lg">Amar Rizky</h4>
            <p class="text-gray-500">
              Saya, Amar Rizky, baru saja mencoba Ayam Geprek Spesial di
              Kahuripan Cafe, dan rasanya sungguh menggoyang lidah! Ayamnya
              digeprek dengan sempurna, renyah di luar dan juicy di dalam.
              Pedasnya juga pas, memberikan kehangatan dan kelezatan yang
              memanjakan lidah. Sambalnya juga bervariasi, terdapat pilihan
              level kepedasan. Saya sangat puas dengan porsi yang disajikan dan
              harga yang terjangkau. Ayam geprek ini layak dicoba oleh pecinta
              makanan pedas!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto px-10 mt-10">
      <div class="cards flex flex-wrap justify-around gap-10">
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
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
              class="card-price-button flex items-center justify-between mt-5"
            >
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
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
              class="card-price-button flex items-center justify-between mt-5"
            >
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
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
            <div
              class="card-price-button flex items-center justify-between mt-5"
            >
              <h5 class="font-semibold text-lg">Rp. 10.000</h5>
              <button class="bg-primary text-white px-10 py-2 rounded-full">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
