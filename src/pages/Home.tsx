import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

function Home() {
  return (
    <main className="home">

      <section className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            <span></span>
            HEALTH & WELLNESS
          </div>

          <h1>
            Know your body.
            <br />
            <span>Understand your health.</span>
          </h1>

          <p>
            A simple and elegant way to calculate your BMI,
            understand your body metrics and explore useful products.
          </p>

          <div className="hero-actions">
            <Link to="/calculate" className="primary-button">
              Calculate BMI
              <ArrowRightOutlined />
            </Link>

            <Link to="/products" className="secondary-button">
              Explore Products
            </Link>
          </div>

        </div>

        <div className="hero-visual">

          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="bmi-preview">

            <div className="preview-top">
              <span>Your BMI</span>
              <span className="live-dot">●</span>
            </div>

            <div className="preview-number">
              22.4
            </div>

            <div className="preview-status">
              <span></span>
              Normal range
            </div>

            <div className="preview-line">
              <div></div>
            </div>

            <div className="preview-bottom">
              <span>18.5</span>
              <span>25</span>
            </div>

          </div>

          <div className="floating-card card-one">
            <strong>Healthy</strong>
            <span>Body status</span>
          </div>

          <div className="floating-card card-two">
            <strong>01</strong>
            <span>Simple calculation</span>
          </div>

        </div>

      </section>

      <section className="info-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Simple. Clear. Useful.</h2>
        </div>

        <div className="info-grid">

          <div className="info-card">
            <div className="info-number">01</div>
            <h3>Enter your stats</h3>
            <p>
              Enter your current weight and height into the calculator.
            </p>
          </div>

          <div className="info-card">
            <div className="info-number">02</div>
            <h3>Calculate BMI</h3>
            <p>
              Your BMI is calculated using your weight and height.
            </p>
          </div>

          <div className="info-card">
            <div className="info-number">03</div>
            <h3>Understand your result</h3>
            <p>
              Use the result as a simple reference for your body metrics.
            </p>
          </div>

        </div>

      </section>

      <section className="formula-section">

        <div>
          <span className="section-label">THE FORMULA</span>
          <h2>BMI calculation</h2>
        </div>

        <div className="formula">
          BMI = Weight (kg) / Height (m)²
        </div>

      </section>

    </main>
  );
}

export default Home;