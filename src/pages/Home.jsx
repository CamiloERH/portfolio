import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../utils/variants';

const Home = () => {
    return (
        <div className='h-[calc(100vh-90px)]'>
            {/* text */}
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div className='text-center flex flex-col justify-center xl:text-left h-full container mx-auto'>
                    {/* title */}
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h1'
                    >
                        Camilo Rojas Huanquitripay {' '}
                        <span className='text-accent'>Desarrollador</span>
                    </motion.h1>
                    {/* subtitle */}
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
                    >
                        Mi nombre es Camilo Rojas, Egresado de Ingeniería Civil en Informática y Telecomunicaciones, en este espacio se encuentra información sobre mí, mis proyectos, conocimiento y recursos que iré guardando.
                    </motion.p>
                    {/* btn */}
                    <motion.div
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='hidden absolute xl:flex xl:right-[250px] bottom-0 w-[400px]'
                    >
                        <img src='cat.webp' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
