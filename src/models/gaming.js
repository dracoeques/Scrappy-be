import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const gamingSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("gaming", gamingSchema);

const gamingErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const gamingErrorModel = mongoose.model(
  "gaming.error",
  gamingErrorSchema
);
