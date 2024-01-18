<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
  imgUrlOne: String,
  imgUrlTwo: String,
  imgUrlTree: String,
});

gsap.registerPlugin(ScrollTrigger);

const imageOne = ref(null);
const imageTwo = ref(null);
const imageTree = ref(null);
onMounted(() => {
  gsap.from(imageOne.value, {
    scrollTrigger: {
      trigger: imageOne.value,
      start: "bottom bottom",
      scrub: true,
    },
    rotate: "-30",
    transform: "translateX(-100px)",
  });

  gsap.from(imageTwo.value, {
    scrollTrigger: {
      trigger: imageTwo.value,
      start: "bottom bottom",
      scrub: true,
    },

    transform: "translateX(100px)",
  });

  gsap.from(imageTree.value, {
    scrollTrigger: {
      trigger: imageTree.value,
      start: "bottom bottom",
      scrub: true,
    },
    opacity: -10,
  });
});
</script>

<template>
  <div ref="glass" class="glass__animation">
    <img ref="imageOne" :src="imgUrlOne" class="glass__img-one" />
    <img ref="imageTree" :src="imgUrlTree" class="glass__img-tree" />
    <img ref="imageTwo" :src="imgUrlTwo" class="glass__img-two" />
  </div>
</template>
