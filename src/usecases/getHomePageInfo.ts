import { HomePageInfo } from '../@types'

export const getHomePageInfo = async () => {
    const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste distinctio quibusdam doloremque facere voluptates, aperiam reprehenderit harum eaque sed maiores illum soluta fuga, mollitia sequi labore? Illum maxime atque voluptatum.';
    const pageInfo: HomePageInfo = {
        about: {
            title: 'About me',
            imageUrl: 'https://cataas.com/cat',
            intro: lorem,
            socialNetworks: [
                'https://www.linkedin.com/lucasvsouza28',
                'https://www.twitter.com/lucasvsouza28',
                'https://www.instagram.com/lucasvsouza28',
            ],
        },
        experiencies: {
            title: 'Experiencies',
            experiencies: [
                {
                    logo: 'https://i.pinimg.com/736x/1b/22/6e/1b226e4b5a10cc709e5ca11cbbe77e8c.jpg',
                    at: 'XP',
                    start: '08/2021',
                    description: lorem,
                    techs: [
                        { imageUrl: '' },
                        { imageUrl: '' },
                        { imageUrl: '' },
                    ]
                },
                {
                    logo: 'https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-pictures/cl769682n00e304yp9l7has7f.jpg',
                    at: 'I4',
                    start: '12/2019',
                    end: '07/2021',
                    description: lorem,
                    techs: [
                        { imageUrl: '' },
                        { imageUrl: '' },
                        { imageUrl: '' },
                    ]
                },
                {
                    logo: 'https://www.cqcs.com.br/wp-content/uploads/2020/11/quali.jpg',
                    at: 'Qualicorp',
                    start: '06/2017',
                    end: '12/2019',
                    description: lorem,
                    techs: [
                        { imageUrl: '' },
                        { imageUrl: '' },
                        { imageUrl: '' }
                    ]
                },
                {
                    logo: 'https://mgcontecnica.com.br/wp-content/uploads/2019/07/volta-redonda-logoMG.jpg',
                    at: 'MG',
                    start: '01/2015',
                    end: '07/2017',
                    description: lorem,
                    techs: [
                        { imageUrl: '' },
                        { imageUrl: '' },
                        { imageUrl: '' },
                    ]
                }
            ]
        },
        techs: {
            title: 'Techs',
        },
        contact: {
            title: 'Contact',
        },
    };

    return pageInfo;
};