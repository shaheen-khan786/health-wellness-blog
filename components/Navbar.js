import Link from "next/link";
import { HeartPulse } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600">
          <HeartPulse className="w-6 h-6 text-emerald-500" />
          <span>HealthHub</span>
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <Link href="/?category=nutrition" className="hover:text-emerald-600 transition">Nutrition</Link>
          <Link href="/?category=fitness" className="hover:text-emerald-600 transition">Fitness</Link>
          <Link href="/?category=remedies" className="hover:text-emerald-600 transition">Remedies</Link>
          
          {/* Yeh new "+ Write" button add kiya gaya hai */}
          <Link 
            href="/admin/create" 
            className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-emerald-700 transition"
          >
            + Write
          </Link>
        </div>
      </div>
    </nav>
  );
}