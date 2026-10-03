"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";

function BlogList({ search }) {
  const [blogs, setBlogs] = useState([]);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.summary?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Category Filter Buttons */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {["all", "nutrition", "fitness", "remedies"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition ${
              selectedCategory === cat
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {loading ? (
        <p className="text-center text-gray-500 py-12">Loading articles...</p>
      ) : filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Your Daily Guide to Health & Remedies
        </h1>
        <p className="text-emerald-100 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Explore natural care tips, diet strategies, and effective fitness advice for a healthier lifestyle.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative text-gray-800">
          <input
            type="text"
            placeholder="Search hair growth, belly fat, fruits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 placeholder-gray-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-md border-0"
          />
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
        </div>
      </section>

      <Suspense fallback={<p className="text-center text-gray-500 py-12">Loading...</p>}>
        <BlogList search={search} />
      </Suspense>
    </div>
  );
}


