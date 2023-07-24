import express  from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server Up!')
});

app.use((req, res) =>{
    res.status(404).send("Your requested somthung I don't have :(")

});

app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
});    