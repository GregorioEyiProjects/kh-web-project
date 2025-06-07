import { create } from "zustand";

const useDashboardStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isModalOpen: false,
  openModal: () => {
    set({ isModalOpen: true });
  },
  dashboardDetails: {},
  setDashboardDetails: (details) => set({ dashboardDetails: details }),
}));

export default useDashboardStore;
// This is a Zustand store for managing the state of the dashboard.
