const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'hola campeon' })
});

app.listen(3000, () => {
    console.log('Escuchando puerto:', 3000);
});