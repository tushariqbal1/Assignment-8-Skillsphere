'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                SS
              </div>
              <span className="text-2xl font-bold tracking-tight">SkillSphere</span>
            </div>
            <p className="text-base-content/70 text-sm leading-relaxed">
              Master in-demand skills with expert-led courses.
              Learn smarter, grow faster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses" className="hover:text-primary transition-colors">Browse Courses</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Learning Paths</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">For Teams</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Settings</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-base-content/60">
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-base-content/60 hover:text-primary transition-colors" aria-label="Twitter">
              {/* <Twitter size={22} /> */}
              <FaTwitter />
            </a>
            <a href="#" className="text-base-content/60 hover:text-primary transition-colors" aria-label="LinkedIn">
              {/* <Linkedin size={22} /> */}
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-base-content/60 hover:text-primary transition-colors" aria-label="YouTube">
              {/* <Youtube size={22} /> */}
              <FaYoutube />
            </a>
            <a href="#" className="text-base-content/60 hover:text-primary transition-colors" aria-label="GitHub">
              {/* <Code2 size={22} />    */}
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}