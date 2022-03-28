exports.User = {
    posts: async (parent, args, { sequelize }) => {
        const Posts = await sequelize.models.Post.findAll({
            where: {
                userId: parent.id
            },
            include: [{
                model: sequelize.models.User,
                as: 'user'
            }]
        });
        return Posts;
    }
} 