import Link from 'next/link';

// Şablon olarak kullanacağımız parametre arayüzü
export default function DerslikDetay({ params }: { params: { id: string } }) {
  // Gerçek uygulamada burada params.id üzerinden API'den veri çekilecek.
  // Aşağıdaki mock datayı veritabanı şemanıza ("ad", "bina", "kapasite", "yerlesimPlani") tam uygun hazırladım.
  
  const mockDerslik = {
    _id: params.id,
    ad: 'Bilişim Lab - Z14',
    bina: 'Mühendislik Fakültesi',
    kapasite: 30,
    aktifSira: 26,
    yerlesimPlani: {
      satirSayisi: 5,
      sutunSayisi: 6,
      siralar: [
        // Sadece görsel amaçlı rastgele aktif/pasif/boşluk dağılımı (1. satır 3. sütun koridor olsun örneğin)
        ...Array.from({ length: 5 }, (_, r) => 
          Array.from({ length: 6 }, (_, c) => {
            const satir = r + 1;
            const sutun = c + 1;
            let durum = 'Aktif';
            if (sutun === 3) durum = 'Boşluk'; // Koridor
            else if (satir === 5 && sutun === 6) durum = 'Pasif'; // Kırık/Bozuk Sıra
            
            return {
              siraNo: `${String.fromCharCode(64 + satir)}${sutun}`, // A1, A2 vs.
              satir,
              sutun,
              durum,
              kapasite: 1
            };
          })
        ).flat()
      ]
    }
  };

  // Dinamik tabloyu bastırmak için matris (2D dizi) haline getirelim
  const grid = [];
  for (let r = 1; r <= mockDerslik.yerlesimPlani.satirSayisi; r++) {
    const row = mockDerslik.yerlesimPlani.siralar.filter(s => s.satir === r);
    // Sütun sırasına göre diz
    row.sort((a, b) => a.sutun - b.sutun);
    grid.push(row);
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      {/* Header Kısmı */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6 relative">
        <div className="flex items-start gap-4 z-10">
          <Link href="/derslikler" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">{mockDerslik.ad}</h2>
              <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Detay
              </span>
            </div>
            <p className="text-gray-500 font-medium">📍 {mockDerslik.bina}</p>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex gap-3 z-10">
          <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-sm">
            <span>✏️</span> Düzenle
          </button>
          <button className="px-4 py-2 bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-100 dark:border-rose-900 rounded-xl font-medium hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors flex items-center gap-2 shadow-sm">
            <span>🗑️</span> Sil
          </button>
        </div>
      </header>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center text-xl">👥</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Toplam Kapasite</p>
            <p className="text-2xl font-bold">{mockDerslik.kapasite} Öğrenci</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-xl">🪑</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Aktif Oturulabilir Sıra</p>
            <p className="text-2xl font-bold">{mockDerslik.aktifSira}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center text-xl">⚠️</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Pasif / Arızalı Sıra</p>
            <p className="text-2xl font-bold">1</p> {/* Mock veride 1 tane arızalı yaptık */}
          </div>
        </div>
      </div>

      {/* Fiziki Oturma Planı (Görsel Matris) */}
      <div className="bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h3 className="text-xl font-bold">Fiziki Oturma Planı</h3>
            <p className="text-gray-500 text-sm">Sınıfın grid (matris) görünümü</p>
          </div>
          <div className="flex gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-md bg-teal-500"></span> Aktif</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-md bg-gray-200 dark:bg-gray-700"></span> Boşluk/Koridor</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-md bg-rose-500 border-rose-500"></span> Pasif/Bozuk</div>
          </div>
        </div>

        {/* Tahta / Kürsü Kısmı */}
        <div className="w-1/2 mx-auto h-12 mb-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm shadow-inner relative">
          Öğretmen / Tahta
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 text-[10px] text-gray-400">
            <span>Ön</span> <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        {/* Grid Matrisi */}
        <div 
          className="mx-auto grid gap-4 place-items-center" 
          style={{ gridTemplateColumns: `repeat(${mockDerslik.yerlesimPlani.sutunSayisi}, minmax(0, 1fr))` }}
        >
          {grid.map((row, rowIndex) => (
            row.map((sira, colIndex) => {
              
              const isAktif = sira.durum === 'Aktif';
              const isBosluk = sira.durum === 'Boşluk';
              
              // Boşluk/Koridor ise görünmez ama yer kaplayan bir matris hücresi çiziyoruz
              if (isBosluk) {
                return (
                  <div key={`${rowIndex}-${colIndex}`} className="w-16 h-16 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700 opacity-30"></span>
                  </div>
                );
              }

              // Normal Oturulabilir veya Bozuk Sıra Gösterimi
              return (
                <div 
                  key={`${rowIndex}-${colIndex}`} 
                  title={`${sira.siraNo} - ${sira.durum}`}
                  className={`
                    group relative w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-md transition-all 
                    ${isAktif 
                      ? 'bg-teal-50 dark:bg-teal-900/30 border-2 border-teal-500 text-teal-700 dark:text-teal-300 hover:bg-teal-100 hover:scale-110 cursor-pointer' 
                      : 'bg-rose-50/50 dark:bg-rose-900/20 border-2 border-rose-300 dark:border-rose-800/50 text-rose-500 dark:text-rose-400 opacity-60 cursor-not-allowed'}
                  `}
                >
                  <span className="text-xs font-black">{sira.siraNo}</span>
                  {/* Minik "kişi/kapasite" işareti */}
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({length: sira.kapasite}).map((_, i) => (
                      <span key={i} className={`w-1.5 h-1.5 rounded-full ${isAktif ? 'bg-teal-400' : 'bg-rose-400'}`}></span>
                    ))}
                  </div>

                  {/* Tooltip Hover Info */}
                  <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                    {isAktif ? 'Oturmaya Uygun' : 'Arızalı / Kullanımdışı'}
                  </div>
                </div>
              );
            })
          ))}
        </div>
      </div>
    </div>
  );
}
