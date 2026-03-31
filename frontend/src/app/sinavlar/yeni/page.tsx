'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function YeniSinav() {
  const [formData, setFormData] = useState({
    dersAd: '',
    dersKodu: '',
    tarih: '',
    baslangicSaati: '',
    bitisSaati: '',
    sorumluOgretimUyesi: '',
    ogrenciSayisi: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // API Call Mockup
    setTimeout(() => {
      setLoading(false);
      alert('Sınav planı başarıyla oluşturuldu!');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      <header className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
        <Link href="/sinavlar" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-rose-600 dark:text-rose-400">Yeni Sınav Planla</h2>
          <p className="text-gray-500 text-sm">Gerekli alanları doldurarak sisteme bir oturum girin.</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8 relative overflow-hidden">
        {/* Dekoratif Işık */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          
          {/* Kolon 1 */}
          <div className="space-y-6 bg-gray-50/50 dark:bg-gray-900/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold border-b border-gray-200 dark:border-gray-700 pb-2">Ders Bilgileri</h3>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Ders Kodu <span className="text-red-500">*</span></label>
              <input required type="text" name="dersKodu" value={formData.dersKodu} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium uppercase" placeholder="MAT101" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Ders Adı <span className="text-red-500">*</span></label>
              <input required type="text" name="dersAd" value={formData.dersAd} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium" placeholder="Matematik 1" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Öğrenci Sayısı (Tahmini)</label>
              <input type="number" name="ogrenciSayisi" value={formData.ogrenciSayisi} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium" placeholder="120" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Sorumlu Öğretim Üyesi</label>
              <input type="text" name="sorumluOgretimUyesi" value={formData.sorumluOgretimUyesi} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium" placeholder="Prof. Dr. X" />
            </div>
          </div>

          {/* Kolon 2 */}
          <div className="space-y-6 bg-gray-50/50 dark:bg-gray-900/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold border-b border-gray-200 dark:border-gray-700 pb-2">Zaman Planı</h3>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Sınav Tarihi <span className="text-red-500">*</span></label>
              <input required type="date" name="tarih" value={formData.tarih} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Başlangıç <span className="text-red-500">*</span></label>
                <input required type="time" name="baslangicSaati" value={formData.baslangicSaati} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Bitiş <span className="text-red-500">*</span></label>
                <input required type="time" name="bitisSaati" value={formData.bitisSaati} onChange={handleChange} className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium" />
              </div>
            </div>
          </div>

          {/* Kolon 3 */}
          <div className="space-y-6 bg-gray-50/50 dark:bg-gray-900/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold border-b border-gray-200 dark:border-gray-700 pb-2">Atamalar</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-rose-100 dark:border-rose-900 bg-rose-50 dark:bg-rose-900/10 text-rose-800 dark:text-rose-200 text-sm">
                <p>📍 <strong>Derslik ve Gözetmen Atamaları</strong></p>
                <p className="mt-2 opacity-80">Bu seçenekler, API (backend) tamamen bağlandıktan sonra Çoklu Seçim (Multi-Select) kutuları olarak burada belirecek ve dinamik liste çekilecektir.</p>
              </div>
              
              <button disabled type="button" className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 font-medium">
                + Derslik Ekle (API Bekleniyor)
              </button>
              <button disabled type="button" className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 font-medium">
                + Gözetmen Ata (API Bekleniyor)
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button disabled={loading} type="submit" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-rose-500/30 flex items-center gap-2">
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <span>Planlamayı Kaydet</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
