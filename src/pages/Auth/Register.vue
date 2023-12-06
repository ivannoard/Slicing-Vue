<script setup>
import { onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { AuthCard } from "../../components/molecules";

const router = useRouter();
const username = ref("");
const password = ref("");

function handleSubmit(e) {
  e.preventDefault();
  if (!username.value || !password.value) return alert("tidak ada data");
  localStorage.setItem("data", JSON.stringify({ username: username.value }));
  return router.push("/");
}
</script>

<template>
  <div class="pt-32">
    <div class="card shadow-md w-8/12 mx-auto container">
      <div class="top bg-primary py-2">
        <h4 class="text-secondary text-center font-semibold text-xl">
          DAFTAR AKUN
        </h4>
      </div>
      <div class="bottom p-5">
        <h4 class="text-dark font-semibold">Lengkapi Data di Bawah Ini</h4>
        <form class="mt-4">
          <div class="form-group">
            <input
              type="text"
              placeholder="Nama Lengkap"
              class="w-full px-5 py-2 border rounded-[10px]"
            />
          </div>
          <div class="flex gap-3 mt-4">
            <div class="form-group w-1/3">
              <input
                type="email"
                placeholder="Email Anda"
                class="w-full px-5 py-2 border rounded-[10px]"
              />
            </div>
            <div class="form-group w-1/3">
              <input
                type="email"
                placeholder="Konfirmasi Email"
                class="w-full px-5 py-2 border rounded-[10px]"
              />
            </div>
            <div class="form-group w-1/3">
              <input
                type="text"
                placeholder="Nomor Handphone"
                class="w-full px-5 py-2 border rounded-[10px]"
              />
            </div>
          </div>
          <div class="form-group w-full mt-4">
            <textarea
              rows="10"
              placeholder="Isi Alamat Lengkap Anda"
              class="w-full px-5 py-2 border rounded-[10px] resize-none"
            ></textarea>
          </div>
          <div class="form-group w-full mt-4">
            <select class="w-full px-5 py-2 border rounded-[10px]">
              <option><i>Pilih Lokasi Kota Anda</i></option>
              <option>Semarang</option>
              <option>Medang</option>
              <option>Jakarta</option>
              <option>Surabaya</option>
              <option>Banyumas</option>
              <option>Pemalang</option>
            </select>
          </div>
          <div class="flex w-full gap-3 mt-4">
            <div class="form-group w-1/2">
              <input
                type="password"
                placeholder="Password"
                class="w-full px-5 py-2 border rounded-[10px]"
              />
            </div>
            <div class="form-group w-1/2">
              <input
                type="password"
                placeholder="Konfirmasi Password"
                class="w-full px-5 py-2 border rounded-[10px]"
              />
            </div>
          </div>
          <button
            class="bg-primary text-white font-semibold rounded-[10px] px-10 py-2 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
