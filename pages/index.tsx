import { PropsWithChildren } from 'react';
import { Fade } from "react-awesome-reveal";
import Head from 'next/head'
import About from '../components/About';
import Experiencies from '../components/Experiencies';
import Techs from '../components/Techs';
import SectionHeader from '../components/SectionHeader';

type HomeSectionProps = {
  id: string,
  full?: boolean,
}

const HomeSection = ({
  id,
  children,
  full = false,
  ...props
}: PropsWithChildren<HomeSectionProps>) => {
  return (
    <Fade>
      <section
        className={`h-screen px-5 snap-center mx-auto ${full ? 'w-full' : 'md:w-5/6 lg:w-4/6'}`}
        id={id}
        {...props}
      >
        {children}
      </section>
    </Fade>
  )
};

export default function Home() {
  return (
    <main className='max-h-screen overflow-y-scroll
    snap snap-y snap-mandatory
    scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection
        id="about"
      >
        <About />
      </HomeSection>
      <HomeSection
        id="xp"
        full
      >
        <Experiencies />
      </HomeSection>
      <HomeSection
        id="techs"
      >
        <Techs />
      </HomeSection>
      <HomeSection
        id="skills"
      >
        <SectionHeader title='Skills' />
      </HomeSection>
      <HomeSection
        id="contact"
      >
        <SectionHeader title='Contact' />
      </HomeSection>
    </main>
  )
}
