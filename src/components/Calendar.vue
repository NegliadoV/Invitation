<script setup>
import CalendarItem from "./UI/CalendarItem.vue";

let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
</script>

<template>
  <div id="calendar" class="calendar">
    <div class="calendar__left">
      <div class="calendar__line"></div>
      <div class="calendar__number">24</div>
      <div class="calendar__number">08</div>
      <div class="calendar__number">24</div>
      <div class="calendar__line bottom"></div>
    </div>
    <div class="calendar__center">
      <h2 class="calendar__title" data-aos="fade-up">
        Мы ждём
        <p class="calendar__subtitle" data-aos="fade-left">Вас</p>
      </h2>

      <div class="calendar__box">
        <div class="calendar__box-title">October</div>
        <div class="calendar__box-item">
          <div class="grid__item"></div>

          <div v-for="number in num" :key="number">
            <CalendarItem
              :class="number === 24 ? 'active' : ''"
              :date="number"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="calendar__right">
      <div class="calendar__line right"></div>
    </div>
  </div>
</template>
