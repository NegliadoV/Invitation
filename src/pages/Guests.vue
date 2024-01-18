<script setup>
import axios from "axios";
import { onMounted, onUnmounted, ref } from "vue";

const guestsList = ref([]);

const getGuests = async () => {
  try {
    const { data } = await axios.get("https://716596a2e47a129b.mokky.dev/send");

    guestsList.value = data.map((obj) => ({
      ...obj,
      name: obj.name,
      id: obj.id,
      radio: obj.radio.value,
      checkbox: obj.checkbox,
    }));
  } catch (err) {
    console.log(err);
  }
};

const deleteGuest = async (id) => {
  const deleteGuestsValue = () => {
    guestsList.value = guestsList.value.filter((guest) => guest.id !== id);
  };
  try {
    deleteGuestsValue();
    await axios.delete(`https://716596a2e47a129b.mokky.dev/send/${id}`);
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await getGuests();
});
</script>

<template>
  <div class="guests">
    <h2 class="guests__title">Информация о гостях</h2>

    <b class="b">Гостей всего: {{ guestsList.length }}</b>
    <div class="guests__container" v-for="guest in guestsList" :key="guest.id">
      <button @click="deleteGuest(guest.id)" class="guests__btn"></button>
      <div class="guests__id">
        Номер гостя: <b class="b">{{ guest.id }}</b>
      </div>
      <div class="guests__info">
        Имя (или полная информация о семье и родственниках):<br />
        <b class="b">{{ guest.name }}</b>
      </div>
      <div class="guests__info">
        Присутствие:<br />
        <b class="b">{{ guest.radio }}</b>
      </div>
      <div class="guests__info">
        Предпочтения по напиткам:<br />
        <b class="b">{{ guest.checkbox }}</b>
      </div>
    </div>
  </div>
</template>
