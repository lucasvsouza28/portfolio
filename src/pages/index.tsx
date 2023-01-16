import { Fragment, PropsWithChildren, ReactNode, useEffect} from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Fade } from "react-awesome-reveal";
import { ToastContainer } from 'react-toastify';
import { HomePageInfo, WithLocale } from '../@types';
import About from '../components/About';
import Experiencies from '../components/Experiencies';
import Techs from '../components/Techs';
import { useIntersectionStore } from '../stores/navbar';
import { InView } from 'react-intersection-observer';
import { getHomePageInfo } from '../usecases/getHomePageInfo';
import Contact from '../components/Contact';
import { useLocaleStore } from '../stores/locale'
import 'react-toastify/dist/ReactToastify.css';
const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

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
  technologies,
  contact,
  owner,
  locale,
}: HomePageInfo & WithLocale) {
  const [setLocale] = useLocaleStore(state => [state.setLocale]);
  
  const sections: { component: ReactNode }[] = [
    { component: <HomeSection id="about"><About {...about} /></HomeSection> },
    { component: <HomeSection id="xp" full><Experiencies {...experiencies} /></HomeSection> },
    { component: <HomeSection id="techs"><Techs {...technologies} /></HomeSection> },
    { component: <HomeSection id="contact"><Contact {...contact} /></HomeSection> },
  ];
  
  useEffect(() => {
    setLocale(locale);    
  }, [setLocale, locale]);

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
  const locale = context.locale;
  const homePageInfo = await getHomePageInfo();
  
  return {
    props: {
      ...homePageInfo,
      locale,
    },
    revalidate: ONE_DAY_IN_MILLISECONDS,
  }
}