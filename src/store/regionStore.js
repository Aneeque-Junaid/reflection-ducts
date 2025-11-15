import { defineStore } from "pinia";

export const useRegionStore = defineStore("region", {
  state: () => ({
    region: localStorage.getItem("region") || null,
  }),
  actions: {
    setRegion(value) {
      this.region = value;
      localStorage.setItem("region", value);
    },
  },
});
