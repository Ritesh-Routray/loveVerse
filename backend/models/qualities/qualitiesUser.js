import mongoose from "mongoose";

const qualitiesUserSchema = new mongoose.Schema(
  {
    trait: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["Personality", "Hobbies", "Lifestyle", "Values", "Other"],
      required: true,
    }, 
    description: { type: String, trim: true }, 
    weight: { type: Number, min: 1, max: 10, default: 5 },
  },
  { timestamps: true }
);

const QualitiesUserModel = mongoose.models.QualitiesUser || mongoose.model("QualitiesUser", qualitiesUserSchema);
export default QualitiesUserModel;
