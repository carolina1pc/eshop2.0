import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Edit from "../Edit/Edit";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        if (!res.ok) throw new Error('Failed to load product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [id]);

const handleEdit = () => {
  setEditingProduct(product);
  setIsEditing(true);
};

 const handleSave = (updatedProduct) => {
  fetch(`http://localhost:3000/products/${updatedProduct.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Produs actualizat:", data);
      setCurrentProduct(data);
      setIsEditing(false);
    })
    .catch((err) => console.error("Eroare la update produs:", err));
};

 const handleDelete = (productId, productName) => {
  if (window.confirm(`Ești sigur că vrei să ștergi produsul "${productName}"?`)) {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          alert("Produsul a fost șters cu succes!");
        } else {
          alert("A apărut o eroare la ștergere!");
        }
      })
      .catch(err => console.error(err));
  }
};

  return (
    <div className="product-page-container">
  {product ? (
    <ProductDetail
      product={product}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  ) : (
    <p>Produsul nu a fost găsit.</p>
  )}

  {editingProduct && (
    <Edit
      product={editingProduct}
      onClose={() => setEditingProduct(null)}
      onSave={handleSave} 
    />
  )}
</div>

  );
}