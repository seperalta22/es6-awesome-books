import BookList from './modules/bookList.js';
import {
  displayAddNewSection,
  displayContactSection,
  displayListSection,
} from './modules/displayPage.js';
import dateTime from './modules/date.js';

const booksContainer = document.querySelector('.books');
const form = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');

const bookList = new BookList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = {
    id: Date.now(),
    title: title.value,
    author: author.value,
  };
  bookList.addBook(book);
});

booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
		bookList.removeBook(parseInt(e.target.dataset.id)); //eslint-disable-line
    e.target.parentElement.remove();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  bookList.displayBooks();
});

displayListSection();
displayAddNewSection();
displayContactSection();
dateTime();
