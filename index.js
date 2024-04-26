const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('lá Mundo!!');
});

app.listen(PORT, () => {
    console.log(`Funfando na porta ${PORT}`);
});

