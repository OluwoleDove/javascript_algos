const express = require("express");
const app = express();
app.use(express.json());

let book_array = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 }
];

// Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// GET all books
app.get("/api/books", (req, res) => {
    res.json(book_array);
 });
 
 // GET book by index
 app.get("/api/books/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < book_array.length) {
        res.json(book_array[index]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
 });
 
 // POST to add new book
 app.post("/api/books", (req, res) => {
    const newBook = req.body;
    if (newBook.title && newBook.author && newBook.year) {
        book_array.push(newBook);
        res.status(201).json({ message: "Book added", book_array });
    } else {
        res.status(400).json({ message: "Invalid book details" });
    }
 });
 
 // PUT to update book by index
 app.put("/api/books/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const updatedBook = req.body;
    if (index >= 0 && index < book_array.length && updatedBook.title && updatedBook.author && updatedBook.year) {
        book_array[index] = updatedBook;
        res.json({ message: "Book updated", book_array });
    } else {
        res.status(400).json({ message: "Invalid index or book details" });
    }
 });
 
 // DELETE book by index
 app.delete("/api/books/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < book_array.length) {
        book_array.splice(index, 1);
        res.json({ message: "Book deleted", book_array });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
 });

 
 /*
 {
  "title": "New Book",
  "author": "Author Name",
  "year": 2023
}
*/