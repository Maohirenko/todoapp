<template>
  <li class="todo-item" v-for="(todoItem, index) in todoList" :key="index">
    <div class="todo-container">
      <CheckBox
        :checkboxId="index"
        @editToDoItem="
          {
            (newValue) => (checkboxId = newValue);
            $emit('editToDoListItem', index);
          }
        "
        :itemChecked="todoItem.checked"
      />
      <p
        class="todoText font14"
        v-bind:class="todoItem.checked ? 'todoCompleted' : ''"
      >
        {{ todoItem.toDoText }}
      </p>
      <DeleteButton @removeTodo="$emit('removeToDoListItem', todoItem)" />
    </div>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";
defineProps(["todoList"]);
defineEmits(["editToDoListItem", "removeToDoListItem"]);
</script>

<style scoped>
.todo-container {
  display: flex;
  position: relative;
}
.todo-item {
  background-color: #262626;
  border: 1px solid #333333;
  border-radius: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
}
.todoText {
  color: #f2f2f2;
  text-align: left;
  width: calc(95% - 60px);
  margin: 0 12px 0 12px;
}

.todoCompleted {
  text-decoration: line-through;
  color: #808080;
}
@media screen and (max-width: 900px) {
  .todo-item {
    width: 80vw;
  }
  .todoText {
    font-size: 12px;
    margin: 0 4px 0 4px;
  }
}
</style>
