'use client'
import React, { useContext } from 'react'
import { contexto } from '@/app/providers'
import { User } from '@/app/types/userType';
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl';

interface UserViewProps {
    id: number;
}

const UserView: React.FC<UserViewProps> = ({id}) => {
    const { state, dispatch } = useContext(contexto) || {};
    const t = useTranslations("UserView");
    const localActive = useLocale();
    const  router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const userForm: User = {
            id: id,
            name: data.get('name') as string,
            last_name: data.get('last_name') as string,
            email: data.get('email') as string,
            age: parseInt(data.get('age') as string),
        }
        if (dispatch) {
            dispatch({ type: 'UPDATE_USER', payload: userForm });
        } else {
            console.error('No dispatch function');
        }        
        router.push(`/${localActive}/users`);
    }
    const user = state?.users.find((user: User) => user.id === id);

    return (
        <>            
            <header className='bg-white dark:bg-slate-900 flex justify-between py-8 px-10 rounded-t-xl'>
                <span className='font-normal text-lg'>Users</span>
            </header>
            <main className='bg-white dark:bg-slate-900 px-10 rounded-b-xl pb-8'>
                <form className='flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)}>
                    <div className='flex justify-start items-baseline'>
                        <label className='w-1/12' htmlFor="name">{`${t('name')}:`}</label>
                        <input
                            className="bg-white dark:bg-slate-900 mb-0.5 w-1/2 rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400focus:border-blue-600 py-2"
                            name='name' placeholder="Name" type='text' defaultValue={user?.name}/>
                    </div>
                    <div className='flex justify-start items-baseline'>
                        <label className='w-1/12' htmlFor="last_name">{`${t('last_name')}:`}</label>
                        <input
                            className="bg-white dark:bg-slate-900 mb-0.5 w-1/2 rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400focus:border-blue-600 py-2"
                            name='last_name' placeholder="Last Name" type='text' defaultValue={user?.last_name}/>
                    </div>
                    <div className='flex justify-start items-baseline'>
                        <label className='w-1/12' htmlFor="email">{`${t('email')}:`}</label>
                        <input
                            className="bg-white dark:bg-slate-900 mb-0.5 w-1/2 rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400focus:border-blue-600 py-2"
                            name='email' placeholder="Email" type='email' defaultValue={user?.email}/>
                    </div>
                    <div className='flex justify-start items-baseline'>
                        <label className='w-1/12' htmlFor="age">{`${t('age')}:`}</label>                    
                        <input
                            className="bg-white dark:bg-slate-900 mb-0.5 w-1/2 rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400focus:border-blue-600 py-2"
                            name='age' placeholder="Age" type='number' defaultValue={user?.age}/>
                    </div>
                    <div className='flex justify-start items-baseline'>
                        <button type="submit"
                            className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[38px] min-w-[38px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
                            <span>{`${t('save')}`}</span>
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
    }

export default UserView;