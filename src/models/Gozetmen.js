const mongoose = require('mongoose');

const gozetmenSchema = new mongoose.Schema({
  ad: {
    type: String,
    required: [true, 'Gözetmen adı zorunludur'],
    trim: true
  },
  soyad: {
    type: String,
    required: [true, 'Gözetmen soyadı zorunludur'],
    trim: true
  },
  sicilNo: {
    type: String,
    required: [true, 'Sicil numarası zorunludur'],
    unique: true,
    trim: true
  },
  unvan: {
    type: String, // Örn: Arş. Gör., Öğr. Gör., Dr. vb.
    trim: true
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Geçerli bir email adresi giriniz'] // Basit email validasyonu
  },
  telefon: {
    type: String,
    required: false,
    trim: true
  },
  bolum: {
    type: String, // Bağlı olduğu bölüm veya departman
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gozetmen', gozetmenSchema);
