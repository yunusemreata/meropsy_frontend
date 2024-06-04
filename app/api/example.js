// pages/api/example.js
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    // CORS ayarlarını çalıştır
    await NextCors(req, res, {
        // İzin verilen metodlar
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        // İzin verilen kökenler
        origin: '*', // Tüm kökenlere izin ver
        // Kimlik doğrulama bilgileri
        credentials: true,
    });

    // İstekleri işle
    res.status(200).json({ message: 'Bu bir örnek endpoint!' });
}
