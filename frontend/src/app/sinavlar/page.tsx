export default function SinavlarPage() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Sınavlar</h2>
          <p className="text-gray-500">Yaklaşan ve planlanmış oturumları inceleyin</p>
        </div>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-rose-200 dark:shadow-none flex items-center gap-2">
          <span>📅</span> Yeni Sınav Planla
        </button>
      </header>

      <div className="relative mt-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-8 shadow-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/40 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
            📭
          </div>
          <h3 className="text-2xl font-bold mb-2">Planlanmış Sınav Yok</h3>
          <p className="text-gray-500 max-w-sm mb-8">
            Sisteme entegrasyonu tamamladıktan sonra burası çok renkli bir takvim ve oturum listesi haline gelecek.
          </p>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-rose-400 animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="h-2 w-2 rounded-full bg-rose-400 animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="h-2 w-2 rounded-full bg-rose-400 animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
