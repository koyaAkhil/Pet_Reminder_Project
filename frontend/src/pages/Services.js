import React from "react";
import { Link } from "react-router-dom";
import "../Style_CSS/service.css";

function Services() {
  const services = [
    { id: 1, title: "Veterinary Services", image: "/images/service1.jpg", link: "/veterinary-services" },
    { id: 2, title: "Wellness Exams", image: "/images/service2.jpg", link: "/wellness-exams" },
    { id: 3, title: "Dental Care", image: "/images/service3.jpg", link: "/dental-care" },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <Link key={service.id} to={service.link} className="service-card" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="service-card-text">
              <h3>{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
