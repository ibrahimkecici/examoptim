const mongoose = require('mongoose');

const sinavSchema = new mongoose.Schema({
  dersAd: {
    type: String,
    required: [true, 'Ders adı zorunludur'],
    trim: true
  },
  dersKodu: {
    type: String,
    required: [true, 'Ders kodu zorunludur'],
    trim: true
  },
  tarih: {
    type: Date,
    required: [true, 'Sınav tarihi zorunludur']
  },
  baslangicSaati: {
    type: String, // HH:mm formatı
    required: [true, 'Başlangıç saati zorunludur']
  },
  bitisSaati: {
    type: String, // HH:mm formatı
    required: [true, 'Bitiş saati zorunludur']
  },
  // Bir sınavın bir veya birden fazla dersliği olabilir
  derslikler: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Derslik'
  }],
  // Olası bir gözetmen dizisi
  gozetmenler: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kullanici' 
  }],
  sorumluOgretimUyesi: {
    type: String,
    required: false
  },
  ogrenciSayisi: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Sinav', sinavSchema);
