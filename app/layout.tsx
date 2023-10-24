import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DesktopSideBar from './Components/Reuseable Components/SideBars/desktopSideBar'
import { ThemeProvider } from './Components/theme-provider'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='eng'>

      <body className={`${inter.className} lg:px-24  bg-slate-300 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className='flex '>

              <DesktopSideBar/>
              <main className=" w-full bg-white text-cyan-950">{children}</main>
            </div>
            <div className='w-full bg-red-400 h-10 fixed bottom-0 sm:hidden'> sasasa</div>
        </ThemeProvider>
      </body>
    </html>
    
  )
}
