<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heart = ref(null);
const imageOne = ref(null);
const imageTwo = ref(null);

onMounted(() => {
  gsap.from(imageOne.value, {
    scrollTrigger: {
      trigger: imageOne.value,
      start: "bottom bottom",
      scrub: true,
    },

    transform: "translateX(-20px)",
  });

  gsap.from(imageTwo.value, {
    scrollTrigger: {
      trigger: imageTwo.value,
      start: "bottom bottom",
      scrub: true,
    },

    transform: "translateX(40px)",
  });
});

defineProps({
  imgUrlOne: String,
  imgUrlTwo: String,
});
</script>

<template>
  <div ref="heart" class="heart__animation">
    <img ref="imageOne" :src="imgUrlOne" class="heart__img-one" />
    <img ref="imageTwo" :src="imgUrlTwo" class="heart__img-two" />
  </div>
</template>
