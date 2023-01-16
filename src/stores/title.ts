import { WithTranslation } from './../@types/home-page-info';
import create from "zustand";

type State = {
    title?: WithTranslation;
    setTitle: (title: WithTranslation) => void;
}

export const useTitleStore = create<State>((set) => ({
    title: undefined,
    setTitle: (title: WithTranslation) => set(state => ({
        ...state,
        title,
    })),
}))