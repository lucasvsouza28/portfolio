import { SanityHomePageInfo } from '../@types'
import apollo, {  } from '../factories/apollo'
import getHomePageInfoQuery from '../queries/getHomePageInfo'

export const getHomePageInfo = async () => {
    const response = await apollo.query<SanityHomePageInfo>({
        query: getHomePageInfoQuery,
    });

    if (response.data.allHomePageInfo.length) {

        return response.data.allHomePageInfo[0]
    };
    
    return null;
};