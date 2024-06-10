<script setup>
import HeartAnimation from "./Animation/HeartAnimation.vue";
import ScheduleDescriptionLeft from "./UI/ScheduleDescriptionLeft.vue";
import ScheduleDescriptionRight from "./UI/ScheduleDescriptionRight.vue";
import RingsAnimation from "./Animation/RingsAnimation.vue";
import GlassAnimation from "./Animation/GlassAnimation.vue";
import SweetAnimation from "./Animation/SweetAnimation.vue";
import HomeAnimation from "./Animation/HomeAnimation.vue";
</script>

<template>
  <div id="schedule" class="schedule">
    <h2 class="schedule__title" data-aos="fade-up">
      РАСПИСАНИЕ <br /><span class="schedule_green" data-aos="fade-left"
        >Дня</span
      >
    </h2>
    <div class="schedule__content">
      <div class="schedule__content-left">
        <ScheduleDescriptionLeft
          :time="'15:30'"
          :title="'We meet'"
          :subTitle="'Сбор гостей'"
          :text="'Просьба взять с собой улыбки и хорошее настроение'"
        />
        <RingsAnimation
          :imgUrlOne="'/ring_one.svg'"
          :imgUrlTwo="'/ring_two.svg'"
        />
        <ScheduleDescriptionLeft
          :time="'17:00'"
          :title="'We party'"
          :subTitle="'Начало банкета'"
          :text="'Время вкусной еды, танцев и развлечений'"
        />
        <SweetAnimation
          :imgUrlOne="'/Cake_one.svg'"
          :imgUrlTwo="'/Cake_two.svg'"
          :imgUrlThree="'/Cake_three.svg'"
        />
        <ScheduleDescriptionLeft
          :time="'23:00'"
          :title="'The end'"
          :subTitle="'Окончание вечера'"
          :text="'К сожалению, даже такой прекрасный вечер может закончиться'"
        />
      </div>
      <div class="schedule__content-right">
        <HeartAnimation
          :imgUrlOne="'/green_heart.svg'"
          :imgUrlTwo="'/green_heart-min.svg'"
        />
        <ScheduleDescriptionRight
          :time="'16:00'"
          :title="'We do'"
          :subTitle="'Выездная регистрация'"
          :text="'На всякий случай приготовьте носовые платочки для трогательного момента'"
        />
        <GlassAnimation
          :imgUrlOne="'/glass.svg'"
          :imgUrlTree="'/dzin.svg'"
          :imgUrlTwo="'/glass.svg'"
        />
        <ScheduleDescriptionRight
          :time="'21:00'"
          :title="'We sweet'"
          :subTitle="'Свадебный торт'"
          :text="' Сладкая традиция, которую мы не смогли обойти стороной'"
        />
        <HomeAnimation
          :imgUrlOne="'/heart_mini.svg'"
          :imgUrlTwo="'/home.svg'"
        />
      </div>
    </div>
  </div>
</template>
