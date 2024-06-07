<script setup>
import { ref, onMounted, computed } from "vue";
import useValidate from "@vuelidate/core";
import { helpers, minLength } from "@vuelidate/validators";
import axios from "axios";

import InputRadio from "./UI/InputRadio.vue";
import InputText from "./UI/InputText.vue";
import CheckboxGroup from "./UI/CheckboxGroup.vue";
import Button from "./UI/Button.vue";
import Message from "./Message.vue";

const inputText = ref("");

const radioList = ref([]);

const checkboxList = ref([]);

const selectCheckbox = ref([]);

const selectRadio = ref([]);

const rules = computed(() => ({
  inputText: {
    minLength: helpers.withMessage("Минимальная длина 3 символа", minLength(3)),
  },
}));

const v$ = useValidate(rules, { inputText });

const getRadioList = async () => {
  try {
    const { data } = await axios.get(
      `https://716596a2e47a129b.mokky.dev/radio`
    );

    radioList.value = data.map((obj) => ({
      ...obj,
      label: obj.name,
      value: obj.name,
      id: obj.id,
      boolean: obj.boolean,
    }));
  } catch (err) {
    console.error(err);
  }
};

const getCheckboxList = async () => {
  try {
    const { data } = await axios.get(
      `https://716596a2e47a129b.mokky.dev/checkbox`
    );
    checkboxList.value = data.map((obj) => ({
      ...obj,
      label: obj.name,
      value: obj.name,
      id: obj.id,
    }));
  } catch (err) {
    console.error(err);
  }
};

const sendForm = async () => {
  try {
    const { data } = await axios.post(
      `https://716596a2e47a129b.mokky.dev/send`,
      {
        name: inputText.value,
        radio: selectRadio.value,
        checkbox: selectCheckbox.value,
      }
    );

    const message = document.querySelector(".message");
    message.classList.add("active__modal");

    inputText.value = "";
    radioList.value = [];
    checkboxList.value = [];
    selectRadio.value = [];
    selectCheckbox.value = [];
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  const clearedData = () => {
    inputText.value = "";
    selectRadio.value = "";
    selectCheckbox.value = [];
  };
  clearedData();
};

onMounted(async () => {
  await getRadioList();
  await getCheckboxList();
});
</script>

<template>
  <div id="form" class="container">
    <div class="form__container">
      <h1 class="form_title">
        Пожалуйста, дайте знать о своем присутствии на мероприятии до 10.08
      </h1>
      <form @submit.prevent="sendForm()" action="submit" class="form">
        <h2 class="guests_name_title">
          Ваше имя (Укажите имена гостей и возраст детей)
        </h2>
        <InputText
          v-model:value="v$.inputText.$model"
          :placeholder="'Мария и андрей, сын Степан 8 лет'"
          :error="v$.inputText.$errors"
          :name="'text'"
        />
        <h2 class="guests_presence_title">Ваше присутствие</h2>

        <div
          class="radio__container"
          v-for="radio in radioList"
          :key="radio.id"
        >
          <InputRadio
            :value="radio.name"
            :label="radio.name"
            :id="radio.id"
            :name="'radio'"
            :boolean="radio.boolean"
            v-model:checkedValue="selectRadio"
          />
        </div>

        <h2
          class="guests_preference_title"
          :class="selectRadio.boolean === false ? 'disabled' : ''"
        >
          Предпочтения по напиткам(можно выбрать несколько вариантов)
        </h2>

        <div
          class="checkbox__container"
          :class="selectRadio.boolean === false ? 'disabled' : ''"
        >
          <CheckboxGroup
            :options="checkboxList"
            v-model:value="selectCheckbox"
          />
        </div>

        <div class="btn__container">
          <Button
            :text="
              inputText.length < 3 ||
              selectRadio.length < 1 ||
              (selectCheckbox.length < 1 && !selectRadio.boolean === false)
                ? 'Что-бы отправить'
                : 'Отправить'
            "
            :disabled="
              inputText.length < 3 ||
              selectRadio.length < 1 ||
              (selectCheckbox.length < 1 && !selectRadio.boolean === false)
            "
            :class="
              inputText.length < 3 ||
              selectRadio.length < 1 ||
              (selectCheckbox.length < 1 && !selectRadio.boolean === false)
                ? 'disabled'
                : ''
            "
          />

          <div>
            <div class="form__error" v-if="inputText.length < 3">
              <div class="form__error-massage">Введите имя и возраст</div>
            </div>
            <div
              class="form__error"
              v-if="selectCheckbox.length < 1 && !selectRadio.boolean === false"
            >
              <div class="form__error-massage">
                Выберете ваши прредпочтения по напиткам (хотябы один)
              </div>
            </div>
            <div class="form__error" v-if="selectRadio.length < 1">
              <div class="form__error-massage">Выбирите придете вы или нет</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Message :text="'Спасибо за оставленую информацию!'" />
</template>
