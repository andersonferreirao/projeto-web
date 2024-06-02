'use client';
import ParticlesComponent from '@/components/particles';
import axios from 'axios';  
import { Inter } from 'next/font/google'
import { useEffect } from 'react';

export default function LoginLayout({ children }) {

  
  
  return (
    <html lang="pt-br">
      <body>
       <ParticlesComponent id='particles'/>
          <header>
            <nav className=" w-screen">
              
            <div className="flex flex-col items-center sm:items-start sm:text-left mb-4">
                
                <a href="#" className=" flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="../images/dolar-color.png" alt="" className=" size-16 ml-8 "/>
                  <span className=" self-center text-3xl font-semibold whitespace-nowrap dark:text-green-400">CRYPP</span>
                </a>
                
                
              </div>
            </nav>
            <div className="flex items-center justify-center">
              <img hidden src="../images/fallout-logo.png" alt="" className=''/>
            </div>
          </header>
        {children}
      </body>
    </html>
  )
}
