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

import Modal from "@/components/modal/modal"
import { set } from 'react-hook-form'
import TweetWithMedia from '@/page/tweetWithMedia'
import TweetSender from '@/page/tweet'
import VideoUploader from '@/page/youtube'
import FileUploader from '@/page/uploadFile'
import FileList from '@/page/fileList'

interface Media {
    id: string;
    url: string;
    description?: string;
}



export default function Paylasimlar() {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => {
        getMedias();
        setModalOpen(true);
    };

    const [medias, setMedias] = useState([] as any);

    const closeModal = () => {
        setModalOpen(false);
    };

    const [login, setLogin] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [socialMedia, setSocialMedia] = useState("Facebook");
    const [instagramType, setInstagramType] = useState("Gönderi");
    const [tweetterType, setTweetterType] = useState("tweet");

    const [viewVideos, setViewVideos] = useState(false);
    const [viewVideosUpload, setViewVideosUpload] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const [userName, setuserName] = useState("");
    const [userProfile, setUserProfile] = useState('');
    const [shareButton, setShareButton] = useState("Paylaş");

    const [icerik, setIcerik] = useState('');
    const [etiket, setEtiket] = useState('');

    // Instagram paylaşım
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const [tweetText, setTweetText] = useState('');
    const [response, setResponse] = useState(null);


    const handleIcerikChange = (event: any) => {
        setIcerik(event.target.value);
    };

    const handleEtiketChange = (event: any) => {
        setEtiket(event.target.value);
    };

    const handleVideoUrlChange = (newUrl: string) => {
        setVideoUrl(newUrl);
    };

    function handleSocialMediaChange(socialMedia: string) {
        setSocialMedia(socialMedia);
        handleTwitterUserProfile();
    }

    function handleInstagramTypeChange(instagramType: string) {
        setInstagramType(instagramType);
    }

    function handleTweeterTypeChange(tweetterType: string) {
        setTweetterType(tweetterType);
    }

    const handleFileChange = (event: any) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        };

        if (file) {
            setFile(file);
            console.log(file);
            reader.readAsDataURL(file);
        }
    };

    const handleCaptionChange = (event: any) => {
        if (event.target.value.length > 2200) {
            alert('Maksimum 2200 karakter olabilir.');
            return;
        }

        if (event.target.value.length > 0) {
            if (socialMedia == "Twitter") {
                setTweetText(event.target.value);
            } else if (socialMedia == "Instagram") {
                setCaption(event.target.value);
            }
        }

    };

    useEffect(() => {
        //handleSocialLogin("Instagram");
        setTweetterType("tweet");
        setLogin(false);
    }, []);

    function handleSocialLogin(social: string) {
        setLogin(true);

        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        console.log("userId: " + userId);
        console.log("token: " + token);

        if (social == "Instagram") {
            const socialMedia = 'instagram'; // Sosyal medya türünü buraya yerleştirin (örn. "Facebook", "Instagram" vs.)

            const url = `https://meropsybackend-production.up.railway.app/social/socialfindid/${userId}/${socialMedia}`;

            fetch(url, {
                method: 'GET', // İstek tipi, bu durumda GET
                headers: {
                    'Content-Type': 'application/json', // İçerik tipi belirtilir
                    'token': `${token}` // Authorization header'ı eklenir
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Data:', data); // Gelen veriyi konsolda göster

                    const name = data.data[0].email;
                    const password = data.data[0].password;

                    console.log("name: " + name);
                    console.log("password: " + password);


                    const loginUrl = `https://meropsybackend-production.up.railway.app/instagram/login`;

                    fetch(loginUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "username": name,
                            "password": password
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Login Data:', data);
                            const profile = data.image;
                            const username = data.full_name;

                            setuserName(username);
                            setUserProfile(profile);

                            if (data.success == true) {
                                setLogin(false);
                                //setMessage("Giriş Başarılı");
                            } else {
                                setLogin(false);
                                setError("Giriş Başarısız. Lütfen daha sonra tekrar deneyiniz. " + data.message);
                            }
                        })
                        .catch(error => {
                            console.error('Hata:', error); // Hata durumunda konsolda hata mesajını göster
                            setLogin(false);
                        });
                })
                .catch(error => {
                    console.error('Hata:', error); // Hata durumunda konsolda hata mesajını göster
                    setLogin(false);
                });
        }

    }

    function getMedias() {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        setLogin(true);

        const url = `https://meropsybackend-production.up.railway.app/medya/file/list/${userId}`;

        fetch(url, {
            method: 'GET', // İstek tipi, bu durumda GET
            headers: {
                'Content-Type': 'application/json', // İçerik tipi belirtilir
                'token': `${token}` // Authorization header'ı eklenir
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data:', data); // Gelen veriyi konsolda göster

                setMedias(data);

                setLogin(false)

            })
            .catch(error => {
                console.error('Hata:', error); // Hata durumunda konsolda hata mesajını göster
            });

    }

    //Instagram paylaşım
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!file) {
            alert('Lütfen bir dosya seçin.');
            return;  // Ensure there's a file before submitting
        }

        const formData = new FormData();
        formData.append('file', file);

        if (caption) {
            formData.append('caption', caption);
        }

        const userId = localStorage.getItem('userId');  // Replace 'USER_ID' with the actual user ID

        if (instagramType == "Gönderi") {
            try {
                setShareButton("Paylaşılıyor...");
                const response = await fetch('https://meropsybackend-production.up.railway.app/instagram/upload-post/' + userId, {
                    method: 'POST',
                    credentials: 'omit',
                    body: formData
                });
                const data = await response.json();
                console.log(data);
                alert('Yükleme başarılı!');
                setFile(null);
                setCaption('');
                setShareButton("Paylaş");

                const fileInputElement = document.getElementById('fileInput') as HTMLInputElement;
                if (fileInputElement) {
                    fileInputElement.value = '';
                } else {
                    console.error('Dosya input öğesi bulunamadı.');
                }
                setImagePreviewUrl(null);


            } catch (error) {
                console.error('Yükleme sırasında bir hata oluştu:', error);
                alert('Yükleme başarısız.');
            }
        } else if (instagramType == "Hikaye") {
            try {
                setShareButton("Paylaşılıyor...");
                const response = await fetch('https://meropsybackend-production.up.railway.app/instagram/upload-story/' + userId, {
                    method: 'POST',
                    credentials: 'omit',
                    body: formData
                });
                const data = await response.json();
                console.log(data);
                alert('Yükleme başarılı!');
                setFile(null);
                setCaption('');
                setShareButton("Paylaş");

                const fileInputElement = document.getElementById('fileInput') as HTMLInputElement;
                if (fileInputElement) {
                    fileInputElement.value = '';
                } else {
                    console.error('Dosya input öğesi bulunamadı.');
                }
                setImagePreviewUrl(null);


            } catch (error) {
                console.error('Yükleme sırasında bir hata oluştu:', error);
                alert('Yükleme başarısız.');
            }
        }


    };

    //Twitter paylaşım
    const handleTwitterUserProfile = async () => {
        const userId = localStorage.getItem('userId');
        const url = `https://meropsybackend-production.up.railway.app/twitter/me?user_id=${userId}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                //setProfile(data.data);
                console.log(data.data);
                setuserName(data.data.full_name);
                setUserProfile(data.data.image);
            } else {
                throw new Error(data.message || 'Failed to get Twitter profile');
            }
        } catch (err: any) {
            setError(err.message);
        }

    }

    const viewVideosMedia = () => {
        if (viewVideos) {
            setViewVideos(false);
        } else {
            setViewVideos(true);
        }
    }

    const viewVideosUploadMedia = () => {
        if (viewVideosUpload) {
            setViewVideosUpload(false);
        } else {
            setViewVideosUpload(true);
        }
    }

    const seeUrl = () => {
        console.log(videoUrl);
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


                        {socialMedia == "Youtube" ? (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center ml-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#ff0000' stroke="#ff0000" height="23" width="23" viewBox="0 0 576 512">
                                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                </svg>
                            </span>
                        ) : (
                            <span className='rounded-full bg-[#F2F3F5] w-10 h-10 flex items-center justify-center ml-5' onClick={() => handleSocialMediaChange("Youtube")}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#A8AAAE' stroke="#A8AAAE" height="23" width="23" viewBox="0 0 576 512">
                                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                </svg>
                            </span>
                        )

                        }


                    </div>

                    <div className="flex flex-row mt-5">
                        {socialMedia === "Instagram" ? (
                            // Instagram için içerik
                            <div>
                                <span className={`rounded px-4 py-1 ${instagramType === "Gönderi" ? "bg-[#FF9F43]" : "bg-[#F3D2C1]"}`}>
                                    <span className="text-white" style={{ cursor: "pointer" }} onClick={() => handleInstagramTypeChange("Gönderi")}>Gönderi</span>
                                </span>
                                <span className={`rounded px-4 py-1 ml-3 ${instagramType === "Hikaye" ? "bg-[#20C997]" : "bg-[#72edc9]"}`}>
                                    <span className="text-white" style={{ cursor: "pointer" }} onClick={() => handleInstagramTypeChange("Hikaye")}>Hikaye</span>
                                </span>

                            </div>
                        ) : socialMedia === "Twitter" ? (
                            // Twitter için içerik
                            <div>
                                <span className={`rounded px-4 py-1 ml-3 ${tweetterType === "tweet" ? "bg-[#20C997]" : "bg-[#72edc9]"}`}>
                                    <span className="text-white" style={{ cursor: "pointer" }} onClick={() => handleTweeterTypeChange("tweet")}>Tweet</span>
                                </span>
                                <span className={`rounded px-4 py-1 ml-3 ${tweetterType === "tweetWithMedia" ? "bg-[#20C997]" : "bg-[#72edc9]"}`}>
                                    <span className="text-white" style={{ cursor: "pointer" }} onClick={() => handleTweeterTypeChange("tweetWithMedia")}>Tweet With Media</span>
                                </span>
                            </div>
                        ) : (
                            // Facebook için içerik
                            <div>

                            </div>
                        )}
                    </div>



                </div>
            </div>


            {login ? (
                <div className="flex justify-center items-center h-screen">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <h2>Data Fetching...</h2>
                </div>

            ) : (
                <div className="flex mt-5">
                    {socialMedia === "Instagram" ? (
                        <div className="w-full flex mt-5">
                            <div className="w-4/6 container">
                                <Card className='shadow-md'>
                                    <CardHeader className="flex flex-row items-center justify-start">
                                        <h2 className="text-[#4B465C] text-lg font-semibold">Yeni {instagramType}</h2>
                                    </CardHeader>

                                    <div className="w-full my-5">
                                        <hr />
                                    </div>

                                    <CardContent className="container">
                                        {error == "Giriş Başarısız. Lütfen daha sonra tekrar deneyiniz." ? (
                                            <div className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg m-4" role="alert">
                                                <p>Giriş Başarısız. Lütfen daha sonra tekrar deneyiniz.</p>
                                                <span className="absolute inset-y-0 right-0 flex items-center mr-4">
                                                    <svg className="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                                </span>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}



                                        <form onSubmit={handleSubmit}>
                                            <h2 className='text-[#4B465C] mb-5'>
                                                İçerik
                                            </h2>
                                            <textarea className="w-full h-32 rounded-md border bg-white border-[#E4E6EF] p-2"
                                                id='captionInput'
                                                placeholder="İçerik giriniz..."
                                                value={caption} onChange={handleCaptionChange} />

                                            <h2 className='text-[#4B465C] mb-5 mt-5'>
                                                Medya
                                            </h2>

                                            {/* <label htmlFor="fileInput">Dosya Seçin:</label> */}
                                            <div className='flex flex-row items-center justify-start'>

                                                <input type="file" className="w-full rounded-md border bg-white border-[#E4E6EF] p-2 mb-5" placeholder="Konum giriniz..." id="fileInput" onChange={handleFileChange} required />
                                                {/* <a onClick={openModal} className='rounded bg-[#7367F0] mb-5 p-3' style={{ cursor: 'pointer' }}>
                                                <span className="text-white">Medya</span>
                                            </a> */}

                                                <Modal isOpen={isModalOpen} onClose={closeModal}>
                                                    <div className="w-full h-full bg-white p-5 rounded shadow-lg overflow-y-auto max-h-[80vh]">
                                                        <h2 className="text-[#4B465C] text-lg font-semibold">Medya Seç</h2>
                                                        <div className="w-full my-5">
                                                            <hr />
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center w-full">
                                                            <ul className="list-none p-0 w-full">
                                                                {medias.map((media: Media) => (
                                                                    <li key={media.id} className="mb-4">
                                                                        <img src={media.url} alt={media.description || 'Media'} className="w-full h-auto max-w-screen-md object-cover" />
                                                                        <p>{media.description}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Modal>

                                            </div>

                                            {imagePreviewUrl && (
                                                <div className="rounded w-full border">
                                                    <div className="flex justify-start items-start w-full">
                                                        <img src={imagePreviewUrl} className="w-1/4 h-32 object-cover rounded mx-3 my-3" alt="Selected media preview" />
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
                                            )}


                                            <div className="flex justify-start items-center">
                                                <button type="submit" className="rounded bg-[#7367F0] px-4 py-1 mx-2 my-5">
                                                    <span className="text-white">{shareButton}</span>
                                                </button>
                                                <button className="rounded bg-[#FF9F43] px-4 py-1 mx-2 my-5">
                                                    <span className="text-white">Planla</span>
                                                </button>
                                                <button className="rounded bg-[#4B465C] px-4 py-1 mx-2 my-5">
                                                    <span className="text-white">Taslak Olarak Kaydet</span>
                                                </button>
                                            </div>
                                        </form>
                                    </CardContent>


                                </Card>
                            </div>
                            <div className="w-2/6">
                                {imagePreviewUrl && (
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
                                                    <img src={userProfile != "" ? userProfile : ""} className="w-2/4 h-10 object-cover rounded-full mx-3 my-3" />
                                                </div>
                                                <div className="w-5/6">
                                                    <div className="flex flex-row items-center justify-start">
                                                        <span className="text-[#4B465C] text-lg font-semibold">{userName != "" ? userName : "user name"}</span>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-start">
                                                        <span className="text-[#4B465C] text-xs font-semibold">1m</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-row items-center justify-start">
                                                <img src={imagePreviewUrl} className="w-4/4 h-auto object-cover rounded mx-3 my-3" />
                                            </div>

                                            <div className="flex flex-row items-center justify-start">
                                                <div className='mr-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-heart" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </div>
                                                <div className='mr-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                    </svg>

                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-send" viewBox="0 0 24 24">
                                                        <path d="M22 2L11 13"></path>
                                                        <path d="M22 2L15 22 11 13 2 9 22 2z"></path>
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="flex flex-row items-center justify-start">
                                                <span className="text-[#4B465C] text-sm font-semibold">{userName != "" ? userName : "user name"}</span>
                                                <span className="text-[#4B465C] text-sm ml-2">{caption}</span>
                                            </div>


                                            {/* 
                                        <div className="flex flex-row items-center justify-start">
                                            <span className="text-[#4B465C] text-lg font-semibold">Paylaşım Zamanı</span>
                                        </div>

                                        <div className="flex flex-row items-center justify-start">
                                            <span className="text-[#4B465C] text-lg font-semibold">Paylaşım Durumu</span>
                                        </div> */}

                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                        </div>
                    ) : socialMedia === "Twitter" ? (
                        <div className="w-full container">
                            <Card className='shadow-md'>
                                <CardHeader className="flex flex-row items-center justify-start">
                                    <h2 className="text-[#4B465C] text-lg font-semibold">Twitter Post</h2>
                                </CardHeader>

                                <div className="w-full my-5">
                                    <hr />
                                </div>

                                {tweetterType == "tweet" ? (
                                    <TweetSender userId="2" />
                                ) : (
                                    <TweetWithMedia userId='2' />
                                )
                                }




                            </Card>
                        </div>
                    ) : socialMedia === "Youtube" ? (
                        <div className="w-full container">
                            <Card className='shadow-md'>
                                <CardHeader className="flex flex-row items-center justify-start">
                                    <h2 className="text-[#4B465C] text-lg font-semibold">Youtube Video Post</h2>
                                </CardHeader>

                                <div className="w-full my-5">
                                    <hr />
                                </div>

                                <CardContent className="container">
                                    <div className="container">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2"
                                            type="button"
                                            onClick={viewVideosMedia}>
                                            View Videos
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2 ml-2"
                                            type="button"
                                            onClick={viewVideosUploadMedia}>
                                            Upload To Meropsy
                                        </button>
                                    </div>
                                    {viewVideosUpload && (
                                        <FileUploader userId='2' />
                                    )}
                                    {viewVideos && (
                                        <FileList userId='2' onChangeData={handleVideoUrlChange} />
                                    )}


                                    <VideoUploader userId='2' videoPath={videoUrl} />
                                </CardContent>
                            </Card>
                        </div>
                    ) : (
                        <div className="w-4/6 container">
                            <Card className='shadow-md'>
                                <CardHeader className="flex flex-row items-center justify-start">
                                    <h2 className="text-[#4B465C] text-lg font-semibold">Youtube Video Post</h2>
                                </CardHeader>

                                <div className="w-full my-5">
                                    <hr />
                                </div>

                                <CardContent className="container">
                                    <p>Facebook içerikleri için yer tutucu</p>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>

            )}

        </>
    )
}
