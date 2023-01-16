import { WithTranslation } from './../@types/home-page-info';
const getPropByLocale = (prop: WithTranslation | undefined, locale: 'pt-BR' | 'en') => {
    if (!prop) return '';

    const propValue = locale === 'pt-BR' ? prop.ptBR : prop.en

    return propValue ?? '';
}

export default getPropByLocale;
