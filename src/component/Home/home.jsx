import React, { useState, useRef, useEffect } from "react";
import "./Home.css"
import Card from "../Card/Card";
import { IoSearch } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import wrap from "../../assets/wrap.webp"
import SandWich from "../../assets/Sandwich.jpg"
import vadapav from "../../assets/vadapav.jpg"
import pasta from "../../assets/pasta.jpg"

import ButterIce from "../../assets/butterscotch-ice.webp"
import ChocolateIce from "../../assets/chocolate-ice.jpg"
import vanillaIce from "../../assets/vanilla-ice.jpg"
import straberryIce from "../../assets/straberry-ice.webp"

import dosa from "../../assets/dosa.jpg"
import upma from "../../assets/upma.jpg"
import poha from "../../assets/poha.jpg"
import sabudana from "../../assets/Sabudana-khichdi.jpg"
import meduvada from "../../assets/medu-vada.jpg"
import idli from "../../assets/idli.jpg"

import maha_thali from "../../assets/Maha-thali.jpg"
import panjabi_thali from "../../assets/Panjabi-thali.jpg"
import rajasthani_thali from "../../assets/rajasthani-thali.png"
import south_thali from "../../assets/south-thali.jpg"

import solkadi from "../../assets/solkadi.jpg"


const bannerData = [
    { img: pasta, tag: "COMBO DEAL", title: "Buy 1 Get 1 Free", sub: "Pasta & Fast Food Combo" },
    { img: maha_thali, tag: "BEST SELLER", title: "Flat 30% OFF", sub: "Maharashtrian Thali Special" },
    { img: south_thali, tag: "WEEKEND SPECIAL", title: "Thali @ ₹79 Only", sub: "South Indian Thali Delight" },
]


const Home = ({cart,setCart}) => {

    let [search, setSearch] = useState("")
    let [current, setCurrent] = useState(0)
    let bannerRef = useRef(null)

    const slide = (dir) => {
        let next = current + dir
        if (next < 0) next = bannerData.length - 1
        if (next >= bannerData.length) next = 0
        setCurrent(next)
    }

    useEffect(() => {
        if (bannerRef.current) {
            bannerRef.current.scrollTo({ left: current * bannerRef.current.offsetWidth, behavior: "smooth" })
        }
    }, [current])

    useEffect(() => {
        const timer = setInterval(() => slide(1), 4000)
        return () => clearInterval(timer)
    }, [current])

    let cardData = [

        {
            id: 1,
            name: "Wrap",
            img: wrap,
            desc: "Crispy tortilla loaded with fresh veggies, sauces and grilled filling.",
            price: 100
        },
        {
            id: 2,
            name: "SandWich",
            img: SandWich,
            desc: "Classic layered sandwich with cheese, veggies and a tangy spread.",
            price: 80
        },
        {
            id: 3,
            name: "Vada Pav",
            img: vadapav,
            desc: "Mumbai's iconic spicy vada stuffed in a soft pav with chutneys.",
            price: 30
        },
        {
            id: 4,
            name: "Pasta",
            img: pasta,
            desc: "Creamy Italian pasta tossed in rich cheese sauce with herbs.",
            price: 180
        },
        {
            id: 5,
            name: "Butterscotch Ice-Cream",
            img: ButterIce,
            desc: "Sweet butterscotch scoop with crunchy caramel bits on top.",
            price: 60
        },
        {
            id: 6,
            name: "Chocolate Ice-Cream",
            img: ChocolateIce,
            desc: "Rich dark chocolate ice-cream with a smooth velvety finish.",
            price: 60
        },
        {
            id: 7,
            name: "Vanilla Ice-Cream",
            img: vanillaIce,
            desc: "Classic creamy vanilla scoop, perfect with any dessert.",
            price: 60
        },
        {
            id: 8,
            name: "Strawberry Ice-Cream",
            img: straberryIce,
            desc: "Fresh strawberry flavoured ice-cream with fruity chunks.",
            price: 60
        },
        {
            id: 9,
            name: "Dosa",
            img: dosa,
            desc: "Golden crispy rice crepe served with sambar and coconut chutney.",
            price: 100
        },
        {
            id: 10,
            name: "Upma",
            img: upma,
            desc: "Warm semolina tempered with mustard, curry leaves and peanuts.",
            price: 50
        },
        {
            id: 11,
            name: "Poha",
            img: poha,
            desc: "Flattened rice tossed with onions, turmeric and fresh coriander.",
            price: 40
        },
        {
            id: 12,
            name: "Sabudana Khichdi",
            img: sabudana,
            desc: "Soft tapioca pearls cooked with peanuts, cumin and green chillies.",
            price: 60
        },
        {
            id: 13,
            name: "Idli",
            img: idli,
            desc: "Steamed fluffy rice cakes, light and healthy with hot sambar.",
            price: 60
        },
        {
            id: 14,
            name: "Medu Vada",
            img: meduvada,
            desc: "Crispy golden lentil donut, crunchy outside and soft inside.",
            price: 50
        },
        {
            id: 15,
            name: "Maharashtrian Thali",
            img: maha_thali,
            desc: "Authentic thali with bhakar, pitla, bharli vangi and more.",
            price: 180
        },
        {
            id: 16,
            name: "Panjabi Thali",
            img: panjabi_thali,
            desc: "Loaded thali with paneer, dal makhani, naan and raita.",
            price: 250
        },
        {
            id: 17,
            name: "Rajasthani Thali",
            img: rajasthani_thali,
            desc: "Royal thali with dal baati churma, ker sangri and gatte.",
            price: 220
        },
        {
            id: 18,
            name: "South Indian Thali",
            img: south_thali,
            desc: "Complete thali with rice, sambar, rasam, poriyal and payasam.",
            price: 180
        },

        {
            id : 19,
            name: "Solkadi",
            img:solkadi,
            desc:"A chilling Coconut and Kokam Drink",
            price: 40
        }


    ]

    let filterData = cardData.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <div>
            <div className="heroWrapper">
                <div className="heroBanner" ref={bannerRef}>
                    {bannerData.map((item, i) => (
                        <div className="heroSlide" key={i}>
                            <img src={item.img} alt={item.title} />
                            <div className="heroColorOverlay"></div>
                            <div className="heroContent">
                                <span className="heroTag">{item.tag}</span>
                                <h2>{item.title}</h2>
                                <p>{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="heroArrow left" onClick={() => slide(-1)}>
                    <FaChevronLeft />
                </button>
                <button className="heroArrow right" onClick={() => slide(1)}>
                    <FaChevronRight />
                </button>

                <div className="heroDots">
                    {bannerData.map((_, i) => (
                        <span key={i} className={`heroDot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}></span>
                    ))}
                </div>
            </div>

            <h2 className="menuHeading">Our Menu</h2>

            <div className="search">
                <div className="searchBar">
                    <IoSearch></IoSearch>
                    <input type="text" placeholder="Search Food Item" value={search} 
                    onChange={(e)=>{setSearch(e.target.value)}}>
                    </input>
                </div>
            </div>
            <Card cardData={filterData} cart ={cart} setCart={setCart} />
        </div>
    )

}
export default Home