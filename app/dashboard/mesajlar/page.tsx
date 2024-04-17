"use client"
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Mesajlar() {
  const [qrCode, setQrCode] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);

  // useEffect(() => {
  //   const socket = io('http://localhost:3001');

  //   socket.on('connect', () => {
  //     console.log('Connected to server');
  //   });

  //   socket.on('status', (data) => {
  //     console.log('Status:', data);
  //     setStatus(data);
  //   });

  //   socket.on('message', (message) => {
  //     setMessages(prevMessages => [...prevMessages, message]);
  //   });

  //   socket.on('status', (data) => {
  //     if (data === 'connected') {
  //       setQrCode(''); // Bağlantı kurulduğunda QR kodunu sıfırla
  //     }
  //     setStatus(data);
  //   });

  //   startWp();

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // const startWp = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch('http://localhost:3001/whatsapp/start');
  //     if (response.status === 200) {
  //       const qrResponse = await fetch('http://localhost:3001/whatsapp/qr');
        
  //       const qrData = await qrResponse.text();
  //       console.log(qrData);
  //       setQrCode(qrData);

  //       // if (qrData === null || qrData === '') {
  //       //   fetchMessages();
  //       // }

  //     } else {
  //       setError('WhatsApp başlatılamadı.');
  //     }
  //   } catch (err) {
  //     setError('Bir hata oluştu: ' + err.message);
  //   } finally {

  //     //fetchMessages();
  //     setIsLoading(false);
  //   }
  // };


  // async function fetchMessages() {
  //   try {
  //     const response = await fetch('http://localhost:3001/whatsapp/messages');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const chatMessages = await response.json();
  //     setChats(chatMessages);
  //   } catch (error) {
  //     console.error('Error fetching messages:', error);
  //   }
  // }

  if (isLoading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata: {error}</p>;
  }

  return (
    <div>
      
    </div>
  );
}
