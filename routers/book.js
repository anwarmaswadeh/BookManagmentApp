import express from 'express';
import data from '../data/Sample_data.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.send(data);
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = data.find(it => it.id === id);
    if (book) {
        res.status(200).send(book);
    }
    else {
        res.status(404).send('Book not found');
    }
    res.send('Book by ID');
});
router.post('/', (req, res) => {
    if (!req.body.title || !req.body.id || !req.body.author || !req.body.publicationYear) {
        res.status(400).send("Title ans userId are required!");
        return;
    }
    const newBook = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear,
    };
    data.unshift(newBook);
    res.status(201).send('Book Created');
});
router.put('/:id', (req, res) => {
    res.send('Book Updated');
});
router.delete('/:id', (req, res) => {
    res.send('Book Deleted');
});
router.get('/', (req, res) => {
    const bookName = req.query.name;
    if (!bookName) {
        return res.send(data);
    }
    else {
        const result = data.filter(Book => {
            return Book.title.includes(bookName);
        });
        return res.send(result);
    }
});
router.get('/', (req, res) => {
    const year = req.query.publicationYear;
    if (!year) {
        return res.send(data);
    }
    else {
        const result = data.filter(Year => {
            return Year.publicationYear === Number(year);
        });
        return res.send(result);
    }
});
export default router;
