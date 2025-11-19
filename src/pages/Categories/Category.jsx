import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Card from "../../components/Cards/Cards";

const categoryMap = {
  "laptop+tablet+phone": ["laptop", "tablet", "phone"],
  "gaming+accessories": ["console", "accessories"],
  "pc+peripherals": ["pc", "peripherals", "components"]
};

export default function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const cats = categoryMap[name] || [name];
        const filtered = data.filter((p) =>
          cats.includes(p.category.toLowerCase())
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [name]);

  return (
    <div className="category-container">
      <CategoryBar /> 
        <div className="cards">
          {loading ? (
            <p style={{ color: "white" }}>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((p) => <Card key={p.id} product={p} />)
          ) : (
            <p style={{ color: "white" }}>No products in this category.</p>
          )}
        </div>
      </div>
    
  );
}
