import { useEffect, useState } from "react";
import { Card, Col, Row, Spin, Alert } from "antd";
import type { Product } from "../type";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load products. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="loading-page">
        <Spin size="large" />
        <h2>Loading products...</h2>
        <p>Preparing something useful for you.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="products-page">
        <Alert
          message="Something went wrong"
          description={error}
          type="error"
          showIcon
        />
      </main>
    );
  }

  return (
    <main className="products-page">

      <div className="products-header">

        <div>
          <span className="section-label">
            CURATED COLLECTION
          </span>

          <h1>Products</h1>
        </div>

        <p>
          Explore products from our connected
          <br />
          online collection.
        </p>

      </div>

      <Row gutter={[24, 24]}>

        {products.map((product) => (
          <Col
            key={product.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              className="product-card"
              hoverable
              cover={
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>
              }
            >

              <div className="product-content">

                <span className="product-category">
                  PRODUCT #{product.id}
                </span>

                <h3>
                  {product.title}
                </h3>

                <div className="product-footer">
                  <span>Explore</span>
                  <span>→</span>
                </div>

              </div>

            </Card>
          </Col>
        ))}

      </Row>

    </main>
  );
}

export default ProductList;