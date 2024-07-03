'use client'
import React, { useContext } from 'react'
import { contexto } from '@/app/providers'
import Link from 'next/link';
import { User } from '@/app/types/userType';
import { useLocale, useTranslations } from 'next-intl';

export default function UsersTable() {
    const { state, dispatch } = useContext(contexto) || {};
    const t = useTranslations("UsersTable");
    const localActive = useLocale();
    const deleteUser = (user: User) => {
        if (dispatch) {
            dispatch({ type: 'DELETE_USER', payload: user });
        } else {
            console.error('No dispatch function');
        }
    }
    return (
        <>            
            <main className='rounded-b-xl'>
                <table className='w-full table-auto'>
                    <thead className='bg-slate-600'>
                        <tr className='h-10'>
                            <th>{t('name')}</th>
                            <th>{t('last_name')}</th>
                            <th>{t('email')}</th>
                            <th>{t('age')}</th>
                            <th colSpan={2}>{t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white dark:bg-slate-900 text-center'>
                        {state?.users.map((user) => (
                            <tr className=' h-16' key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link href={`/${localActive}/users/${user.id}`}>
                                        {t('edit')}
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => deleteUser(user)}>{t('delete')}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}