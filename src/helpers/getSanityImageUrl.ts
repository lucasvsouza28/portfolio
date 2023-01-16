import { SanityImage } from '../@types/home-page-info'

const getSanityImageUrl = (image: SanityImage) => {
    return image?.asset?.url;
}

export default getSanityImageUrl;
