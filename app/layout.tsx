"use client";

import { 
  ClerkProvider, 
  
} from "@clerk/nextjs";
import { CartProvider } from "@/app/context/cartcontext"; 

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="en">
          <body>
           
              
           {children}
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
