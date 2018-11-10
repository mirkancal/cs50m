const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoCount = 0;
let uncheckedCount = 0;
let todoId = 0;

function newTodo() {
  const todo = prompt('Create new TODO')
  if(todo === null) {
    return
  }
  list.appendChild(li(todo))

  todoCount++
  uncheckedCount++
  updateCounters()
}

function updateCounters() {
  itemCountSpan.innerText = todoCount;
  
}
