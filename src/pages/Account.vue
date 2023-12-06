<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let activeReview = ref(false);
let active = ref("Data Diri");
const menuArray = [
  "Data Diri",
  "Status Pesanan",
  "Status Reservasi",
  "Pengaturan Keamanan",
];
function handleActive(menu) {
  active.value = menu;
}
</script>
<template>
  <div class="pt-32">
    <section class="container mx-auto px-10">
      <div class="card bg-white border w-full p-10">
        <div class="menu flex w-full">
          <div
            v-for="(menu, index) in menuArray"
            :key="index"
            class="w-1/4 menu-item text-center font-semibold border-b-2 cursor-pointer"
            :class="{ 'border-primary': menu === active }"
            @click="handleActive(menu)"
          >
            {{ menu }}
          </div>
        </div>
        <div v-if="active === 'Data Diri'" class="grid grid-cols-12 gap-8 mt-8">
          <div class="col-span-5">
            <div class="border rounded-md p-4">
              <div
                class="bg-primary w-full h-[400px] flex items-center justify-center"
              >
                <h3 class="font-semibold text-6xl text-white">A</h3>
              </div>
            </div>
          </div>
          <div class="col-span-7">
            <div class="biodata">
              <h4 class="font-semibold text-xl mb-4">Ubah Biodata Diri</h4>
              <div class="group flex mb-4">
                <p class="w-1/4">Nama</p>
                <p>
                  Ahun Ismi Aziz <span class="text-primary ml-4">Ubah</span>
                </p>
              </div>
              <div class="group flex mb-4">
                <p class="w-1/4">Tanggal Lahir</p>
                <p>
                  <span class="text-primary">Tambah Tanggal Lahir</span>
                </p>
              </div>
              <div class="group flex mb-8">
                <p class="w-1/4">Tanggal Lahir</p>
                <p>
                  <span class="text-primary">Tambah Jenis Kelamin</span>
                </p>
              </div>
              <h4 class="font-semibold text-xl mb-4">Ubah Kontak</h4>
              <div class="group flex mb-4">
                <p class="w-1/4">Nama</p>
                <p>
                  ahunismiaziz@gmail.com
                  <span
                    class="text-primary ml-4 bg-[#A9013933] px-5 py-1 rounded-md"
                    >Terverifikasi
                  </span>
                  <span class="text-primary ml-4">Ubah</span>
                </p>
              </div>
              <div class="group flex mb-8">
                <p class="w-1/4">Nomor Telepon</p>
                <p>
                  869349739756238
                  <span class="text-primary ml-4">Ubah</span>
                </p>
              </div>
              <h4 class="font-semibold text-xl mb-4">Alamat</h4>
              <div class="group flex mb-8">
                <p class="">
                  Jl. Ir H. Juanda No.95, Cemp. Putih, Kec. Ciputat Timur, Jawa
                  barat.
                  <span class="text-primary ml-4">Ubah</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="active === 'Status Pesanan'">
          <div v-if="!activeReview">
            <div class="grid grid-cols-12 gap-8 mt-8">
              <div class="col-span-4">
                <div class="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                    placeholder="Cari Transaksimu Disini. . ."
                  />
                </div>
              </div>
              <div class="col-span-4">
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                  >
                    <option value="">Semua Status</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
              <div class="col-span-4">
                <div class="form-group">
                  <input
                    type="date"
                    name=""
                    id=""
                    class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                    placeholder="Cari Transaksimu Disini. . ."
                  />
                </div>
              </div>
            </div>
            <div class="cards-wrapper mt-8 flex flex-col gap-8">
              <div
                class="card bg-white rounded-[12px] w-full border shadow-md p-5"
              >
                <div class="date text-[#6D6D6D] flex items-center gap-3">
                  <p>03 Juli 2022</p>
                  <p
                    class="inline-block px-3 py-[3px] rounded-lg text-[#A80038] bg-[#eea7bf]"
                  >
                    Selesai
                  </p>
                  <p>#325245</p>
                </div>
                <div class="card-content grid grid-cols-12 gap-5 mt-3">
                  <div class="col-span-3">
                    <div
                      class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                    ></div>
                  </div>
                  <div class="col-span-6">
                    <h4 class="text-2xl font-semibold">Ayam Geprek</h4>
                    <div class="my-10">
                      <p class="text-[#6D6D6D]">Harga: 12.000</p>
                      <p class="text-[#6D6D6D]">Jumlah Pesanan : 30 Porsi</p>
                    </div>
                    <h5 class="text-xl font-semibold text-[#2F73FE]">Proses</h5>
                  </div>
                  <div class="col-span-3 flex gap-10 items-center">
                    <div class="h-1/2 w-[3px] bg-[#6D6D6D]"></div>
                    <div class="mb-10">
                      <p class="text-[#6D6D6D]">Total Belanja</p>
                      <h4 class="text-primary font-semibold text-3xl">
                        Rp. 360.000
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end items-center gap-4">
                  <p class="text-primary font-semibold">
                    Lihat Detail Transaksi
                  </p>
                  <!-- <button class="bg-primary py-2 px-5 rounded-[10px] text-white">
                  Beri Ulasan
                </button> -->
                </div>
              </div>
              <div
                class="card bg-white rounded-[12px] w-full border shadow-md p-5"
              >
                <div class="date text-[#6D6D6D] flex items-center gap-3">
                  <p>03 Juli 2022</p>
                  <p
                    class="inline-block px-3 py-[3px] rounded-lg text-[#A80038] bg-[#eea7bf]"
                  >
                    Selesai
                  </p>
                  <p>#325245</p>
                </div>
                <div class="card-content grid grid-cols-12 gap-5 mt-3">
                  <div class="col-span-3">
                    <div
                      class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                    ></div>
                  </div>
                  <div class="col-span-6">
                    <h4 class="text-2xl font-semibold">Ayam Geprek</h4>
                    <div class="my-10">
                      <p class="text-[#6D6D6D]">Harga: 12.000</p>
                      <p class="text-[#6D6D6D]">Jumlah Pesanan : 30 Porsi</p>
                    </div>
                    <h5 class="text-xl font-semibold text-primary">Selesai</h5>
                  </div>
                  <div class="col-span-3 flex gap-10 items-center">
                    <div class="h-1/2 w-[3px] bg-[#6D6D6D]"></div>
                    <div class="mb-10">
                      <p class="text-[#6D6D6D]">Total Belanja</p>
                      <h4 class="text-primary font-semibold text-3xl">
                        Rp. 360.000
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end items-center gap-4">
                  <p class="text-primary font-semibold">
                    Lihat Detail Transaksi
                  </p>
                  <button
                    class="bg-primary py-2 px-5 rounded-[10px] text-white"
                    @click="
                      () => {
                        return (activeReview = true);
                      }
                    "
                  >
                    Beri Ulasan
                  </button>
                </div>
              </div>
              <div
                class="card bg-white rounded-[12px] w-full border shadow-md p-5"
              >
                <div class="date text-[#6D6D6D] flex items-center gap-3">
                  <p>03 Juli 2022</p>
                  <p
                    class="inline-block px-3 py-[3px] rounded-lg text-[#A80038] bg-[#eea7bf]"
                  >
                    Selesai
                  </p>
                  <p>#325245</p>
                </div>
                <div class="card-content grid grid-cols-12 gap-5 mt-3">
                  <div class="col-span-3">
                    <div
                      class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                    ></div>
                  </div>
                  <div class="col-span-6">
                    <h4 class="text-2xl font-semibold">Ayam Geprek</h4>
                    <div class="my-10">
                      <p class="text-[#6D6D6D]">Harga: 12.000</p>
                      <p class="text-[#6D6D6D]">Jumlah Pesanan : 30 Porsi</p>
                    </div>
                    <h5 class="text-xl font-semibold text-primary">Selesai</h5>
                  </div>
                  <div class="col-span-3 flex gap-10 items-center">
                    <div class="h-1/2 w-[3px] bg-[#6D6D6D]"></div>
                    <div class="mb-10">
                      <p class="text-[#6D6D6D]">Total Belanja</p>
                      <h4 class="text-primary font-semibold text-3xl">
                        Rp. 360.000
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end items-center gap-4">
                  <p class="text-primary font-semibold">
                    Lihat Detail Transaksi
                  </p>
                  <!-- <button class="bg-primary py-2 px-5 rounded-[10px] text-white">
                  Beri Ulasan
                </button> -->
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeReview">
            <div
              class="card-review bg-white rounded-[12px] w-full border shadow-md p-5 mt-8"
            >
              <div
                class="date text-[#6D6D6D] flex items-center gap-3 justify-end"
              >
                <p>03 Juli 2022</p>
                <p
                  class="inline-block px-3 py-[3px] rounded-lg text-[#A80038] bg-[#eea7bf]"
                >
                  Selesai
                </p>
                <p>#325245</p>
              </div>
              <div class="card-review-content grid grid-cols-12 gap-5 mt-5">
                <div class="col-span-3">
                  <div
                    class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                  ></div>
                </div>
                <div class="col-span-6">
                  <h4 class="text-2xl font-semibold">Ayam Geprek</h4>
                  <div class="my-4">
                    <p class="text-[#6D6D6D]">Harga: 12.000</p>
                    <p class="text-[#6D6D6D]">Jumlah Pesanan: 30 Porsi</p>
                    <p class="text-[#6D6D6D]">Total Belanja: Rp. 360.000</p>
                  </div>
                  <h5 class="text-xl text-[#303030]">Berikan Ulasan</h5>
                  <textarea
                    name="review"
                    id=""
                    cols="30"
                    rows="4"
                    style="resize: none"
                    placeholder="Tuliskan deskripsi anda mengenai menu ini"
                    class="border rounded-[10px] w-full mt-3 p-3"
                  ></textarea>
                </div>
                <div class="col-span-3">
                  <div
                    class="card-how_to_review bg-white rounded-[10px] border p-3"
                  >
                    <p class="font-semibold">Tips Menulis Ulasan</p>
                    <div class="flex gap-3 mt-3 review-rule-container">
                      <div
                        class="dot bg-[#FF7100] w-[10px] h-[10px] rounded-full mt-2"
                      ></div>
                      <div class="review-rule-content">
                        <p class="text-[#565656]">
                          Kesesuaian dengan deskripsi
                        </p>
                        <p class="text-[#A6A6A6]">
                          Cth Ukuran dan warna sesuai dengan asli
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-3 mt-3 review-rule-container">
                      <div
                        class="dot bg-[#FF7100] w-[10px] h-[10px] rounded-full mt-2"
                      ></div>
                      <div class="review-rule-content">
                        <p class="text-[#565656]">
                          Kesesuaian dengan deskripsi
                        </p>
                        <p class="text-[#A6A6A6]">
                          Cth Ukuran dan warna sesuai dengan asli
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-3 mt-3 review-rule-container">
                      <div
                        class="dot bg-[#FF7100] w-[10px] h-[10px] rounded-full mt-2"
                      ></div>
                      <div class="review-rule-content">
                        <p class="text-[#565656]">
                          Kesesuaian dengan deskripsi
                        </p>
                        <p class="text-[#A6A6A6]">
                          Cth Ukuran dan warna sesuai dengan asli
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center gap-3 mt-3">
                <button
                  class="border border-[#6D6D6DCC] rounded-[10px] text-[#6D6D6DCC] w-1/6 px-5 py-1"
                  @click="
                    () => {
                      return (activeReview = false);
                    }
                  "
                >
                  Batal
                </button>
                <button
                  class="border border-primary rounded-[10px] text-white bg-primary w-1/6 px-5 py-1"
                  @click="
                    () => {
                      return (activeReview = false);
                    }
                  "
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="active === 'Status Reservasi'">
          <div class="grid grid-cols-12 gap-8 mt-8">
            <div class="col-span-4">
              <div class="form-group">
                <input
                  type="text"
                  name=""
                  id=""
                  class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                  placeholder="Cari Transaksimu Disini. . ."
                />
              </div>
            </div>
            <div class="col-span-4">
              <div class="form-group">
                <select
                  name=""
                  id=""
                  class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                >
                  <option value="">Semua Status</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
            <div class="col-span-4">
              <div class="form-group">
                <input
                  type="date"
                  name=""
                  id=""
                  class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                  placeholder="Cari Transaksimu Disini. . ."
                />
              </div>
            </div>
          </div>
          <div class="cards-wrapper mt-8 flex flex-col gap-8">
            <div
              @click="() => router.push('/payment')"
              class="card bg-white rounded-[12px] w-full border shadow-md p-5"
            >
              <div
                class="date text-[#6D6D6D] flex justify-between items-center gap-3"
              >
                <p>03 Juli 2022</p>
                <p>#325245</p>
              </div>
              <div class="card-content grid grid-cols-12 gap-5 mt-3">
                <div class="col-span-3">
                  <div
                    class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                  ></div>
                </div>
                <div class="col-span-6">
                  <h4 class="text-2xl font-semibold">Ahun Ismi</h4>
                  <div class="my-10">
                    <p class="text-[#6D6D6D]">Jumlah Tamu : 30 orang</p>
                    <p class="text-[#6D6D6D]">Waktu Reservasi : 10.00 WIB</p>
                    <p class="text-[#6D6D6D]">Nomor Handphone : 086736817736</p>
                    <p class="text-[#6D6D6D]">
                      Menu : Nasi lele goreng(2), Ayam bakar(3), es teh(4),
                      jeruk anget(1)
                    </p>
                  </div>
                </div>
                <div class="col-span-3 flex gap-10 items-center">
                  <div class="h-1/2 w-[3px] bg-[#6D6D6D]"></div>
                  <div class="mb-10">
                    <p class="text-[#6D6D6D]">Total Belanja</p>
                    <h4 class="text-primary font-semibold text-3xl">
                      Rp. 360.000
                    </h4>
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center gap-4">
                <button
                  class="bg-white border border-primary py-2 px-5 rounded-[10px] text-primary"
                >
                  Menunggu Respon
                </button>
              </div>
            </div>
            <div
              @click="() => router.push('/payment')"
              class="card bg-white rounded-[12px] w-full border shadow-md p-5"
            >
              <div
                class="date text-[#6D6D6D] flex justify-between items-center gap-3"
              >
                <p>03 Juli 2022</p>
                <p>#325245</p>
              </div>
              <div class="card-content grid grid-cols-12 gap-5 mt-3">
                <div class="col-span-3">
                  <div
                    class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                  ></div>
                </div>
                <div class="col-span-6">
                  <h4 class="text-2xl font-semibold">Ahun Ismi</h4>
                  <div class="my-10">
                    <p class="text-[#6D6D6D]">Jumlah Tamu : 30 orang</p>
                    <p class="text-[#6D6D6D]">Waktu Reservasi : 10.00 WIB</p>
                    <p class="text-[#6D6D6D]">Nomor Handphone : 086736817736</p>
                    <p class="text-[#6D6D6D]">
                      Menu : Nasi lele goreng(2), Ayam bakar(3), es teh(4),
                      jeruk anget(1)
                    </p>
                  </div>
                </div>
                <div class="col-span-3 flex gap-10 items-center">
                  <div class="h-1/2 w-[3px] bg-[#6D6D6D]"></div>
                  <div class="mb-10">
                    <p class="text-[#6D6D6D]">Total Belanja</p>
                    <h4 class="text-primary font-semibold text-3xl">
                      Rp. 360.000
                    </h4>
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center gap-4">
                <button
                  class="bg-[#4ED91D] border border-[#4ED91D] py-2 px-5 rounded-[10px] text-white"
                >
                  Menunggu Respon
                </button>
              </div>
            </div>
            <div
              @click="() => router.push('/payment')"
              class="card bg-white rounded-[12px] w-full border shadow-md p-5"
            >
              <div
                class="date text-[#6D6D6D] flex justify-between items-center gap-3"
              >
                <p>03 Juli 2022</p>
                <p>#325245</p>
              </div>
              <div class="card-content grid grid-cols-12 gap-5 mt-3">
                <div class="col-span-3">
                  <div
                    class="w-full h-[246px] bg-[#6D6D6D] rounded-[10px]"
                  ></div>
                </div>
                <div class="col-span-6">
                  <h4 class="text-2xl font-semibold">Ahun Ismi</h4>
                  <div class="my-10">
                    <p class="text-[#6D6D6D]">Jumlah Tamu : 30 orang</p>
                    <p class="text-[#6D6D6D]">Waktu Reservasi : 10.00 WIB</p>
                    <p class="text-[#6D6D6D]">Nomor Handphone : 086736817736</p>
                    <p class="text-[#6D6D6D]">
                      Menu : Nasi lele goreng(2), Ayam bakar(3), es teh(4),
                      jeruk anget(1)
                    </p>
                  </div>
                </div>
                <div class="col-span-3 flex gap-10 items-center">
                  <div class="h-1/2 w-[3px] bg-[#6D6D6D]"></div>
                  <div class="mb-10">
                    <p class="text-[#6D6D6D]">Total Belanja</p>
                    <h4 class="text-primary font-semibold text-3xl">
                      Rp. 360.000
                    </h4>
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center gap-4">
                <button
                  class="bg-primary border border-primary py-2 px-5 rounded-[10px] text-white"
                >
                  Reservasi Ditolak
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="active === 'Pengaturan Keamanan'">
          <h4 class="font-semibold text-2xl text-center mt-10">
            Ubah Password
          </h4>
          <form>
            <div class="form-group flex flex-col gap-5 mt-5">
              <input
                type="text"
                class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                placeholder="Password"
              />
              <input
                type="text"
                class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                placeholder="Password Baru"
              />
              <input
                type="text"
                class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                placeholder="Konfirmasi Password"
              />
            </div>
            <div class="flex justify-end items-center gap-3 mt-8">
              <button
                class="bg-white px-12 py-2 border border-[#6D6D6D] rounded-[10px]"
              >
                Batal
              </button>
              <button
                class="bg-primary text-white px-12 py-2 border border-primary rounded-[10px]"
              >
                Ubah
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
