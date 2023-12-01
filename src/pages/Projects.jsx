import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../utils/variants';
import ProjectsSlider from '../components/ProjectsSlider';

const Projects = () => {
    return (
        <div className='h-[calc(100vh-90px)] bg-primary/30 py-36 flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8 justify-center'>
                    <div className='text-center flex xl:w-[30%] flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2 xl:mt-12'
                        >
                            Mis proyectos <span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-4 sm:max-w-[400px] mx-auto lg:mx-0'
                        >
                            Algunos de los proyectos que he realizado, ya sea para cursos, en la Universidad o proyectos personales.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:max-w-[60%]'
                    >
                        <ProjectsSlider />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
