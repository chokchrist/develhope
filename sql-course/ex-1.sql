CREATE TABLE books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title varchar(255) not NULL,
  author varchar(255) not NULL,
  genre varchar(100),
  published_year YEAR,
  isbn varchar(20) UNIQUE,
  price decimal(10, 2),
  rating decimal(2, 1),
  stock_count INT
 );

