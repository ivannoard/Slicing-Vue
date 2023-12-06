<script setup>
import { onBeforeMount, onMounted, ref, watch, watchEffect } from "vue";
import { Navbar, Footer } from "../components/globals";

const user = ref("");

onMounted(() => {
  console.log("auuu");
});
</script>
<template>
  <Navbar />
  <div class="pb-10">
    <main>
      <RouterView />
    </main>
  </div>
  <Footer />
</template>
