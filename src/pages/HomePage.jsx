import React from "react";
import "../styles/Main.css";
import Frontlanding from "../component/home/Frontlanding";
import HealthBenefits from "../component/home/HealthBenefits";
import GridCategories from "../component/home/GridCategories";
import Enquiry from "../component/home/Enquiry";
import Footer from "../component/Footer";

import AOS from "aos";
AOS.init();
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import veg_powder from "../assets/images/veg_powder.jpg";
import fruits1_powder from "../assets/images/fruits1_powder.jpg";
import leaf1_powder from "../assets/images/leaf1_powder.jpg";
import rose_powder from "../assets/images/rose_powder.jpg";
import mango_about from "../assets/images/mango_about.jpg";

const HomePage = () => {
  return (
    <>
      <Frontlanding />

      <section id="why_choose_us">
        <h1>Our Main Goal is to Ensure Our Customers are Happy</h1>
        <div className="why_container">
          <img
            src={mango_about}
            alt="Customer Satisfaction"
            data-aos="fade-right"
          />
          <div className="choose" data-aos="fade-left">
            <h2>Why Choose Us</h2>
            <div className="benefits">
              <ul>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Premium Quality: Nutrient-rich dehydrated fruits and
                  vegetables, available in raw and powdered forms.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Versatile Applications: Ideal for food manufacturing, dietary
                  supplements, pet food, cosmetics, Ayurvedic medicine, and
                  instant foods.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Eco-Friendly: Advanced solar drying technology reduces
                  environmental impact and food waste.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Empowering Farmers: Supports sustainable agriculture and local
                  farming communities.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Global Reach: Robust export and import capabilities with ISO,
                  MSME, APEDA, FEDA, and FSSAI certification.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="variety_of_powders">
        <h1>Variety of Powders</h1>
        <div className="powders">
          <div className="powder_item">
            <img
              src={veg_powder}
              alt="Dehydrated Vegetable Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Vegetable - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={fruits1_powder}
              alt="Dehydrated Fruit Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Fruit - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={leaf1_powder}
              alt="Dehydrated Leaf Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Leaf - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={rose_powder}
              alt="Dehydrated Rose Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Rose - flakes & powder</h3>
          </div>
        </div>
      </section>
      
      <GridCategories />
      <HealthBenefits />
      <Enquiry />
      <Footer />
    </>
  );
};

export default HomePage;
