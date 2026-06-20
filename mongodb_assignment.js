use bookstore;

// TASK 1 - Inserting data
db.books.insertMany([
    { title: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 35, in_stock: true, published_year: 2008, rating: 4.8 },
    { title: "The Pragmatic Programmer", author: "Andy Hunt", category: "Programming", price: 42, in_stock: true, published_year: 1999, rating: 4.9 },
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Programming", price: 85, in_stock: true, published_year: 2009, rating: 4.7 },
    { title: "Design Patterns", author: "Erich Gamma", category: "Programming", price: 50, in_stock: false, published_year: 1994, rating: 4.6 },
    { title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming", price: 25, in_stock: true, published_year: 2015, rating: 4.5 },
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", category: "Programming", price: 45, in_stock: true, published_year: 2017, rating: 4.9 },
    { title: "Refactoring", author: "Martin Fowler", category: "Programming", price: 44, in_stock: true, published_year: 2018, rating: 4.7 },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History", price: 22, in_stock: true, published_year: 2011, rating: 4.8 },
    { title: "Homo Deus", author: "Yuval Noah Harari", category: "History", price: 24, in_stock: true, published_year: 2015, rating: 4.6 },
    { title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "History", price: 18, in_stock: true, published_year: 1997, rating: 4.5 },
    { title: "The Silk Roads", author: "Peter Frankopan", category: "History", price: 20, in_stock: false, published_year: 2015, rating: 4.4 },
    { title: "SPQR: A History of Ancient Rome", author: "Mary Beard", category: "History", price: 21, in_stock: true, published_year: 2015, rating: 4.6 },
    { title: "Dune", author: "Frank Herbert", category: "Fiction", price: 15, in_stock: true, published_year: 1965, rating: 4.9 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fiction", price: 14, in_stock: true, published_year: 1937, rating: 4.9 },
    { title: "1984", author: "George Orwell", category: "Fiction", price: 12, in_stock: true, published_year: 1949, rating: 4.8 },
    { title: "Project Hail Mary", author: "Andy Weir", category: "Fiction", price: 28, in_stock: true, published_year: 2021, rating: 4.9 },
    { title: "The Martian", author: "Andy Weir", category: "Fiction", price: 16, in_stock: false, published_year: 2011, rating: 4.7 },
    { title: "Neuromancer", author: "William Gibson", category: "Fiction", price: 11, in_stock: true, published_year: 1984, rating: 4.3 },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", price: 19, in_stock: true, published_year: 2011, rating: 4.6 },
    { title: "Influence: Science and Practice", author: "Robert Cialdini", category: "Psychology", price: 23, in_stock: true, published_year: 1984, rating: 4.5 },
    { title: "Atomic Habits", author: "James Clear", category: "Psychology", price: 27, in_stock: true, published_year: 2018, rating: 4.8 },
    { title: "The Power of Habit", author: "Charles Duhigg", category: "Psychology", price: 16, in_stock: false, published_year: 2012, rating: 4.4 },
    { title: "Blink", author: "Malcolm Gladwell", category: "Psychology", price: 15, in_stock: true, published_year: 2005, rating: 4.3 },
    { title: "Outliers", author: "Malcolm Gladwell", category: "Psychology", price: 17, in_stock: true, published_year: 2008, rating: 4.6 },
    { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", price: 18, in_stock: true, published_year: 1988, rating: 4.8 },
    { title: "Cosmos", author: "Carl Sagan", category: "Science", price: 15, in_stock: true, published_year: 1980, rating: 4.9 },
    { title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", price: 22, in_stock: true, published_year: 1976, rating: 4.4 },
    { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", category: "Science", price: 14, in_stock: true, published_year: 2017, rating: 4.6 },
    { title: "The Elegant Universe", author: "Brian Greene", category: "Science", price: 19, in_stock: false, published_year: 1999, rating: 4.5 },
    { title: "Code Complete", author: "Steve McConnell", category: "Programming", price: 48, in_stock: true, published_year: 2004, rating: 4.7 }
    ]);

// TASK 2 - CRUD operations
db.books.insertMany([
    { title: "Fundamentals of Software Architecture", author: "Mark Richards", category: "Programming", price: 55, in_stock: true, published_year: 2020, rating: 4.7 },
    { title: "Modern Software Engineering", author: "David Farley", category: "Programming", price: 40, in_stock: true, published_year: 2021, rating: 4.6 },
    { title: "The Lean Startup", author: "Eric Ries", category: "Business", price: 26, in_stock: true, published_year: 2011, rating: 4.5 },
    { title: "Zero to One", author: "Peter Thiel", category: "Business", price: 24, in_stock: true, published_year: 2014, rating: 4.4 },
    { title: "Good to Great", author: "Jim Collins", category: "Business", price: 30, in_stock: true, published_year: 2001, rating: 4.5 }
    ]);

// READ
// 1. Find all books in the "Programming" category
db.books.find({ category: "Programming" });

// 2. Find books published after 2015
db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books priced above $40
db.books.find({ price: { $gt: 40 } });

// 4. Find books currently in stock
db.books.find({ in_stock: true });

// 5. Find books written by a specific author
db.books.find({ author: "Andy Weir" });

// 6. Find books with a rating greater than 4.5
db.books.find({ rating: { $gt: 4.5 }});

// UPDATE
// 1. Change the price of a book
db.books.updateOne({ title: "Clean Code" }, { $set: { price: 39 } });

// 2. Update stock availability
db.books.updateOne({ title: "Design Patterns" }, { $set: { in_stock: true } });

// 3. Increase the rating of a selected book
db.books.updateOne({ title: "Modern Software Engineering" }, { $inc: { rating: 0.2 } });

// DELETE
// Delete at least 2 books
db.books.deleteOne({ title: "Neuromancer" });
db.books.deleteOne({ title: "Blink" });

// TASK 3 - Aggregations
// 1. Average book price per category
db.books.aggregate([
    { $group: { _id: "$category", averagePrice: { $avg: "$price" } } }
    ]);

// 2. Number of books per category
db.books.aggregate([
    { $group: { _id: "$category", totalBooks: { $sum: 1 } } }
    ]);

// 3. Average rating per category
db.books.aggregate([
    { $group: { _id: "$category", averageRating: { $avg: "$rating" } } }
    ]);

// 4. Top 5 most expensive books
db.books.aggregate([
    { $sort: { price: -1 } },
    { $limit: 5 },
    { $project: { title: 1, price: 1, author: 1, _id: 0 } }
    ]);

// TASK 4 - Query Optimization
db.books.find({
    category: "Programming",
    published_year: { $gte: 2020 }
    }).explain("executionStats")

// Create a compound index
db.books.createIndex({
    category: 1,
    published_year: 1
    })

db.books.dropIndex("category_1_published_year_1");