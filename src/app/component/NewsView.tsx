import React from "react";
import { useLocale, useTranslations } from "next-intl";
import newsData from "@/app/data/news.json";

interface NewsViewProps {
    id: number;
}

const NewsView: React.FC<NewsViewProps> = ({ id }) => {
    const locale = useLocale();
    const t = useTranslations("NewsView");
    const news = newsData.find((news: { id: number }) => news.id === id);
    const title = locale === "en" ? news?.title_en : news?.title_es;
    const content = locale === "en" ? news?.content_en : news?.content_es;
    return (
        <>
            <header className='bg-white dark:bg-slate-900 flex justify-between py-8 px-10 rounded-t-xl'>
                <h1 className='font-normal text-lg'>{title}</h1>
            </header>
            <main className='bg-white dark:bg-slate-900 px-10 rounded-b-xl pb-8'>
                {content}
            </main>
        </>
    );
}

export default NewsView;