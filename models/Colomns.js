import mongoose from "mongoose";

const columnSchema = new mongoose.Schema({
  name: String,
  projectId: String,
});

export const Column = mongoose.model("Column", columnSchema);
