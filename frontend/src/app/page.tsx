import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      <header className="flex flex-col gap-2">
        <h2 className="text-4xl font-extrabold tracking-tight">KONTROL PANELİ</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Sınav, derslik ve gözetmen yönetimini tek bir noktadan yapın.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard 
          title="Toplam Sınav"
          count={0}
          desc="Henüz eklenmiş sınav yok."
          color="from-pink-500 to-rose-500"
          href="/sinavlar"
        />
        <DashboardCard 
          title="Sistemdeki Gözetmenler"
          count={0}
          desc="Şu an için gözetmen kaydı bulunamadı."
          color="from-sky-400 to-indigo-500"
          href="/gozetmenler"
        />
        <DashboardCard 
          title="Kayıtlı Derslikler"
          count={0}
          desc="Oturum düzenlemeleri ve derslik yönetimleri."
          color="from-emerald-400 to-teal-500"
          href="/derslikler"
        />
      </div>
      
      <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-900 border border-indigo-100 dark:border-indigo-900 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Sistem API'sine Bağlanılmadı</h3>
          <p className="mt-2 text-gray-500">
            Node.js backend (port 5001) daha sonra bu arayüze entegre edilecek ve 0 yazan değerler gerçekçi verilerle dolacaktır.
          </p>
        </div>
        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center animate-pulse">
          🔌
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, count, desc, color, href }: { title: string, count: number, desc: string, color: string, href: string }) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 block">
      <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
      <div className="relative z-10">
        <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-2">{title}</h4>
        <div className="text-5xl font-black text-gray-800 dark:text-gray-100 mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r hover-gradient-color">
           <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{count}</span>
        </div>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </Link>
  );
}
