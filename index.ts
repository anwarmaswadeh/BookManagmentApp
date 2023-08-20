import express  from 'express';
import bookRouter from "./routers/book.js";

const app = express();
const PORT = 80;
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server Up!')
});

app.get("/health", function (req, res) {
	res.sendStatus(200);
})	

app.use("/books", bookRouter) 

app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
});    