const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// تكوين CORS
const corsOptions = {
  origin: '*',  // السماح لجميع النطاقات
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // السماح بالكوكيز
  maxAge: 86400,  // مدة التخزين
};

// تطبيق إعدادات CORS
app.use(cors(corsOptions));

// استخدام Express لخدمة الملفات الثابتة (مثل HTML و CSS و JS)
app.use(express.static(path.join(__dirname, ''))); // هذا سيخدم الملفات في مجلد العمل الحالي

// المسار الرئيسي (الصفحة الرئيسية)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // أو اسم أي ملف HTML تود أن تعيده
});

// تشغيل الخادم على المنفذ 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
