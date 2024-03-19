import mongoose from "../utils/mongoose.js";
import baseFields from "./baseFields.js";
const web3Schema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("web3", web3Schema);
const web3ErrorSchema = new mongoose.Schema({
  ...baseFields,
});

export const web3Error = mongoose.model("web3.error", web3ErrorSchema);
