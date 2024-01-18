<script setup>
defineProps({
  time: String,
  title: String,
  text: String,
  subTitle: String,
});
</script>

<template>
  <div class="content__left-block">
    <div class="block__description right">
      <p class="description__title">{{ title }}</p>
      <p class="description__subTitle">{{ subTitle }}</p>
      <p class="description__text">{{ text }}</p>
    </div>
    <div class="block__time">{{ time }}</div>
  </div>
</template>
