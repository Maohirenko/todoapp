<template>
  <input
    @focus.prevent=""
    class="todo-input font16"
    :value="inputValue"
    @input="$emit('textChange', $event.target.value)"
    type="text"
    placeholder="Add a new task"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["inputValue"]);
defineEmits(["textChange"]);
</script>

<style scoped>
.todo-input {
  font-family: Inter;
  background-color: #262626;
  width: calc(100% - 111px);
  border-radius: 8px;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px solid #0d0d0d;
  color: #808080;
  box-sizing: border-box;
}

.todo-input:focus {
  outline: none;
  color: #f2f2f2;
  border: 1px solid #5e60ce;
}

@media screen and (max-width: 900px) {
  .todo-input {
    width: 100%;
  }
}
</style>
