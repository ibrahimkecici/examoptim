const mongoose = require('mongoose');

const derslikSchema = new mongoose.Schema({
  ad: {
    type: String,
    required: [true, 'Derslik adı zorunludur'],
    trim: true
  },
  kapasite: {
    type: Number,
    required: [true, 'Derslik kapasitesi zorunludur'],
    min: [1, 'Kapasite en az 1 olmalıdır']
  },
  bina: {
    type: String,
    trim: true
  },
  yerlesimPlani: {
    satirSayisi: {
      type: Number,
      min: [1, 'Satır sayısı en az 1 olmalıdır']
    },
    sutunSayisi: {
      type: Number,
      min: [1, 'Sütun sayısı en az 1 olmalıdır']
    },
    siralar: [{
      siraNo: { type: String }, // Örneğin oturma numarasını vermek istenirse (A1, A2 vs)
      satir: { type: Number, required: true },
      sutun: { type: Number, required: true },
      durum: {
        type: String,
        enum: ['Aktif', 'Pasif', 'Boşluk'],
        default: 'Aktif'
        // Aktif: Oturulabilir sıra
        // Pasif: Arızalı/Oturulamaz sıra
        // Boşluk: Yürüme yolu, koridor gibi fiziksel boşluk
      },
      kapasite: {
        type: Number,
        default: 1, // Varsayılan olarak sıralar 1 kişilik kabul edilir
        min: [1, 'Sıra kapasitesi en az 1 olmalıdır']
      },
      oturmaAlanlari: [{
        kisiSiraNo: { type: Number, required: true } // Örn: 1, 2, 3 (1. öğrenci, 2. öğrenci vb.)
      }]
    }]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Derslik', derslikSchema);
