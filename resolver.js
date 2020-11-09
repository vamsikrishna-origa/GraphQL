const User = require('./model');
module.exports = {
    Query: {
        getUsers: () => User.find(),
        getUser: async (_, { id }) => {
            var result = await User.findById(id);
            return result;
        }
    },
    Mutation: {
        addUser: async (_, { fullname, username, phone_number, city }) => {
            const user = new User({ fullname, username, phone_number, city });
            await user.save();
            return user;
        },
        deleteUser: async (_, { id }) => {
            await User.findByIdAndRemove(id);
            return "User deleted";
        }
    }
}