import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const lifestyleAndHealthSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("lifestyleAndHealth", lifestyleAndHealthSchema);

const lifestyleAndHealthErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const lifestyleAndHealthErrorModel = mongoose.model(
  "lifestyleAndHealth.error",
  lifestyleAndHealthErrorSchema
);
