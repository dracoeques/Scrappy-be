import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const scienceAndTechSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("scienceAndTech", scienceAndTechSchema);

const scienceAndTechErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const scienceAndTechErrorModel = mongoose.model(
  "scienceAndTech.error",
  scienceAndTechErrorSchema
);
