export type WithTitle = {
  title: string;
}

export type SanityImage = {
  asset: {
    url: string;
  }
}

export type AboutSection = WithTitle & {
  image: SanityImage;
  intro: string;
  socialNetworks: string[];
}

export type ExperienciesSection = WithTitle & {
  experiencies: {
    logo: SanityImage;
    at: string;
    start: string;
    end?: string;
    description: string;
    techs: SanityImage[];
  }[],
}

export type TechsSection = WithTitle & {}

export type ContactSection = WithTitle & {}

export type HomePageInfo = {
  _id: string;
  owner: string;
  about: AboutSection;
  experiencies: ExperienciesSection;
  techs: TechsSection;
  contact: ContactSection;
}

export type SanityHomePageInfo = {
  allHomePageInfo: HomePageInfo[]
}