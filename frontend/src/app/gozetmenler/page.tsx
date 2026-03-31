import Link from 'next/link';

export default function GozetmenlerPage() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold">Gözetmen İdaresi</h2>
          <p className="text-gray-500">Sınavlarda görev alacak gözetmenler listesi</p>
        </div>
        <Link href="/gozetmenler/yeni" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-indigo-200 dark:shadow-none flex items-center gap-2">
          <span>+</span> Yeni Ekle
        </Link>
      </header>

      <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/40 p-1">
        <div className="p-12 text-center text-gray-500 flex flex-col items-center">
          <span className="text-5xl mb-4">👮‍♂️</span>
          <h3 className="text-xl font-semibold mb-2">Henüz Kimse Yok</h3>
          <p className="max-w-md mx-auto">
            API bağlantısı kurulduğunda burada detaylı personel ve gözetmen tablolarını göreceksiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
