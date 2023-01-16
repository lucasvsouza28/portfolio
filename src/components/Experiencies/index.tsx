import { ExperienciesSection } from '../../@types';
import SectionHeader from '../SectionHeader'
import getSanityImageUrl from '../../helpers/getSanityImageUrl'
import { useLocaleStore } from '../../stores/locale'
import getPropByLocale from '../../helpers/getPropByLocale';


type Props = ExperienciesSection & {}

const Experiencies = ({
    title,
    experiencies,
}: Props) => {
    const [locale] = useLocaleStore(state => [state.locale]);
    
    return (
        <>
            <SectionHeader
                title={getPropByLocale(title, locale)}
            />

            <div
                className='flex flex-shrink-0 flex-nowrap space-x-2
                h-[85vh] overflow-x-auto pt-10 pb-5
                scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100
                snap snap-mandatory snap-x
            '>
                {experiencies?.map((item, i) => (
                    <article
                        key={i}
                        className="flex-1
                        snap-center
                        h-full min-w-[300px] md:min-w-[450px]
                        pt-10 px-5
                        relative
                        before:absolute before:rounded-lg before:-z-10
                        before:bg-glass
                        before:w-full before:h-full before:inset-0
                        before:border before:border-white/10"
                    >
                        <img
                            src={getSanityImageUrl(item.logo)}
                            alt={item.at}
                            className='h-32 w-32 mx-auto rounded-md object-contain'
                        />
                        <h2
                            className='experience-card__at
                            text-xl w-full text-center mt-5'
                        >
                            {item.at}
                        </h2>
                        <div
                            className='experince-card__dates
                            w-full text-center font-semibold'
                        >
                            {item.start.substring(0, 7)} / {item.end?.substring(0, 7) || 'now'}
                        </div>
                        <div
                            className='experince-card__techs
                            flex space-x-2 items-center justify-center flex-wrap gap-y-2
                            mt-2'
                        >
                            {item.techs.map((tech, j) => (
                                <img
                                    key={j}
                                    src={getSanityImageUrl(tech)}
                                    className='w-8 h-8 rounded-full'
                                />
                            ))}
                        </div>
                        <p className='text-justify p-5 md:mt-10 md:text-2xl'>
                            {getPropByLocale(item.description, locale)}
                        </p>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Experiencies
