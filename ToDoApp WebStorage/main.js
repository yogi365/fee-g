const todoTaskArray = localStorage["todoTask"] ? JSON.parse(localStorage["todoTask"]) : []

window.onload = function(){
    todoTaskArray.forEach(createTaskList)
}

document.querySelector('#input-todo').addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){
        const taskObject = {
            id:Date.now(),
            task:e.target.value,
            completed:false
        }
        createTaskList(taskObject);
        todoTaskArray.push(taskObject);
        updateLocalStorage(todoTaskArray);
    }
})

function createTaskList(taskObject){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText=taskObject.task;
    span.className = taskObject.completed?"completed":"";    
    const deleteButton = document.createElement('button');
    deleteButton.innerText="X";
    deleteButton.addEventListener('click',()=>{
        let index = todoTaskArray.findIndex(task=>{
            if(task.id==taskObject.id){
                return true;
            }

            return false;
        })

        todoTaskArray.splice(index,1);
        updateLocalStorage(todoTaskArray);
        span.remove();
    });

    const checkBox = document.createElement('input');
    checkBox.type="checkbox";
    checkBox.checked=taskObject.completed;

    checkBox.addEventListener('change',(e)=>{        
        span.classList.toggle('completed');
        taskObject.completed = !taskObject.completed;
        updateLocalStorage(todoTaskArray);
    })

    li.append(span,checkBox,deleteButton);
    document.querySelector('.todo-list').appendChild(li);
}

function updateLocalStorage(todoTaskArray){
    localStorage['todoTask']=JSON.stringify(todoTaskArray);
}

