import Link from "next/link";
import { HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-lg text-emerald-600">
          <HeartPulse className="w-5 h-5 text-emerald-500" />
          <span>HealthHub</span>
        </div>
        
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} HealthHub. Educational content for healthy living.
        </p>

        <div className="flex gap-4 text-xs font-medium">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <Link href="/admin/create" className="hover:text-emerald-600 transition">Write Article</Link>
        </div>
      </div>
    </footer>
  );
}