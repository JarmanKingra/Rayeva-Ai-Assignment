import mongoose from "mongoose";

const aiLogSchema = new mongoose.Schema(
  {
    module: {
      type: String,
      required: true
    },
    prompt: {
      type: String,
      required: true
    },
    response: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const AiLog = mongoose.model("AiLog", aiLogSchema);

export default AiLog;