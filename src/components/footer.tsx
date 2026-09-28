import React from 'react';
export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800 text-center">
      <p>© {new Date().getFullYear()} ePrime Corporation Limited. All rights reserved.</p>
    </footer>
  );
}
