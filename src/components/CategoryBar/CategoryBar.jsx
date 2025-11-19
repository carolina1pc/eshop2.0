import { Link } from "react-router-dom";
import { SecondaryTitle } from "../../styles/StyledElements";
import './CategoryBar.css';

export default function CategoryBar() {
    return (
      <>
       <SecondaryTitle className="categories-title">Categories</SecondaryTitle>
         <div className="categories-bar">
            <ul>
            <li><Link to="/category/gaming+accessories">Gaming & Accessories</Link></li>
            <li><Link to="/category/laptop+tablet+phone">Laptop, Tablet & Phone</Link></li>
            <li><Link to="/category/pc+peripherals">PC & Peripherals</Link></li>
            </ul>
          </div>
      </>
    )
}