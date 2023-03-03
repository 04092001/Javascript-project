const todos = [];

render();

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;
  todos.push(title);

  render();
}

function render() {
  // reset our list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todoTitle) {
    const element = document.createElement("div");
    element.innerText = todoTitle;
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}
