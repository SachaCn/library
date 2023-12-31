const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.changeReadStatus = function() {
    if(this.read == "Read") {
        this.read = "Not read";
    } else if (this.read == "Not read") {
        this.read = "Read";
    }
};

const mainContainer = document.querySelector(".cards-container");


mainContainer.addEventListener("click", (e) => {
    const readStatus= document.querySelector(".read-status");

    if(!e.target.classList.contains("read-status")) return;

    let domIndex = e.target.parentNode.getAttribute("data-index");
    myLibrary[domIndex].changeReadStatus();
    e.target.textContent = myLibrary[domIndex].read;
});

const theHobbit = new Book("Hobbit", "J.R.R Tolkien", "295", "Not read");
const theAlchemist = new Book("the Alchemist", "Paulo Coelho", "192", "Read");
const blackMan = new Book("Black man", "Richard Morgan", "571", "Read");
const theIcePeople = new Book("The ice people", "René Barjavel", "317", "Not read");
const Outsphere = new Book("Outsphere", "Guy-Roger Duvert", "317", "Not read");

function addBookToLibrary(book) {
    return myLibrary.push(book);
};

addBookToLibrary(theHobbit);
addBookToLibrary(theAlchemist);
addBookToLibrary(blackMan);
addBookToLibrary(theIcePeople);
addBookToLibrary(Outsphere);


function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", `${myLibrary.indexOf(book)}`);
    mainContainer.appendChild(card);
    card.insertAdjacentHTML(
        "afterbegin",
        `<img class="remove-card" src="image/cross1.svg">
                                            <h4 class="title">${book.title}</h4>
                                            <p class="author">${book.author}</p>
                                            <p class="pages">${book.pages} pages</p>
                                            <p class="read-status">${book.read}</p>`
    );
}



myLibrary.forEach((books) => createBookCard(books));

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
    for (item of formData) {
        arr.push(item[1]);
    }
    const newBook = new Book(arr[0], arr[1], arr[2], arr[3]);
    addBookToLibrary(newBook);
    createBookCard(newBook);
    form.reset();
    closeForm();
});

// Removing book card plus update myLibrary and data-index
const removeCard = document.querySelectorAll(".remove-card");

function removeBook(e) {
    let target = e.target.parentNode;
    let targetIndex = target.getAttribute('data-index');
    target.remove();
    myLibrary.splice(targetIndex, 1);
    
    const cards = document.querySelectorAll(".card");
    
    // Update data-index value after removing an element
    cards.forEach(element => {
        const currentIndex = parseInt(element.getAttribute('data-index'));
        if (currentIndex > targetIndex) {
            console.log(currentIndex);
            element.setAttribute('data-index', currentIndex - 1);
        }
    });
};

mainContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove-card")) {
        removeBook(e);
    }
});
