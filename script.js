let myLibrary = [];

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

function addBookToLibrary(book) {
    return myLibrary.push(book);
};

addBookToLibrary(theHobbit);
addBookToLibrary(theAlchemist);
addBookToLibrary(blackMan);
addBookToLibrary(theIcePeople);



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

function createElementWithText(elementTag, className, textContent) {
    const element = document.createElement(elementTag);
    element.classList.add(className);
    element.textContent = textContent;
    return element;
}

createBookCard(theHobbit);

const addBook = document.querySelector(".add-book");
const removeBook = document.querySelector(".remove-book");

