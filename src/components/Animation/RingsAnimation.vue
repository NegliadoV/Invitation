<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rings = ref(null);
const imageOne = ref(null);
const imageTwo = ref(null);

onMounted(() => {
  gsap.from(imageOne.value, {
    scrollTrigger: {
      trigger: imageOne.value,
      start: "bottom bottom",
      scrub: true,
    },

    transform: "translateX(-80px)",
  });

  gsap.from(imageTwo.value, {
    scrollTrigger: {
      trigger: imageTwo.value,
      start: "bottom bottom",
      scrub: true,
    },

    transform: "translateX(20px)",
  });
});

defineProps({
  imgUrlOne: String,
  imgUrlTwo: String,
});
</script>

<template>
  <div ref="rings" class="rings__animation">
    <img ref="imageOne" :src="imgUrlOne" class="rings__img-one" />
    <img ref="imageTwo" :src="imgUrlTwo" class="rings__img-two" />
  </div>
</template>
