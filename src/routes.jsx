import {
    HiHome,
    HiBookOpen,
    HiMiniWindow,
    HiUser
} from 'react-icons/hi2';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import Resources from './pages/Resources';

export const publicRoutes = [
    {
        path: "/",
        element: <Home />,
        icon: <HiHome />,
        label: 'Home'
    },
    {
        path: "/about",
        element: <About />,
        icon: <HiUser />,
        label: 'Sobre mí'
    },
    {
        path: "/projects",
        element: <Projects />,
        icon: <HiMiniWindow />,
        label: 'Proyectos'
    },
    {
        path: "/resources",
        element: <Resources />,
        icon: <HiBookOpen />,
        label: 'Recursos'
    },

];
