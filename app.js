const express = require('express');

const userDb = require('./database/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log('Server listen 5000');
});

app.get('/users', (req, res) => {
   console.log('Users endpoint');

   // res.json({
   //     user: 'Victor'
   // })

    // res.end({
    //     user: 'Victor'
    // })

    // res.status(402).json('Its okay')

    res.json(userDb);
});

app.get('/', (req, res) => {
    res.json('Welcome')
});

app.get('/users/:userId', (req, res) => {
    console.log(req.params);

    const {userId} = req.params;

    res.json(userDb[userId]);
});

app.post('/users', (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);

    userDb.push(userInfo);
    res.status(201).json('Created');

});

app.put('/users/:userId', (req, res) => {

    const newUserInfo = req.body;
    const userId = req.params.userId;

    userDb[userId] = newUserInfo;

    res.json('Updated')
});
