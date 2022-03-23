exports.Query = {
    users: (parent, args, { sequelize }) => {
        return sequelize.models.User.findAll();
    }
}