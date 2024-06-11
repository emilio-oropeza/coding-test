import LocaleSwitcher from "./LocaleSwitcher";


const Header = () => {
    return (
        <header className='w-full bg-white dark:bg-slate-900 flex justify-end py-8 px-10 '>
            <LocaleSwitcher />
        </header>
    );
}

export default Header;