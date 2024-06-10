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
        нейтральным оттенкам. Просим, по возможности, избегать ярких цветов в
        ваших образах.
      </p>
    </div>
    <div class="dresscode__color">
      <Color
        style="background-color: rgb(145 159 132)"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: rgb(233 198 192)"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: rgb(244 231 215)"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
      <Color
        style="background-color: rgb(255 255 255)"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      />
    </div>
  </div>
</template>
