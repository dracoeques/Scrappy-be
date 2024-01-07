import mongoose from "../utils/mongoose.js";
import baseFields, { baseErrorFields } from "./baseFields.js";
const lawAndCrimeSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("lawAndCrime", lawAndCrimeSchema);

const lawAndCrimeErrorSchema = new mongoose.Schema({
  ...baseErrorFields,
});

export const lawAndCrimeErrorModel = mongoose.model(
  "lawAndCrime.error",
  lawAndCrimeErrorSchema
);
