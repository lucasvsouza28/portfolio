import Image from 'next/image';
import { TechsSection } from '../../@types';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';
import SectionHeader from '../SectionHeader';
import { useLocaleStore } from '../../stores/locale';
import getPropByLocale from '../../helpers/getPropByLocale';

type Props = TechsSection & {}

const Techs = ({
    title,
    techs,
}: Props) => {
    const [locale] = useLocaleStore(state => [state.locale]);
    
  return (
    <div
        className=''
    >
        <SectionHeader
            title={getPropByLocale(title, locale)}
        />

        <div
            className='mt-5 grid grid-cols-3 gap-y-5 place-items-center max-w-3xl mx-auto'
        >
            {techs?.map((item, i) => (
                <Image
                    key={i}
                    src={getSanityImageUrl(item)}
                    alt='technology logo'
                    width={48}
                    height={48}
                    priority
                    className='rounded-full
                    border border-1 border-white/20
                    bg-glass bg-white/40
                    aspect-square object-contain p-1
                    h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]'
                />
            ))}
        </div>
    </div>
  )
}

export default Techs