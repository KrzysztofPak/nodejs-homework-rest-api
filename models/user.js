const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleErrors } = require("../helpers");

const subscription = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlendth: 6,
    },
    subscription: {
      type: String,
      enum: subscription,
      default: "starter",
    },
    token: { type: String, default: "" },
    avatartURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleErrors);

const registerSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing field email" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Missing field password" }),
  subscription: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing field email" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Missing field password" }),
});

const subscrSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscription)
    .required()
    .messages({ "any.required": "Missing field subscription" }),
});

const User = model("user", userSchema);
const schemas = { registerSchema, loginSchema, subscrSchema };

module.exports = {
  User,
  schemas,
};
