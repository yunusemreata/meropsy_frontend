"use client"
import Link from "next/link"
import { ThemeProvider } from "@//components/theme-provider"
import '../globals.css'


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@//components/ui/dropdown-menu"

import React from "react"



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="tr" suppressHydrationWarning>
                <head />
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="flex">
                            {/* Sağ taraftaki menüler */}
                            <aside className="bg-[#242745] w-1/6 p-4 h-screen* text-white shadow-md">
                                {/* Menü öğeleri burada */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center">
                                        <img src="/icons/vuexy-logo.svg" alt="brand" className="w-8 h-8 mr-2" />
                                        <span className="text-xl font-bold">Meropsy</span>
                                    </div>
                                    <img src="/icons/circle-dot.svg" alt="chevron-right" className="w-5 h-5"/>
                                    
                                </div>

                                <nav className="space-y-2">
                                    <Link href="/dashboard"
                                         className="bg-[#2F324E] flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/smart-home.svg" alt="home" className="w-5 h-5" />
                                            <span>Dashboard</span>
                                        
                                    </Link>
                                    <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/message-circle-2.svg" alt="box" className="w-5 h-5" />
                                            <span>Mesajlar</span>
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/id.svg" alt="box" className="w-5 h-5" />
                                            <span>Paylaşımlar</span>
                                         
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/calendar.svg" alt="box" className="w-5 h-5" />
                                            <span>Takvim</span> 
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/folders.svg" alt="box" className="w-5 h-5" />
                                            <span>Medya Kütüphanesi</span> 
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/users.svg" alt="box" className="w-5 h-5" />
                                            <span>Hesaplar</span> 
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/id.svg" alt="box" className="w-5 h-5" />
                                            <span>Raporlar</span> 
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/components.svg" alt="box" className="w-5 h-5" />
                                            <span>Ayarlar</span> 
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/color-swatch.svg" alt="box" className="w-5 h-5" />
                                            <span>Kullanıcılar</span> 
                                    </Link>
                                    <Link href="/dashboard"  className="flex items-center space-x-2 p-2 rounded-md hover:bg-[#2F324E]">
                                            <img src="/icons/atom.svg" alt="box" className="w-5 h-5" />
                                            <span>Asistan</span> 
                                    </Link>
                                </nav>
                                
                            </aside>

                            {/* Sayfa içeriği */}
                            <main className="flex-1 ml-1/4">
                                {/* Navbar */}
                                <nav className="bg-white-600 text-white p-2 pl-4 mt-1 mx-4 rounded shadow-md flex item-center justify-end">
                                    {/* Navbar içeriği burada */}


                                    <div className="mr-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="seconder">
                                                    <img src="/icons/lifebuoy.svg" alt="lifebuoy" className="w-5 h-5 mr-2" />
                                                    Hesap 1
                                                    <img src="/icons/chevron-down.svg" alt="chevron-down" className="w-5 h-5 ml-1" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem >
                                                    <img src="/icons/building-skyscraper.svg" alt="building-skyscraper" className="w-5 h-5 mr-2" />
                                                    Hesap 1
                                                </DropdownMenuItem>
                                                <DropdownMenuItem >
                                                    <img src="/icons/building-skyscraper.svg" alt="building-skyscraper" className="w-5 h-5 mr-2" />
                                                    Hesap 2
                                                </DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    <div className="mr-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="default">
                                                    <img src="/icons/lifebuoy.svg" alt="lifebuoy" className="w-5 h-5 mr-2" />
                                                    Sosyal
                                                    <img src="/icons/chevron-down.svg" alt="chevron-down" className="w-5 h-5 ml-1" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem >
                                                    <img src="/icons/lifebuoy_dark.svg" alt="lifebuoy" className="w-5 h-5 mr-2" />
                                                    Sosyal Medya
                                                </DropdownMenuItem>
                                                <DropdownMenuItem >
                                                    <img src="/icons/building-store.svg" alt="building-store" className="w-5 h-5 mr-2" />
                                                    Kanal Yönetimi
                                                </DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    {/* Profil Fotoğrafı */}
                                    <div className="relative w-10 h-10">
                                        
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        {/* <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />*/}
                                        <div className="absolute bottom-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                                    </div>
                                </nav>

                                {/* Sayfa içeriği burada */}
                                <div className="p-4">
                                    {children}
                                </div>
                            </main>
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )

}


