import NewsTable from '@/app/component/NewsTable';
import Link from 'next/link';

export default function NewsPage() {
    return (
        <>
            <header className='bg-white dark:bg-slate-900 flex justify-between py-8 px-10 rounded-t-xl'>
                <span className='font-normal text-lg text-blue-700'>News</span>
            </header>
            <NewsTable />
        </>
    );
    
}