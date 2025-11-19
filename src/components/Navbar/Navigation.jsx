import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { CartContext } from '../../pages/Cart/CartContext.jsx';
import Add from '../../pages/Add/Add.jsx';
// Load products from backend for search
import './Navigation.css';
import '../Colors.css';
import styles from './Nav.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Failed to load products for search:', err));
  }, []);

  const [isAdding, setIsAdding] = useState(false);
  const handleOpenAddModal = () => setIsAdding(true);
  const handleCloseAddModal = () => setIsAdding(false);

  const handleAddProduct = (newProduct) => {
  fetch("http://localhost:3000/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    ...newProduct,
    price: Number(newProduct.price),
    stock: Number(newProduct.stock),
    category: newProduct.category
  }),
})
.then(res => {
  if (!res.ok) throw new Error("Error adding product");
  return res.json();
})
.then(data => {
  console.log("Product added:", data);
  handleCloseAddModal();
})
.catch(err => console.error("❌", err));
};

  return (
    <nav className={styles.navbar}>
      <div className="nav-mobile">
        <Link to="/">
        <span className="logo-mobile"><img src="/logo-eshop.svg" alt="eShop Logo" width="30px" height="30px"/>
  </span>
</Link>

    <SearchBox products={products} />

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className='home'><Link to="/">
        <span className="logo-desktop">
          <img src="/logo-eshop.svg" alt="eShop Logo" width="30px" height="30px"/>
  <img src="/text-eshop.svg" alt="eShop Text" style={{ marginLeft: '8px', height: '24px' }} />
</span>
        </Link></li>
        <li className='search'><SearchBox products={products} /></li>
        </ul>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <button onClick={handleOpenAddModal} className="add-product-btn">Add Product</button>
        {isAdding && (<Add onClose={handleCloseAddModal} onAdd={handleAddProduct} />)}
        <li className='cart'>
          <Link to="/cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/>
            </svg>My Cart
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar