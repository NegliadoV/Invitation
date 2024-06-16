<script setup>
import InputText from "./UI/InputText.vue";
import { onMounted, ref } from "vue";

import { gsap } from "gsap";

const background = ref(null);

onMounted(() => {
  gsap.to(background.value, {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "elastic.in(1,0.3)",
  });
});

defineProps({
  text: String,
  imgUrl: String,
});
</script>

<template>
  <div class="container">
    <div class="hero">
      <div class="hero__thumb">
        <div class="hero__img"></div>
      </div>
      <div class="hero__caption">
        <h1>{{ text }}</h1>
      </div>
    </div>
  </div>
</template>

<style></style>
