import FutureLoveTimeCapsuleModel from "../models/futureLoveTimeCapsule/futureLoveTimeCapsule.js";

export const createFutureLoveTimeCapsule = async (req, res) => {
  try {
    const { title, content, deliveryDate, recipientEmail } = req.body;
    const {userId} = req.params;

    if (
      !title||
      !content||
      !deliveryDate||
      !recipientEmail
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const futureDate = new Date(deliveryDate);
    if (isNaN(futureDate.getTime()) || futureDate <= new Date()) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid delivery date" });
    }

    const timeCapsule = new FutureLoveTimeCapsuleModel({
      User: userId,
      title: title,
      content: content,
      deliveryDate: futureDate,
      recipientEmail,
    });

    await timeCapsule.save();
    res
      .status(201)
      .json({ success: true, message: "Time capsule created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
