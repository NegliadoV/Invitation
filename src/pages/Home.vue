<script setup>
import { ref, onMounted, onUnmounted, provide, watch } from "vue";
import Navigation from "../components/Navigation.vue";
import Hero from "../components/Hero.vue";
import Greeting from "../components/Greeting.vue";
import Calendar from "../components/Calendar.vue";
import CountDown from "../components/CountDown.vue";
import Address from "../components/Address.vue";
import Schedule from "../components/Schedule.vue";
import Banner from "../components/Banner.vue";
import Dresscode from "../components/Dresscode.vue";
import Form from "../components/Form.vue";
import Wishes from "../components/UI/Wishes.vue";
import Footer from "../components/Footer.vue";

import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 100,
    delay: 0,
    duration: 800,
    easing: "ease",
    once: false,
    mirror: true,
    anchorPlacement: "bottom-top",
  });
});

const scroll = ref(0);

const onScroll = () => {
  return window.addEventListener("scroll", () => {
    scroll.value = window.scrollY;
  });
};

onMounted(() => {
  onScroll();
});

watch(scroll, () => {
  onScroll();
});

provide("scroll", scroll);

watch(scroll, () => {});
</script>

<template>
  <header v-if="scroll > 500" class="header">
    <div class="header__inner">
      <Navigation />
    </div>
  </header>
  <Hero :text="'Она сказала да!'" :imgUrl="'/1.jpg'" />
  <Greeting />
  <Calendar />
  <CountDown />
  <Address />
  <Schedule />
  <Banner />
  <Dresscode />
  <Wishes />
  <Form />
  <Footer />

  <router-view></router-view>
</template>
