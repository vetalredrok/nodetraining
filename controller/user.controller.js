const {userService} = require("../services");
const User = require('../database/User');


module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.findByParams();

            res.json(users);
        } catch (e) {
            next(e);
        }

        // res.json({
        //     user: 'Victor'
        // })

        // res.end({
        //     user: 'Victor'
        // })

        // res.status(402).json('Its okay')
    },

    getUserById: async (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e)
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const newUserInfo = req.body
            const userId = req.params.userId;

            await userService.updateOne(userId, newUserInfo);

            res.json('updated')
        } catch (e) {
            next(e);
        }
    },
    addUser: async (req, res, next) => {
        try {
            await userService.create(req.body)

            res.json('ok')
        } catch (e) {
            next(e);
        }

    },

    deleteUser: async (req, res, next) => {
        try {
            await userService.deleteOne(req.params.userId)

            res.sendStatus(204); // Якщо тільки статус то змінюємо на сендСтатус
        } catch (e) {
            next(e);
        }
    }
}