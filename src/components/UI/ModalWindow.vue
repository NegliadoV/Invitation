<script setup>
import InputText from "./InputText.vue";
import { ref } from "vue";

const modal = ref(null);

const removeModal = () => {
  modal.value.classList.remove("modal__on");
};

const loginInput = ref("");

const passwordInput = ref("");
</script>

<template>
  <div ref="modal" class="modal_admin">
    <div class="modal">
      <button @click="removeModal" class="close__modal"></button>
      <InputText
        :placeholder="'Логин'"
        type="text"
        v-model:value="loginInput"
      />
      <InputText
        :type="'password'"
        :placeholder="'Пароль'"
        v-model:value="passwordInput"
      />
      <button class="btn btn__admin admin">
        <router-link
          :class="
            loginInput !== 'admin'
              ? 'disabled'
              : '' || passwordInput !== '123456Admin'
              ? 'disabled'
              : ''
          "
          class="btn__admin"
          to="/guests"
          >Войти</router-link
        >
      </button>
    </div>
  </div>
</template>
