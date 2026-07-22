import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <h2>Foodie</h2>
                    <p>Delicious food delivered to your doorstep</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </div>

                <div className="footer-section">
                    <h3>Contact Information</h3>
                    <p>Email : info@gmail.com</p>
                    <p>Phone : +91 987654321</p>

                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Foodie. All Right Reserved</p>
            </div>


        </footer>
    )

}
export default Footer