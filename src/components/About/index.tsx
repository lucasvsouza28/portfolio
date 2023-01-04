import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { SocialIcon } from 'react-social-icons'
import { AboutSection } from '../../@types'
import getSanityImageUrl from '../../helpers/getSanityImageUrl'

const About = ({
    title,
    image,
    intro,
    socialNetworks,
}: AboutSection) => {
  return (
    <div
        className='flex flex-col items-center justify-between h-[100%] mx-auto gap-y-10'
    >
        <SectionHeader
            title={title}
        />
        <div
            className='flex flex-col flex-1 items-center space-y-8 lg:flex-row lg:w-3/4 md:space-x-8'
        >
            <div
                className='flex flex-col gap-4 flex-shrink-0'
            >
                <motion.img
                    src={getSanityImageUrl(image)}
                    className='rounded-full object-cover md:rounded-lg w-60 h-60 md:h-[300px] md:w-[300px]'
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
                <div
                    className='flex gap-4 justify-center lg:justify-start mb-2 md:mb-0'
                >
                    {socialNetworks?.map((item, i) => (
                        <SocialIcon
                            key={i}
                            url={item}
                            style={{
                                width: 32,
                                height: 32
                            }}
                        />
                    ))}
                </div>
            </div>
            <motion.p
                className='text-justify text-xl px-8 md:px-0'
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
                {intro}
            </motion.p>
        </div>
    </div>
  )
}

export default About