<script setup>
import { useRouter } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const router = useRouter();

const user = localStorage.getItem("user_data");
function handleLogout() {
  localStorage.clear();
  window.location.reload();
}
console.log(user);
</script>

<template>
  <nav class="navbar fixed top-0 w-full z-10">
    <div class="container mx-auto flex w-full justify-between">
      <div
        class="w-full lg:w-8/12 bg-primary brand flex justify-between lg:justify-normal items-center px-5 lg:px-10 py-2"
      >
        <div
          @click="() => router.push({ name: 'Homepage' })"
          class="text-logo font-logo block lg:hidden text-white cursor-pointer"
        >
          <h1 class="text-2xl lg:text-5xl leading-6">Kahuripan Cafe</h1>
        </div>
        <div
          @click="() => router.push({ name: 'Homepage' })"
          class="text-logo font-logo hidden lg:block text-white cursor-pointer"
        >
          <h1 class="text-xl lg:text-xl leading-6">Kahuripan</h1>
          <p class="text-md text-right">Cafe</p>
        </div>
        <div class="hidden lg:flex gap-5 text-white justify-end w-full">
          <p @click="() => router.push({ name: 'Homepage' })">Home</p>
          <p @click="() => router.push({ name: 'About Us' })">Tentang Kami</p>
          <p @click="() => router.push({ name: 'Menu' })">Menu</p>
          <p @click="() => router.push({ name: 'Reservation' })">Reservasi</p>
          <p>Hubungi Kami</p>
        </div>
        <Menu as="div" class="relative block lg:hidden">
          <MenuButton>
            <div class="w-[48px] h-[48px] bg-gray-300"></div>
          </MenuButton>
          <MenuItems
            as="div"
            class="absolute border shadow-md right-0 p-2 w-[200px] flex flex-col gap-2 bg-white"
          >
            <MenuItem v-slot="{ active }">
              <p
                :class="{ 'bg-blue-500': active }"
                @click="() => router.push('/account')"
              >
                Account
              </p>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :class="{ 'bg-blue-500': active }"
                href="#"
                @click="handleLogout"
              >
                Logout
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div
        class="w-4/12 py-4 px-10 hidden lg:flex gap-3 items-center justify-end bg-white"
      >
        <p @click="() => router.push('/cart')">Keranjang</p>
        <Menu as="div" class="relative" v-if="user">
          <MenuButton>
            <div class="w-[48px] h-[48px] rounded-full bg-gray-300"></div>
          </MenuButton>
          <MenuItems
            as="div"
            class="absolute border shadow-md right-0 p-2 w-[200px] flex flex-col gap-2"
          >
            <MenuItem v-slot="{ active }">
              <p
                :class="{ 'bg-blue-500': active }"
                @click="() => router.push('/account')"
              >
                Account
              </p>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :class="{ 'bg-blue-500': active }"
                href="#"
                @click="handleLogout"
              >
                Logout
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>

        <button
          v-if="!user"
          @click="() => router.push('/auth/register')"
          class="rounded-full px-10 py-1 border border-primary text-primary"
        >
          Daftar
        </button>
        <button
          v-if="!user"
          @click="() => router.push('/auth/login')"
          class="rounded-full px-10 py-1 text-secondary bg-primary"
        >
          Masuk
        </button>
      </div>
    </div>
  </nav>
</template>
