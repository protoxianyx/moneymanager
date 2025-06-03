import { create } from "zustand";

type SelectionState = {
  selected: string;
  label: string;
  setSelected: (value: string) => void;
  setLabel: (value: string) => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
  selected: "Choose Tag",
  label: "",
  setSelected: (value) => set({ selected: value }),
  setLabel: (label) => set({ label }),
}));
