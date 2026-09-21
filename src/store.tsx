import { create } from "zustand";
import type { CalculateState } from "./type";

export function calculateBMI(
  weightKg: number,
  heightCm: number
): number {
  const heightM = heightCm / 100;

  return Number(
    (weightKg / (heightM * heightM)).toFixed(2)
  );
}

export const useCalculateStore = create<CalculateState>((set, get) => ({
  weightKg: 0,
  heightCm: 0,
  bmi: null,

  setWeightKg: (weight) => {
    set({ weightKg: weight });
  },

  setHeightCm: (height) => {
    set({ heightCm: height });
  },

  calculateBmi: () => {
    const { weightKg, heightCm } = get();

    if (weightKg > 0 && heightCm > 0) {
      set({
        bmi: calculateBMI(weightKg, heightCm),
      });
    }
  },
}));