import {
    HiHome,
    HiBookOpen,
    HiMiniWindow,
    HiUser
} from 'react-icons/hi2';

import Home from "./pages/Home";    
import Projects from "./pages/Projects";
import About from './pages/About';

export const publicRoutes = [
    {
        path: "/",
        element: <Home />,
        icon: <HiHome />,
        label: 'Home'
    },
    {
        path: "/portfolio/about",
        element: <About />,
        icon: <HiUser />,
        label: 'Sobre mí'
    },
    {
        path: "/portfolio/projects",
        element: <Projects />,
        icon: <HiMiniWindow />,
        label: 'Proyectos'
    },

    
];
