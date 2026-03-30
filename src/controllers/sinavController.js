const Sinav = require('../models/Sinav');

// Tüm sınavları getir (Read All)
exports.getSinavlar = async (req, res) => {
  try {
    const sinavlar = await Sinav.find()
      .populate('derslikler') // İlgili derslikleri çekiyoruz
      .populate('gozetmenler'); // İlgili gözetmenleri çekiyoruz
    res.status(200).json({ success: true, count: sinavlar.length, data: sinavlar });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Tek bir sınav getir (Read One)
exports.getSinav = async (req, res) => {
  try {
    const sinav = await Sinav.findById(req.params.id)
      .populate('derslikler')
      .populate('gozetmenler');
      
    if (!sinav) {
      return res.status(404).json({ success: false, message: 'Sınav bulunamadı' });
    }
    res.status(200).json({ success: true, data: sinav });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Yeni sınav oluştur (Create)
exports.createSinav = async (req, res) => {
  try {
    const sinav = await Sinav.create(req.body);
    res.status(201).json({ success: true, data: sinav });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Sınav güncelle (Update)
exports.updateSinav = async (req, res) => {
  try {
    const sinav = await Sinav.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!sinav) {
      return res.status(404).json({ success: false, message: 'Sınav bulunamadı' });
    }
    res.status(200).json({ success: true, data: sinav });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Sınav sil (Delete)
exports.deleteSinav = async (req, res) => {
  try {
    const sinav = await Sinav.findByIdAndDelete(req.params.id);
    if (!sinav) {
      return res.status(404).json({ success: false, message: 'Sınav bulunamadı' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
