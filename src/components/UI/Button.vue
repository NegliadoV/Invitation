<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button type="submit" class="btn">{{ text }}</button>
</template>
