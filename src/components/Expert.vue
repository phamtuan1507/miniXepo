<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import TeamList from "./home/TeamList.vue";

</script>

<template>
  <Header />
  <Breadcumb />
  <div
    class="container px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-[rgba(253,235,224,0.36)]"
  >
    <h3 class="text-[#a05c3c] mb-[18px] uppercase text-center">
      Tận tâm và đam mê
    </h3>
    <h2 class="text-center font-bold text-[48px] text-[#121f38]">
      Kiến thức sâu rộng
    </h2>
    <div class="flex justify-center">
      <img src="/shape1.png" alt="" />
    </div>
  </div>
  <TeamList class="pb-[80px] bg-[rgba(253,235,224,0.36)]" />
  <Footer />
</template>

<style scoped></style>
