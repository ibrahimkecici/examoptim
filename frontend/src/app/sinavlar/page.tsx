import Link from 'next/link';

// API entegrasyonuna kadar gösterilecek sahte veriler
const mockSinavlar = [
  { id: 1, dersKodu: 'MAT101', dersAd: 'Matematik 1', tarih: '2026-05-15', baslangicSaati: '09:00', bitisSaati: '11:00', ogrenciSayisi: 120, sorumlu: 'Prof. Dr. Ali Veli' },
  { id: 2, dersKodu: 'FİZ102', dersAd: 'Fizik 2', tarih: '2026-05-16', baslangicSaati: '13:30', bitisSaati: '15:30', ogrenciSayisi: 85, sorumlu: 'Doç. Dr. Ayşe Yılmaz' },
  { id: 3, dersKodu: 'BİL201', dersAd: 'Veri Yapıları', tarih: '2026-05-18', baslangicSaati: '10:00', bitisSaati: '12:00', ogrenciSayisi: 60, sorumlu: 'Dr. Öğr. Üyesi Mehmet Kaya' },
];

// Tarihi güzel formata dönüştüren yardımcı fonksiyon
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  return new Date(dateString).toLocaleDateString('tr-TR', options);
};

export default function SinavlarPage() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Sınav Planları</h2>
          <p className="text-gray-500">Yaklaşan ve planlanmış oturumları inceleyin</p>
        </div>
        <Link href="/sinavlar/yeni" className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-rose-200 dark:shadow-none flex items-center gap-2">
          <span>📅</span> Yeni Sınav Planla
        </Link>
      </header>

      {/* Gelecek Sınavların Listelendiği Alan */}
      <div className="grid grid-cols-1 gap-4 mt-8">
        {mockSinavlar.map((sinav) => (
          <div key={sinav.id} className="group relative overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/40 p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Dekoratif Işık */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-rose-500/10 transition-colors"></div>

            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto text-center md:text-left flex-col md:flex-row">
              {/* Tarih Takvim İkonu Kutusu */}
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-rose-50 border border-rose-100 flex flex-col items-center justify-center overflow-hidden shadow-inner dark:bg-gray-900 dark:border-rose-900/30">
                <div className="bg-rose-500 w-full text-white text-[10px] font-bold uppercase tracking-widest py-1 text-center">
                  MAYIS
                </div>
                <div className="text-3xl font-black text-rose-600 dark:text-rose-400 mt-1">
                  {new Date(sinav.tarih).getDate()}
                </div>
              </div>

              {/* Sınav Detayları */}
              <div>
                <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold px-2 py-0.5 rounded text-xs">
                    {sinav.dersKodu}
                  </span>
                  <p className="text-sm font-semibold text-rose-500">
                    🕒 {sinav.baslangicSaati} - {sinav.bitisSaati}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{sinav.dersAd}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 justify-center md:justify-start">
                  <span className="flex items-center gap-1">👨‍🏫 {sinav.sorumlu}</span>
                  <span className="flex items-center gap-1">👥 {sinav.ogrenciSayisi} Öğrenci</span>
                </div>
              </div>
            </div>

            {/* Aksiyon Alanı */}
            <div className="relative z-10 w-full md:w-auto flex md:flex-col justify-between items-center md:items-end gap-2 border-t md:border-t-0 border-gray-100 dark:border-gray-800 pt-4 md:pt-0">
              <span className="bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-2 rounded-xl text-xs font-bold border border-green-200 dark:border-green-800/50 inline-flex items-center gap-1">
                 🟢 Planlandı
              </span>
              <Link href={`/sinavlar/${sinav.id}`} className="px-5 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm text-sm inline-block">
                Detayları İncele
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mock data bilgisi */}
      <div className="text-center mt-6">
        <span className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm text-xs font-medium text-gray-400">
          Not: Sayfadaki içerikler şimdilik sahte (mock) verilerdir. Gerçekleşecek API entegrasyonuyla canlıya alınacaktır.
        </span>
      </div>
    </div>
  );
}
