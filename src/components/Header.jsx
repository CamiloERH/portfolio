
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
                    {/* logo */}
                    <Link to={'/'}>
                        Home
                    </Link>
                    {/* socials */}
                    <div className='flex items-center gap-x-5 text-lg'>
                        <a href="https://github.com/camiloerh" rel="noopener noreferrer" target="_blank" className='text-2xl hover:text-accent transition-all duration-300'>
                            <RiGithubFill />
                        </a>
                        <a href="https://www.linkedin.com/in/camilo-rojas-72962a18b/" rel="noopener noreferrer" target="_blank" className='text-2xl hover:text-accent transition-all duration-300'>
                            <RiLinkedinBoxFill />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
