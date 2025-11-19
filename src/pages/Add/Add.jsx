import React, { useState } from "react";
import "../Edit/Edit.css";
export default function Add({ onClose, onAdd }) {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "laptop",
    image: "",
    description: "",
    stock: ""
  });

  const categories = [
    "laptop",
    "tablet",
    "phone",
    "console",
    "accessories",
    "pc",
    "peripherals",
    "components"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(productData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Product</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Price
            <input
              type="number"
              name="price"
              step="0.01"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Category
            <select
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>

          <label>
            Image URL
            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Stock
            <input
              type="number"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              min="0"
              required
            />
          </label>

          <div className="modal-buttons">
            <button type="submit" className="btn-save">Save</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
