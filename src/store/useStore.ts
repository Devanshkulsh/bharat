import { create } from 'zustand';

type SiteStore = {
  activeLightboxImage: string | null;
  setActiveLightboxImage: (image: string | null) => void;
};

export const useStore = create<SiteStore>((set) => ({
  activeLightboxImage: null,
  setActiveLightboxImage: (image) => set({ activeLightboxImage: image }),
}));
