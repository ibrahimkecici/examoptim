const Derslik = require('../models/Derslik');

// Tüm derslikleri getir (Read All)
exports.getDerslikler = async (req, res) => {
  try {
    const derslikler = await Derslik.find();
    res.status(200).json({ success: true, count: derslikler.length, data: derslikler });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Tek bir derslik getir (Read One)
exports.getDerslik = async (req, res) => {
  try {
    const derslik = await Derslik.findById(req.params.id);
    if (!derslik) {
      return res.status(404).json({ success: false, message: 'Derslik bulunamadı' });
    }
    res.status(200).json({ success: true, data: derslik });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Yeni derslik oluştur (Create)
exports.createDerslik = async (req, res) => {
  try {
    const derslik = await Derslik.create(req.body);
    res.status(201).json({ success: true, data: derslik });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Derslik güncelle (Update)
exports.updateDerslik = async (req, res) => {
  try {
    const derslik = await Derslik.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!derslik) {
      return res.status(404).json({ success: false, message: 'Derslik bulunamadı' });
    }
    res.status(200).json({ success: true, data: derslik });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Derslik sil (Delete)
exports.deleteDerslik = async (req, res) => {
  try {
    const derslik = await Derslik.findByIdAndDelete(req.params.id);
    if (!derslik) {
      return res.status(404).json({ success: false, message: 'Derslik bulunamadı' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
