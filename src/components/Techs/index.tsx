import Image from 'next/image';
import { TechsSection } from '../../@types';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';
import SectionHeader from '../SectionHeader';

type Props = TechsSection & {}

const Techs = ({
    title,
    techs,
}: Props) => {
  return (
    <div
        className=''
    >
        <SectionHeader
            title={title}
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
                />
            ))}
        </div>
    </div>
  )
}

export default Techs