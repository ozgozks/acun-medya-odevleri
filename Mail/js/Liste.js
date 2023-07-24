const todoInput = document.querySelector('[name=Todo]');
const todoList = document.querySelector('.todoList');

document.querySelector('#todoButton').addEventListener('click',function(){
    alert(document.querySelector('[name="Todo"]').value);
    let todoVal = todoInput.value.trim();
    if(todoVal===''){return;}


    todoList.innerHTML +='<li> $(todoVal)</li>';
    todoInput.value = ''; 
})
document.querySelector('.todoList li ')
.addEventListener();



const todoListElement = document.querySelector('todoList')
const todoformElement = document.querySelector('todoForm');
const todoInputElement = document.querySelector('name="todo"]');

//const createTodoListHtml = todo => <li><label> <input type ="checkbox"> ${todo}</label>
//<button class="removeTodoButton">X</button></li>



//todoformElement.addEventListener('submit'. function (e) {
    //e.preventDefault();
    //todoListElement.innerHTML + = createTodoListHtml(todoInputElement.value);
    //todoInputElement.value = '';

  //  bindBtnClickEvents();
//});

//function bindBtnClickEvents(){
    //for ( const btn of  document.querySelectorAll('.removeTodoButtom')){
        //btn.addEventListener('click',function(){
      //      this.parentElement.remove();
    //    });1
  //  }
//}

todoListElement.addEventListener('click',function(e){
    //console.log(e.target);
    if(clickendElement.classList.contains('removeTodoButton')){
    clickendElement.parentElement.remove();
    }
});