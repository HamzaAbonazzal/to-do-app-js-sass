document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
    }
  });

  function addTodoItem(text) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `<span>${text}</span>
          <button>Remove</button>`;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        li.remove();
      } else {
        li.classList.toggle("completed");
      }
    });

    todoList.appendChild(li);
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      darkModeToggle.innerText = "🌙";
    } else {
      darkModeToggle.innerText = "🌞";
    }
  });
});
