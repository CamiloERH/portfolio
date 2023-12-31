// components

//Importar font Sora
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {

    return (
        <div className={`page h-full text-white`} >
            <Header />
            <Nav />
            <Outlet />
        </div>
    );
};

export default Layout;
