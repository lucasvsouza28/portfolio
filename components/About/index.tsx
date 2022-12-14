import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'

type Props = {

}

const About = (props: Props) => {
  return (
    <div
        className='flex flex-col items-center justify-between h-[100%]'
    >
        <SectionHeader
            title='About me'
        />
        <div
            className='flex flex-col flex-1 items-center space-y-8 lg:flex-row lg:w-3/4 md:space-x-8
            mt-5
            '
        >
            <motion.img
                src="https://cataas.com/cat"
                className='rounded-full w-60 h-60 object-cover md:rounded-lg md:h-[300px] md:w-[300px]'
                initial={{
                    opacity: 0,
                    translateY: -300
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    duration: 1,
                }}
            />
            <motion.p
                className='text-justify px-8 text-xl'
                initial={{
                    translateY: 300,
                    opacity: 0,
                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit expedita eaque sit explicabo, doloribus officiis? Saepe quia illum qui aut vel cumque quis beatae id, fuga reprehenderit aliquam vero voluptates.
            </motion.p>
        </div>
    </div>
  )
}

export default About