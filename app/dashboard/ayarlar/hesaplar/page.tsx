'use client'

// React ve useState hook'u içe aktarılır
import React, { useState, useEffect } from 'react';

// Gerekli bileşenler ve tipler içe aktarılır
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CompanyUsers, columns } from "../../../../src/components/data_table/columns";
import { DataTable } from "../../../../src/components/data_table/data-table";
import Link from 'next/link';


async function getData(): Promise<CompanyUsers[] | null> {
    try {
        const apiData = await fetchDataApi(); // API'den veriyi çek

        if (apiData) {
            // API verisini 'Payment[]' tipine dönüştür
            return apiData.map((item: any) => ({
                id: item.id,
                name: item.name,
                config: ["update", "delete", "view"]
                //companyName: item.companyName, // veya item['company_name']
                //socialMedias: item.socialMedias, // veya item['social_medias']
                //config: item.config
            }));
        } else {
            console.log("API'den veri alınamadı.");
            return null;
        }
    } catch (error) {
        console.log('getData error:', error);
        return null;
    }
}


async function fetchDataApi() {
    // localStorage'dan token alınır
    const token = localStorage.getItem('token'); //"5x6yue6bpz5//y@mail.com//gjpsmhptxtt";
    //console.log('fetchDataApi token:', token);

    try {
        // Fetch API kullanılarak istek yapılır
        const response = await fetch('https://meropsybackend-production.up.railway.app/users/getfirma/1', {
            method: 'GET', // İstek türü GET, POST, PUT, DELETE olabilir
            headers: {
                'Content-Type': 'application/json',
                'token': `${token}` //"getAllusers_5431435096_argeteknoScadya" //`${token}` // Token "Bearer" şeması ile gönderilir
            },
        });

        // Yanıtın başarılı olup olmadığını kontrol et
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // Yanıtı JSON olarak dönüştür
        const result = await response.json();
        console.log('fetchData result:', result);
        return result; // Elde edilen veriyi döndür
    } catch (error) {
        // Hata durumunda hata mesajını logla
        console.log('fetchData error:', error);
        return null; // Hata durumunda null dön
    }
}

// Hesaplar bileşeni
export default function Hesaplar() {
    const [data, setData] = useState<CompanyUsers[]>([]);
    const [apiError, setApiError] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Verileri çekmek için useEffect hook'u
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getData();
            if (fetchedData) {
                setData(fetchedData); // API'den gelen veriyi 'data' state'ine ata
            }
        };

        fetchData();
    }, []);

    // Modal'ı açma ve kapama fonksiyonları
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deleteLocalStorage = () => {
        localStorage.removeItem('token');
    }

    // Bileşenin render edilmesi
    return (
        <div>
            <CardTitle className="text-[#4B465C] mb-5"><span className={'text-[#A8AAAE]'}>Ayarlar /</span> Hesaplar</CardTitle>
            <div className='flex flex-row justify-end'>
                <button className="text-[#FFFFFF] border-[#20C997] bg-[#20C997] border-2 rounded-md px-5 py-2" onClick={openModal}>+ Yeni Hesap Ekle</button>
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
            {apiError ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-[#4B465C]">
                                        Hata!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => closeModal()}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {apiMessage}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <Link href="/"
                                        className="bg-[#7367F0] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => deleteLocalStorage()}
                                    >
                                        Giriş Yap
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </>) : null}
            {isModalOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-[#4B465C]">
                                        Yeni Hesap Ekle
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => closeModal()}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form className="w-full">
                                        <label className="block text-gray-700 text-sm mb-2 text-[#4B465C]" htmlFor="accountname">
                                            Hesap Adı
                                        </label>
                                        <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                            id="accountname" type="text" placeholder="Hesap Adı" />

                                        <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                            Firma Adı
                                        </label>
                                        <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                            id="companyname" type="text" placeholder="Firma Adı" />

                                        <div className="mt-5 flex flex-row justify-between">
                                            <div className="w-1/2 mr-5">
                                                <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                                    Facebook Api Key
                                                </label>
                                                
                                                <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    id="companyname" type="text" placeholder="Firma Adı" />
                                            </div>


                                            <div className="w-1/2">
                                                <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                                    Instagram Api Key
                                                </label>
                                                <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    id="companyname" type="text" placeholder="Firma Adı" />
                                            </div>
                                        </div>

                                        <div className="mt-5 flex flex-row justify-between">
                                            <div className="w-1/2 mr-5">
                                                <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                                    Twitter Api Key
                                                </label>
                                                <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    id="companyname" type="text" placeholder="Firma Adı" />
                                            </div>


                                            <div className="w-1/2">
                                                <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                                    TikTok Api Key
                                                </label>
                                                <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    id="companyname" type="text" placeholder="Firma Adı" />
                                            </div>
                                        </div>

                                        <div className="mt-5 flex flex-row justify-between">
                                            <div className="w-1/2 mr-5">
                                                <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                                    Telegram Api Key
                                                </label>
                                                <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    id="companyname" type="text" placeholder="Firma Adı" />
                                            </div>


                                            <div className="w-1/2">
                                                <label className="block text-gray-700 text-sm mb-2 text-[#4B465C] mt-5" htmlFor="companyname">
                                                    WhatsApp Api Key
                                                </label>
                                                <input className="bg-[#FFFFFF] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    id="companyname" type="text" placeholder="Firma Adı" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-white bg-[#7367F0] font-bold rounded shadow uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => closeModal()}
                                    >
                                        Kaydet
                                    </button>
                                    <button
                                        className="bg-[#DBDADE] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => closeModal()}
                                    >
                                        İptal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}


