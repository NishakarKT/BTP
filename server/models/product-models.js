import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: { type: String },
        desc: { type: String },
        owner: { type: String },
        ownerName: { type: String },
        ownerProfilePic: { type: String },
        category: { type: String },
        currency: { type: String },
        price: { type: String },
        availability: { type: String },
        deal: { type: String },
        files: { type: Array, default: [] },
    }, { timestamps: true }
);

export const Product = new mongoose.model("product", productSchema);