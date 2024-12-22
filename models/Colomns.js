// import { Schema, isValidObjectId, model } from "mongoose";

// const ProjectSchema = new Schema({
//   name: String,
// });

// export const Project = model("Project", ProjectSchema); //модель це Клас, який за допомогою свої методів буде робити запити до певної колекції

// export default Project;

import mongoose from "mongoose";

const columnSchema = new mongoose.Schema({
    name: String,
    projectId: String,
})

export const Column = mongoose.model("Column", columnSchema);



  
