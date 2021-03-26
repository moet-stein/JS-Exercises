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
addBands(favoriteBands);
//
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
  var body = document.body,
    tbl = document.createElement('table');
  // styling <table>
  tbl.style.width = '100px';
  tbl.style.border = '1px solid orange';

  // Looping to create a row with columns
  for (var i = 0; i < rows; i++) {
    var tr = tbl.insertRow();
    for (var j = 0; j < cols; j++) {
      var td = tr.insertCell();
      td.appendChild(document.createTextNode('EMPTY'));
      td.style.border = '1px solid green';
    }
  }
  body.appendChild(tbl);
}
addMultTable(4, 8);
