'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function YeniDerslik() {
  const [formData, setFormData] = useState({
    ad: '',
    kapasite: '',
    bina: '',
    satir: '',
    sutun: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // API Call Mockup (Backend'e uygun yerleşim planı objesi gönderilecek)
    setTimeout(() => {
      setLoading(false);
      alert('Derslik bilgileri başarıyla (simüle) kaydedildi!');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <header className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
        <Link href="/derslikler" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Yeni Derslik Oluştur</h2>
          <p className="text-gray-500 text-sm">Kat planı, kapasite ve fiziki bilgileri girin.</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8 relative overflow-hidden">
        {/* Dekoratif Işık */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol Kolon - Temel Bilgiler */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-100 dark:border-gray-700 pb-2">Temel Bilgiler</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Derslik / Sınıf Adı <span className="text-red-500">*</span></label>
              <input required type="text" name="ad" value={formData.ad} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium" placeholder="Örn: BZ-04" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Öğrenci Kapasitesi <span className="text-red-500">*</span></label>
              <input required type="number" min="1" name="kapasite" value={formData.kapasite} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium" placeholder="Örn: 40" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Bulunduğu Bina</label>
              <input type="text" name="bina" value={formData.bina} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium" placeholder="Örn: Fakülte Binası, 2. Kat" />
            </div>
          </div>

          {/* Sağ Kolon - Yerleşim Planı (Opsiyonel Karmaşık Veri) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-gray-100 dark:border-gray-700 pb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Yerleşim Planı
            </h3>
            
            <p className="text-sm text-gray-500">Sınıfın fiziksel matrix düzenini oluşturmak için.</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-400">Satır Sayısı</label>
                <input type="number" min="1" name="satir" value={formData.satir} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium text-center" placeholder="Örn: 5" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-400">Sütun Sayısı</label>
                <input type="number" min="1" name="sutun" value={formData.sutun} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium text-center" placeholder="Örn: 6" />
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900 rounded-xl p-4 text-sm text-teal-800 dark:text-teal-200 mt-4">
              <strong>İpucu:</strong> Gelişmiş matris yönetimi tam entegrasyon sonrası interaktif bir tablo ile detaylandırılacaktır.
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button disabled={loading} type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2">
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <span>Dersliği Kaydet</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
