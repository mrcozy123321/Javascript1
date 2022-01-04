let todos = [
  {
    id: '1',
    title: 'Todo One',
    completed: false
  },
  {
    id: '2',
    title: 'Todo Two',
    completed: false
  },
  {
    id: '3',
    title: 'Todo Three',
    completed: false
  }
]

const output = document.querySelector('#todos');
const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');

const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    output.innerHTML += `
      <div  id="${todo.id}" class="d-flex justify-content-between align-items-center border bg-white p-2 mb-2">
        <p class="m-0 h4">${todo.title}</p>
        <button type="button" class="btn btn-danger btn-sm">X</button>
      </div>
    `
  })
}

listTodos();


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value !== '') {
    input.classList.remove('is-invalid');
    const todo = {
      id: Date.now().toString(),
      title: input.value,
      completed: false
    }
    todos.push(todo);
    listTodos();
    input.value = '';
  }
  else {
    input.classList.add('is-invalid');
  }

})

output.addEventListener('click', e => {
  // console.log(e.target.parentNode.id)
  if(e.target.type === 'button') {
    todos = todos.filter(todo => todo.id !== e.target.parentNode.id);
    listTodos();
  }
})