<script setup>
defineProps({
  text: String,
  href: String,
});
</script>

<template>
  <li>
    <a class="nav__link" :href="href">{{ text }}</a>
  </li>
</template>
