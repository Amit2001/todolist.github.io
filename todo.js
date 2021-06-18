let todoinput = document.querySelector('.input');
let todobutton = document.querySelector('.todo_button');
let todolist = document.querySelector('.todo_list');

document.addEventListener("DOMContentLoaded",gettodos);
todobutton.addEventListener("click",addtodo);
todolist.addEventListener("click",deletecheck);



function addtodo(event){
    event.preventDefault();
    console.log("H1");
    let tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    let newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo_element');
    tododiv.appendChild(newtodo);
    
    //adding todo to local storage
    localstorageelements(todoinput.value);

    let tododone = document.createElement('button');
    tododone.innerHTML = '<i class="fas fa-check-circle"></i>';
    tododone.classList.add("done");
    tododiv.appendChild(tododone);

    let tododelete = document.createElement('button');
    tododelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    tododelete.classList.add("delete");
    tododiv.appendChild(tododelete);

    

    todolist.appendChild(tododiv);

    // to clear todo input value after adding it into the list
    todoinput.value = "";
    

};


function deletecheck(i){

    let item = i.target;

    if(item.classList[0] == "delete")
    {
        let tdo = item.parentElement;
        tdo.classList.add("fall"); //ADDING ANIMATION ON THE DELETE
        removepermanently(tdo);
        tdo.addEventListener("transitioned",function(){
            tdo.remove;
        });
        
    }

    if(item.classList[0] === "done")
    {
        let tdo = item.parentElement;
        tdo.classList.toggle("completed");
    }
};

function localstorageelements(todo){
       let todos;
       
       if(localStorage.getItem("todos") === null)
       {
           todos = [];
       }
       else{
           todos =JSON.parse(localStorage.getItem("todos"));
       }
       todos.push(todo);
       localStorage.setItem("todos",JSON.stringify(todos));
};

function gettodos(){
    let todos;

    if(localStorage.getItem("todos") === null)
       {
           todos = [];
       }
       else{
           todos =JSON.parse(localStorage.getItem("todos"));
       }

       todos.forEach(function(todo){

        let tododiv = document.createElement('div');
        tododiv.classList.add('todo');
    
        let newtodo = document.createElement('li');
        newtodo.innerText = todo;
        newtodo.classList.add('todo_element');
        tododiv.appendChild(newtodo);

    
        let tododone = document.createElement('button');
        tododone.innerHTML = '<i class="fas fa-check-circle"></i>';
        tododone.classList.add("done");
        tododiv.appendChild(tododone);
    
        let tododelete = document.createElement('button');
        tododelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
        tododelete.classList.add("delete");
        tododiv.appendChild(tododelete);
    
        todolist.appendChild(tododiv);
       });
};

function removepermanently(todo){
      let todos;
      if(localStorage.getItem("todos") === null)
      {
          todos = [];
      }
      else{
        todos = JSON.parse(localStorage.getItem("todos"));
      }
      console.log("hello");
      let todoindex = todo.children[0].innerText;
      todos.splice(todos.indexOf(todoindex) , 1); //splice is list method that will revome the element with index number as a first argument and second argument is the number of elements that user wants to remove.
      localStorage.setItem("todos",JSON.stringify(todos));

};

