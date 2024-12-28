import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Project = mongoose.model("Project", projectSchema);
