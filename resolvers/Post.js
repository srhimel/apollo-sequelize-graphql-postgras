exports.Post = {
    user: async (parent, args, { sequelize }) => {
        const User = await sequelize.models.User.findOne({
            where: {
                id: parent.userId
            }
        });
        return User;
    }
}