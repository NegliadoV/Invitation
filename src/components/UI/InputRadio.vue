<script setup>
const emits = defineEmits(["update:checkedValue"]);
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: Number,
    default: null,
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  boolean: {
    type: Boolean,
    default: true,
  },
});

const handleClickRadio = (event) => {
  emits("update:checkedValue", {
    value: event.target.value,
    boolean: props.boolean,
  });
};
</script>

<template>
  <div class="form__radio">
    <input
      type="radio"
      :id="id"
      class="radio__button"
      :name="name"
      :value="value"
      :boolean="boolean"
      @input="handleClickRadio($event)"
    />
    <label :for="id" class="radio__label">{{ label }}</label>
  </div>
</template>
