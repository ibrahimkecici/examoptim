import Link from 'next/link';

export default function GozetmenDetay({ params }: { params: { id: string } }) {
  // Gelecekte API üzerinden fetch edilecek gözetmen verisini (isim, bolum, sicil no vs.) taklit ediyoruz.
  const mockGozetmen = {
    _id: params.id,
    ad: 'Ahmet',
    soyad: 'Yılmaz',
    sicilNo: '100451',
    unvan: 'Arş. Gör.',
    email: 'ahmet.yilmaz@edu.tr',
    telefon: '+90 555 123 4567',
    bolum: 'Bilgisayar Mühendisliği',
    gorevAldigiSinavlar: [
      { id: 'sin1', ders: 'MAT101 - Matematik 1', tarih: '15 Mayıs 2026', saat: '09:00 - 11:00' },
      { id: 'sin2', ders: 'BİL201 - Veri Yapıları', tarih: '18 Mayıs 2026', saat: '10:00 - 12:00' }
    ]
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      {/* Profil Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6 relative">
        <div className="flex items-center gap-5 z-10">
          <Link href="/gozetmenler" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
          
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-2xl shadow-inner border border-white dark:border-gray-800">
            {mockGozetmen.ad.charAt(0)}{mockGozetmen.soyad.charAt(0)}
          </div>
          
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                {mockGozetmen.unvan} {mockGozetmen.ad} {mockGozetmen.soyad}
              </h2>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">Sicil No: {mockGozetmen.sicilNo}</p>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex gap-3 z-10 mt-4 md:mt-0">
          <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-sm">
            <span>✏️</span> Profili Düzenle
          </button>
          <button className="px-4 py-2 bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-100 dark:border-rose-900 rounded-xl font-medium hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors flex items-center gap-2 shadow-sm">
            <span>🗑️</span> Sil
          </button>
        </div>
      </header>

      {/* İletişim & Detay Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl">📧</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">E-Posta Adresi</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{mockGozetmen.email}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xl">📞</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Telefon Numarası</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{mockGozetmen.telefon}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-xl">🏢</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Bağlı Olduğu Bölüm</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{mockGozetmen.bolum}</p>
          </div>
        </div>
      </div>

      {/* Görevli Olduğu Sınavlar */}
      <div className="bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
           <div>
             <h3 className="text-xl font-bold">Gözetmenlik Görevleri</h3>
             <p className="text-gray-500 text-sm">Gelecekte atanmış olduğu sınav oturumları</p>
           </div>
           <Link href="/sinavlar" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1">
             Tüm Sınavlara Git <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
           </Link>
        </div>

        {mockGozetmen.gorevAldigiSinavlar.length > 0 ? (
          <div className="grid gap-4">
            {mockGozetmen.gorevAldigiSinavlar.map((sinav) => (
              <div key={sinav.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xl shadow-sm">
                    📝
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{sinav.ders}</h4>
                    <p className="text-sm text-gray-500 flex gap-3">
                      <span>📅 {sinav.tarih}</span>
                      <span>🕒 {sinav.saat}</span>
                    </p>
                  </div>
                </div>
                <Link href={`/sinavlar/${sinav.id}`} className="px-4 py-2 text-sm font-semibold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
                  Sınav Detayı
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
             Henüz üzerine atanmış bir sınav bulunmuyor.
          </div>
        )}
      </div>
    </div>
  );
}
