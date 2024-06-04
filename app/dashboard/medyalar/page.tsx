'use client'

import React, { useState, useEffect } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from 'next/link';


// Hesaplar bileşeni
export default function Hesaplar() {
    const [apiError, setApiError] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Verileri çekmek için useEffect hook'u
    useEffect(() => {

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
            <CardTitle className="text-[#4B465C] mb-5"><span >Media Library</span></CardTitle>
            <div className='flex flex-row justify-end'>
                <button className="text-[#FFFFFF] border-[#20C997] bg-[#20C997] border-2 rounded-md px-5 py-2" onClick={openModal}>+ Add New Media</button>
            </div>
            <div className="container mx-auto py-10">
                {/* <DataTable columns={columns} data={data} /> */}


                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border rounded-lg">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 rounded-lg">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className='rounded-lg'>
                            <tr className="bg-white border-b rounded-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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


