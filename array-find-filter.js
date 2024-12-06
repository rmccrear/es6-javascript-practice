// Array Methods Search Exercise

// Instructions: Complete the following tasks by using array methods `filter` and `find`.
// Write your solutions directly below each TODO comment.

// Example Data
// You may add more data if you wish.
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, pages: 218 },
  { title: 'Tender Is the Night', author: 'F. Scott Fitzgerald', year: 1934, pages: 317 },
  { title: 'This Side of Paradise', author: 'F. Scott Fitzgerald', year: 1920, pages: 305 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, pages: 281 },
  { title: 'Go Set a Watchman', author: 'Harper Lee', year: 2015, pages: 278 },
  { title: '1984', author: 'George Orwell', year: 1949, pages: 328 },
  { title: 'Animal Farm', author: 'George Orwell', year: 1945, pages: 112 },
  { title: 'Homage to Catalonia', author: 'George Orwell', year: 1938, pages: 232 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, pages: 279 },
  { title: 'Sense and Sensibility', author: 'Jane Austen', year: 1811, pages: 226 },
];

// Exercises

// 1. Using the find method
// Example: Use an array method to find the book called '1984'
const orwellBook = books.find((book) => book.title === '1984');
console.log(orwellBook);

// TODO: find The book published in the year 1945.

// TODO: find The book published in the year 1945.

// TODO: find The book with exactly 112 pages.

// TODO: find The book called 'Tender Is The Night'.


// 2. Using the filter method
// Example: Use an array method to filter books with more than 300 pages
const longBooks = books.filter((book) => book.pages > 300);
console.log(longBooks);

// Example: Use an array method to filter books published before 1900
const oldBooks = books.filter((book) => book.year < 1900);
console.log(oldBooks);

// TODO: Use an array method to filter books published after 1900

// TODO: Use an array method to filter books with less than 150 pages

// TODO: create an array containing all the books by Jane Austen

// TODO: create an array containing all the books by F. Scott Fitzgerald

// TODO: create an array containing all the books by Harper Lee

// TODO: create an array containing all the books by George Orwell 
//       that are also less than 300 pages.


// Solutions should be written directly below each TODO comment.
