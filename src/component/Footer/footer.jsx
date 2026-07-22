import React from "react";
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
                    <h3>Quick Link</h3>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
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