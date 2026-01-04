import { defineStore } from "pinia";

export const useRegionStore = defineStore("region", {
  state: () => ({
    region: localStorage.getItem("region") || null,
    initialized: localStorage.getItem("initialized") === "true" || false,
  }),

  actions: {
    setRegion(value, initialized) {
      this.region = value;
      this.initialized = initialized
      localStorage.setItem("initialized", initialized)
      localStorage.setItem("region", value);
    },
  },
});
