
let TodoList;

loadFormLocalstorage();

function loadFormLocalstorage(){

  TodoList = JSON.parse(localStorage.getItem('TodoList'));


  if (!TodoList) {

 TodoList = [{
  name: 'make money',
  dueDate: '2022-6-11'
  },
  {
    name: 'make money',
    dueDate: '2022-6-12'
  }
  ];
}
  
}
function saveToLocastorage(){
  localStorage.setItem('TodoList', JSON.stringify(TodoList));
}
   


  renderTodoList();
  
  function renderTodoList() {
  
    let todoListHtml = '';
  
  TodoList.forEach(function(todoObject, index){
  
    const { name, dueDate } = todoObject
  
    const html = `
    <div>${name}</div>
     <div>${dueDate}</div>
    <button class="delect-todo-button js-delete-button">delete</button>`;
  
    todoListHtml += html;
  
  
  });
  
    document.querySelector('.js-todo').innerHTML = todoListHtml;
  
    document.querySelectorAll('.js-delete-button').forEach((deletebutton, index) => {
      deletebutton.addEventListener('click', () => {
       TodoList.splice(index, 1);
       saveToLocastorage();
      renderTodoList();
      });
    })
  
  }
  
  document.querySelector('.js-add-button').addEventListener('click', () => {
    
    addTodo();
  
  })
  
  function addTodo() {

    let styleText = document.querySelector('.msg');

    
    const getElement = document.querySelector('.js-input-name');
  
    let name = getElement.value;
  
    const getElementDate = document.querySelector('.js-input-date');
  
    let dueDate  = getElementDate.value;

  if (name == "" || dueDate == ""){

    styleText.style.display='block';
    

    let sometext = document.querySelector('.js-massage');

    sometext.innerHTML = 'the space is empty!!';


    setTimeout(function() {  
    
      
      sometext.style.display='none';

     }, 2000);
 
   sometext.style.display='block';


  } else{
    TodoList.push({
      //name: name,
      //dueDate: dueDate
      name,
      dueDate
    });

  }
    
  
    getElement.value = '';

    saveToLocastorage();

    renderTodoList();

  
  }