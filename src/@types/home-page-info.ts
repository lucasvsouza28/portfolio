export type WithLocale = {
  locale: 'pt-BR' | 'en';
}

export type WithTranslation = {
  ptBR?: string;
  en?: string;
}

export type WithTitle = {
  title: string;
}

export type WithTitleTranslation = {
  title: WithTranslation;
}

export type SanityImage = {
  asset: {
    url: string;
  }
}

export type AboutSection = WithTitleTranslation & {
  image: SanityImage;
  intro: WithTranslation;
  socialNetworks: string[];
}

export type ExperienciesSection = WithTitleTranslation & {
  experiencies: {
    logo: SanityImage;
    at: string;
    start: string;
    end?: string;
    description: WithTranslation;
    techs: SanityImage[];
  }[],
}

export type TechsSection = WithTitleTranslation & {
  techs: SanityImage[]
}

export type ContactSection = WithTitleTranslation & {
  name_placeholder: WithTranslation;
  message_placeholder: WithTranslation;
  cancel_button: WithTranslation;
  submit_button: WithTranslation;
}

export type HomePageInfo = WithTitleTranslation & {
  _id: string;
  owner: string;
  about: AboutSection;
  experiencies: ExperienciesSection;
  technologies: TechsSection;
  contact: ContactSection;
}

export type SanityHomePageInfo = {
  allHomePageInfo: HomePageInfo[]
}