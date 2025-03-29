import mongoose from "mongoose";
import QualitiesUserModel from "../qualities/qualitiesUser.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    token: {
        type: String,
        required: true,
        default: "token",
    },
    selfQualities: {
        type: [QualitiesUserModel.schema],
        required: true,
        default: [],
    },
    partnerQualities: {
        type: [QualitiesUserModel.schema],
        required: true,
        default: [],
    },
    matchFound: {
        type: Boolean,
        required: true,
        default: false,
    },
    matchId: {
        type: [String],
        required: true,
        default: [""],
    }
    },{ timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;