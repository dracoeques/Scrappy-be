import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const artAndFashionSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("artAndFashion", artAndFashionSchema);

const artAndFashionErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const artAndFashionErrorModel = mongoose.model(
  "artAndFashion.error",
  artAndFashionErrorSchema
);
