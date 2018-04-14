import defaultList from './logic';
import showNewListItem from './display';

const anchor = document.querySelector('#todoList');
let todoList = defaultList();

// Render Todo List
const renderList = (list) => {
  anchor.innerHTML = "";
  todoList.forEach( (element) => {
    let newTask = showNewListItem(element['task']);
    if (element.completed == true) {
      newTask.classList.add('strikethrough') 
    }
    anchor.appendChild(newTask); 
  })
}

renderList(todoList);

const addNewTaskToList = (list, task) => {
  let newTaskObject = {
    pos: list.length,
    task: task
  }
  list.push(newTaskObject);
}

// Toggle Completeness
const checkBoxes = document.querySelectorAll('.taskCheckBox')
checkBoxes.forEach( (checkBox) => {
  // CHANGE TO EDIT todoList STATE: completed: true
})

submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  let newTitle = document.querySelector('#taskString').value
  addNewTaskToList(todoList, newTitle)
  renderList(todoList)
})


