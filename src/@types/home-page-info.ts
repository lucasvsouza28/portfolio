export type WithTitle = {
  title: string;
}

export type AboutSection = WithTitle & {
  imageUrl: string;
  intro: string;
  socialNetworks: string[];
}

export type ExperienciesSection = WithTitle & {
  experiencies: {
    logo: string;
    at: string;
    start: string;
    end?: string;
    description: string;
    techs: {
      imageUrl: string
    }[];
  }[],
}

export type TechsSection = WithTitle & {}

export type ContactSection = WithTitle & {}

export type HomePageInfo = {
  about: AboutSection;
  experiencies: ExperienciesSection;
  techs: TechsSection;
  contact: ContactSection;
}
  