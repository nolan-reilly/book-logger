const form = document.getElementById("form");

const myLibrary = [{title: "Book 1", author: "John Doe", pages: "10", read: false},
                   {title: "Book 1", author: "John Doe", pages: "10", read: false},
                   {title: "Book 1", author: "John Doe", pages: "10", read: false},
                  ];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Adds a book to the Library
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get all the form variables when User submits
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let hasReadValue = document.getElementById("hasRead").value;
    
    // Check if the User entered the proper data
    if (title == "" || author == "" || pages == "") {
        alert("User didn't enter in value fields!");
        form.reset();
        form.style.display = "none";
    } else {
        // Create variable to represent the radio button chosen
        let hasRead = false;
        if (hasReadValue == "hasRead") {
            hasRead = true;
        }

        // Create an book object
        const book = new Book(title, author, pages, hasRead);
        myLibrary.push(book);

        form.reset();
        form.style.display = "none";  // Don't show the form after submitting
        displayLibrary();
    }
})

function displayForm() {
    form.style.display = "block";
}

function resurrectLibrary() {
    const removeLibrary = document.getElementById("library");
    removeLibrary.remove();


    let createLibrary = document.createElement("div");
    createLibrary.setAttribute("id", "library");
    createLibrary.setAttribute("class", "grid");

    document.body.appendChild(createLibrary);
}

function displayLibrary() {
    resurrectLibrary();

    const library = document.getElementById("library");

    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let headerRow = document.createElement("div");
        headerRow.setAttribute("class", "headerRow")

        const title = document.createElement("h2");
        title.textContent = myLibrary[i].title;

        const author = document.createElement("h3");
        author.textContent = myLibrary[i].author;

        const pages = document.createElement("p");
        pages.textContent = myLibrary[i].pages + " pages";

        let footerRow = document.createElement("div");
        footerRow.setAttribute("class", "footerRow");

        let hasRead = document.createElement("p");

        if (myLibrary[i].read) {
            hasRead.textContent = "Finished";
        } else {
            hasRead.textContent = "Haven't Finished";
        }

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.setAttribute("onclick", `deleteBook(${i})`);
        deleteButton.setAttribute("class", "delete-btn");

        let toggleButton = document.createElement("button");
        toggleButton.setAttribute("class", "toggle-btn");
        toggleButton.setAttribute("onclick", `toggleReadStatus(${i})`)

        if (myLibrary[i].read) {
            toggleButton.textContent = "X";
        } else {
            toggleButton.innerHTML = "&#10004;";
        }

        headerRow.appendChild(title);
        headerRow.appendChild(deleteButton);

        footerRow.appendChild(hasRead);
        footerRow.appendChild(toggleButton);

        card.appendChild(headerRow);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(footerRow);
        library.appendChild(card);
    }
}

function deleteBook(bookIndex) {
    console.log(bookIndex);
    myLibrary.splice(bookIndex, 1);
    displayLibrary();
}

function toggleReadStatus(bookIndex) {
    if (myLibrary[bookIndex].read) {
        myLibrary[bookIndex].read = false;
    } else {
        myLibrary[bookIndex].read = true;
    }

    displayLibrary();
}

displayLibrary();