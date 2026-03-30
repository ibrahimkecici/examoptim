export default function DersliklerPage() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold">Derslik Yönetimi</h2>
          <p className="text-gray-500">Sınıf planları ve kapasite kontrolü</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg flex items-center gap-2">
          <span>+</span> Derslik Oluştur
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="group overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/40 p-6 shadow-sm hover:shadow-lg transition-all relative">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Lab
              </div>
              <div className="text-gray-400">---</div>
            </div>
            <h3 className="text-xl font-bold mb-1">Örnek Sınıf {i + 1}</h3>
            <p className="text-sm text-gray-500 mb-4">Kapasite: -- Öğrenci</p>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-teal-500 rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-semibold text-teal-700 dark:text-teal-400 text-sm">Gelecekte Bağlanacak</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
