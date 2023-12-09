<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="pt-28">
    <section class="px-5 lg:px-10 container mx-auto">
      <div
        class="card border-2 border-gray-100 shadow-md p-4 flex flex-col lg:flex-row gap-10"
      >
        <div class="buyer-content w-full lg:w-1/2">
          <h4 class="text-dark font-semibold text-xl">Data Pemesan</h4>
          <form class="mt-4 flex flex-col gap-4">
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Nama</label>
              <input type="text" class="rounded-md w-8/12 border py-1 px-5" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Email</label>
              <input type="text" class="rounded-md w-8/12 border py-1 px-5" />
            </div>
            <div class="form-group flex justify-between items-center gap-5">
              <label class="text-primary">Nomor Hp</label>
              <input type="text" class="rounded-md w-8/12 border py-1 px-5" />
            </div>
          </form>
          <h4 class="text-dark font-semibold text-md mt-10">
            Metode Pembayaran
          </h4>
          <div class="form-group flex gap-4 items-center mt-4">
            <input type="radio" />
            <label>Bank Transfer</label>
          </div>
        </div>
        <div class="address-content w-full lg:w-1/2 border shadow-md pb-4">
          <div class="p-4">
            <h4 class="text-md font-semibold text-dark">Detail Pengiriman</h4>
          </div>
          <hr />
          <form class="mt-8 flex flex-col gap-4 px-4">
            <div
              class="form-group flex flex-col lg:flex-row justify-between items-center gap-5"
            >
              <label class="text-primary">Tanggal Penghantaran</label>
              <input
                type="text"
                class="rounded-md w-full lg:w-8/12 border py-1 px-5"
              />
            </div>
            <div
              class="form-group flex flex-col lg:flex-row justify-between items-center gap-5"
            >
              <label class="text-primary">Jam Penghantaran</label>
              <input
                type="text"
                class="rounded-md w-full lg:w-8/12 border py-1 px-5"
              />
            </div>
            <div
              class="form-group flex flex-col lg:flex-row justify-between items-center gap-5"
            >
              <label class="text-primary">Kota Penghantaran</label>
              <input
                type="text"
                class="rounded-md w-full lg:w-8/12 border py-1 px-5"
              />
            </div>
            <div
              class="form-group flex flex-col lg:flex-row justify-between gap-5"
            >
              <label class="text-primary">Detail Alamat Penghantaran</label>
              <textarea
                rows="10"
                placeholder="Isi Alamat Lengkap Anda"
                class="w-full lg:w-9/12 px-5 py-2 border rounded-[10px] resize-none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="mt-10 px-5 lg:px-10 container mx-auto">
      <h4 class="text-dark font-semibold text-xl">Pesanan</h4>
      <div class="overflow-x-scroll">
        <table class="border mt-4 w-[1440px]">
          <thead>
            <tr class="border-b-2">
              <td class="py-2 text-center">Nama Pesanan</td>
              <td class="py-2 text-center">Jumlah</td>
              <td class="py-2 text-center">Harga Satuan</td>
              <td class="py-2 text-center">Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-4 text-center">Bakmi Goreng</td>
              <td class="py-4 text-center">30</td>
              <td class="py-4 text-center">Rp. 15.000</td>
              <td class="py-4 text-center">Rp. 787.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="px-5 lg:px-10 mt-8">
        <div class="flex justify-between w-full items-center font-semibold">
          <p>Total</p>
          <p>Rp. 787.000</p>
        </div>
        <div class="flex justify-between w-full items-center font-semibold">
          <p>Area Penghantaran</p>
          <p>Jl. Jendral Sudirman No. 32, Purwokerto</p>
        </div>
        <div class="flex justify-between w-full items-center font-semibold">
          <p>Total Semua</p>
          <p>Rp. 820.000</p>
        </div>
      </div>
      <button
        class="ww-full lg:w-1/4 font-semibold mt-10 px-10 py-3 bg-primary block mx-auto rounded-full text-white"
        @click="() => router.push('/payment')"
      >
        Pesan
      </button>
    </section>
  </div>
</template>
