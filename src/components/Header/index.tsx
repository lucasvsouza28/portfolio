import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useRouter } from 'next/router';

import { motion, useCycle, AnimatePresence } from 'framer-motion';

// components
import { GiHamburgerMenu } from 'react-icons/gi';

// stores
import { useLocaleStore } from '../../stores/locale';
import { useTitleStore } from '../../stores/title';
import { useIntersectionStore } from '../../stores/navbar';

// helpers
import getPropByLocale from '../../helpers/getPropByLocale'
import { gaEvent } from '../../helpers/ga'

// assets
import brasil from '../../assets/brasil.jpg'
import unitedStates from '../../assets/united_states.webp'

type Props = {}

const Header = ({
}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useCycle(false, true)
    const buttonRef = useRef(null);
    const [locale] = useLocaleStore(state => [state.locale]);
    const [title] = useTitleStore(state => [state.title])
    const router = useRouter();
    const router = useRouter();
    
    const links = [
        { title: '#AboutMe', link: '#about' },
        { title: '#Experiencies', link: '#xp' },
        { title: '#Technologies', link: '#techs' },
        { title: '#Contact', link: '#contact' },
    ]

    const currentElementId = useIntersectionStore(state => state.currentElementId)

    const handleMenuLinkClick = (path: string) => {
        gaEvent({ action: 'click', category: 'menu', label: 'menu click', value: path })
        router.push(path);
    };

    const handleLocaleClick = (locale: string) => {
        gaEvent({ action: 'click', category: 'language', label: 'language click', value: locale })
        router.push(locale);
    };

    const handleMenuLinkClick = (path: string) => {
        gaEvent({ action: 'click', category: 'menu', label: 'menu click', value: path })
        router.push(path);
    };

    const handleLocaleClick = (locale: string) => {
        gaEvent({ action: 'click', category: 'language', label: 'language click', value: locale })
        router.push(locale);
    };

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

    // TODO: Accessibility | add text to button

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

                        <ul className='flex flex-col space-y-2
                        my-4
                        '>
                            { links.map((item, i) => (
                                <li
                                    key={i}
                                    className={`p-2 hover:border-b hover:border-b-[#CCC] ${currentElementId === item.link ? 'border-b border-b-[#CCC]' : ''}`}
                                >
                                    <Link
                                        href="/"
                                        className='w-full'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleMenuLinkClick(item.link)
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )) }
                        </ul>
                        <div
                            className='flex gap-x-2 ml-4'
                        >
                            <Link
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLocaleClick('pt-BR')
                                }}
                            >
                                <Image
                                    src={brasil}
                                    alt="Visualizar site em portugês"
                                    height={32}
                                    width={32}
                                />
                            </Link>
                            <Link
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLocaleClick('en')
                                }}
                            >
                                <Image
                                    src={unitedStates}
                                    alt="View site in english"
                                    height={32}
                                    width={32}
                                />
                            </Link>
                        </div>
                    </motion.div>
            )}
        </AnimatePresence>

        <div
            className='hidden lg:flex text-2xl tracking-widest flex-row justify-between items-center'
        >
            <div>
                {getPropByLocale(title, locale)}
            </div>
            <div
                className='flex justify-end items-center'
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
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleMenuLinkClick(item.link)
                                }}
                                className={`w-full
                                relative
                                hover:before:absolute hover:before:bottom-0 hover:before:w-full hover:before:h-1 hover:before:bg-slate-200
                                ${currentElementId === item.link ? 'border-b border-b-[#CCC]' : ''}`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )) }
                </ul>
                <div
                    className='flex gap-x-2 ml-4'
                >
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault()
                            handleLocaleClick('pt-BR')
                        }}
                    >
                        <Image
                            src={brasil}
                            alt="Visualizar site em portugês"
                            height={32}
                            width={32}
                        />
                    </Link>
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault()
                            handleLocaleClick('en')
                        }}
                    >
                        <Image
                            src={unitedStates}
                            alt="View site in english"
                            height={32}
                            width={32}
                        />
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header