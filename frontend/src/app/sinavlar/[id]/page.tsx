import Link from 'next/link';

export default function SinavDetay({ params }: { params: { id: string } }) {
  // Gelecekte API üzerinden fetch edilecek sınav verisi mock bilgisi
  const mockSinav = {
    _id: params.id,
    dersKodu: 'MAT101',
    dersAd: 'Matematik 1',
    tarih: '2026-05-15',
    baslangicSaati: '09:00',
    bitisSaati: '11:00',
    ogrenciSayisi: 120,
    sorumluOgretimUyesi: 'Prof. Dr. Ali Veli',
    derslikler: [
       { id: '1', ad: 'BZ-04', bina: 'A Blok', tamKapasite: 40 },
       { id: '2', ad: 'CZ-01', bina: 'B Blok', tamKapasite: 80 }
    ],
    gozetmenler: [
       { id: '101', ad: 'Ahmet Yılmaz', unvan: 'Arş. Gör.' },
       { id: '102', ad: 'Ayşe Demir', unvan: 'Öğr. Gör.' }
    ]
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      {/* Sınav Header */}
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6 relative">
        <div className="flex items-start gap-5 z-10 w-full md:w-auto">
          <Link href="/sinavlar" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
          
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-rose-50 border border-rose-100 flex flex-col items-center justify-center overflow-hidden shadow-sm dark:bg-gray-900 dark:border-rose-900/30">
            <div className="bg-rose-500 w-full text-white text-[10px] font-bold uppercase tracking-widest py-1 text-center">
              MAYIS
            </div>
            <div className="text-3xl font-black text-rose-600 dark:text-rose-400 mt-1">
              15
            </div>
          </div>
          
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold px-3 py-1 rounded-lg text-sm tracking-wide">
                {mockSinav.dersKodu}
              </span>
              <span className="bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-lg text-sm font-bold border border-green-200 dark:border-green-800/50 inline-flex items-center gap-1">
                 🟢 Planlandı
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {mockSinav.dersAd}
            </h2>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
               <span className="flex items-center gap-1">📅 {formatDate(mockSinav.tarih)}</span>
               <span className="flex items-center gap-1">🕒 {mockSinav.baslangicSaati} - {mockSinav.bitisSaati}</span>
            </div>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex shrink-0 gap-3 z-10">
          <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-sm">
            <span>✏️</span> Düzenle
          </button>
          <button className="px-4 py-2 bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-100 dark:border-rose-900 rounded-xl font-medium hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors flex items-center gap-2 shadow-sm">
            <span>🗑️</span> İptal Et
          </button>
        </div>
      </header>

      {/* Ön Bilgiler / Parametreler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-xl">👨‍🏫</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Sorumlu Öğretim Üyesi</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{mockSinav.sorumluOgretimUyesi}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center text-xl">👥</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Hedeflenen / Beklenen Öğrenci</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{mockSinav.ogrenciSayisi} Öğrenci</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Atanan Derslikler Component */}
        <div className="bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
             <div>
               <h3 className="text-xl font-bold">Atanan Derslikler</h3>
               <p className="text-gray-500 text-sm">Sınavın yapılacağı mekanlar ({mockSinav.derslikler.reduce((acc, curr) => acc + curr.tamKapasite, 0)} Kapasite)</p>
             </div>
          </div>

          <div className="grid gap-3">
            {mockSinav.derslikler.map((derslik) => (
              <div key={derslik.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                   <span className="text-2xl">🏫</span>
                   <div>
                     <p className="font-bold text-gray-800 dark:text-gray-200">{derslik.ad}</p>
                     <p className="text-xs text-gray-500">{derslik.bina}</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-xs text-gray-500">Kapasite</p>
                   <p className="font-semibold text-teal-600 dark:text-teal-400">{derslik.tamKapasite}</p>
                </div>
              </div>
            ))}
            <button className="w-full mt-2 py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-gray-500 font-medium hover:text-rose-600 hover:border-rose-200 transition-colors">
              + Başka Bir Derslik Ata
            </button>
          </div>
        </div>

        {/* Atanan Gözetmenler Component */}
        <div className="bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
             <div>
               <h3 className="text-xl font-bold">Görevli Gözetmenler</h3>
               <p className="text-gray-500 text-sm">Salonda ve koridorda görevlendirilenler</p>
             </div>
          </div>

          <div className="grid gap-3">
            {mockSinav.gozetmenler.map((gozetmen) => (
              <div key={gozetmen.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-sm">
                     {gozetmen.ad.substring(0,2).toUpperCase()}
                   </div>
                   <div>
                     <p className="font-bold text-gray-800 dark:text-gray-200">{gozetmen.ad}</p>
                     <p className="text-xs text-gray-500">{gozetmen.unvan}</p>
                   </div>
                </div>
                <Link href={`/gozetmenler/${gozetmen.id}`} className="text-indigo-600 hover:text-indigo-700 font-medium text-sm px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  Profili
                </Link>
              </div>
            ))}
            <button className="w-full mt-2 py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-gray-500 font-medium hover:text-rose-600 hover:border-rose-200 transition-colors">
              + Yeni Gözetmen Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
