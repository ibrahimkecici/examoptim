'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Ana Sayfa', icon: '🏠' },
  { href: '/derslikler', label: 'Derslikler', icon: '🏫' },
  { href: '/gozetmenler', label: 'Gözetmenler', icon: '👨‍🏫' },
  { href: '/sinavlar', label: 'Sınavlar', icon: '📝' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 shadow-xl">
      {/* Brand */}
      <div className="h-20 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ExamOptim
        </h1>
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-blue-600/10 text-blue-700 dark:text-blue-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Profile Placeholder */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-md"></div>
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Admin</p>
          <p className="text-xs text-gray-500">Yönetim Paneli</p>
        </div>
      </div>
    </div>
  );
}
