import { model } from "mongoose";
import BaseSchema from "./baseSchema";

export default model(
  "project",
  new BaseSchema({
    progectName: {
      type: String,
      required: [true, "Value is required"],
    },
    public: {
      type: Boolean,
      default: true,
    },
    timestamps: true,
  })
);
