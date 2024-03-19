import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const entertainmentSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("entertainment", entertainmentSchema);

const entertainmentErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const entertainmentErrorModel = mongoose.model(
  "entertainment.error",
  entertainmentErrorSchema
);
