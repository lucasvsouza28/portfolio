import create from "zustand";

type State = {
    locale: 'pt-BR' | 'en';
    setLocale: (locale: 'pt-BR' | 'en') => void;
}

export const useLocaleStore = create<State>((set) => ({
    locale: 'pt-BR',
    setLocale: (locale: 'pt-BR' | 'en') => set(_ => ({
        locale,
    })),
}))