import { WithTranslation } from './../@types/home-page-info';
const getPropByLocale = (prop: WithTranslation, locale: 'pt-BR' | 'en') => {
    const propValue = locale === 'pt-BR' ? prop.ptBR : prop.en

    return propValue ?? '';
}

export default getPropByLocale;
