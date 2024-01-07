import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const sportSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("sport", sportSchema);

const sportErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const sportErrorModel = mongoose.model("sport.error", sportErrorSchema);
