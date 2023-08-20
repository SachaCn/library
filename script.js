const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const theHobbit = new Book("Hobbit", "J.R.R Tolkien", "295", "not read yet");
const theAlchemist = new Book("the Alchemist", "Paulo Coelho", "192", "read");
const blackMan = new Book("Black man", "Richard Morgan", "571", "read");
const theIcePeople = new Book("The ice people", "René Barjavel", "317", "not read yet");
const Outsphere = new Book("Outsphere", "Guy-Roger Duvert", "317", "not read yet");

function addBookToLibrary(book) {
    return myLibrary.push(book);
};

addBookToLibrary(theHobbit);
addBookToLibrary(theAlchemist);
addBookToLibrary(blackMan);
addBookToLibrary(theIcePeople);
addBookToLibrary(Outsphere);

function createElementWithText(elementTag, className, textContent) {
    const element = document.createElement(elementTag);
    element.classList.add(className);
    element.textContent = textContent;
    return element;
}

function createBookCard(book) {
    const main = document.querySelector(".cards-container");
    const div = document.createElement("div");
    const title = createElementWithText("h4", "title", book.title);
    const author = createElementWithText("p", "author", book.author);
    const pages = createElementWithText("p", "pages", `${book.pages} pages`);
    const readStatus = createElementWithText("p", "read-status", book.read);

    div.classList.add("card");
    main.appendChild(div);

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(readStatus);
}

myLibrary.forEach(books => createBookCard(books));

/* Open form */
const addBook = document.querySelector(".add-book");
const formContainer = document.querySelector(".form-container");
const cross = document.querySelector(".cross");

function openForm() {
    formContainer.classList.add("show-form");
}

function closeForm() {
    formContainer.classList.remove("show-form");
}

addBook.addEventListener("click", openForm);
cross.addEventListener("click", closeForm);


/* Retrieve form data */
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    let arr = [];
    for(item of formData) {
        arr.push(item[1]);
    }
    const newBook = new Book(arr[0], arr[1], arr[2], arr[3]);
    addBookToLibrary(newBook);
    createBookCard(newBook);
    form.reset();
    closeForm();
});

