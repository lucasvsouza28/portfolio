import create from "zustand";

type State = {
    currentElementId: string;
    setCurrentElementId: (id: string) => void;
}

export const useIntersectionStore = create<State>((set) => ({
    currentElementId: '',
    setCurrentElementId: (id) => set(_ => ({
        currentElementId: id
    })),
}))