const express = require('express');
const userRouter = require('./router/user.router');
const mongoose = require('mongoose');
const configs = require('./config/config')
;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);


app.listen(configs.PORT,  async () => {
    await mongoose.connect(configs.MONGO_URL);
    console.log('Server listen 5000');
});



app.get('/', (req, res) => {
    res.json('Welcome')
});

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
        message: err.message || 'unknown error',
        status: err.status || 500
    })
})


// const reader = async () => {
//     const buffer = await fs.readFile(path.join(__dirname, 'database', 'user.json'));
//     return JSON.parse(buffer.toString());
// }
//
// const writer = async (users) => {
//     await fs.writeFile(path.join(__dirname, 'database', 'user.json'), JSON.stringify(users));
// };


