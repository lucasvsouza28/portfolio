import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

type Props = {}

const Header = ({}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useCycle(false, true)
    const buttonRef = useRef(null);
    const links = [
        { title: '#AboutMe', link: '#about' },
        { title: '#Experiencies', link: '#xp' },
        { title: '#Technologies', link: '#techs' },
        { title: '#Projects', link: '#projects' },
        { title: '#Contact', link: '#contact' },
    ]

    useEffect(() => {
        const fn = (event: globalThis.MouseEvent) => {
            // @ts-ignore
            if (buttonRef.current && !buttonRef.current?.contains(event.target) && isMenuOpen) {
                setIsMenuOpen(0)
            }
        }
        document.addEventListener('click', fn)
    
        return () => {
            document.removeEventListener('click', fn);
        }
    }, [buttonRef, isMenuOpen, setIsMenuOpen])

  return (
    <header className='px-5 py-2 fixed z-50 w-full'>
        <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen()}
            className="lg:hidden"
        >
            <GiHamburgerMenu
                color='#FFF'
                size={40}
            />
        </button>

        <AnimatePresence>
            {isMenuOpen && (
                    <motion.div
                        className='h-screen absolute p-4 bg-slate-100 top-0
                        w-[60vw] sm:[30vw] lg:[20vw]
                        text-black
                        lg:hideen
                        '
                        initial={{
                            left: -500,
                            opacity: 0,
                        }}
                        animate={{
                            left: 0,
                            opacity: 1,
                        }}
                        exit={{
                            left: -500,
                            opacity: [1, 1, .2, 0],
                            transition: { duration: 0.5 }
                        }}
                    >
                        <h1 className='text-2xl'>
                            Portfolio
                        </h1>

                        <ul className='mt-4 flex flex-col space-y-2'>
                            { links.map((item, i) => (
                                <li
                                    key={i}
                                    className="p-2 hover:border-b hover:border-b-[#CCC]"
                                >
                                    <a
                                        href={item.link}
                                        className='w-full'
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            )) }
                        </ul>
                    </motion.div>
            )}
        </AnimatePresence>

        <div
            className='hidden lg:flex text-2xl tracking-widest flex-row justify-between items-center'
        >
            <div>
                My Portfolio
            </div>
            <div
                className=''
            >
                <ul className='flex flex-row space-x-2 items-center justify-center text-center'>
                    { links.map((item, i) => (
                        <li
                            key={i}
                            className="
                            p-2
                            relative
                            text-center                            
                            transition-all duration-100"
                        >
                            <Link
                                href={item.link}
                                className='w-full
                                relative
                                hover:before:absolute hover:before:bottom-0 hover:before:w-full hover:before:h-1 hover:before:bg-slate-200'
                            >
                                {item.title}
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header