import { Schema } from "mongoose";

export default class BaseSchema extends Schema {
  constructor(...args) {
    super(...args);
  }
}
