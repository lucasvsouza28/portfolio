import { gql } from '@apollo/client'

const getHomePageInfoQuery = gql`
{
    allHomePageInfo(where: { owner: { eq: "Lucas Souza"} }) {
      _id,
      owner,
      about {
          title,
        image {
          asset {
            url
          }
        },
        intro,
        socialNetworks
      },
      experiencies {
        title,
        experiencies {
          at,
          logo {
            asset {
              url
            }
          },
          start,
          end,
          description,
          techs {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

export default getHomePageInfoQuery;
