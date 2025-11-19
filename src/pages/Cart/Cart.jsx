import React, { useState, useContext } from 'react';
import { Button } from '../../styles/StyledElements.js';
import { CartContext } from './CartContext.jsx';
import { Link } from 'react-router-dom';
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    address: ''
  });

  const [termsError, setTermsError] = useState("");

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const termsCheckbox = e.target.querySelector('input[type="checkbox"]');
  if (!termsCheckbox.checked) {
    setTermsError("You must accept the Terms and Conditions!");
    return;
  }

  setTermsError("");

  const order = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    email: formData.email,
    country: formData.country,
    city: formData.city,
    address: formData.address,
    items: cart.map((item) => ({ productId: item.id, quantity: item.qty })),
    total,
  };

    fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Order saved:", data);
      alert("Order submitted successfully!");
      clearCart();
      setFormData({ firstName: "", lastName: "", phone: "", email: "", country: "", city: "", address: "" });
    })
    .catch((err) => console.error(err));
};

const totalPrice = total.toFixed(2);
const [totalInt, totalDec] = totalPrice.split(".");

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
            <img src={item.image} alt={item.name} className="card-image-cart" />
            <span className="text-name-item">{item.name}</span>
            <button className='btn-delete-cart' onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>
            <div className="item-info">
            <div className="qty-control">
              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <span className="card-price">
              {(() => {
                const price = (item.price * item.qty).toFixed(2);
                const [intPart, decimalPart] = price.split(".");
                return (
                <>
                <span className="card-price">{intPart}</span>
                <span className="price-decimals">{decimalPart} RON</span>
                </>
                );
                })()}
                </span>
            </div>
          </div>
        ))
      )}

      <p className="cart-total-text">Total: <span className="price-int">{totalInt}</span>
  <span className="price-decimals">{totalDec} RON</span></p>

      <form className="client-form" onSubmit={handleSubmit}>
        <input className="client-input" name="firstName" value={formData.firstName || ""} onChange={handleChange} placeholder="First name" required />
        <input className="client-input" name="lastName" value={formData.lastName || ""} onChange={handleChange} placeholder="Last name" required />
        <input className="client-input" name="phone" value={formData.phone || ""} onChange={handleChange} placeholder="Phone" required />
        <input className="client-input" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Email" required />
        <input className="client-input" name="country" value={formData.country || ""} onChange={handleChange} placeholder="Country" required />
        <input className="client-input" name="city" value={formData.city || ""} onChange={handleChange} placeholder="City" required />
        <input className="client-input" name="address" value={formData.address || ""} onChange={handleChange} placeholder="Address" required />
        <label className="terms-checkbox">
          <input type="checkbox" /><span className="custom-checkbox"></span>I accept the 
          <Link to="/terms" className="terms-link">Terms and Conditions</Link></label>
          {termsError && <p className="error-message">{termsError}</p>}
          <Button className="client-btn" type="submit">Submit Order</Button>
      </form>
    </div>
  )
}

export default Cart