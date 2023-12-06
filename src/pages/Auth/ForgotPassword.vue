<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <div class="w-full min-h-screen grid grid-cols-12 p-3">
    <div class="col-span-8 bg-forgotBackground bg-cover bg-no-repeat bg-center">
      qwe
    </div>
    <div class="col-span-4 h-full pb-12">
      <p class="text-right">Kahuripan Kafe</p>
      <div class="w-full h-full flex justify-center items-center">
        <div class="card">
          <h4 class="font-semibold text-xl text-left">Lupa Password</h4>
          <p class="text-[#616161] text-sm" v-if="!route.params.token">
            Masukan Email yang sudah terdaftar pada website
          </p>
          <p class="text-[#616161] text-sm" v-else>
            Masukan password yang mudah diingat bagi anda
          </p>
          <form class="mt-5" v-if="!route.params.token">
            <div class="form-group">
              <input
                type="text"
                class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                placeholder="Email Anda. . ."
              />
              <router-link to="/auth/forgot-password/fp222100">
                <button
                  class="bg-primary text-white w-full font-semibold py-2 border border-primary rounded-[10px] mt-4"
                >
                  Reset Password
                </button>
              </router-link>
            </div>
          </form>
          <form class="mt-5" v-else>
            <div class="form-group">
              <input
                type="text"
                class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5"
                placeholder="Password Baru"
              />
              <input
                type="text"
                class="block rounded-[10px] border border-[#BDBDBD] w-full py-2 px-5 mt-4"
                placeholder="Konfirmasi Password"
              />
              <button
                class="bg-primary text-white w-full font-semibold py-2 border border-primary rounded-[10px] mt-4"
              >
                Reset Password
              </button>
            </div>
          </form>
          <p class="text-center mt-4 underline cursor-pointer">Kembali</p>
        </div>
      </div>
    </div>
  </div>
</template>
