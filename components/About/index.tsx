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
            title='About'
        />
        <div
            className='flex flex-col flex-1 items-center justify-center space-y-8 md:flex-row md:w-3/4 md:space-x-8'
        >
            <motion.img
                src="https://cataas.com/cat"
                className='rounded-full w-60 h-60 object-cover md:rounded-lg md:h-[300px] md:w-[300px]'
                initial={{
                    top: -300,
                    opacity: 0,
                }}
                animate={{
                    top: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1
                }}
            />
            <motion.p
                className='text-justify px-8 text-xl'
                initial={{
                    bottom: -300,
                    opacity: 0,
                }}
                animate={{
                    bottom: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit expedita eaque sit explicabo, doloribus officiis? Saepe quia illum qui aut vel cumque quis beatae id, fuga reprehenderit aliquam vero voluptates.
            </motion.p>
        </div>
    </div>
  )
}

export default About