import Link from "next/link";
import { Clock } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="capitalize bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
            {blog.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
        </div>
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {blog.summary}
        </p>
        <Link 
          href={`/blog/${blog.slug}`}
          className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm inline-flex items-center"
        >
          Read Article →
        </Link>
      </div>
    </div>
  );
}