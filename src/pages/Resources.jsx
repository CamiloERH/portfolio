import { motion } from 'framer-motion';

import { fadeIn } from '../utils/variants';

const resourcesData = [
    {
        title: 'Normalización | Bases de datos',
        description: 'La normalización es la estrategia con la que se eliminan las redundancias en las bases de datos relacionales.',
        link: 'https://www.ionos.es/digitalguide/hosting/cuestiones-tecnicas/normalizacion/',
        img: 'https://www.ionos.es/digitalguide/fileadmin/_processed_/7/b/csm_database-t_26c78ff6da.webp',
        tags: ['bases de datos', 'normalización']
    },
    {
        title: 'Factory Pattern | React',
        description: 'What is factory pattern and how is it used to build complex, scalable UI in React.',
        link: 'https://blog.bitsrc.io/react-js-with-factory-pattern-building-complex-ui-with-ease-fe6db29ab1c1',
        img: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*v3Aj--qF26Z7um5kMXMllg.jpeg',
        tags: ['React', 'Patrones de diseño']
    },
    {
        title: 'Patrón Factory | Patrones de diseño',
        description: 'Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.',
        link: 'https://refactoring.guru/es/design-patterns/factory-method',
        img: 'https://refactoring.guru/images/patterns/content/factory-method/factory-method-es.png?id=4040e2911292e5a623f10e36c380459d',
        tags: ['Factory method', 'Patrones de diseño']
    },
    {
        title: 'Diagrama de secuencia: Guía completa',
        description: 'Este tutorial te ayudará a entender mejor los diagramas de secuencia.',
        link: 'https://creately.com/blog/es/diagramas/tutorial-del-diagrama-de-secuencia/',
        img: 'https://d3n817fwly711g.cloudfront.net/uploads/2020/10/tutorial-del-diagrama-de-secuencia-1.png',
        tags: ['Diagrama de secuencia', 'UML', 'Diagramas']
    },
]

const Resources = () => {
    return (
        <div className='bg-primary/30 py-36 flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-x-8 justify-center'>
                    <div className='text-center flex flex-col mb-4 xl:mb-0'>
                        <motion.h2
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2 xl:mt-12'
                        >
                            Recursos <span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-4'
                        >
                            Recursos y lecturas utiles para proyectos de desarrollo.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full grid grid-cols-fluid gap-2 px-2 overflow-y-auto'
                    >
                        {
                            resourcesData.map((item) => (
                                <a
                                    href={item.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    key={item.title}
                                    className="group cursor-pointer rounded overflow-hidden shadow-lg bg-[#FFF]"
                                >
                                    <img className="w-full" src={item.img} alt={item.title + 'img'} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 text-neutral-950 xl:group-hover:text-accent">{item.title}</div>
                                        <p className="text-gray-700 text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        {
                                            item.tags.map(tag => (
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                                            ))
                                        }
                                    </div>
                                </a>
                            ))
                        }

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
