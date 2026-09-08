const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    isAvailable: true,

    borrowBook: function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Book borrowed successfully.");
        } else {
            console.log("Book is already borrowed.");
        }
    },

    returnBook: function () {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("Book returned successfully.");
        } else {
            console.log("Book is already available.");
        }
    },

    displayDetails: function () {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year Published: ${this.yearPublished}`);
        console.log(`Available: ${this.isAvailable ? "Yes" : "No"}`);
    }
};

console.log("Initial Book Details:");
book.displayDetails();

console.log("\nBorrowing Book...");
book.borrowBook();
book.displayDetails();

console.log("\nReturning Book...");
book.returnBook();
book.displayDetails();

console.log("\nAdding new property 'genre'...");
book.genre = "Classic Fiction";
console.log("Updated Book Object:", book);

console.log("\nUpdating 'yearPublished'...");
book.yearPublished = 1926;
console.log("Updated Book Object:", book);

console.log("\nDeleting 'author' property...");
delete book.author;
console.log("Updated Book Object:", book);