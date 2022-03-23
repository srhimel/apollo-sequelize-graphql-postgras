const { v4: uuid } = require('uuid');

exports.Mutation = {
    addUser: (parent, { input }, { sequelize }) => {
        const user = {
            uuid: uuid(),
            name: input.name,
            email: input.email,
            role: input.role
        };
        return sequelize.models.User.create(user);
    }
}