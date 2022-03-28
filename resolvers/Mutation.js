

exports.Mutation = {
    addUser: (parent, { input }, { sequelize }) => {
        const user = {
            name: input.name,
            email: input.email,
            role: input.role
        };
        return sequelize.models.User.create(user);
    },

    deleteUser: (parent, { id }, { sequelize }) => {
        return sequelize.models.User.destroy({
            where: {
                id: id
            }
        });
    },

    addPost: async (parent, { input }, { sequelize }) => {
        const user = await sequelize.models.User.findOne({
            where: {
                uuid: input.userUuid
            }
        });
        const Post = await sequelize.models.Post.create({
            body: input.body,
            userId: user.id
        });
        return Post;
    }


}