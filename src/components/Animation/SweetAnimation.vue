<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
  imgUrlOne: String,
  imgUrlTwo: String,
  imgUrlThree: String,
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
    opacity: 0,
    transform: "translateX(-400px)",
  });

  gsap.from(imageTwo.value, {
    scrollTrigger: {
      trigger: imageTwo.value,
      start: "top bottom",
      scrub: true,
    },
    opacity: 0,
    transform: "translateX(-200px)",
  });

  gsap.from(imageTree.value, {
    scrollTrigger: {
      trigger: imageTree.value,
      start: "bottom bottom",
      scrub: true,
    },
  });
});
</script>

<template>
  <div ref="sweet" class="sweet__animation">
    <img ref="imageOne" :src="imgUrlOne" class="sweet__img-one" />
    <img ref="imageTwo" :src="imgUrlTwo" class="sweet__img-two" />
    <img ref="imageTree" :src="imgUrlThree" class="sweet__img-tree" />
  </div>
</template>
