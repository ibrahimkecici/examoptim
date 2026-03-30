const Musaitlik = require('../models/Musaitlik');

// Tüm müsaitlikleri getir (Read All)
exports.getMusaitlikler = async (req, res) => {
  try {
    // gozetmen_id referansını populate ediyoruz (Eğer Kullanici modeli olsaydı)
    const musaitlikler = await Musaitlik.find();
    res.status(200).json({ success: true, count: musaitlikler.length, data: musaitlikler });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Tek bir müsaitlik getir (Read One)
exports.getMusaitlik = async (req, res) => {
  try {
    const musaitlik = await Musaitlik.findById(req.params.id);
    if (!musaitlik) {
      return res.status(404).json({ success: false, message: 'Müsaitlik bulunamadı' });
    }
    res.status(200).json({ success: true, data: musaitlik });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Yeni müsaitlik oluştur (Create)
exports.createMusaitlik = async (req, res) => {
  try {
    const musaitlik = await Musaitlik.create(req.body);
    res.status(201).json({ success: true, data: musaitlik });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Müsaitlik güncelle (Update)
exports.updateMusaitlik = async (req, res) => {
  try {
    const musaitlik = await Musaitlik.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!musaitlik) {
      return res.status(404).json({ success: false, message: 'Müsaitlik bulunamadı' });
    }
    res.status(200).json({ success: true, data: musaitlik });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Müsaitlik sil (Delete)
exports.deleteMusaitlik = async (req, res) => {
  try {
    const musaitlik = await Musaitlik.findByIdAndDelete(req.params.id);
    if (!musaitlik) {
      return res.status(404).json({ success: false, message: 'Müsaitlik bulunamadı' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
