const Gozetmen = require('../models/Gozetmen');

// Tüm gözetmenleri getir (Read All)
exports.getGozetmenler = async (req, res) => {
  try {
    const gozetmenler = await Gozetmen.find();
    res.status(200).json({ success: true, count: gozetmenler.length, data: gozetmenler });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Tek bir gözetmen getir (Read One)
exports.getGozetmen = async (req, res) => {
  try {
    const gozetmen = await Gozetmen.findById(req.params.id);
    if (!gozetmen) {
      return res.status(404).json({ success: false, message: 'Gözetmen bulunamadı' });
    }
    res.status(200).json({ success: true, data: gozetmen });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Yeni gözetmen oluştur (Create)
exports.createGozetmen = async (req, res) => {
  try {
    const gozetmen = await Gozetmen.create(req.body);
    res.status(201).json({ success: true, data: gozetmen });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Gözetmen güncelle (Update)
exports.updateGozetmen = async (req, res) => {
  try {
    const gozetmen = await Gozetmen.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!gozetmen) {
      return res.status(404).json({ success: false, message: 'Gözetmen bulunamadı' });
    }
    res.status(200).json({ success: true, data: gozetmen });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Gözetmen sil (Delete)
exports.deleteGozetmen = async (req, res) => {
  try {
    const gozetmen = await Gozetmen.findByIdAndDelete(req.params.id);
    if (!gozetmen) {
      return res.status(404).json({ success: false, message: 'Gözetmen bulunamadı' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
