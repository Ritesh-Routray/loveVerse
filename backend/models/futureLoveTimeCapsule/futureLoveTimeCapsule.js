
import User from "../user/user.js";
import mongoose from "mongoose";

const futureLoveTimeCapsuleSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    recipientEmail: {
      type: String,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const FutureLoveTimeCapsuleModel = mongoose.model(
  "FutureLoveTimeCapsuleModel",
  futureLoveTimeCapsuleSchema
);

export default FutureLoveTimeCapsuleModel;
