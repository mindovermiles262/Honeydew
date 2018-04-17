import defaultList from './state';
import showNewListItem from './display';

const anchor = document.querySelector('#todoList');
let todoList = defaultList();

const startListeners = () => {
  // Toggle Completeness
  const checkBoxes = document.querySelectorAll('.taskCheckBox')
  checkBoxes.forEach( (checkBox) => {
    checkBox.addEventListener('click', (click) => {
      let editPosition = click.target.id - 1;
      toggleComplete(todoList, editPosition);
      renderList(todoList);
    })
  })

}

// Render Todo List
const renderList = (list) => {
  anchor.innerHTML = "";
  todoList.forEach( (element) => {
    let newTask = showNewListItem(element['task'], element['pos']);
    if (element.completed == true) {
      newTask.classList.add('strikethrough') 
      newTask.children[0].children[0].checked = true;
    }
    anchor.appendChild(newTask); 
  })
  startListeners();
}

renderList(todoList);

const addNewTaskToList = (list, task) => {
  let newTaskObject = {
    pos: list.length + 1,
    task: task
  }
  list.push(newTaskObject);
}

const toggleComplete = (list, position) => {
  let status = list[position].completed
  list[position].completed = !status
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  let newTitle = document.querySelector('#taskString')
  if (newTitle.value != "") {
    addNewTaskToList(todoList, newTitle.value)
    renderList(todoList)
    newTitle.value = "";
  }
})

