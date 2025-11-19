import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards.jsx";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import "./SearchResults.css";

function SearchResults() {
  const { query } = useParams();
  const searchTerm = decodeURIComponent(query);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        const results = list.filter(
          (product) =>
            product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFiltered(results);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, [searchTerm]);

  return (
    <>
    <CategoryBar />
    <div className="search-results-page">
      <h2>Results for "{searchTerm}"</h2>
      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="search-results-grid">
          {filtered.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default SearchResults;
