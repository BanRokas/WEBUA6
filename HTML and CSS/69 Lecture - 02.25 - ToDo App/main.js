document
  .querySelector('#addNewTask')
  .addEventListener('submit', e => {
    e.preventDefault();

    const inputValue = e.target.elements.task.value;

    const taskDiv = new ToDoTask(inputValue);

    document.querySelector('#tasks').appendChild(taskDiv);
    e.target.reset();
  });

class ToDoTask{
  constructor(taskName){
    this.taskName = taskName;
    return this.render();
  }
  render(){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('bi', 'bi-check-circle', 'hideDisplay');
    
    const heading = document.createElement('h4');
    heading.textContent = this.taskName;

    const editIcon = document.createElement('i');
    editIcon.classList.add('bi', 'bi-pencil-square');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bi', 'bi-trash-fill');

    taskDiv.append(checkIcon, heading, editIcon, deleteIcon);
    return taskDiv;
  }
}