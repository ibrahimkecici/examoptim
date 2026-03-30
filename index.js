require('dotenv').config();
const connectDB = require('./src/config/db');

// Modelleri içeri aktarıyoruz
const Derslik = require('./src/models/Derslik');
const Gozetmen = require('./src/models/Gozetmen');
const Musaitlik = require('./src/models/Musaitlik');
const Sinav = require('./src/models/Sinav');

console.log("MongoDB'ye bağlanılmaya çalışılıyor...");

connectDB().then(async () => {
  console.log("Test Başarılı! Veritabanı bağlantısı dogrulandı.");

  try {
    // Şemaları Compass'ta görebilmeniz için geçici bir Derslik (Sınıf) ve Gözetmen belgesi oluşturuyoruz.

    const varMi = await Derslik.findOne({ ad: 'Test Sınıfı - 101' });

    if (!varMi) {
      // Örnek bir derslik oluştur
      await Derslik.create({
        ad: 'Test Sınıfı - 101',
        kapasite: 30,
        bina: 'A Blok',
        yerlesimPlani: {
          satirSayisi: 5,
          sutunSayisi: 6,
          siralar: [
            { satir: 1, sutun: 1, durum: 'Aktif', kapasite: 1, oturmaAlanlari: [{ kisiSiraNo: 1 }] }
          ]
        }
      });
      console.log("--> MongoDB koleksiyonlarını (Collection) oluşturmak için örnek bir 'Derslik' kaydı eklendi!");

      // Örnek bir gözetmen oluştur
      await Gozetmen.create({
        ad: 'Ahmet',
        soyad: 'Yılmaz',
        sicilNo: '123456',
        unvan: 'Arş. Gör.',
        bolum: 'Bilgisayar Mühendisliği'
      });
      console.log("--> Örnek bir 'Gözetmen' kaydı eklendi!");

    } else {
      console.log("--> Örnek kayıtlar zaten mevcut. Artık MongoDB Compass üzerinde görebilirsiniz.");
    }

  } catch (error) {
    console.error("Örnek kayıt eklenirken hata oluştu:", error);
  } finally {
    console.log("İşlem tamamlandı, süreç kapatılıyor.");
    setTimeout(() => process.exit(0), 1000);
  }

}).catch(err => {
  console.error("Test Başarısız! Bağlantı kurulamadı.", err);
  process.exit(1);
});
