<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const imageOne = ref(null);
const imageTwo = ref(null);

onMounted(() => {
  gsap.to(imageOne.value, {
    y: -40,
    duration: 2,
    repeat: -1,
    ease: "show.out(1,0.3)",
    yoyo: true,
  });
});

defineProps({
  imgUrlOne: String,
  imgUrlTwo: String,
});
</script>

<template>
  <div ref="home" class="home__animation">
    <img ref="imageOne" :src="imgUrlOne" class="home__img-one" />
    <img ref="imageTwo" :src="imgUrlTwo" class="home__img-two" />
  </div>
</template>
