const mongoose = require('mongoose');

const musaitlikSchema = new mongoose.Schema({
  gozetmen_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kullanici', // Sisteminize 'Kullanici' şeması eklendiğinde referans alacaktır
    required: [true, 'Gözetmen ID zorunludur']
  },
  tarih: {
    type: Date,
    required: [true, 'Müsaitlik tarihi zorunludur']
  },
  baslangicSaati: {
    type: String, // Saatleri HH:mm (Ör: "09:00") formatında tutmak pratiktir
    required: [true, 'Başlangıç saati zorunludur']
  },
  bitisSaati: {
    type: String, // HH:mm formatı
    required: [true, 'Bitiş saati zorunludur']
  },
  durum: {
    type: String,
    enum: ['Müsait', 'Meşgul'],
    default: 'Müsait'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Musaitlik', musaitlikSchema);
