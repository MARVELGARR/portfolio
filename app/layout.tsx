import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DesktopSideBar from './Components/Reuseable Components/SideBars/desktopSideBar';
import { ThemeProvider } from './Components/theme-provider';
import MobileBar from './Components/Reuseable Components/SideBars/mobileBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${inter.className} h-[40rem] flex w-full sm:h-screen sm:flex sm:justify-center sm:items-center bg-slate-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=' w-full h-fit sm:h-[80%] sm:w-[80%]   sm:flex'>
            <div className="h-full">
              <DesktopSideBar />
            </div>
            <div className=" object-cover object-top dark:text-white h-screen sm:w-[80%] sm:h-full text-cyan-950">
              {children}
            </div>
          </div>
          <div className='w-full dark:bg-cyan-950 bg-white flex h-16 justify-center items-center fixed bottom-0 sm:hidden'>
            <MobileBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
