<script setup>
import CountDownItem from "./UI/CountDownItem.vue";
import { ref } from "vue";

const deadline = new Date(2024, 08, 24);

const days = ref();
const hours = ref();
const minutes = ref();
const seconds = ref();

const unitDays = ref("");
const unitHours = ref("");
const unitMinutes = ref("");
const unitSeconds = ref("");

function declensionNum(num, words) {
  return words[
    num % 100 > 4 && num % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
  ];
}

const onCountDown = () => {
  const remains = deadline - new Date();
  if (remains <= 0) {
    clearInterval(remains);
  }
  days.value = deadline - new Date();
hours.value = Math.floor((remains / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((remains / (1000 * 60)) % 60);
  seconds.value = Math.floor((remains / 1000) % 60);

  unitDays.value = declensionNum(days.value, ["день", "дня", "дней"]);
  unitHours.value = declensionNum(hours.value, ["час", "часа", "часов"]);
  unitMinutes.value = declensionNum(minutes.value, [
    "минута",
    "минуты",
    "минут",
  ]);
  unitSeconds.value = declensionNum(seconds.value, [
    "секунда",
    "секунды",
    "секунд",
  ]);
  unitSeconds.value = declensionNum(seconds.value, [
    "секунда",
    "секунды",
    "секунд",
  ]);
};

setInterval(onCountDown, 1000);
</script>

<template>
  <div class="countdown">
    <div class="countdown__timer">
      <CountDownItem :count="days" :unit-of-time="unitDays" />
      <CountDownItem :count="hours" :unit-of-time="unitHours" />
      <CountDownItem :count="minutes" :unit-of-time="unitMinutes" />
      <CountDownItem :count="seconds" :unit-of-time="unitSeconds" />
    </div>
    <div class="countdown__background"></div>
  </div>
</template>
