import { Fragment, PropsWithChildren, ReactNode, useEffect} from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { Fade } from "react-awesome-reveal";
import { HomePageInfo } from '../@types';
import About from '../components/About';
import Experiencies from '../components/Experiencies';
import Techs from '../components/Techs';
import SectionHeader from '../components/SectionHeader';
import { useIntersectionStore } from '../stores/navbar';
import { InView } from 'react-intersection-observer';
import { getHomePageInfo } from '../usecases/getHomePageInfo';

type HomeSectionProps = {
  id: string;
  full?: boolean;
}

const HomeSection = ({
  id,
  children,
  full = false,
}: PropsWithChildren<HomeSectionProps>) => {
  const [setCurrentElementId] = useIntersectionStore(state => [state.setCurrentElementId])

  return (
    <Fade>
      <InView as="section"
        className={`h-screen px-5 snap-center mx-auto ${full ? 'w-full' : 'md:w-5/6 lg:w-4/6'}`}
        id={id}
        threshold={0.8}
        onChange={(inView) => {
          if (inView) setCurrentElementId(`#${id}`)
        }}
      >
        {children}
      </InView>
    </Fade>
  )
};

export default function Home({
  about,
 experiencies,
 techs,
 contact, 
}: HomePageInfo) {  
  const sections: { component: ReactNode }[] = [
    { component: <HomeSection id="about"><About {...about} /></HomeSection> },
    { component: <HomeSection id="xp" full><Experiencies {...experiencies} /></HomeSection> },
    { component: <HomeSection id="techs"><Techs {...techs} /></HomeSection> },
    { component: <HomeSection id="contact"><SectionHeader {...contact} /></HomeSection> },
  ];

  return (
    <main className='max-h-screen overflow-y-scroll
    snap snap-y snap-mandatory
    scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100
    scroll-pt-5 md:scroll-pt-5
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

export const getServerSideProps: GetServerSideProps<HomePageInfo> = async () => {
  const homePageInfo = await getHomePageInfo();
  
  return {
    props: homePageInfo
  }
}