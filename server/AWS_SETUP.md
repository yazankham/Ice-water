# إعداد AWS SES لإرسال البريد الإلكتروني

## الخطوات المطلوبة:

### 1. إنشاء ملف .env في مجلد server
أنشئ ملف `.env` في مجلد `server` وأضف فيه:

```env
# AWS SES Credentials
AWS_ACCESS_KEY_ID=your_aws_access_key_id_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_here

# Server Configuration
PORT=3000
```

### 2. الحصول على AWS Credentials
1. اذهب إلى AWS IAM Console
2. أنشئ مستخدم جديد أو استخدم مستخدم موجود
3. أضف صلاحيات SES (AmazonSESFullAccess)
4. احصل على Access Key ID و Secret Access Key

### 3. التأكد من توثيق البريد الإلكتروني
- بريدك الإلكتروني `yatya616@gmail.com` موثق بالفعل في AWS SES
- المنطقة: `us-east-1` (N. Virginia)
- ARN: `arn:aws:ses:us-east-1:928019487639:identity/yatya616@gmail.com`

### 4. تشغيل السيرفر
```bash
cd server
npm install
npm start
```

### 5. اختبار الإرسال
- املأ النموذج في الموقع
- اضغط على "Send"
- تحقق من بريدك الإلكتروني `yatya616@gmail.com`

## ملاحظات مهمة:
- تأكد من أن AWS credentials صحيحة
- تأكد من أن البريد الإلكتروني موثق في SES
- تأكد من أن السيرفر يعمل على المنفذ 3000 