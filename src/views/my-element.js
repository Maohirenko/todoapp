import { LitElement, html, css } from "lit";

class MyElement extends LitElement {
  static styles = css`
    @font-face {
      font-family: "Inter";
      src: url("~@/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf")
        format("truetype");
    }
    .tasks-count > div > span {
      font-weight: bold;
    }
    .tasks-count {
      display: flex;
      margin: auto;
      width: 50vw;
      line-height: 140%;
      justify-content: space-between;
    }
    .created-tasks {
      margin-right: auto;
    }
    .created-tasks-text {
      color: #4ea8de;
      margin: 1px 8px 1px 0;
    }
    .completed-tasks {
      margin-left: auto;
    }
    .completed-tasks-text {
      color: #8284fa;
      margin: 1px 8px 1px 0;
    }
    .count-container {
      background-color: #333333;
      color: #d9d9d9;
      padding: 2px 8px;
      border-radius: 9px;
    }
    .font12 {
      font-size: 12px;
    }
    .font14 {
      font-size: 14px;
    }
    @media screen and (max-width: 900px) {
      .tasks-type {
        display: flex;
        flex-direction: column;
        margin: 4px;
      }
      .text-container {
        display: flex;
        margin: auto;
      }
    }
  `;
  static properties = {
    todoList: [],
  };

  constructor() {
    super();
    this.todoList = [];
  }

  render() {
    const todoTotal = this.todoList.length;
    const todoCompleted = this.todoList.filter((todoItem) => todoItem.checked)
      .length
      ? `${this.todoList.filter((todoItem) => todoItem.checked).length} de ${
          this.todoList.length
        }`
      : 0;
    return html` <div class="tasks-count">
      <div class="created-tasks tasks-type">
        <span class="created-tasks-text text-container font14"
          >Tasks created</span
        >
        <span class="count-container font12">${todoTotal}</span>
      </div>
      <div class="completed-tasks tasks-type">
        <span class="completed-tasks-text text-container font14"
          >Tasks completed
        </span>
        <span class="count-container font12">${todoCompleted}</span>
      </div>
    </div>`;
  }
}
customElements.define("my-element", MyElement);
