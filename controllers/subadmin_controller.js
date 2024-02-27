const User = require("../models/User.model");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await User.find({ role: "client" }, "phone email name");
      res.json({ users });
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const result = await registerSchema.validateAsync(req.body);
      let doesExist = await User.findOne({ email: result.email });
      if (doesExist)
        throw createError.Conflict(
          `${result.email} is already been registered`
        );
      doesExist = await User.findOne({ phone: result.phone });
      if (doesExist)
        throw createError.Conflict(
          `${result.phone} is already been registered`
        );
      const user = new User(result);
      const savedUser = await user.save();
      res.send(savedUser.id);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const result = await updateSchema.validateAsync(req.body);
      const user = await User.findByIdAndUpdate(req.body.id, result, {
        new: true,
      });
      if (!user) throw createError.NotFound("User not found");
      res.json({ user });
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest("Invalid User data"));
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.body.id);
      if (!user) throw createError.NotFound("User not found");
      res.json({ user });
    } catch (error) {
      next(error);
    }
  },
};
