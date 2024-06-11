import UsersTable from '@/app/component/UsersTable';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function UsersPage() {
    const t = useTranslations('Users');
    const locale = useLocale();
    return (
        <>
            <header className='bg-white dark:bg-slate-900 flex justify-between py-8 px-10 rounded-t-xl'>
                <span className='font-normal text-lg text-blue-700'>{t('title')}</span>
                <Link href={`/${locale}/users/new`}>
                    <button type="button"
                        className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[38px] min-w-[38px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
                        <span>{t('new_user')}</span>
                    </button>
                </Link>
            </header>
            <UsersTable />
        </>
    );
    
}