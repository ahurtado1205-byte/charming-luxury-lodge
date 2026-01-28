import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
            <div className="navbar-container">
                <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <Link to="/" className="nav-logo">
                    <span className="logo-main">CHARMING</span>
                    <span className="logo-sub">LUXURY LODGE & PRIVATE SPA</span>
                </Link>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/lodge" className="nav-link">
                        <span className="link-title">LODGE</span>
                        <span className="link-subtitle">La esencia de Charming</span>
                    </Link>
                    <Link to="/suites" className="nav-link">
                        <span className="link-title">SUITES</span>
                        <span className="link-subtitle">Vistas que no se olvidan</span>
                    </Link>
                    <Link to="/wellness" className="nav-link">
                        <span className="link-title">WELLNESS</span>
                        <span className="link-subtitle">Spa, silencio, lago</span>
                    </Link>
                    <Link to="/stag" className="nav-link">
                        <span className="link-title">GASTRONOMÍA</span>
                        <span className="link-subtitle">Stag: fuego fino</span>
                    </Link>
                    <Link to="/offers" className="nav-link">
                        <span className="link-title">PROMOS</span>
                        <span className="link-subtitle">Escapadas y mucho más</span>
                    </Link>
                    <Link to="/gallery" className="nav-link">
                        <span className="link-title">GALERÍA</span>
                        <span className="link-subtitle">Un adelanto del viaje</span>
                    </Link>
                </div>

                <div className="nav-actions">
                    <a href="https://wa.me/542944441234" target="_blank" rel="noreferrer" className="nav-icon-link">
                        <Phone size={18} />
                        <span className="hide-tablet">WHATSAPP</span>
                    </a>
                    <Link to="/contact" className="btn btn-primary nav-reserve-btn">
                        <Calendar size={16} />
                        <span>RESERVAR</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
