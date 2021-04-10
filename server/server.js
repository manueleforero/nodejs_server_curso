require('./config');


const express = require('express');
const app = express();
const body = require('body-parser');

app.use(body.urlencoded({ extended: false }));
app.use(body.json());


app.get('/', (req, res) => {
    res.json('get mongo ');
});

app.get('/usuario/:id', (req, res) => {
    let y_id = req.params.id
    res.json({
        Yave: y_id
    });
});

app.put('/', (req, res) => {
    res.json('put mongo ');
});

app.post('/', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            'ok': false,
            'error': 'debe indicar nombre'
        })

    } else {
        res.json({
            empleado: body
        });
    }
});

app.delete('/', (req, res) => {
    res.json('delete mongo ');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando MONGO por ', process.env.PORT);
});
