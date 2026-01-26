import React, { useState, useEffect } from 'react';
import { X, Heart, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';
import '../styles/PromoPopup.css';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds, only once per session
        const hasSeenPopup = sessionStorage.getItem('hasSeenRomanticPopup');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenRomanticPopup', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-card" onClick={e => e.stopPropagation()}>
                <button className="popup-close" onClick={closePopup}>
                    <X size={24} />
                </button>

                <div className="popup-grid">
                    <div className="popup-image">
                        <img src={IMAGES.romantic_promo} alt="Escapada Romántica" />
                        <div className="popup-badge">
                            <Heart size={14} fill="currentColor" />
                            <span>ESPECIAL FEBRERO</span>
                        </div>
                    </div>

                    <div className="popup-content">
                        <span className="popup-pretitle">¿Buscando el regalo perfecto?</span>
                        <h2 className="popup-title">Mes de los Enamorados en la Patagonia</h2>
                        <p className="popup-desc">Descubra nuestro rincón exclusivo diseñado para momentos inolvidables. 3 noches con spa privado, cena gourmet y masajes.</p>

                        <div className="popup-price">
                            <span className="price-label">PAQUETE EXCLUSIVO</span>
                            <div className="price-value">
                                <span className="currency">USD</span>
                                <span className="amount">1.190</span>
                            </div>
                        </div>

                        <a href="/promo/mes-de-los-enamorados" className="btn btn-primary full-width">
                            VER EXPERIENCIA <ArrowRight size={18} />
                        </a>

                        <p className="popup-footer-text">Quedan pocas unidades disponibles para esta fecha.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
