// DOM MANIPULATION EXERCISE

// Exercise 1: list items with dom
let ul = document.querySelector('ul');
function addBands(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }
}

let favoriteBands = ['King Gnu', 'Flumpool', 'Radwinmps'];
//addBands(favoriteBands)
//
//
//Exercise 2: add a table
function addMultTable(rows, cols) {
  // removing the els from the function before
  ul.remove();

  // changing the title
  let title = document.getElementById('title');
  title.innerHTML = 'Creating a Table';

  // creating a table
  tbl = document.createElement('table');

  // Looping to create a row with columns
  for (let i = 0; i < rows; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < cols; j++) {
      let td = tr.insertCell();
      td.appendChild(document.createTextNode('EMPTY'));
      td.style.border = '2px solid green';
    }
  }
  body.appendChild(tbl);
}
addMultTable(4, 8);

// Creating toggle button
const button = document.createElement('button');
button.innerHTML = 'TOGGLE';
button.style.margin = ' 10px';
body.appendChild(button);

function toggle() {
  const table = document.querySelector('table');
  if (table.style.display === 'none') {
    table.style.display = 'block';
  } else {
    table.style.display = 'none';
  }
}
button.addEventListener('click', toggle);
