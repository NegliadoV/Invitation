<script setup>
import InputCheckbox from "./InputCheckbox.vue";

const emits = defineEmits(["update:value", "updateCheckboxGroup"]);
const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
  },
  options: {
    type: Object,
    required: true,
    validator: (value) => {
      const hasNameKay = value.every((options) =>
        Object.keys(options).includes("name")
      );
      const hasIdKey = value.every((options) =>
        Object.keys(options).includes("id")
      );
      return hasNameKay && hasIdKey;
    },
  },
});

const checked = (params) => {
  let arr = [...props.value];
  if (params.checked) {
    arr.push(params.optionName);
  } else {
    arr.splice(arr.indexOf(params.optionName), 1);
  }
  console.log(params);
  emits("update:value", arr);
};
</script>

<template>
  <div v-for="option in options" :key="option.id">
    <InputCheckbox
      :label="option.name"
      :id="option.id"
      :value="option.name"
      :checked="value.includes(option.id)"
      group
      @updateCheckboxGroup="checked($event)"
    />
  </div>
</template>
