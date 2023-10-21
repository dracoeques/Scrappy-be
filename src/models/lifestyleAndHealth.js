import mongoose from "../utils/mongoose.js";
import baseFields from "./baseFields.js";
const lifestyleAndHealthSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("lifestyleAndHealth", lifestyleAndHealthSchema);
