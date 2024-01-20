let items = [];
const todoContainer = document.querySelector(".todoContainer");
const taskContainer = document.querySelector(".taskContainer");
const placeholder = document.querySelector(".placeholder"); // "placeholder" for when there's no tasks on the screen

function addToDo(){

    const check = document.createElement("button");
    const task = document.createElement("div");
    const taskText = document.createElement("span");
    const completeBtn = document.createElement("button");
    const btnContainer = document.createElement("div");
    const add = document.getElementById("add").value;

    //creating array of objects properties
    items.push({text: add, completed: false});

    //adding classes, style, text content to buttons, text and div containers
    task.classList.add("task");
    task.style.top = "20%";
    taskText.textContent = add;
    taskText.style.display = "inline-block";

    check.classList.add("check");
    check.textContent = '✖';

    completeBtn.classList.add("completeBtn");
    completeBtn.textContent = '✔';

    btnContainer.classList.add("buttons-container");
    btnContainer.appendChild(check);
    btnContainer.appendChild(completeBtn);

    taskContainer.append(task);
    task.appendChild(taskText);
    task.appendChild(btnContainer);

    check.onclick = () => {
        taskContainer.removeChild(task);

        // check to see if the taskContainer is empty so it can show the placeholder
        if(taskContainer.children.length === 0){
            todoContainer.appendChild(placeholder);
        }
    };

    completeBtn.onclick = () => {
        const currentItem = items.find(item => item.text === add);

        // check if button has been clicked once before to remove the decoration from the text
        if(currentItem){
            if(currentItem.completed){
                taskText.style.textDecoration = "none";
                currentItem.completed = false;
            }
            else{
                taskText.style.textDecoration = "line-through";
                currentItem.completed = true;
            }
        }
    };

    todoContainer.removeChild(placeholder);
    todoContainer.scrollTop = todoContainer.scrollHeight;
}