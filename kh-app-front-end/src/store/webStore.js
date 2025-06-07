import { create } from "zustand";

const useWebStore = create((set) => ({
  websiteDetails: {},
  setWebsiteDetails: (details) => set({ websiteDetails: details }),
}));

export default useWebStore;
