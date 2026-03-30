require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

// Rota dosyalarını içeri aktar
const derslikRoutes = require('./src/routes/derslikRoutes');
const gozetmenRoutes = require('./src/routes/gozetmenRoutes');
const musaitlikRoutes = require('./src/routes/musaitlikRoutes');
const sinavRoutes = require('./src/routes/sinavRoutes');

// Veritabanına bağlan
connectDB();

const app = express();

// Middleware'ler
app.use(cors()); // Farklı domainlerden (örn. React, Vue) istek atılabilmesi için CORS aktif
app.use(express.json()); // Gelen isteklerdeki JSON verilerini parse edebilmek için
app.use(express.urlencoded({ extended: false }));

// Ana test rotası
app.get('/', (req, res) => {
  res.send('ExamOptim API Sunucusu Çalışıyor...');
});

// API rotalarını eşleştir
app.use('/api/derslikler', derslikRoutes);
app.use('/api/gozetmenler', gozetmenRoutes);
app.use('/api/musaitlikler', musaitlikRoutes);
app.use('/api/sinavlar', sinavRoutes);

// Kalan geçersiz rotalar için basit bir hata yakalayıcı (404)
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Geçersiz Endpoint / Route bulunamadı' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı. Mod: ${process.env.NODE_ENV || 'development'}`);
});
