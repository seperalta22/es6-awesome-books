import BookList from './modules/bookList.js';

const booksContainer = document.querySelector('.books');
const form = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');

const bookList = new BookList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    author: author.value,
  };
  bookList.addBook(book);
});

booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    bookList.removeBook(
      e.target.previousElementSibling.previousElementSibling.textContent,
    );
  }
});

window.addEventListener('DOMContentLoaded', () => {
  bookList.displayBooks();
});
