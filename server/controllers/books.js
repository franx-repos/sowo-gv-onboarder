import Book from "../models/booksSchema.js";

export const getAllBooks = async (req, res, next) => {
  try {
    const book = await Book.find();
    if (!book.length) {
      throw { statusCode: 404, message: "Book not found" };
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      throw { statusCode: 404, message: "Book not found" };
    }
    res.json(book);
  } catch (error) {}
};

export const addNewBook = async (req, res, next) => {
  const { name, author, image_url } = req.body;

  try {
    const newBook = new Book({ name, author, image_url });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { name, author, image_url } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { name, author, image_url },
      { new: true }
    );
    if (!updatedBook) {
      throw { statusCode: 404, message: "Bok not found" };
    }
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

export const addTagToBook = async (req, res, next) => {
  const { id } = req.body;
  const { tag } = req.body;

  try {
    const book = await Book.findById(id);
    if (!book) {
      throw { statusCode: 404, message: "Book not found" };
    }
    book.tags.push(tag);
    const updateBook = await book.save();
    res.json(updateBook);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.json({ message: "Book was deleted" });
  } catch (error) {
    next(error);
  }
};
