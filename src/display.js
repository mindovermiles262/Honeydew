const showNewListItem = (task, pos) => {
  const div = document.createElement('div')
  div.innerHTML = `
    <h2>
      <input type='checkbox' class='taskCheckBox' id=${pos} />
      ${task}
    </h2>
  `
  return div
}

export default showNewListItem;
