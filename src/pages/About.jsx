import React, { useState } from 'react';

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
    FaExternalLinkAlt
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiTailwindcss,
    SiNestjs
} from 'react-icons/si';

//  about data
export const aboutData = [
    {
        title: 'Habilidades',
        info: [
            {
                title: 'Desarrollo Web',
                icons: [
                    { icon: <FaHtml5 />, label: 'HTML' },
                    { icon: <FaJs />, label: 'JavaScript' },
                    { icon: <FaReact />, label: 'ReactJS' },
                    { icon: <SiNextdotjs />, label: 'NextJS' },
                    { icon: <SiTailwindcss />, label: 'Tailwind  CSS' },
                    { icon: <SiNestjs />, label: 'NestJS' },
                ],
            }
        ],
    },
    {
        title: 'Cursos/Certificados',
        info: [
            {
                title: 'EF SET English Certificate 69/100 (C1 Advanced):',
                link: 'https://www.efset.org/cert/X3o5Eg',
            },
            {
                title: 'JavaScript, CoderHouse',
                link: 'https://www.coderhouse.cl/certificados/6224fb1f490bb200255bde1f',
            },
            {
                title: 'Metodologías Ágiles, CoderHouse',
                link: 'https://www.coderhouse.cl/certificados/622bd9ee587734009e29ecc4',
            },
            {
                title: 'Desarrollo Web, CoderHouse',
                link: 'https://www.coderhouse.cl/certificados/62434944ed273f001998f26b',
            },
            {
                title: 'TypeScript, OpenWebinars',
                link: 'https://openwebinars.net/cert/ejm5',
            },
            {
                title: 'NestJS, OpenWebinars',
                link: 'https://openwebinars.net/cert/olvc',
            },
            {
                title: 'Git, OpenWebinars',
                link: 'https://openwebinars.net/cert/Dp7P',
            },
        ],
    },
];

// components

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

// counter

const About = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='h-full xl:h-[calc(100vh-90px)] py-32 xl:bg-primary/30 text-center xl:text-left'>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                {/* text */}
                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2'
                    >
                        Hola, soy <span className='text-accent'>Camilo Rojas</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                    >
                        Egresado de Ingeniería Civil en Informática y Telecomunicaciones, actualmente me encuentro estudiando para mi examen de grado y profundizando mis conocimientos sobre desarrollo web.
                    </motion.p>
                </div>
                {/* info */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col w-full xl:max-w-[48%] justify-center'
                >
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex &&
                                        'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                                        }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className='mb-[80px] py-4 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className='flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                >
                                    {/* title */}
                                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    {
                                        item.link &&
                                        <a href={item.link} rel="noopener noreferrer" target="_blank">
                                            <FaExternalLinkAlt />
                                        </a>
                                    }
                                    <div className='flex gap-x-4'>
                                        {/* icons */}
                                        {item.icons?.map((iconItem, iconItemIndex) => {
                                            return (
                                                <div key={iconItem.label} className='text-2xl text-white group relative hover:text-accent transition-all duration-300'>
                                                    <div className='absolute bottom-[-50px] hidden xl:group-hover:flex'>
                                                        <div className='bg-white flex text-primary items-center p-[6px] rounded-[3px]'>
                                                            <div className='text-[12px] leading-none font-semibold capitalize text-center'>
                                                                {iconItem.label}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {iconItem.icon}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
                <div className='h-[180px]'></div>
            </div>
        </div>
    );
};



export default About;
