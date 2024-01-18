<script setup>
defineProps({
  text: String,
});

const closeModal = () => {
  const message = document.querySelector(".message");
  message.classList.remove("active__modal");
};
</script>

<template>
  <div class="message">
    <div @click="closeModal" class="message__container">
      <button class="message__btn"></button>
      <div class="message__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>
