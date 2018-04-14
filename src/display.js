const showNewListItem = task => {
  const div = document.createElement('div')
  div.innerHTML = `
    <h2>
      <input type='checkbox' class='taskCheckBox'/>
      ${task}
    </h2>
  `
  return div
}

export default showNewListItem;
