export interface Product {
  id: number;
  title: string;
  image: string;
}

export type CalculateState = {
  weightKg: number;
  heightCm: number;
  bmi: number | null;

  setWeightKg: (weight: number) => void;
  setHeightCm: (height: number) => void;
  calculateBmi: () => void;
};