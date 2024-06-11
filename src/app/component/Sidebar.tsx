import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const SideBar = () => {
    const localActive = useLocale();
    const t = useTranslations("Sidebar");
    return (
        <aside className='py-10 px-5 w-52 h-full bg-blue-700'>
            <nav>
                <ul className='flex flex-col gap-3'>                    
                    <Link href={`/${localActive}/users`} className="flex justify-start items-center gap-1">                         
                        {t("users")}
                    </Link>
                    <Link href={`/${localActive}/news`} className="flex justify-start items-center gap-1">                         
                        {t("news")}
                    </Link>
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;
