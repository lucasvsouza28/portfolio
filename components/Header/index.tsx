import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

type Props = {}

const Header = ({}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const buttonRef = useRef(null);
    const links = [
        { title: 'About', link: '#about' },
        { title: 'Experience', link: '#xp' },
        { title: 'Technologies', link: '#techs' },
        { title: 'Skills', link: '#skills' },
        { title: 'Contact', link: '#contact' },
    ]

    useEffect(() => {
        const fn = (event: globalThis.MouseEvent) => {
            // @ts-ignore
            if (buttonRef.current && !buttonRef.current?.contains(event.target) && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('click', fn)
    
        return () => {
            document.removeEventListener('click', fn);
        }
    }, [buttonRef, isMenuOpen, setIsMenuOpen])

  return (
    <header className='p-5 sticky'>
        <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
        >
            <GiHamburgerMenu
                color='#FFF'
            />
        </button>

        {isMenuOpen && (
            <motion.div
                className='h-screen absolute p-4 bg-slate-100 top-0 w-3/5 md:hideen text-black'
                initial={{
                    left: -500,
                    opacity: 0,
                }}
                animate={{
                    left: 0,
                    opacity: 1,
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
                            <Link
                                href={item.link}
                                className='w-full'
                            >
                                <span className='font-bold'>#</span> {item.title}
                            </Link>
                        </li>
                    )) }
                </ul>
            </motion.div>
        )}

        <div
            className='hidden md:flex text-2xl tracking-widest flex-row justify-between items-center'
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