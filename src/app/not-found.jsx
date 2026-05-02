'use client';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { FaBookReader } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Fun Illustration */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="text-[180px] font-bold text-base-300 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-6xl"><FaBookReader /></span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">
          Oops! Page Not Found
        </h1>
        
        <p className="text-2xl text-base-content/70 mb-8">
          The course or page you're looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="btn btn-primary btn-lg flex items-center gap-3 text-lg px-10"
          >
            <Home size={24} />
            Back to Home
          </Link>

          <Link 
            href="/courses"
            className="btn btn-outline btn-lg flex items-center gap-3 text-lg px-10"
          >
            <Search size={24} />
            Browse Courses
          </Link>
        </div>

        <div className="mt-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Return to SkillSphere
          </Link>
        </div>

       
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 text-[300px] pointer-events-none">
          ?
        </div>
      </div>
    </div>
  );
}