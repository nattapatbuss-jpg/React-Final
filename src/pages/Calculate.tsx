import { Button, InputNumber } from "antd";
import { useCalculateStore } from "../store";

function Calculate() {
  const {
    weightKg,
    heightCm,
    bmi,
    setWeightKg,
    setHeightCm,
    calculateBmi,
  } = useCalculateStore();

  const getStatus = () => {
    if (bmi === null) {
      return "Waiting for your measurements";
    }

    if (bmi < 18.5) {
      return "Below the normal range";
    }

    if (bmi < 25) {
      return "Within the normal range";
    }

    if (bmi < 30) {
      return "Above the normal range";
    }

    return "High BMI range";
  };

  const getProgress = () => {
    if (bmi === null) return 0;

    return Math.min((bmi / 40) * 100, 100);
  };

  return (
    <main className="calculate-page">

      <div className="calculate-header">
        <span className="section-label">
          BODY METRICS
        </span>

        <h1>BMI Calculator</h1>

        <p>
          Enter your measurements and get your BMI result instantly.
        </p>
      </div>

      <section className="calculator-layout">

        <div className="calculator-card">

          <div className="card-heading">
            <span>01</span>
            <div>
              <h2>Your measurements</h2>
              <p>Use your current weight and height.</p>
            </div>
          </div>

          <div className="input-section">

            <label>
              Weight
              <span>KG</span>
            </label>

            <InputNumber
              className="big-input"
              min={1}
              value={weightKg}
              onChange={(value) =>
                setWeightKg(value ?? 0)
              }
              placeholder="Enter weight"
            />

          </div>

          <div className="input-section">

            <label>
              Height
              <span>CM</span>
            </label>

            <InputNumber
              className="big-input"
              min={1}
              value={heightCm}
              onChange={(value) =>
                setHeightCm(value ?? 0)
              }
              placeholder="Enter height"
            />

          </div>

          <Button
            className="calculate-main-button"
            onClick={calculateBmi}
          >
            Calculate BMI
            <span>→</span>
          </Button>

        </div>

        <div className="result-card">

          <div className="result-top">
            <span>Your result</span>

            <div className="result-icon">
              ✓
            </div>
          </div>

          <div className="result-main">

            <span className="result-label">
              BMI SCORE
            </span>

            <div className="result-number">
              {bmi !== null ? bmi : "--"}
            </div>

            <div className="result-status">
              <span></span>
              {getStatus()}
            </div>

          </div>

          <div className="range-container">

            <div className="range-labels">
              <span>Underweight</span>
              <span>Normal</span>
              <span>Overweight</span>
            </div>

            <div className="range-bar">
              <div
                className="range-progress"
                style={{
                  width: `${getProgress()}%`,
                }}
              />
            </div>

            <div className="range-values">
              <span>18.5</span>
              <span>25</span>
              <span>30+</span>
            </div>

          </div>

          <div className="result-note">
            BMI is calculated using weight and height.
          </div>

        </div>

      </section>

      <section className="formula-card">

        <div className="formula-icon">
          ∑
        </div>

        <div>
          <span>CALCULATION FORMULA</span>

          <h3>
            BMI = Weight (kg) / Height (m)²
          </h3>
        </div>

      </section>

    </main>
  );
}

export default Calculate;