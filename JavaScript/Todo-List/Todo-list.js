const todoList = [];
  // {
  //   name :'Learning',
  //   dueDate:'2025-04-04'
  // },
  // {
  //   name :'Cooking',
  //   dueDate:'2025-04-04'}
  

  function renderHTML(){
    
  let todoListHTML = '';

  todoList.forEach((item ,i)=>{
    todoListHTML +=  `<div>${item.name}</div>
                        <div>${item.dueDate}</div>
                        <button class="css-delete-btn" onclick = "
                        todoList.splice(${i},1);
                        renderHTML();
                        ">Delete</button>
                      `;
  })
   document.querySelector('.js-todo-para').innerHTML = todoListHTML;
}

  function addTodo(){

  const inputElement = document.querySelector('.js-todo-list');
  let todo = inputElement.value;

  const inputElementDate = document.querySelector('.js-todo-date');
  let todoDate = inputElementDate.value;

  todoList.push({
    name : todo,
    dueDate : todoDate
  });

  console.log(todoList);

  inputElement.value = '';
  inputElementDate.value = '';

  renderHTML();
 
  }


