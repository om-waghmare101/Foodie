import React from "react";
import "./About.css"
import img from "../../assets/Maha-thali.jpg"


const About = () => {

    return <>
        <section className="about">
            <div className="about-container">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Welcome to our culinary corner, where passion for authentic flavors meets the joy of cooking.
                        We believe every meal tells a story, and we are here to share the finest recipes, cooking tips,
                        and food discoveries with you.Our mission is to make delicious, restaurant-quality meals accessible to everyone,
                        whether you are a complete beginner or a seasoned home cook.Every recipe we feature is carefully tested in our
                        kitchen, ensuring it is packed with flavor, easy to follow, and guaranteed to impress your loved ones.
                        We focus on using fresh, seasonal ingredients and bringing a modern twist to traditional favorites.
                        More than just a food website, we are a community of passionate eaters and creators who celebrate the universal
                        language of good food. Explore our curated collections, find your next favorite dish,
                        and let us inspire your daily dining experience.</p>
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