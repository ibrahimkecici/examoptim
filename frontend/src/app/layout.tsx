import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExamOptim - Sınav Optimizasyon Paneli',
  description: 'Gözetmen, Derslik ve Sınav yönetim paneli',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans`}>
        <div className="flex relative">
          {/* Sol Menü (Sidebar) */}
          <aside className="fixed inset-y-0 left-0 z-50">
            <Sidebar />
          </aside>

          {/* Ana İçerik */}
          <main className="flex-1 ml-64 p-8 min-h-screen">
            <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
