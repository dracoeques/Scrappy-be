import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const politicsSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("politics", politicsSchema);

const politicsErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const politicsErrorModel = mongoose.model(
  "politics.error",
  politicsErrorSchema
);
