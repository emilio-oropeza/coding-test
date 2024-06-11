import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import SideBar from "@/app/component/Sidebar";
import Header from "@/app/component/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Users",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
        <body className={`${inter.className} h-screen w-screen`}>
          <NextIntlClientProvider messages={messages}>
            <main className="flex flex-col overflow-hidden h-full">
                <div className='flex h-full'>
                  <SideBar />
                  <article className='w-full bg-slate-50 dark:bg-slate-800 h-screen overflow-auto'>
                    <Header />
                    {children}
                  </article>
                </div>
            </main>
          </NextIntlClientProvider>
        </body>
    </html>
  );
}
