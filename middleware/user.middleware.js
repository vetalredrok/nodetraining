const {userService} = require("../services");

const ApiError = require("../error/ApiError")


module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const user = await userService.findOneByParams({userId});

            if (!user) {
                throw new ApiError('Inna not found', 404);
            }

            req.user = user;

            next();
        } catch (e) {
            next(e)
        }
    },
    isBodyValidCreate: (req, res, next) => {
        try {
            const {name, age} = req.body;

            if (name.length < 3 || typeof name !== 'string') {
                throw new ApiError('Wrong name', 400);
            }
            if (age < 0 || Number.isNaN(+age)) {
                throw new ApiError('Wrong age', 400);
            }

            next();

        } catch (e) {
            next(e)
        }
    },
    isBodyValidUpdate: (req, res, next) => {
        try {
            const {name, age} = req.body;

            if (name && (name.length < 3 || typeof name !== 'string')) {
                throw new ApiError('Wrong name', 400);
            }
            if (age && (age < 0 || Number.isNaN(+age))) {
                throw new ApiError('Wrong age', 400);
            }

            next();

        } catch (e) {
            next(e)
        }
    },
    isIdValid: (req, res, next) => {
        try {

            const {userId} = req.params;

            if (userId < 0 || Number.isNaN(+userId)) {
                throw new ApiError('Not valid ID', 400);
            }
            next()
        } catch (e) {
            next(e);
        }
    },
    checkIsEmailUnique: async (req, res, next) => {
        try {
            const {email} = req.body;

            if(!email) {
                throw new ApiError('Email not present', 400)
            }

            const user = await userService.findOneByParams({email});

            if(user) {
                throw new ApiError('User with this email already exists', 409);
            }

        } catch (e) {

        }
    }
}