export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } }),
  },
  Mutation: {
    createUser: (
      parent,
      { firstname, lastname, email, passwordHash },
      { models }
    ) => models.User.create({ firstname, lastname, email, passwordHash }),
    updateUser: (parent, { id, firstname, lastname }, { models }) =>
      models.User.update({ firstname, lastname, email }, { where: { id } }),
    deleteUser: (parent, { id }) => models.User.destroy({ where: { id } }),
  },
};
