'use client'
import { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const LocaleSwitcher = () => {
    const [ isPending, startTransition ] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const t = useTranslations("LocaleSwitcher");

    const onSelectOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const locale = event.target.value;
        startTransition(() => {
            router.replace(`/${locale}`);
        });
    }

    return (
        <select 
            className="bg-white dark:bg-slate-900"
            onChange={onSelectOnChange} 
            defaultValue={localActive}
            disabled={isPending}
        >
            <option value='en'>{t('en')}</option>
            <option value='es'>{t('es')}</option>
        </select>
    );
}

export default LocaleSwitcher;