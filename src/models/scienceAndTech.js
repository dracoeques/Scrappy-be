import mongoose from "../utils/mongoose.js";
import baseFields from "./baseFields.js";
const scienceAndTechSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("scienceAndTech", scienceAndTechSchema);
