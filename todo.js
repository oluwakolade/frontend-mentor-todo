const todoList = document.querySelector(".todo-list");
const noOfItems = document.querySelector(".no-of-items");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const todoBtn = document.createElement("button");
const clearCompleted = document.querySelector(".clear-completed");



//event listeners

button.addEventListener('click', addTodo);
all.addEventListener('click', allSelected);
active.addEventListener('click', activeSelected);
completed.addEventListener('click', completeSelected);


//functions

 function addTodo(event){



    event.preventDefault();
const todo = document.createElement("div");
const todoItem = document.createElement("li");
const deleteIcon = document.createElement("img");
deleteIcon.src = 'images/icon-cross.svg';

//add classes
todo.classList.add("todo");
todoItem.classList.add('todo-item');
deleteIcon.classList.add('delete-icon');

//addtodo
todoItem.innerText = todoInput.value;
//append classes
todoList.appendChild(todo);
todo.appendChild(todoItem);
todo.appendChild(deleteIcon);
todoInput.value =" ";


todoItem.addEventListener('click', function(){
todoItem.classList.toggle("completed");
});

deleteIcon.addEventListener('click', function(){
todo.remove();
});

    clearCompleted.addEventListener('click', function(){
        if(todoItem.classList.contains("completed")){
            todo.remove();

        };
    });


}

function allSelected(e){
all.classList.toggle("selected");
if(all.classList.contains('selected')){
    active.classList.remove("selected");
    completed.classList.remove("selected");
};

}

function activeSelected(e){
    active.classList.toggle("selected");
    if(active.classList.contains('selected')){
        all.classList.remove("selected");
        completed.classList.remove("selected");
    }

    if(active.classList.contains('selected') && todoItem.classList.contains("completed")){
        todo.remove();

    }

    };

 

    function completeSelected(e){
        completed.classList.toggle("selected");
        if(completed.classList.contains('selected')){
            all.classList.remove("selected");
            active.classList.remove("selected");
        };

        
    if(completed.classList.contains('selected') && !todoItem.classList.contains("completed")){

        

    }
    }





 
