exports.Query = {
    users: async (parent, args, { sequelize }) => {
        const Users = await sequelize.models.User.findAll({
            include: [{
                model: sequelize.models.Post,
                as: 'posts'
            }]
        });
        return Users;
    },

    posts: async (parent, args, { sequelize }) => {
        const Posts = await sequelize.models.Post.findAll({
            include: [{
                model: sequelize.models.User,
                as: 'user'
            }]
        });
        return Posts;
    }

}