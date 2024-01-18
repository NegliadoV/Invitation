<script setup>
defineProps({
  count: Number,
  unitOfTime: String,
});
</script>

<template>
  <div class="countdown__timer-item">
    <div class="countdown__timer-number">{{ count }}</div>
    <div class="countdown__timer-name">{{ unitOfTime }}</div>
  </div>
</template>
