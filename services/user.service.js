
const User = require('../database/User');


module.exports = {
    findByParams: async (filter = {}) => {
        return User.find(filter);
    },

    updateOne: async (userId, newInfo) => {
        return User.findByIdAndUpdate(userId, newInfo);
    },

    create: async (userInfo) => {
        return User.create(userInfo);
    },
    deleteOne: async (userId) => {
        return User.deleteOne({_id: userId});
    },
    findOneByParams: async (filter= {})=>{
        return User.findOne(filter);
    }
}