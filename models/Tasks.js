import mongoose from "mongoose";

const taskstSchema = new mongoose.Schema(
  {
    name: String,
    projectId: String,
    columnId: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", taskstSchema);
