<script setup>
import Color from "./UI/Color.vue";
</script>

<template>
  <div class="dresscode">
    <div class="dresscode__description">
      <div class="dresscode__title" data-aos="fade-down">Дресс-код</div>
      <p class="dresscode__text" data-aos="fade-up">
        Мы очень старались сделать праздник красивым и будем рады, если в своих
        нарядах вы будете придерживаться минимализма и отдадите предпочтение
        нейтральным оттенкам (справа). Просим по возможности избегать ярких
        цветов в ваших образах.
      </p>
    </div>
    <div class="dresscode__color">
      <Color
        style="background-color: #cad6d2"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: #e1adb2"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: #f9ddda"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: #d6e4e7"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: #d7cdc1"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: #fff"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
    </div>
  </div>
</template>
