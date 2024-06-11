'use client'
import Link from 'next/link';
import newsData from '@/app/data/news.json';
import { useLocale, useTranslations } from 'next-intl'

export default function UsersTable() {
    const locale = useLocale()
    const t = useTranslations("NewsTable")    
    const title:string = `title_${locale}`;
    return (
        <>            
            <main className='rounded-b-xl'>
                <table className='w-full table-auto'>
                    <thead className='bg-slate-600'>
                        <tr className='h-10'>
                            <th>{t('title')}</th>
                            <th>{t('read_news')}</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white dark:bg-slate-900'>
                        {newsData.map((news: { [key: string]: string | number }) => (
                            <tr className='h-16' key={news.id}>
                                <td className='px-7 text-left'>{news[title]}</td>
                                <td className='px-7 text-right'>
                                    <Link href={`/${locale}/news/${news.id}`}>
                                        {t('read_more')}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}