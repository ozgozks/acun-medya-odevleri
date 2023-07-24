// const todoInput = document.querySelector('[name="Todo"]');
// const todoList = document.querySelector('.todoList');

// document.querySelector('#todoButton').addEventListener('click', function() {
//     let todoVal = todoInput.value.trim();
//     if(todoVal === '') { return; }

//     todoList.innerHTML += `<li>${todoVal}</li>`;
//     todoInput.value = '';
// })

// document.querySelector('.todoList li')
//     .addEventListener('contextmenu', rightClickActions);

// function rightClickActions(e) {
//     e.preventDefault();
// }

// document.querySelector('#link')
//     .addEventListener('click', function(e) {
//         e.preventDefault();
//         console.log('hayır gidemezsin!!!');
//     });

// document.forms["TodoForm"]["Todo"].value

const todoListElement = document.querySelector('.todoList')
const todoFormElement = document.querySelector('#TodoForm');
const todoInputElement = document.querySelector('[name="Todo"]');

// function createTodoListHtml(todo) {
//     return `<li><input type="checkbox" name="" id=""> <label for="">${todo}</label> <button>X</button></li>`;
// }

// fat arrow function
// arrow function
// const createTodoListHtml = todo => `<li> <label><input type="checkbox"> ${todo}</label> <button class="removeTodoButton">X</button></li>`;

const createTodoListHtml = todo => {
    let todoItem = document.createElement('li');
    let todoRemoveBtn = document.createElement('button');
    todoRemoveBtn.innerText = 'X';

    let label = document.createElement('label')
    label.innerText = todo;

    let changeInput = document.createElement('input');
    changeInput.type = 'text';
    changeInput.value = todo;

    changeInput.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
            this.previousSibling.innerText = this.value;
            this.parentElement.classList.remove('onEdit');
        }
    });

    label.addEventListener('dblclick', function() {
        this.parentElement.classList.add('onEdit');
        this.nextSibling.focus();
        this.nextSibling.select();
        // this.previousSibling.checked = this.previousSibling.checked ? false : true;
    });

    todoRemoveBtn.addEventListener('click', function() {
        // this.parentElement.remove();
        todoItem.remove();
    });

    todoItem.innerHTML = `<input type="checkbox">`;
    todoItem.appendChild(label);
    todoItem.appendChild(changeInput);
    todoItem.appendChild(todoRemoveBtn);

    return todoItem;
};

todoFormElement.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // todoListElement.innerHTML += createTodoListHtml(todoInputElement.value);
    todoListElement.appendChild(createTodoListHtml(todoInputElement.value));
    todoInputElement.value = '';

    //bindBtnClickEvents();
});

// function bindBtnClickEvents() {
//     document.querySelectorAll('.removeTodoButton').forEach(
//         btn => btn.addEventListener('click', () =>  {
//             console.log('todo remove');
//             btn.parentElement.remove();
//         })
//     );
// }

//bindBtnClickEvents();

// todoListElement.addEventListener('click', function(e) {
//     const clickedElement = e.target;

//     // clickedElement.classList.contains('removeTodoButton')
//     if(clickedElement.className === 'removeTodoButton') {
//         clickedElement.parentElement.remove();
//     }
// });