<script setup>
import Link from "./UI/Link.vue";
</script>

<template>
  <div class="logo">Данила и Арина</div>
  <nav class="nav">
    <ul>
      <Link :href="'#calendar'" :text="'Когда'" />
      <Link :href="'#address'" :text="'Где'" />
      <Link :href="'#schedule'" :text="'Расписание'" />
      <Link :href="'#form'" :text="'Ваше присутствие'" />
      <Link :href="'#wish'" :text="'Пожелания'" />
    </ul>
  </nav>
  <nav class="navbar">
    <div class="container nav-container">
      <input class="checkbox" type="checkbox" name="" id="" />
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
      </div>
    </div>
  </nav>
</template>
