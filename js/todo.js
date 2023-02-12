const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input"); // const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");


const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(event) {
  const checked = event.target.parentElement;
  checked.classList.toggle('checkToDo');
}


function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText=newTodo.text;
  const delButton=document.createElement("button");
  delButton.id="delBtn";
  delButton.classList.add("fa-regular", "fa-square-minus");
  delButton.addEventListener("click",deleteToDo);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click",checkToDo);
  const editButton=document.createElement("button");
  editButton.id="editBtn";
  editButton.classList.add("fa-regular", "fa-pen-to-square");
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delButton);
  li.appendChild(editButton);
  toDoList.prepend(li); // toDoList.appendChild(li);
  
}

setTimeout(()=>{
  let spanText=toDoList.getElementsByTagName("li");
  for(let i=0; i<spanText.length; i++){
      let span=spanText[i].querySelector("span");
      const edit = spanText[i].querySelector("#editBtn");
      let spanState = false;
      edit.addEventListener("click", ()=>{
        let text = span.innerText;
            span.innerText=text;
            let range, selection;
            if (document.createRange) {
              //Firefox, Chrome, Opera, Safari, IE 9+
              range = document.createRange();
              range.selectNodeContents(span);
              range.collapse(false);
              selection = window.getSelection();
              selection.removeAllRanges(); 
              selection.addRange(range);
            } else if (document.selection) {
              //IE 8 and lower
              range = document.body.createTextRange();
              range.moveToElementText(span);
              range.collapse(false);
              range.select();
            }
            if (!spanState){
              spanState = true;
              edit.style.color="rgba(255,255,255,0.5)"
              span.style.display="inline-block";
            } else {
              spanState = false;
              edit.style.color="#fff"
              span.style.display="inline";
            }
            span.contentEditable=spanState;
            span.focus();

          });

  }
},10)


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj={
    text:newTodo,
    id:Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos=JSON.parse(savedToDos);
  toDos=parsedToDos;
  parsedToDos.forEach(paintToDo);
}