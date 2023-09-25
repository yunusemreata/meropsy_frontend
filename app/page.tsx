"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { FormProvider, set, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../src/components/ui/dropdown-menu"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';

import { Loader2 } from "lucide-react"


const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})


export default function Home() {
  const { setTheme } = useTheme()
  const methods = useForm()

  const [fecthing, setFecthing] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const token: string = localStorage.getItem('token') || '';


  useEffect(() => {
    if (token) {
      window.location.href = "/dashboard" // bunu nextin kendi yönlendirmesi ile değiştir
    }
  }, [])
  


  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
    setFecthing(true)
    const submit = async () => {
      fetch('https://meropsybackend-production.up.railway.app/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          localStorage.setItem('token', data.token);
          setFecthing(false)
        })
        .catch((error) => {
          console.error('Error:', error);
          setFecthing(false)
        });

    }

    // submit işlemini çağır
    submit();

  }


  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="shadow-md px-5 py-5 bg-white dark:bg-gray-800 rounded w-96">
        <h1 className="w-full text-3xl font-bold text-center text-gray-900 dark:text-white my-3">
          Login
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your password.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center">
              {fecthing ?
                <Button className="w-full" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                :
                <Button type="submit" variant="default" className="w-full"> Login </Button>
              }

            </div>
          </form>
        </Form>
      </div>
    </div>


  )
}


// // <DropdownMenu>
// // <DropdownMenuTrigger asChild>
// //   <Button variant="outline" size="icon">
// //     <Sun classNameName="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
// //     <Moon classNameName="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
// //     <span classNameName="sr-only">Toggle theme</span>
// //   </Button>
// // </DropdownMenuTrigger>
// // <DropdownMenuContent align="end">
// //   <DropdownMenuItem onClick={() => setTheme("light")}>
// //     Light
// //   </DropdownMenuItem>
// //   <DropdownMenuItem onClick={() => setTheme("dark")}>
// //     Dark
// //   </DropdownMenuItem>
// //   <DropdownMenuItem onClick={() => setTheme("system")}>
// //     System
// //   </DropdownMenuItem>
// // </DropdownMenuContent>
// // </DropdownMenu>
// // <FormProvider {...methods}>
// // <FormField
// // control={methods.control}
// // name="username"
// // render={({ field }) => (
// //   <FormItem>
// //     <FormLabel>Username</FormLabel>
// //     <FormControl>
// //       <Input placeholder="shadcn" {...field} />
// //     </FormControl>
// //     <FormDescription>This is your public display name.</FormDescription>
// //     <FormMessage />
// //   </FormItem>
// // )}
// // />
// // </FormProvider>
