import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="not-found-page">

      <div className="not-found-number">
        404
      </div>

      <span className="section-label">
        PAGE NOT FOUND
      </span>

      <h1>
        This page doesn't exist.
      </h1>

      <p>
        You will be redirected to the homepage in 5 seconds.
      </p>

      <Link to="/" className="primary-button">
        Back to Home →
      </Link>

    </main>
  );
}

export default NotFound;