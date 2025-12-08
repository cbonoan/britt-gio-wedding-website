import { useState, useEffect } from "react";
import "../../styles/Navbar.scss";
import "../../styles/RSVP.scss";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <h2 className="brand-text">G&B</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop-menu">
          <button
            className="nav-link"
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("wedding-details"), 100);
            }}
          >
            When & Where
          </button>
          <button
            className="nav-link"
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("our-story"), 100);
            }}
          >
            Our Story
          </button>
          <Link className="nav-link" to="/dress-code">
            Dress Code
          </Link>
          <Link className="nav-link" to="/registry">
            Registry
          </Link>
          <button className="rsvp-button">RSVP</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <button
            className="mobile-nav-link"
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("wedding-details"), 100);
            }}
          >
            When & Where
          </button>
          <button
            className="mobile-nav-link"
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("our-story"), 100);
            }}
          >
            Our Story
          </button>
          <Link
            className="mobile-nav-link"
            to="/dress-code"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dress Code
          </Link>
          <Link
            className="mobile-nav-link"
            to="/registry"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Registry
          </Link>
          <button className="mobile-rsvp-button">RSVP</button>
        </div>
      </div>
    </nav>
  );
};
