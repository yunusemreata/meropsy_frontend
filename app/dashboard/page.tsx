import React from "react";

import { Button } from "@/components/ui/button"

import { DashboardChart } from '../../src/components/charts/dashboard-chart'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Dashboard() {
    return (
        <div>
            {/* Takipçi Sayılar */}
            <Card className="w-full shadow-md mb-5">
                <CardHeader>
                    <div className="flex flex-row justify-between">
                        <CardTitle className="text-[#4B465C]">Takipçi Sayıları</CardTitle>
                        <CardDescription>Updated 1 day ago</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-row justify-around">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between">
                                <div className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                    <img src="/icons/brand-facebook.svg" alt="facebook" className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[#4B465C]">23K</h3>
                                    <p className="text-slate-500 text-xs">Facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between">
                                <div className="rounded-full h-12 w-12 bg-[#00CFE814] flex items-center justify-center mr-2">
                                    <img src="/icons/brand-twitter.svg" alt="twitter" className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[#4B465C]">8.549k</h3>
                                    <p className="text-slate-500 text-xs">X</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between">
                                <div className="rounded-full h-12 w-12 bg-[#EF5DA814] flex items-center justify-center mr-2">
                                    <img src="/icons/brand-instagram.svg" alt="facebook" className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[#4B465C]">1.423K</h3>
                                    <p className="text-slate-500 text-xs">Instagram</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between">
                                <div className="rounded-full h-12 w-12 bg-[#EA545514] flex items-center justify-center mr-2">
                                    <img src="/icons/brand-youtube.svg" alt="facebook" className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[#4B465C]">925</h3>
                                    <p className="text-slate-500 text-xs">Youtube</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>

            </Card>

            {/* Haftalık Paylaşım tablosu */}
            <Card className="bg-transparent border-none shadow-none flex justify-around">
                <Card className="bg-[#FF9F4340] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>30/07  Pzr</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-twitter.svg" alt="twitter" className="h-5 w-5" />
                        <img src="/icons/brand-instagram.svg" alt="instagram" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>2 paylaşım</h4>
                </Card>

                <Card className="bg-[#20C99740] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>31/07  Pzt</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-twitter.svg" alt="twitter" className="h-5 w-5" />
                        <img src="/icons/brand-instagram.svg" alt="instagram" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>3 paylaşım</h4>
                </Card>


                <Card className="bg-[#20C99740] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>01/08  Sal</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-youtube.svg" alt="youtube" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>5 paylaşım</h4>
                </Card>

                <Card className="bg-[#20C99740] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>02/08 Çar</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-twitter.svg" alt="twitter" className="h-5 w-5" />
                        <img src="/icons/brand-instagram.svg" alt="instagram" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>5 paylaşım</h4>
                </Card>

                <Card className="bg-[#20C99740] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>03/08 Per</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-twitter.svg" alt="twitter" className="h-5 w-5" />
                        <img src="/icons/brand-instagram.svg" alt="instagram" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>3 paylaşım</h4>
                </Card>

                <Card className="bg-[#20C99740] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>04/08 Cum</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-twitter.svg" alt="twitter" className="h-5 w-5" />
                        <img src="/icons/brand-instagram.svg" alt="instagram" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>2 paylaşım</h4>
                </Card>

                <Card className="bg-[#FF9F4340] p-5">
                    <h3 className="font-semibold text-[#4B465C]" style={{ fontSize: 24 }}>05/08 Cmt</h3>
                    <div className="flex flex-row items-center justify-between px-3 py-2">

                        <img src="/icons/brand-facebook.svg" alt="facebook" className="h-5 w-5" />
                        <img src="/icons/brand-twitter.svg" alt="twitter" className="h-5 w-5" />
                        <img src="/icons/brand-instagram.svg" alt="instagram" className="h-5 w-5" />

                    </div>
                    <h4 className="font-semibold text-[#4B465C] text-center" style={{ fontSize: 18 }}>2 paylaşım</h4>
                </Card>

            </Card>

            <div className=" w-full my-5">
                <div className="flex flex-row justify-between">
                    <Card className="w-full shadow-md mb-5">
                        <CardHeader>
                            <div className="flex flex-row justify-between">
                                <CardTitle className="text-[#4B465C]">Etkileşim İstatistikleri</CardTitle>
                                <CardDescription><img src="/icons/dots-vertical.svg" alt="dots-icons" className="h-4 w-4" /></CardDescription>
                            </div>
                            <p className="text-[#4B465C] opacity-50" style={{ fontSize: 13 }}>Haftalık Etkileşim Verileri</p>
                        </CardHeader>
                        <CardContent className="flex item-center justify-start">
                            <Card className="p-6 flex justfy-center mx-2">
                                <div className="flex flex-row justify-around">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                <img src="/icons/brand-facebook.svg" alt="facebook" className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-md font-semibold">Facebook</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 flex justfy-center mx-2 border-dashed">
                                <div className="flex flex-row justify-around">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                <img src="/icons/brand-twitter.svg" alt="twitter" className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-md font-semibold text-center">X</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 flex justfy-center mx-2 border-dashed">
                                <div className="flex flex-row justify-around">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                <img src="/icons/brand-instagram.svg" alt="instagram" className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-md font-semibold">Instagram</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 flex justfy-center mx-2 border-dashed">
                                <div className="flex flex-row justify-around">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                                                <img src="/icons/brand-youtube.svg" alt="youtube" className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-md font-semibold">Youtube</p>
                                    </div>
                                </div>
                            </Card>

                        </CardContent>
                        <div className="w-full">
                            <DashboardChart></DashboardChart>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
}