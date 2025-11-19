import React from "react";
import { Link } from "react-router-dom";
import "./TermsPage.css";

export default function TermsPage() {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      
      <p>Welcome to eShop! Please read these terms carefully before using our website.</p>
      
      <h2>1. Use of Website</h2>
      <p>
        Accessing and using our website implies acceptance of these terms. You may not use the site for illegal or unauthorized activities.
      </p>

      <h2>2. Products and Orders</h2>
      <p>
        Displayed products may differ from their images. Prices and availability are subject to change without prior notice.
      </p>

      <h2>3. Return Policy</h2>
      <p>
        Returns are handled in accordance with applicable laws and our internal policy. Please contact us for details.
      </p>

      <h2>4. Privacy</h2>
      <p>
        Your personal data is protected and will not be shared with third parties without your consent.
      </p>

      <p>Thank you for using eShop and respecting our terms and conditions!</p>

      <Link to="/" className="back-link">⬅ Back to store</Link>
    </div>
  );
}