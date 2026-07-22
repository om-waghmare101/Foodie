import React from "react";
import "./About.css"
import img from "../../assets/Maha-thali.jpg"


const About = () => {

    return <>
        <section className="about">
            <div className="about-container">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Welcome to <strong>Foodie</strong> — where every dish is crafted with love and served with a smile. We bring you the authentic flavours of India, from street-style Vada Pav to royal Rajasthani Thalis, all under one roof.</p>
                    <p>Our mission is simple: deliver fresh, delicious, and affordable food right to your doorstep. Whether it's a quick snack or a full thali meal, we make sure every bite leaves you wanting more.</p>
                    <p>What sets us apart is our commitment to quality. Every ingredient is handpicked, every recipe is tested, and every order is prepared with care. Because at Foodie, we don't just serve food — we serve happiness.</p>
                    <button className="about-button">Learn More</button>
                </div>
                <div className="about-images">
                    <img src={img} alt="about" />

                </div>
                
            </div>
        </section>
    </>

}
export default About