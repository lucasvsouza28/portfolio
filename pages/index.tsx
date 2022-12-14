import { ReactNode } from 'react';
import Head from 'next/head'
import About from '../components/About';
import Experiencies from '../components/Experiencies';

type HomeSectionProps = {
  id: string,
  children: ReactNode,
}

const HomeSection = ({
  id,
  children,
  ...props
}: HomeSectionProps) => {
  return (
    <section
      className='h-screen w-full p-5 snap-center'
      id={id}
      {...props}
    >
      {children}
    </section>
  )
};

export default function Home() {
  return (
    <main className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
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
      >
        <Experiencies />
      </HomeSection>
      <HomeSection
        id="techs"
      >
        Techs
      </HomeSection>
      <HomeSection
        id="skills"
      >
        Skills
      </HomeSection>
      <HomeSection
        id="contact"
      >
        Contact
      </HomeSection>
    </main>
  )
}
