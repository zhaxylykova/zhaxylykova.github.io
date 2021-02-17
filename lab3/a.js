let addButton = document.getElementById('adding');
let tasks = document.getElementById('toDoList');
let newTask = document.getElementById('new');

addButton.addEventListener('click', () => {
    
    let box = document.createElement('input');
    let label = document.createElement('label');
    let junk = document.createElement('img');
    let task = document.createElement('div');
    
    
    junk.src = 'junk.png';
    junk.style.width = '30px';
    box.type = "checkbox";
    label.htmlFor = "id";
    task.style.border = '1px solid grey';
    task.style.width = '600px';
    task.style.textAlign = 'left';
    task.style.marginLeft = '30px';
    task.style.fontFamily = 'sans-serif';
    task.style.fontSize = 'small';
    task.style.padding = '10px 10px 10px 10px';
    label.style.paddingLeft = '10px';
    box.style.float = 'left'; 
    junk.style.float = 'right';
    


    let taskValue = newTask.value;
    if(taskValue === ""){
        alert("you need to write a task");
    }
    else{
    label.appendChild(document.createTextNode(newTask.value));
    let br = document.createElement('br');
    task.appendChild(box);
    task.appendChild(label);
    task.appendChild(junk);
    tasks.appendChild(task);
    tasks.appendChild(br);
    newTask.value = "";
    }


    box.addEventListener('change', () => {
        if(box.checked){
            label.style.textDecoration = 'line-through';
        }
        else {
            label.style.textDecoration = 'none';
        }
    });



    junk.addEventListener('click', () =>{
        tasks.removeChild(task);
        tasks.removeChild(br);
    })
});