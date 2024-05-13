const form = document.getElementById("form");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let hasRead = document.getElementById("hasRead");
    
    if (title.value == "" || author.value == "" || pages == "") {
        // User didn't enter any values
        alert("User didn't enter in value fields!");
        form.style.display = "none";
    } else {
        // Create elements on the page from here
    }
})

function displayForm() {
    form.style.display = "block";
}

function addBookToLibrary() {
   
}

