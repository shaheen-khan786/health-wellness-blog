import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ["nutrition", "fitness", "remedies"],
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      default: "3 min read",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);