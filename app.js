const inputTask = document.getElementById('inputTask');
const buttonAddTask = document.getElementById('buttonAddTask');
const taskList = document.getElementById('taskList');

buttonAddTask.addEventListener('click', task);

function task() {
    taskText = inputTask.value.trim();

    if (taskText === '') {
        alert('add a new task please');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.classList.add('taskItem');

    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    
    const deleteButtton = document.createElement('button');
    deleteButtton.textContent = "Detele";
    deleteButtton.addEventListener('click', () => {
        taskList.removeChild(containerTaskItem);
    })

    const containerTaskItem = document.createElement('div')
    
    containerTaskItem.appendChild(taskItem);
    containerTaskItem.appendChild(completeButton);
    containerTaskItem.appendChild(deleteButtton);
    taskList.appendChild(containerTaskItem);
    

    inputTask.value = '';
}