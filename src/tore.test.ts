import { describe, expect, test } from "vitest";
import { calculateBMI } from "./store";

describe("BMI Calculator", () => {
  test("คำนวณ BMI ได้ถูกต้อง", () => {
    const result = calculateBMI(45, 150);

    expect(result).toBe(20);
  });
});