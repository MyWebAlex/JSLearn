'use strict';

let books = document.getElementsByClassName('books')[0];
let book = document.getElementsByClassName('book');

books.appendChild(book[0]);
books.appendChild(book[3]);
books.appendChild(book[2]);
books.appendChild(book[2]);
books.appendChild(book[1]);

document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

let bookTitle = book[2].getElementsByTagName('a')[0];
bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

let ad = document.getElementsByClassName('adv')[0];

document.body.removeChild(ad);

let list = book[1].getElementsByTagName('ul')[0];
let lis = list.getElementsByTagName('li');

list.appendChild(lis[4]);
list.appendChild(lis[4]);
list.appendChild(lis[5]);
list.appendChild(lis[6]);
list.appendChild(lis[2]);
list.appendChild(lis[5]);

list = book[4].getElementsByTagName('ul')[0];
lis = list.getElementsByTagName('li');
list.appendChild(lis[3]);
list.appendChild(lis[3]);
list.appendChild(lis[2]);
list.appendChild(lis[3]);
list.appendChild(lis[3]);
list.appendChild(lis[2]);
list.appendChild(lis[2]);
list.appendChild(lis[3]);

list = book[5].getElementsByTagName('ul')[0];
lis = list.getElementsByTagName('li');
let cloneLis = lis[0].cloneNode();
cloneLis.textContent = 'Глава 8: За пределами ES6';
list.insertBefore(cloneLis, lis[9]);