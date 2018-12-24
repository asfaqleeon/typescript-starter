import * as express from 'express';

let app = express();

app.get('/', (req,res) => {
    res.json({num: 10});
});

app.listen(2000, () => {
    console.log('running');
});
