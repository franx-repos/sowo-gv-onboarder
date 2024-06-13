import User from "../models/usersSchema.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const User = await User.find();
    if (!User.length) {
      throw { statusCode: 404, message: "User not found" };
    }
    res.json(User);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const User = await User.findById(id);
    if (!User) {
      throw { statusCode: 404, message: "User not found" };
    }
    res.json(User);
  } catch (error) {}
};

export const addNewUser = async (req, res, next) => {
  const { name, author, image_url } = req.body;

  try {
    const newUser = new User({ name, author, image_url });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, author, image_url } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, author, image_url },
      { new: true }
    );
    if (!updatedUser) {
      throw { statusCode: 404, message: "User not found" };
    }
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const addTagToUser = async (req, res, next) => {
  const { id } = req.body;
  const { tag } = req.body;

  try {
    const User = await User.findById(id);
    if (!User) {
      throw { statusCode: 404, message: "User not found" };
    }
    User.tags.push(tag);
    const updateUser = await User.save();
    res.json(updateUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.json({ message: "User was deleted" });
  } catch (error) {
    next(error);
  }
};
