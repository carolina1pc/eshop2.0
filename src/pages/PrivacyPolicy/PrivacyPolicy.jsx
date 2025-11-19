import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>eShop</strong> we respect the privacy of our visitors and customers.
        This page explains how we collect, use, and protect your data.
      </p>

      <h2>1. Information Collected</h2>
      <p>
        We may collect personal information such as name, email address,
        phone number, shipping address, and payment details when you place an
        order or register on the site.
      </p>

      <h2>2. How We Use Data</h2>
      <ul>
        <li>To process and deliver orders</li>
        <li>To improve the shopping experience</li>
        <li>To send notifications and special offers</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        All data is stored securely. We use modern encryption and restricted access.
      </p>

      <h2>4. Sharing Information</h2>
      <p>
        We do not sell or rent your data to third parties.
        Information may be shared only with trusted partners (e.g., courier companies)
        strictly for order processing.
      </p>

      <h2>5. User Rights</h2>
      <p>
        You have the right to request access, correction, or deletion of your
        personal data at any time. To do so, please contact us at
        <strong>contact@eshop.com</strong>.
      </p>

      <h2>6. Updates</h2>
      <p>
        This privacy policy may be updated periodically. We encourage you to
        check this page regularly.
      </p>

      <p className="last-updated">Last updated: September 2025</p>
    </div>
  );
}

export default PrivacyPolicy;