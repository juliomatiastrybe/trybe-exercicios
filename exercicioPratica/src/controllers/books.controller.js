const { booksService } = require('../services');

const getAll = async (req, res) => {
  const books = await booksService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await booksService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  if (!title || !author || !pageQuantity) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  const newBook = await booksService.create(title, author, pageQuantity);
  res.status(201).json(newBook);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updated = await booksService.update(id, title, author, pageQuantity);
  if (!updated) return res.status(404).json({ message: 'Book not found' });
  res.status(201).json({ message: 'Book updated!'});
}

const remove = async (req, res) => {
  const { id } = req.params;
  const removed = await booksService.remove(id);
  if (!removed) return res.status(500).json({ message: 'Algo deu errado' });
  res.status(204).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};