import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="f-logo">
                            <span className="logo-main">CHARMING</span>
                            <span className="logo-sub">LUXURY LODGE & PRIVATE SPA</span>
                        </Link>
                        <p className="f-desc">El refugio más exclusivo de Bariloche, donde el lujo se encuentra con la naturaleza.</p>
                        <div className="f-social">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h4>Navegación</h4>
                        <ul>
                            <li><Link to="/lodge">El Lodge</Link></li>
                            <li><Link to="/suites">Suites & Apartamentos</Link></li>
                            <li><Link to="/experiences">Experiencias</Link></li>
                            <li><Link to="/stag">Stag Restaurant</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav">
                        <h4>Información</h4>
                        <ul>
                            <li><Link to="/location">Ubicación</Link></li>
                            <li><Link to="/events">Eventos & Grupos</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                            <li><Link to="/offers">Ofertas Especiales</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contacto</h4>
                        <div className="c-item">
                            <MapPin size={18} />
                            <span>Av. Bustillo Km 7.5, Bariloche</span>
                        </div>
                        <div className="c-item">
                            <Phone size={18} />
                            <span>+54 294 444 1234</span>
                        </div>
                        <div className="c-item">
                            <Mail size={18} />
                            <span>reservas@charming-lodge.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Charming Luxury Lodge & Private Spa. Todos los derechos reservados.</p>
                    <div className="f-legal">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
