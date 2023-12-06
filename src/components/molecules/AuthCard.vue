<script setup>
import { TextLogo } from "../globals";
defineProps({
  type: String,
});
defineEmits();
</script>
<template>
  <div
    class="card bg-white p-3 lg:p-8 py-10 rounded-lg shadow-md w-full mx-3 lg:mx-0 md:w-8/12 lg:w-5/12 flex flex-col justify-center"
  >
    <TextLogo />
    <h2 class="text-sm lg:text-lg text-center my-3 lg:my-2">{{ type }}</h2>
    <slot></slot>
  </div>
</template>
