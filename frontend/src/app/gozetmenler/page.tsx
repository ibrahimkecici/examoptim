import Link from 'next/link';

// API entegrasyonuna kadar gösterilecek sahte veriler
const mockGozetmenler = [
  { id: 1, ad: 'Ahmet', soyad: 'Yılmaz', sicilNo: '100451', unvan: 'Arş. Gör.', bolum: 'Bilgisayar Mühendisliği', email: 'ahmet.yilmaz@edu.tr', telefon: '+90 555 123 4567' },
  { id: 2, ad: 'Ayşe', soyad: 'Demir', sicilNo: '100452', unvan: 'Öğr. Gör.', bolum: 'Yazılım Mühendisliği', email: 'ayse.demir@edu.tr', telefon: '+90 555 987 6543' },
  { id: 3, ad: 'Mehmet', soyad: 'Kaya', sicilNo: '100453', unvan: 'Dr. Öğr. Üyesi', bolum: 'Elektrik Elektronik Müh.', email: 'mehmet.kaya@edu.tr', telefon: '+90 532 111 2233' },
];

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

      {/* Modern Mock Veri Tablosu */}
      <div className="bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                <th className="p-4 font-semibold">Sicil No</th>
                <th className="p-4 font-semibold">Ad Soyad</th>
                <th className="p-4 font-semibold hidden md:table-cell">Unvan & Bölüm</th>
                <th className="p-4 font-semibold hidden lg:table-cell">İletişim</th>
                <th className="p-4 font-semibold text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {mockGozetmenler.map((gozetmen) => (
                <tr key={gozetmen.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                  <td className="p-4 font-mono text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                    {gozetmen.sicilNo}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold">
                        {gozetmen.ad.charAt(0)}{gozetmen.soyad.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">{gozetmen.ad} {gozetmen.soyad}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <p className="text-sm font-semibold">{gozetmen.unvan}</p>
                    <p className="text-xs text-gray-500">{gozetmen.bolum}</p>
                  </td>
                  <td className="p-4 hidden lg:table-cell text-sm text-gray-500">
                    <p>{gozetmen.email}</p>
                    <p className="text-xs">{gozetmen.telefon}</p>
                  </td>
                  <td className="p-4 text-right">
                    <Link href={`/gozetmenler/${gozetmen.id}`} className="inline-block px-3 py-1 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-colors opacity-0 group-hover:opacity-100">
                      Detaylar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Alt Bilgi Barı */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-500 flex justify-between items-center">
          <span>Toplam 3 gözetmen listeleniyor.</span>
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-2 py-1 rounded text-xs font-semibold">MOCK DATA</span>
        </div>
      </div>
    </div>
  );
}
