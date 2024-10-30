const express = require("express");
const app = express();
app.use(express.json());

let food_array = ["beans", "rice", "yam", "potato", "plantain"];
let num_array = [1, 2, 3, 4, 5, 6, 7, 8];

// GET all food items
app.get("/api/foods", (req, res) => {
    res.json(food_array);
});

// GET food item by index
app.get("/api/foods/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < food_array.length) {
        res.json(food_array[index]);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// POST to add new food item
app.post("/api/foods", (req, res) => {
    const newItem = req.body.item;
    if (newItem) {
        food_array.push(newItem);
        res.status(201).json({ message: "Item added", food_array });
    } else {
        res.status(400).json({ message: "Invalid item" });
    }
});

// PUT to update food item by index
app.put("/api/foods/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const newItem = req.body.item;
    if (index >= 0 && index < food_array.length && newItem) {
        food_array[index] = newItem;
        res.json({ message: "Item updated", food_array });
    } else {
        res.status(400).json({ message: "Invalid index or item" });
    }
});

// DELETE food item by index
app.delete("/api/foods/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < food_array.length) {
        food_array.splice(index, 1);
        res.json({ message: "Item deleted", food_array });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// GET sum of num_array
app.get("/api/sum", (req, res) => {
    const sum = num_array.reduce((acc, val) => acc + val, 0);
    res.json({ sum });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


/*
GET http://localhost:3000/api/foods - View all items in food_array.
POST http://localhost:3000/api/foods - Add a new item with JSON { "item": "your_item" }.
PUT http://localhost:3000/api/foods/:index - Update item at specified index.
DELETE http://localhost:3000/api/foods/:index - Remove item at specified index.
GET http://localhost:3000/api/sum - View the sum of num_array.



Assignment: Build a Simple Book Collection API
You’ll create a small REST API for managing a collection of books. Each book will have the following properties:

title (string)
author (string)
year (integer)
You'll set up an Express.js server with endpoints to:

View all books
View a specific book by index
Add a new book
Update an existing book’s details
Delete a book by index*/