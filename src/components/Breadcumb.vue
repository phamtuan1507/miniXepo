<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div
    class="bg-[url(/breadcumb.jpg)] pb-[0.1px] overflow-hidden relative bg-[#EFF1F5] bg-[length:100%_auto] bg-top bg-no-repeat bg-cover"
  >
    <div class="relative z-[3] container mx-auto px-4 md:px-6 lg:px-8">
      <div class="p-[200px_0_200px_0]">
        <h1 class="text-[#121f38] text-[60px] uppercase m-[-0.22em_0_-0.22em_0]">
          {{ route.meta.title }}
        </h1>
        <nav class="">
          <RouterLink to="/" class="text-[14px] text-[#555555] hover:text-[#a05c3c]">Trang chủ</RouterLink>
          <span class="mx-1">&#8250;</span>
          <span class="text-[14px] text-[#121f38]"> {{ route.meta.title }} </span>
        </nav>
      </div>
    </div>
  </div>
</template>
