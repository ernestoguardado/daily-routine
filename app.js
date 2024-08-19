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
    completeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="feather feather-check">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`;

    const editButton = document.createElement('button');
    editButton.textContent = "Editar";
    const deleteButtton = document.createElement('button');
    deleteButtton.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6l-2 14H7L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M9 6V4h6v2"></path>
</svg>`;
    deleteButtton.addEventListener('click', () => {
        taskList.removeChild(containerTaskItem);
    })

    const containerButtons = document.createElement('div')
    containerButtons.classList.add("containerButtons")

    const containerTaskItem = document.createElement('div')
    containerTaskItem.classList.add("containerTaskItem");
    
    containerButtons.appendChild(completeButton);
    containerButtons.appendChild(editButton);
    containerButtons.appendChild(deleteButtton);
    containerTaskItem.appendChild(taskItem);
    containerTaskItem.appendChild(containerButtons);
    taskList.appendChild(containerTaskItem);
    

    inputTask.value = '';
}