<script setup>
import { provide, ref } from "vue";

const message = document.querySelector(".modal_admin");

const refMessage = ref(message);
const activeModal = () => {
  message.classList.add("modal__on");
};

provide("refMessage", refMessage.value);
</script>

<template>
  <div class="logo">Данила и Арина</div>
  <nav class="nav">
    <ul>
      <a class="nav__link" href="#calendar">Когда</a>
      <a class="nav__link" href="#address">Где</a>
      <a class="nav__link" href="#schedule">Расписание</a>
      <a class="nav__link" href="#form">Ваше присутствие </a>
      <a class="nav__link" href="#wish">Пожелания </a>
      <a style="cursor: pointer" class="nav__link" @click="activeModal"
        >Войти</a
      >
    </ul>
  </nav>
  <nav class="navbar">
    <div class="container nav-container">
      <input class="checkbox" type="checkbox" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>

      <div class="menu-items">
        <li><a href="#calendar">Когда</a></li>
        <li><a href="#address">Где</a></li>
        <li><a href="#schedule">Расписание</a></li>
        <li><a href="#form">Ваше присутствие</a></li>
        <li><a href="#wish">Пожелания</a></li>
        <li><a @click="activeModal" style="cursor: pointer">Войти</a></li>
      </div>
    </div>
  </nav>
</template>
