import FutureLoveTimeCapsule from "../models/futureLoveTimeCapsule/futureLoveTimeCapsule";
import User from "../models/user/user";
import sendEmail from "../utils/sendEmail";

export const processTimeCapsules = async () => {
  const now = new Date();

  // Find time capsules due for delivery
  const capsules = await FutureLoveTimeCapsule.find({
    deliveryDate: { $lte: now },
    isDelivered: false,
  }).populate("user");

  for (let capsule of capsules) {
    const userEmail = capsule.User.email;

    // Send email
    await sendEmail(userEmail, "Your Future Love Capsule", capsule.content);

    // Mark as delivered
    capsule.isDelivered = true;
    capsule.deliveredAt = now;
    await capsule.save();
  }
};
