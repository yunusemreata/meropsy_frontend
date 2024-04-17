import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'

export default function Paylasimlar() {
    return (
        <>
            <CardTitle className="text-[#4B465C] mb-5">Paylaşımlar</CardTitle>

            <div className="flex flex-row">
                <Card className="w-1/4 shadow-md mb-5">
                    <CardHeader>
                        <div className="flex flex-row justify-between items-center">

                            <CardTitle className="text-[#4B465C]">
                                <Link href="/dashboard/ayarlar/hesaplar">
                                    <span>Toplam Paylaşımlar</span>
                                </Link>
                            </CardTitle>

                            <CardDescription>
                                <span className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 14L21 3" stroke="#7367F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.0001 3L14.5001 21C14.4105 21.1955 14.2151 21.3209 14.0001 21.3209C13.785 21.3209 13.5897 21.1955 13.5001 21L10.0001 14L3.00007 10.5C2.80455 10.4104 2.6792 10.2151 2.6792 10C2.6792 9.78493 2.80455 9.5896 3.00007 9.5L21.0001 3"
                                            stroke="#7367F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>

                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="text-[#4B465C]">
                        <Link href="/dashboard/ayarlar/hesaplar">
                            <span className='text-2xl font-bold'>259</span>
                        </Link>
                    </CardContent>

                </Card>

                <Card className="w-1/4 shadow-md mb-5 ml-4">
                    <CardHeader>
                        <div className="flex flex-row justify-between items-center">
                            <CardTitle className="text-[#4B465C]">Taslak</CardTitle>
                            <CardDescription>
                                <span className="rounded-full h-12 w-12 bg-[#EA545514] flex items-center justify-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 14L21 3" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.0001 3L14.5001 21C14.4105 21.1955 14.2151 21.3209 14.0001 21.3209C13.785 21.3209 13.5897 21.1955 13.5001 21L10.0001 14L3.00007 10.5C2.80455 10.4104 2.6792 10.2151 2.6792 10C2.6792 9.78493 2.80455 9.5896 3.00007 9.5L21.0001 3" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>

                            </CardDescription>
                        </div>
                    </CardHeader>


                    <CardContent className="text-[#4B465C]">
                        <Link href="/dashboard/ayarlar/hesaplar">
                            <span className='text-2xl font-bold'>69</span>
                        </Link>
                    </CardContent>

                </Card>


                <Card className="w-1/4 shadow-md mb-5 ml-4">
                    <CardHeader>
                        <div className="flex flex-row justify-between items-center">
                            <CardTitle className="text-[#4B465C]">Paylaşılan</CardTitle>
                            <CardDescription>
                                <span className="rounded-full h-12 w-12 bg-[#c5f0d8] flex items-center justify-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 14L21 3" stroke="#28C76F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.0001 3L14.5001 21C14.4105 21.1955 14.2151 21.3209 14.0001 21.3209C13.785 21.3209 13.5897 21.1955 13.5001 21L10.0001 14L3.00007 10.5C2.80455 10.4104 2.6792 10.2151 2.6792 10C2.6792 9.78493 2.80455 9.5896 3.00007 9.5L21.0001 3" stroke="#28C76F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>

                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="text-[#4B465C]">
                        <Link href="/dashboard/ayarlar/hesaplar">
                            <span className='text-2xl font-bold'>39</span>
                        </Link>
                    </CardContent>

                </Card>

                <Card className="w-1/4 shadow-md mb-5 ml-4">
                    <CardHeader>
                        <div className="flex flex-row justify-between items-center">
                            <CardTitle className="text-[#4B465C]">Planlı</CardTitle>
                            <CardDescription>
                                <span className="rounded-full h-12 w-12 bg-[#FF9F4314] flex items-center justify-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 14L21 3" stroke="#FF9F43" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.0001 3L14.5001 21C14.4105 21.1955 14.2151 21.3209 14.0001 21.3209C13.785 21.3209 13.5897 21.1955 13.5001 21L10.0001 14L3.00007 10.5C2.80455 10.4104 2.6792 10.2151 2.6792 10C2.6792 9.78493 2.80455 9.5896 3.00007 9.5L21.0001 3" stroke="#FF9F43" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>

                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="text-[#4B465C]">
                        <Link href="/dashboard/ayarlar/hesaplar">
                            <span className='text-2xl font-bold'>28</span>
                        </Link>
                    </CardContent>
                </Card>
            </div>


            <Card className="shadow-md mb-5">
                <CardHeader>
                    <div className="flex flex-row justify-between items-center mb-2">

                        <CardTitle className="text-[#4B465C]">
                            <Link href="/dashboard/ayarlar/hesaplar">
                                <span>Filtreler</span>
                            </Link>
                        </CardTitle>


                    </div>

                    <div className="flex flex-row">
                        <div className="w-1/3 grid justify-items-center">
                            <select
                                className="block appearance-none w-4/5 bg-white border border-gray-200 hover:border-gray-300 py-3 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline" id="grid-state">
                                <option value="0" disabled selected>Tüm Hesaplar</option>
                                <option>Instagram</option>
                                <option>Facebook</option>
                                <option>Twitter</option>
                            </select>
                        </div>
                        <div className="w-1/3 grid justify-items-center">
                            <select
                                className="block appearance-none w-4/5 bg-white border border-gray-200 hover:border-gray-300 py-3 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline" id="grid-state">
                                <option value="0" disabled selected>Tüm Paylaşımlar</option>
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                        </div>
                        <div className="w-1/3 grid justify-items-center">
                            <select
                                className="block appearance-none w-4/5 bg-white border border-gray-200 hover:border-gray-300 py-3 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline" id="grid-state">
                                <option value="0" disabled selected>Medyalı, Medyasız</option>
                                <option>Medyalı</option>
                                <option>Medyasız</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full py-5">
                        <hr />
                    </div>
                    <div className="flex flex-row">

                        <div className="w-1/4">
                            <select className="w-2/5 block w-full bg-white border border-gray-200 hover:border-gray-300 py-3 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
                                id="grid-state">
                                <option selected>10</option>
                                <option>50</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                        <div className="w-3/4 flex justify-end">
                            <div className="flex flex-row justify-end w-1/2">
                                <input className="w-1/5 block w-full bg-white border border-gray-200 hover:border-gray-300 py-3 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
                                    placeholder='Ara'>
                                </input>
                                <a href='/dashboard/paylasimlar/yeni_paylasim_test' className="mx-3 w-1/5 block w-full bg-[#7367F0] hover:bg-[#7367F0] py-3 px-4 pr-8 rounded shadow focus:outline-none focus:shadow-outline">
                                    <p className='text-white flex flex-row justify-center align-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='mr-2 mt-1'>
                                            <path d="M9 3.75V14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Yeni Paylaşım
                                    </p>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="w-full py-5">
                        <hr />
                    </div>
                </CardHeader>

                <CardContent className="text-[#4B465C]">
                    <div className="flex flex-col">
                        <div className="w-100">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-200">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4 text-[#4B465C] uppercase flex justify-center">İçerik</th>
                                                    <th scope="col" className="px-6 py-4 text-[#4B465C] uppercase">Hesaplar</th>
                                                    <th scope="col" className="px-6 py-4 text-[#4B465C] uppercase">Medya</th>
                                                    <th scope="col" className="px-6 py-4 text-[#4B465C] uppercase">Etiketler</th>
                                                    <th scope="col" className="px-6 py-4 text-[#4B465C] uppercase">Durum</th>
                                                    <th scope="col" className="px-6 py-4 text-[#4B465C] uppercase flex justify-center">İşlemler</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b dark:border-neutral-200">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium truncate w-1/6 ">Kapadokya Nedir? Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="flex flex-row">
                                                            <div className="w-1/3 rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.44772 14.4477 7 15 7H18V3H15C12.2386 3 10 5.23858 10 8V10H7" stroke="#5D5FEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-1/3 rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="#EF5DA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <circle cx="12" cy="12" r="3" stroke="#EF5DA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M16.5 7.49999V7.50099" stroke="#EF5DA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-1/3 rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="#009DF5">
                                                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4  w-1/6">
                                                        <img className='rounded' src="/assets/img/medya_1.jpeg" alt="" />
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-underline">
                                                        <p className='underline text-blue-500'>
                                                            #ilk
                                                        </p>
                                                        <p className='underline text-blue-500'>
                                                            #post
                                                        </p>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="rounded bg-green-300 px-2 py-2 flex justify-center">
                                                            <span className="text-white">Paylaşıldı</span>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="flex flex-row">
                                                            <div className="w-1/3 h-12 w-12 flex items-center justify-center mr-2">
                                                                <Link href="/dashboard/paylasimlar/duzenle">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                                        <path d="M8.25002 6.4165H5.50002C4.4875 6.4165 3.66669 7.23732 3.66669 8.24984V16.4998C3.66669 17.5124 4.4875 18.3332 5.50002 18.3332H13.75C14.7625 18.3332 15.5834 17.5124 15.5834 16.4998V13.7498" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.25002 6.4165H5.50002C4.4875 6.4165 3.66669 7.23732 3.66669 8.24984V16.4998C3.66669 17.5124 4.4875 18.3332 5.50002 18.3332H13.75C14.7625 18.3332 15.5834 17.5124 15.5834 16.4998V13.7498" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.25 13.7499H11L18.7917 5.95822C19.5511 5.19882 19.5511 3.96761 18.7917 3.20822C18.0323 2.44882 16.8011 2.44882 16.0417 3.20822L8.25 10.9999V13.7499" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.25 13.7499H11L18.7917 5.95822C19.5511 5.19882 19.5511 3.96761 18.7917 3.20822C18.0323 2.44882 16.8011 2.44882 16.0417 3.20822L8.25 10.9999V13.7499" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M14.6667 4.5835L17.4167 7.3335" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M14.6667 4.5835L17.4167 7.3335" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                            <div className="w-1/3 h-12 w-12 flex items-center justify-center mr-2">
                                                                <Link href="/dashboard/paylasimlar/duzenle">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                                        <path d="M3.66669 6.41683H18.3334" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M3.66669 6.41683H18.3334" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M9.16665 10.0835V15.5835" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M9.16665 10.0835V15.5835" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M12.8333 10.0835V15.5835" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M12.8333 10.0835V15.5835" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M4.58331 6.4165L5.49998 17.4165C5.49998 18.429 6.32079 19.2498 7.33331 19.2498H14.6666C15.6792 19.2498 16.5 18.429 16.5 17.4165L17.4166 6.4165" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M4.58331 6.4165L5.49998 17.4165C5.49998 18.429 6.32079 19.2498 7.33331 19.2498H14.6666C15.6792 19.2498 16.5 18.429 16.5 17.4165L17.4166 6.4165" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.25 6.41667V3.66667C8.25 3.16041 8.66041 2.75 9.16667 2.75H12.8333C13.3396 2.75 13.75 3.16041 13.75 3.66667V6.41667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.25 6.41667V3.66667C8.25 3.16041 8.66041 2.75 9.16667 2.75H12.8333C13.3396 2.75 13.75 3.16041 13.75 3.66667V6.41667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                            <div className="w-1/3 h-12 w-12 flex items-center justify-center mr-2">
                                                                <Link href="/dashboard/paylasimlar/duzenle">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                                        <circle cx="11" cy="11.0002" r="0.916667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <circle cx="11" cy="11.0002" r="0.916667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <circle cx="11" cy="17.4167" r="0.916667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <circle cx="11" cy="17.4167" r="0.916667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <ellipse cx="11" cy="4.58317" rx="0.916667" ry="0.916667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <ellipse cx="11" cy="4.58317" rx="0.916667" ry="0.916667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </CardContent>

            </Card>




        </>
    )
}
