<script setup>
import { inject, onMounted, ref } from "vue";

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

const scroll = inject("scroll");

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
      <!-- <div ref="background" class="hero__animation">
        <div
          class="animation__bg"
          :style="
            'width:' +
            (scroll + 200) +
            'px' +
            ';' +
            'height:' +
            (scroll + 200) +
            'px'
          "
          v-show="scroll <= 700"
        ></div>
      </div> -->
    </div>
  </div>
</template>

<style></style>
