"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Loader2 } from "lucide-react"



export default function Paylasimlar() {

    const [icerik, setIcerik] = useState("");
    const [etiket, setEtiket] = useState("");
    const [login, setLogin] = useState(false);
    const [socialMedia, setSocialMedia] = useState("Instagram");

    const handleIcerikChange = (event: any) => {
        setIcerik(event.target.value);
    };

    const handleEtiketChange = (event: any) => {
        setEtiket(event.target.value);
    };

    function handleSocialMediaChange(socialMedia: string) {
        setSocialMedia(socialMedia);
    }

    useEffect(() => {
        // fetch('https://meropsybackend-production.up.railway.app/authfacebook/facebook', {
        //     method: 'GET', // GET veya ilgili HTTP yöntemi
        //     credentials: 'include', // Önemli: Çerezlerin ve oturum bilgilerinin gönderilmesini sağlar
        //     headers: {
        //         'Content-Type': 'application/json', // İçerik tipi belirtilir
        //         // Gerekirse diğer başlıklar buraya eklenebilir
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data); // Gelen veriyi konsolda göster
        //     })
        //     .catch(error => {
        //         console.error('Hata:', error); // Hata durumunda hata mesajını konsolda göster
        //     });
    }, []);

    function handleSocialLogin(social: string) {
        setLogin(true);

        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        console.log(userId);
        console.log(token);

        if(social == "Instagram") {
            
        }

    }

    function postShare() {

        if (socialMedia == "Instagram") {
            fetch('https://meropsybackend-production.up.railway.app/instagram/upload-post/USER_ID', {
                method: 'POST', // GET veya ilgili HTTP yöntemi
                credentials: 'include', // Önemli: Çerezlerin ve oturum bilgilerinin gönderilmesini sağlar
                headers: {
                    'Content-Type': 'application/json', // İçerik tipi belirtilir
                    // Gerekirse diğer başlıklar buraya eklenebilir
                },
                body: JSON.stringify({
                    icerik: icerik,
                    etiket: etiket
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Gelen veriyi konsolda göster
                })
                .catch(error => {
                    console.error('Hata:', error); // Hata durumunda hata mesajını konsolda göster
                });
        }


        console.log("Paylaşım Yapıldı");
    }



    return (
        <>
            <CardTitle className="text-[#4B465C] mb-5">Paylaşımlar / Yeni Paylaşım</CardTitle>

            <div className="flex flex-row">
                <div className="w-1/4">
                    <div className="flex flex-row">
                        {socialMedia == "Facebook" ? (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.44772 14.4477 7 15 7H18V3H15C12.2386 3 10 5.23858 10 8V10H7" stroke="#5D5FEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        ) : (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center' onClick={() => handleSocialMediaChange("Facebook")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.44772 14.4477 7 15 7H18V3H15C12.2386 3 10 5.23858 10 8V10H7" stroke="#A8AAAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        )}


                        {socialMedia == "Instagram" ? (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center ml-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="#eb4034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="12" r="3" stroke="#eb4034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.5 7.49999V7.50099" stroke="#eb4034" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                        ) : (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center ml-5'
                                onClick={
                                    () => {
                                        handleSocialMediaChange("Instagram")
                                        handleSocialLogin("Instagram")
                                    }

                                }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="#A8AAAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="12" r="3" stroke="#A8AAAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.5 7.49999V7.50099" stroke="#A8AAAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        )

                        }

                        {socialMedia == "Twitter" ? (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center ml-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="23" width="23" viewBox="0 0 512 512" fill='#140d0c'>
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>
                        ) : (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center ml-5' onClick={() => handleSocialMediaChange("Twitter")}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="23" width="23" viewBox="0 0 512 512" fill='#A8AAAE'>
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>
                        )

                        }


                    </div>

                    {socialMedia == "Instagram" ? (
                        <div className="flex flex-row mt-5">
                            <span className="rounded bg-[#FF9F43] px-4 py-1">
                                <span className="text-white">Gönderi</span>
                            </span>
                            <span className="rounded bg-[#7367F0] px-4 py-1 mx-5">
                                <span className="text-white">Reels</span>
                            </span>
                            <span className="rounded bg-[#20C997] px-4 py-1 ">
                                <span className="text-white">Hikaye</span>
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-row mt-5">

                        </div>
                    )

                    }


                </div>
            </div>


            {login ? (
                <div className="flex justify-center items-center h-screen">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <h2>Veriler Çekiliyor</h2>
                </div>

            ) : (
                socialMedia == "Instagram" ? (
                    <div className="flex flex-row mt-5">
                        <div className="w-4/6 container">
                            <Card className='shadow-md'>
                                <CardHeader className="flex flex-row items-center justify-start">
                                    <h2 className="text-[#4B465C] text-lg font-semibold">Yeni Paylaşım</h2>
                                </CardHeader>

                                <div className="w-full my-5">
                                    <hr />
                                </div>

                                <CardContent className="container">

                                    <h2 className='text-[#4B465C] mb-5'>
                                        İçerik
                                    </h2>
                                    <textarea className="w-full h-32 rounded-md border bg-white border-[#E4E6EF] p-2"
                                        id='icerik'
                                        placeholder="İçerik giriniz..."
                                        value={icerik}
                                        onChange={handleIcerikChange} />

                                    <h2 className='text-[#4B465C] mb-5 mt-5'>
                                        Etiketler
                                    </h2>

                                    <input className="w-full rounded-md border bg-white border-[#E4E6EF] p-2"
                                        placeholder="Etiket giriniz..."
                                        value={etiket}
                                        onChange={handleEtiketChange} />

                                    <h2 className='text-[#4B465C] mb-5 mt-5'>
                                        Konum
                                    </h2>

                                    <input className="w-full rounded-md border bg-white border-[#E4E6EF] p-2" placeholder="Konum giriniz..." />

                                    <h2 className='text-[#4B465C] mb-5 mt-5'>
                                        Medya
                                    </h2>

                                    <div className="rounded w-full border">
                                        <div className="flex justify-start items-start w-full">
                                            <img src="https://picsum.photos/200/300" className="w-1/4 h-32 object-cover rounded mx-3 my-3" />
                                        </div>

                                        <div className="flex justify-end items-end w-full h-full mx-3 my-3">
                                            <button className="rounded px-4 py-1 mx-5">
                                                <span className="text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                                                        <path d="M21.8748 9.87187H21.8894" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M21.8748 9.87187H21.8894" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <rect x="5.83331" y="4.93604" width="23.3333" height="19.7436" rx="3" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <rect x="5.83331" y="4.93604" width="23.3333" height="19.7436" rx="3" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.83331 18.5096L11.6666 13.5737C13.0203 12.4715 14.688 12.4715 16.0416 13.5737L23.3333 19.7435" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.83331 18.5096L11.6666 13.5737C13.0203 12.4715 14.688 12.4715 16.0416 13.5737L23.3333 19.7435" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20.4167 17.2754L21.875 16.0415C23.2287 14.9393 24.8964 14.9393 26.25 16.0415L29.1667 18.5094" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20.4167 17.2754L21.875 16.0415C23.2287 14.9393 24.8964 14.9393 26.25 16.0415L29.1667 18.5094" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-start items-center">
                                        <button className="rounded bg-[#7367F0] px-4 py-1 mx-2 my-5">
                                            <span className="text-white">Paylaş</span>
                                        </button>
                                        <button className="rounded bg-[#FF9F43] px-4 py-1 mx-2 my-5">
                                            <span className="text-white">Planla</span>
                                        </button>
                                        <button className="rounded bg-[#4B465C] px-4 py-1 mx-2 my-5">
                                            <span className="text-white">Taslak Olarak Kaydet</span>
                                        </button>
                                    </div>
                                </CardContent>


                            </Card>
                        </div>
                        <div className="w-2/6">
                            <Card className='shadow-md'>
                                <CardHeader className="flex flex-row items-center justify-start">
                                    <h2 className="text-[#4B465C] text-lg font-semibold">Önizleme</h2>
                                </CardHeader>

                                <div className="w-full my-5">
                                    <hr />
                                </div>

                                <CardContent className="container">

                                    <div className="flex flex-row">
                                        <div className="w-1/6">
                                            <img src="https://picsum.photos/200/300" className="w-2/4 h-10 object-cover rounded-full mx-3 my-3" />
                                        </div>
                                        <div className="w-5/6">
                                            <div className="flex flex-row items-center justify-start">
                                                <span className="text-[#4B465C] text-lg font-semibold">MixPost</span>
                                            </div>
                                            <div className="flex flex-row items-center justify-start">
                                                <span className="text-[#4B465C] text-xs font-semibold">1m</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <img src="https://picsum.photos/200/300" className="w-4/4 h-auto object-cover rounded mx-3 my-3" />
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <span className="text-[#4B465C] text-lg font-semibold">{icerik}</span>
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <span className="text-[#4B465C] text-lg font-semibold">{etiket}</span>
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <span className="text-[#4B465C] text-lg font-semibold">Konum</span>
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <span className="text-[#4B465C] text-lg font-semibold">Medya</span>
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <span className="text-[#4B465C] text-lg font-semibold">Paylaşım Zamanı</span>
                                    </div>

                                    <div className="flex flex-row items-center justify-start">
                                        <span className="text-[#4B465C] text-lg font-semibold">Paylaşım Durumu</span>
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row mt-5">

                    </div>
                )
            )}




        </>
    )
}
