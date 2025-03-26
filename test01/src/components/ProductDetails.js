import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="container mt-5">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <strong>Category:</strong> {product.category} <br />
            <strong>Price:</strong> {product.price} <br />
            <strong>Stock:</strong> {product.stock} <br />
            <strong>Description:</strong> {product.description}
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
