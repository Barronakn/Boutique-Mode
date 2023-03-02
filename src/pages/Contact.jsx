import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
    return (
      <div className="contact">
        <Navigation />
        <h1>Contact</h1>
        <div className="contactContainer">
          <div className="service">
            <h2>Contact de service</h2>
            <NavLink to="#">aknshop@gmail.com</NavLink>
          </div>
          <div className="livraison">
            <h2>Contact du livreur</h2>
            <NavLink to="#">livreur@gmail.com</NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Contact;