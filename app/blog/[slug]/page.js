"use client";
import { useEffect, useState, use } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";

export default function BlogDetailPage({ params }) {
  // Next.js client component mein params ko unwrap karna
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlogDetails();
    }
  }, [slug]);

  const fetchBlogDetails = async () => {
    try {
      const res = await axios.get(`/api/blogs/${slug}`);
      if (res.data.success) {
        setBlog(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching blog details:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-500">
          Loading article...
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <Link href="/" className="text-emerald-600 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 mb-6 font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <div className="flex items-center gap-4 text-xs mb-3 text-gray-500">
          <span className="capitalize bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {blog.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {blog.title}
        </h1>

        <div className="rounded-2xl overflow-hidden shadow-sm mb-8 border border-gray-100">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
          {blog.content}
        </div>
      </main>
    </div>
  );
}