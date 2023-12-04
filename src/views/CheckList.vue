<!-- Apparently isn't best implementation. It needs a single storage with actions, events to mutate todos. -->
<template>
  <div class="main-container">
    <div class="header">
      <LogoTodo></LogoTodo>
    </div>
    <div class="CheckList">
      <form class="todo-input-form">
        <TodoInput
          :inputValue="todoTextInput"
          @textChange="(newValue) => (todoTextInput = newValue)"
        />
        <CreateButton @addTodo="addTodo()" />
      </form>
      <div>
        <my-element class="tasks-count-element" :todoList="todos"></my-element>
        <div v-if="!todos.length" class="emptylist">
          <EmptyList class="empty-img"></EmptyList>
          <div class="empty-messages">
            <p class="empty-warning empty-warning-header font16">
              You don't have tasks registered yet
            </p>
            <p class="empty-warning font 16">
              Create tasks and organize your to-do items
            </p>
          </div>
        </div>
        <ul class="todos-list" v-if="todos.length">
          <TaskItem
            :todoList="todos"
            @removeToDoListItem="(index) => removeTodo(index)"
            @editToDoListItem="(index) => editToDoItem(index)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from "vue";
import TodoInput from "../components/TodoInput";
import CreateButton from "../components/CreateButton";
import TaskItem from "../components/TaskItem";
import LogoTodo from "../assets/images/LogoTodo";
import EmptyList from "../assets/images/EmptyList";
import "./my-element";
import "../assets/css/main.css";

const props = defineProps(["inputModel_"]);

const todos = ref([]);

const todoTextInput = ref(props.inputModel_);

function addTodo() {
  if (isLongWordIncluded(todoTextInput.value) !== "None") {
    alert(isLongWordIncluded(todoTextInput.value));
    todoTextInput.value = "";
    return;
  }

  if (!todoTextInput.value) {
    alert("Please, fill todo with some text");
    return;
  }

  todos.value.push({
    toDoText: todoTextInput.value,
    checked: false,
  });

  todos.value = [...todos.value];

  todoTextInput.value = "";
}

function editToDoItem(index) {
  todos.value[index].checked = !todos.value[index].checked;
  todos.value = [...todos.value];
}

function removeTodo(index) {
  todos.value = [...todos.value.filter((t) => t !== index)];
}

function isLongWordIncluded(userInput) {
  let words = userInput.split(" ");
  let ans = "None";
  words.map((word) =>
    word.length > 25
      ? (ans = `word '${word}' has ${word.length} characters, is too long `)
      : "None"
  );
  return ans;
}

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>

<style scoped>
.main-container {
  background-color: #1a1a1a;
  height: 100vh;
  font-family: Inter;
  position: relative;
}
.header {
  background-color: #0d0d0d;
  padding-bottom: 80px;
  padding-top: 72px;
  display: flex;
  justify-content: center;
}

.CheckList {
  background-color: #1a1a1a;
  padding-bottom: 40px;
}

.todo-input-form {
  display: flex;
  width: 50vw;
  position: absolute;
  margin-top: -28px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-self: center;
  left: 0;
  right: 0;
}
.emptylist {
  border-radius: 8px;
  border-top: 1px solid #333333;
  width: 50vw;
  margin: auto;
  padding-top: 64px;
}

.empty-warning-header {
  font-weight: bold;
}
.empty-warning {
  color: #808080;
  margin: 0;
  padding: 0;
}

.empty-messages {
  margin: auto;
  margin-top: 16px;
}

.empty-img {
  margin: auto;
}

.todos-list {
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
}
.tasks-count-element {
  padding-top: 91px;
  display: flex;
  margin-bottom: 24px;
}
@media screen and (max-width: 900px) {
  .todo-input-form,
  .emptylist {
    width: 75vw;
  }
  .todo-input-form {
    display: inline;
  }
  .tasks-count-element {
    padding-top: 120px;
  }
}
</style>
