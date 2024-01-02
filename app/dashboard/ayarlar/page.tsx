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

export default function Ayarlar() {
  return (
    <>
      <CardTitle className="text-[#4B465C] mb-5">Ayarlar</CardTitle>

      <div className="flex flex-row">
        <Card className="w-1/4 shadow-md mb-5">
          <CardHeader>
            <div className="flex flex-row justify-between items-center">

              <CardTitle className="text-[#4B465C]">
                <Link href="/dashboard/ayarlar/hesaplar">
                  <span>Hesaplar</span>
                </Link>
              </CardTitle>

              <CardDescription>
                <div className="rounded-full h-12 w-12 bg-[#7367F014] flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <circle cx="9.5" cy="7" r="4" stroke="#7367F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 21V19C3.5 16.7909 5.29086 15 7.5 15H11.5C13.7091 15 15.5 16.7909 15.5 19V21" stroke="#7367F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 3.12988C18.2699 3.58305 19.5078 5.17787 19.5078 7.00488C19.5078 8.83189 18.2699 10.4267 16.5 10.8799" stroke="#7367F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.5 20.9999V18.9999C21.4896 17.1845 20.2578 15.6037 18.5 15.1499" stroke="#7367F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              </CardDescription>
            </div>
          </CardHeader>


        </Card>

        <Card className="w-1/4 shadow-md mb-5 ml-4">
          <CardHeader>
            <div className="flex flex-row justify-between items-center">
              <CardTitle className="text-[#4B465C]">Sifre Ayarları</CardTitle>
              <CardDescription>
                <div className="rounded-full h-12 w-12 bg-[#EA545514] flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="8" cy="15" r="4" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.8501 12.15L19.0001 4" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 5L20 7" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 8L17 10" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              </CardDescription>
            </div>
          </CardHeader>

        </Card>

        <Card className="w-1/4 shadow-md mb-5 ml-4">
          <CardHeader>
            <div className="flex flex-row justify-between items-center">
              <CardTitle className="text-[#4B465C]">Abonelik</CardTitle>
              <CardDescription>
                <div className="rounded-full h-12 w-12 bg-[#EA545514] flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M6.5 5H18.5L21.5 10L13 19.5C12.8683 19.6344 12.6881 19.7101 12.5 19.7101C12.3119 19.7101 12.1317 19.6344 12 19.5L3.5 10L6.5 5" stroke="#EA5455" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.5 11.9998L8.5 9.7998L9.1 8.7998" stroke="#EA5455" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              </CardDescription>
            </div>
          </CardHeader>

        </Card>

        <Card className="w-1/4 shadow-md mb-5 ml-4">
          <CardHeader>
            <div className="flex flex-row justify-between items-center">
              <CardTitle className="text-[#4B465C]">İşlem Geçmişi</CardTitle>
              <CardDescription>
                <div className="rounded-full h-12 w-12 bg-[#FF9F4314] flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 7H17.5" stroke="#FF9F43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 17H17.5" stroke="#FF9F43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 20V18C6 14.6863 8.68629 12 12 12C15.3137 12 18 14.6863 18 18V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V20Z" stroke="#FF9F43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 4V6C6 9.31371 8.68629 12 12 12C15.3137 12 18 9.31371 18 6V4C18 3.44772 17.5523 3 17 3H7C6.44772 3 6 3.44772 6 4Z" stroke="#FF9F43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              </CardDescription>
            </div>
          </CardHeader>

        </Card>
      </div>

   

    </>
  )
}

