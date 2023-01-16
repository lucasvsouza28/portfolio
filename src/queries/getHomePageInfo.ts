import { gql } from '@apollo/client'

const getHomePageInfoQuery = gql`
{
    allHomePageInfo(where: { owner: { eq: "Lucas Souza"} }) {
      _id,
      owner,
      about {
        title {
          ptBR,
          en
        },
        image {
          asset {
            url
          }
        },
        intro {
          ptBR,
          en
        },
        socialNetworks
      },
      experiencies {
        title{
          ptBR,
          en
        },
        experiencies {
          at,
          logo {
            asset {
              url
            }
          },
          start,
          end,
          description{
            ptBR,
            en
          },
          techs {
            asset {
              url
            }
          }
        }
      },
      technologies {
        title{
          ptBR,
          en
        },
        techs {
          asset {
            url
          }
        }
      },
      contact {
        title {
          ptBR,
          en
        },
        name_placeholder {
          ptBR,
          en
        },
        message_placeholder {
          ptBR,
          en
        },
        cancel_button {
          ptBR,
          en
        },
        submit_button {
          ptBR,
          en
        }
      }
    }
  }
`;

export default getHomePageInfoQuery;
