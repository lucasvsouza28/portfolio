import Head from 'next/head'
import { Fragment, PropsWithChildren, ReactNode, useEffect, useState} from 'react';
import { GetStaticProps } from 'next';
import { ToastContainer } from 'react-toastify';
import { InView } from 'react-intersection-observer';

// type
import { HomePageInfo, WithLocale } from '../@types';

// components
import About from '../components/About';
import Experiencies from '../components/Experiencies';
import Techs from '../components/Techs';
import Contact from '../components/Contact';

// usecases
import { getHomePageInfo } from '../usecases/getHomePageInfo';

// stores
import { useIntersectionStore } from '../stores/navbar';
import { useLocaleStore } from '../stores/locale';
import { useTitleStore } from '../stores/title';

// style
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

// constants
const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

type HomeSectionProps = {
  id: string;
  full?: boolean;
}

const HomeSection = ({
  id,
  children,
  full = false,
}: PropsWithChildren<HomeSectionProps>) => {
  const [setCurrentElementId] = useIntersectionStore(state => [state.setCurrentElementId]);
  const [inView, setinView] = useState(false);

  return (
    <motion.div
      initial='hidden'
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: .7 }}
      viewport={{ once: false }}
      className="w-full h-full"
    >
      <InView as="section"
        className={`h-screen px-5 snap-center mx-auto ${full ? 'w-full' : 'md:w-5/6 lg:w-4/6'}`}
        id={id}
        threshold={0.8}
        onChange={(_inView) => {
          setinView(_inView)
          if (_inView) setCurrentElementId(`#${id}`)
        }}
      >
        {children}
      </InView>
    </motion.div>
  )
};

export default function Home({
  about,
  experiencies,
  technologies,
  contact,
  owner,
  title,
  locale,
}: HomePageInfo & WithLocale) {
  const [setLocale] = useLocaleStore(state => [state.setLocale]);
  const [setTitle] = useTitleStore(state => [state.setTitle])
  
  const sections: { component: ReactNode }[] = [
    { component: <HomeSection id="about"><About {...about} /></HomeSection> },
    { component: <HomeSection id="xp" full><Experiencies {...experiencies} /></HomeSection> },
    { component: <HomeSection id="techs"><Techs {...technologies} /></HomeSection> },
    { component: <HomeSection id="contact"><Contact {...contact} /></HomeSection> },
  ];
  
  useEffect(() => {
    setLocale(locale);
    setTitle(title);
  }, [
    setLocale,
    locale,
    setTitle,
    title,
  ]);

  return (
    <main className='max-h-screen overflow-y-scroll
    snap snap-y snap-mandatory
    scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100
    scroll-pt-5 md:scroll-pt-5
    pt-10
    '>
      <Head>
        <title>{`${owner} Portfolio | Home`}</title>
        <meta name="description" content={`${owner} Portfolio | Home`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sections.map((section, i) => (
        <Fragment
          key={i}
        >
          {section?.component}
        </Fragment>
      ))}
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
    </main>
  )
}


export const getStaticProps: GetStaticProps<HomePageInfo & WithLocale> = async (context) => {
  const locale = (context.locale ?? 'pt-BR') as 'pt-BR' | 'en';
  const homePageInfo = await getHomePageInfo();
  
  return {
    props: {
      ...homePageInfo,
      locale,
    },
    revalidate: ONE_DAY_IN_SECONDS,
  }
}