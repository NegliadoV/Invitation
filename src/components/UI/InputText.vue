<script setup>
defineEmits(["update:value"]);
defineProps({
  error: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <input
    @input="$emit('update:value', $event.target.value)"
    type="input"
    :placeholder="placeholder"
    class="form__input"
  />
  <TransitionGroup>
    <div class="form__error" v-for="el of error" :key="el.$uid">
      <div class="form__error-massage">{{ el.$message }}</div>
    </div>
  </TransitionGroup>
</template>
