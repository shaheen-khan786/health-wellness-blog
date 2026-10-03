"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "nutrition",
    summary: "",
    content: "",
    image: "",
    readTime: "3 min read",
  });

  // Title se automatically URL-friendly slug banana
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setFormData({ ...formData, title, slug: generatedSlug });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/blogs", formData);
      if (res.data.success) {
        alert("Blog Article Published Successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("Failed to publish blog. Please check all fields.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 pt-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 text-emerald-600 font-bold text-xl">
            <PlusCircle className="w-6 h-6" />
            <h2>Publish New Article</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                Article Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 10 Benefits of Morning Green Tea"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                >
                  <option value="nutrition">Nutrition</option>
                  <option value="fitness">Fitness</option>
                  <option value="remedies">Remedies</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                  Read Time
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 min read"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                Image URL (Unsplash / Online Link)
              </label>
              <input
                type="url"
                required
                placeholder="https://images.unsplash.com/..."
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                Short Summary
              </label>
              <textarea
                rows="2"
                required
                placeholder="Brief overview of the article for homepage cards..."
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">
                Full Content
              </label>
              <textarea
                rows="6"
                required
                placeholder="Write full health guide content here..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition shadow-sm disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Article"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}