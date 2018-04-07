let addItemBtn = document.getElementById('add_item');

addItemBtn.addEventListener('click', function() {
  console.log('clicked');

  let val = document.getElementById('input_field').value;

  if (val) {
    addItemTodo(val); // adds item to list
  }
});

function addItemTodo(text) {
  
  let list = document.getElementById('todo');
  let item = document.createElement('li');
  
  let itemSpan = document.createElement('span');
  itemSpan.classList.add('item');
  itemSpan.innerText = text;
  
  item.appendChild(itemSpan);
  list.appendChild(item);
  
  let buttons = document.createElement('div');
  buttons.classList.add('option_btns');
  
  let complete = document.createElement('button');
  complete.classList.add('complete_item');
  
  let edit = document.createElement('button');
  edit.classList.add('edit_item');
  
  let remove = document.createElement('button');
  remove.classList.add('delete_item');
  
  buttons.appendChild(complete);
  buttons.appendChild(edit);
  buttons.appendChild(remove);

  item.appendChild(buttons);
}