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
  localStorage.setItem(
    "user_data",
    JSON.stringify({ username: username.value })
  );
  return router.push("/");
}
</script>

<template>
  <AuthCard type="LOGIN">
    <form @submit="handleSubmit">
      <div class="form-group">
        <!-- <label for="username">Username {{ username }}</label> -->
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Email Anda"
          class="text-sm lg:text-lg block border rounded-md mt-1 p-2 mx-auto w-full lg:w-4/6"
          :value="username"
          @input="(event) => (username = event.target.value)"
        />
      </div>
      <div class="form-group mt-3">
        <!-- <label for="password">Password {{ password }}</label> -->
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          class="text-sm lg:text-lg block border rounded-md mt-1 p-2 mx-auto w-full lg:w-4/6"
          :value="password"
          @input="(event) => (password = event.target.value)"
        />
      </div>
      <button
        class="text-sm lg:text-lg w-full lg:w-2/6 block mx-auto bg-primary p-2 rounded-md mt-3 font-semibold text-white"
      >
        Login
      </button>
      <p
        class="text-sm lg:text-lg text-center my-2 mt-4 cursor-pointer"
        @click="router.push('/auth/forgot-password')"
      >
        Forgot Password
      </p>
      <p class="text-sm lg:text-lg text-center">
        Belum memiliki akun?
        <span
          class="text-primary cursor-pointer"
          @click="() => router.push('/auth/register')"
          >Daftar Disini</span
        >
      </p>
    </form>
  </AuthCard>
</template>
