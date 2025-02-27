class ToDoTask{
  constructor({ id, name, isCompleted }){
    this.id = id;
    this.name = name;
    this.isCompleted = isCompleted;
    return this.render();
  }
  render(){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('bi', 'bi-check-circle', 'hideDisplay');
    
    const heading = document.createElement('h4');
    heading.textContent = this.name;

    const editIcon = document.createElement('i');
    editIcon.classList.add('bi', 'bi-pencil-square');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bi', 'bi-trash-fill');

    taskDiv.append(checkIcon, heading, editIcon, deleteIcon);
    return taskDiv;
  }
}

const localStorageTasks = JSON.parse(localStorage.getItem('toDoData'));
localStorageTasks.forEach(task => {
  const taskDiv = new ToDoTask(task);
  document.querySelector('#tasks').appendChild(taskDiv);
});

document
  .querySelector('#addNewTask')
  .addEventListener('submit', e => {
    e.preventDefault();

    const inputValue = e.target.elements.task.value;
    const task = {
      id: Number(new Date()).toString(),
      name: inputValue,
      isCompleted: false
    };
    const taskDiv = new ToDoTask(task);

    const localStorageData = JSON.parse(localStorage.getItem('toDoData')) || [];
    localStorageData.push(task);
    localStorage.setItem('toDoData', JSON.stringify(localStorageData));

    document.querySelector('#tasks').appendChild(taskDiv);
    e.target.reset();
  });