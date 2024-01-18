<script setup>
const emits = defineEmits(["update:checked", "updateCheckboxGroup"]);
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },

  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },

  group: {
    type: Boolean,
    default: false,
  },
});

const handleClick = (event) => {
  emits("updateCheckboxGroup", {
    optionId: props.id,
    checked: event.target.checked,
    optionName: props.label,
  });
};
</script>

<template>
  <div class="form__checkbox">
    <input
      :name="name"
      class="checkbox__button"
      type="checkbox"
      :value="value"
      :id="id"
      :checked="checked"
      @input="handleClick($event)"
    />
    <label :for="id" class="checkbox__label">{{ label }}</label>
  </div>
</template>
