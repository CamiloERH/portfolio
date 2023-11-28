// work slider data



const projects = [
    {
        title: 'E-BIMIndustrial',
        img: 'public/ebimindustrial.png',
        description: 'Creación de landing page para start-up del rubro tecnológico, además de integración de funcionalidades desarrolladas en el Backend',
        technologies: ['ReactJS', 'MaterialUI'],
        link: 'https://www.e-bimindustrial.com'
    },
    {
        title: 'Teslo Shop',
        img: '/tesloshop.png',
        description: 'Clon de tienda Tesla hecho en NextJS, login con Google, protección de rutas entre otras funcionalidades',
        technologies: ['NextJS', 'MongoDB', 'Cloudinary'],
        link: 'https://testloshop-nextjs-production.up.railway.app'
    },
    {
        title: 'NextJS Messenger',
        img: 'public/messenger.png',
        description: 'Chat en tiempo real usando Pusher Channels, registro con credenciales o con Google y GitHub usando NextAuth.',
        technologies: ['NextJS', 'MaterialUI', 'Pusher', 'NextAuth', 'MongoDB', 'Prisma'],
        link: 'https://messenger-next-production.up.railway.app'
    },
    {
        title: 'Proyecto JS CoderHouse',
        img: 'public/musicprojectcoderhouse.png',
        description: 'Proyecto final para el curso de JavaScript de CoderHouse, realizado únicamente con HTML, CSS y VanillaJS',
        technologies: ['HTML', 'CSS', 'JS'],
        link: 'https://camiloerh.github.io/proyecto-js-coderhouse'
    },
];


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image

const ProjectsSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 2,
                },
            }}
        >
            {
                projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a
                            className='overflow-hidden flex items-center justify-center group'
                            key={index}
                            href={project.link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className='rounded-lg flex items-center justify-center relative overflow-hidden group'>
                                {/* image */}
                                <img
                                    src={project.img}
                                    className='h-[300px]'
                                    alt={project.title}
                                />
                                {/* overlay gradient */}
                                <div className='sm:block absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                                {/* title */}
                                <div className='sm:block absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-300'>
                                    <div className='flex flex-col items-center justify-between text-[13px] tracking-[0.2em] h-[250px]'>
                                        {/* title part 1 */}
                                        <div className='text-xl delay-100'>{project.title}</div>
                                        {/* description */}
                                        <div className='px-2 text-center'>
                                            {project.description}
                                        </div>
                                        {/* title part 2 */}
                                        <div className='flex items-center translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                            VER PROYECTO <span className='text-xl ml-2'> <BsArrowRight /></span>
                                        </div>
                                        <div className='flex gap-2 flex-wrap justify-center'>
                                            {
                                                project.technologies.map((name, index) => (
                                                    <span key={project.title + name} className="text-neutral-950 py-2 px-2 text-xs rounded-md inline-block whitespace-nowrap text-center bg-slate-200 align-baseline uppercase leading-none">{name}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default ProjectsSlider;
