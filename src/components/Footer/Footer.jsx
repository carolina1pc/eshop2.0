import { Link } from 'react-router-dom'
import '../Colors.css'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className='footer-lists'>
                <p className='text-footer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates pariatur praesentium quis odio fugit fugiat. Eveniet atque nemo earum exercitationem! Nam incidunt cupiditate officiis culpa fuga aliquid in vitae eaque., ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim illo! Velit enim optio error. Ducimus ea nesciunt reiciendis obcaecati?</p>
            <ul className='footer-list'>
                <li className='title-footer-list'>Customer Support</li>
                <li className='link-footer'><Link to="/contact">Contact</Link></li>
                <li className='link-footer'><Link to="https://anpc.ro/?ref=footer_3_6">Consumer Protection - A.N.P.C.</Link></li>
                <li className='link-footer'><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
            <ul className='footer-list'>
                <li className='title-footer-list'>About Us</li>
                <li className='link-footer'><Link to="/about">About Us</Link></li>
                <li className='link-footer'><Link to="/terms">Terms and Conditions</Link></li>
            </ul>
            </div>
            <p className='footer-text'>&copy; {new Date().getFullYear()} Shop Project. All rights reserved.</p>
        </div>
        </footer>
    );
    }

export default Footer;