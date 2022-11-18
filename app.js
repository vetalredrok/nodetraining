const express = require('express');
const {fileServices} = require("./services");
const {writer, reader} = fileServices;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log('Server listen 5000');
});

app.get('/users', async (req, res) => {
   console.log('Users endpoint');
   const users = await reader();

    // res.json({
   //     user: 'Victor'
   // })

    // res.end({
    //     user: 'Victor'
    // })

    // res.status(402).json('Its okay')

    res.json(users);
});

app.get('/', (req, res) => {
    res.json('Welcome')
});

app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;

    const users = await reader();

    const user = users.find(value => value.id === +userId);

    if(!user){
        return res.status(404).json('User with this id not found');
    }
    res.json(user);
});

app.post('/users', async (req, res) => {

    const userInfo = req.body;

    if (userInfo.name.length < 3 || typeof userInfo.name !== 'string'){
        return res.status(400).json('Wrong name');
    }
    if (userInfo.age < 0 || Number.isNaN(+userInfo.age)){
        return res.status(400).json('Wrong age');
    }


    const users = await reader();

    const newUser = {
        name: userInfo.name,
        age: userInfo.age,
        id: users[users.length -1].id + 1};

    users.push(newUser);

    await writer(users);

    res.status(201).json(newUser);

});

app.put('/users/:userId', async (req, res) => {

    const newUserInfo = req.body;
    const {userId} = req.params;

    const users = await reader();

    const index = users.findIndex((value) => value.id === +userId);

    if(index === -1){
        return res.status(404).json('User with this id not found');
    }

    users[index] = {...users[index], ...newUserInfo};

    await writer(users);

    res.status(201).json(users[index]);
});

app.delete('/users/:userId', async (req, res) => {

    const {userId} = req.params;

    const users = await reader();

    const index = users.findIndex((value) => value.id === +userId);

    if(index === -1){
        return res.status(404).json('User with this id not found');
    }

    users.splice(index, 1);

    await writer(users);

    res.sendStatus(204);
});


// const reader = async () => {
//     const buffer = await fs.readFile(path.join(__dirname, 'database', 'user.json'));
//     return JSON.parse(buffer.toString());
// }
//
// const writer = async (users) => {
//     await fs.writeFile(path.join(__dirname, 'database', 'user.json'), JSON.stringify(users));
// };


