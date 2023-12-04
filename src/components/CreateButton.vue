<template>
  <button
    class="create-button font14"
    @click.prevent="$emit('addTodo', $event.target.value)"
    type="submit"
  >
    <span class="create-button-text">Create</span>
    <PlusIcon class="plus-icon"></PlusIcon>
  </button>
</template>

<script setup>
import { defineEmits } from "vue";
import PlusIcon from "../assets/images/PlusIcon";
defineEmits(["addTodo"]);
</script>

<style scoped>
.create-button {
  width: 103px;
  color: #f2f2f2;
  background-color: #1e6f9f;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-left: 8px;
  padding: 16px;
  margin-top: 1px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.create-button:hover {
  background-color: #4ea8de;
}

.create-button-text {
  display: flex;
  margin-right: 8px;
  vertical-align: middle;
  height: 20px;
  font-family: Inter;
}
.plus-icon {
  display: flex;
  vertical-align: middle;
}

@media screen and (max-width: 900px) {
  .create-button {
    width: 100%;
    margin-top: 4px;
    margin-left: 0;
  }
}
</style>
