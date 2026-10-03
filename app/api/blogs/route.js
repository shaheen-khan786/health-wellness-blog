import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// 1. GET Request: Saare blogs database se fetch karne ke liye
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// 2. POST Request: Naya blog database mein save karne ke liye
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newBlog = await Blog.create(body);
    return NextResponse.json(
      { success: true, data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}