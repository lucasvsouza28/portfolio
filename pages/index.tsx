import { Fragment, PropsWithChildren, ReactNode } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { Fade } from "react-awesome-reveal";
import { UserRepo } from '../@types';
import About from '../components/About';
import Experiencies from '../components/Experiencies';
import Techs from '../components/Techs';
import SectionHeader from '../components/SectionHeader';
import Projects from '../components/Projects';
import getRepositories from '../services/github';

type HomeSectionProps = {
  id: string,
  full?: boolean,
}

const HomeSection = ({
  id,
  children,
  full = false,
}: PropsWithChildren<HomeSectionProps>) => {
  return (
    <Fade>
      <section
        className={`h-screen px-5 snap-center mx-auto ${full ? 'w-full' : 'md:w-5/6 lg:w-4/6'}`}
        id={id}
      >
        {children}
      </section>
    </Fade>
  )
};

export default function Home({
  repos,
}: HomeProps) {  
  const sections: { component: ReactNode }[] = [
    { component: <HomeSection id="about"><About /></HomeSection> },
    { component: <HomeSection id="xp" full><Experiencies /></HomeSection> },
    { component: <HomeSection id="techs"><Techs /></HomeSection> },
    { component: <HomeSection id="projects" full><Projects repos={repos} /></HomeSection> },
    { component: <HomeSection id="contact"><SectionHeader title='Contact' /></HomeSection> },
  ];

  return (
    <main className='max-h-screen overflow-y-scroll
    snap snap-y snap-mandatory
    scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100
    scroll-pt-5 md:scroll-pt-20 
    pt-10
    '>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My portfolio | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sections.map((section, i) => (
        <Fragment
          key={i}
        >
          {section?.component}
        </Fragment>
      ))}
    </main>
  )
}

type HomeProps = {
  repos: UserRepo[],
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const repos = await getRepositories();

  return {
    props: {
      repos,
    }
  }
}