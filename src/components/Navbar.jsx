import React from 'react';
import { Leaf, ShieldCheck } from 'lucide-react';

const Navbar = ({ onAdminLogin }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            ResqFood
          </span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#how" className="hidden text-gray-600 hover:text-gray-900 sm:inline">
            How it works
          </a>
          <a href="#features" className="hidden text-gray-600 hover:text-gray-900 sm:inline">
            Features
          </a>
          <button
            onClick={onAdminLogin}
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-gray-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
            aria-label="Admin login"
          >
            <ShieldCheck className="h-4 w-4" />
            Admin Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
