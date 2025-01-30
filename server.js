const express = require('express');
const cors = require('cors');
const app = express();

// تكوين CORS
const corsOptions = {
  origin: '*',  // السماح لجميع النطاقات (يمكنك تخصيصه إذا كنت بحاجة)
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // السماح بالكوكيز
  maxAge: 86400,  // مدة التخزين
};

// تطبيق إعدادات CORS
app.use(cors(corsOptions));

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// تشغيل الخادم على المنفذ 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
