const booksContainer = document.querySelector('.books');
export default class BookList {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (localStorage.getItem('localData') === null) {
      localStorage.setItem('localData', JSON.stringify([]));
      this.books.push({
        ...book,
        id: Date.now(),
      });
      localStorage.setItem('localData', JSON.stringify(this.books));
      window.location = window.location.pathname;
    } else {
      this.books = JSON.parse(localStorage.getItem('localData'));
      this.books.push({
        ...book,
        id: Date.now(),
      });
      localStorage.setItem('localData', JSON.stringify(this.books));
      window.location = window.location.pathname;
    }
  }

  removeBook(id) {
    this.books = JSON.parse(localStorage.getItem('localData'));
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem('localData', JSON.stringify(this.books));
    window.location = window.location.pathname;
  }

  displayBooks() {
    this.books = JSON.parse(localStorage.getItem('localData'));
    if (this.books) {
      this.books.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
              <h3 class="title" >${book.title}</h3>
              <p>by ${book.author}</p>
              <button class="remove" data-id="${book.id}">Remove</button>
              `;
        booksContainer.appendChild(div);
      });
    }
  }
}
