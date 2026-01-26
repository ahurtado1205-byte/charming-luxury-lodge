import React from 'react';
import { IMAGES } from '../../config/images';
import { Heart, Sparkles, Wine, Moon, CheckCircle, ArrowRight } from 'lucide-react';
import '../../styles/RomanticMonth.css';

const RomanticMonth = () => {
    return (
        <div className="promo-landing">
            {/* Super Hook Hero */}
            <section className="romantic-hero">
                <div className="hero-bg">
                    <img src={IMAGES.romantic_promo} alt="Mes de los Enamorados en Charming" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content reveal">
                    <div className="romantic-badge">
                        <Heart size={16} fill="currentColor" />
                        <span>EDICIÓN LIMITADA FEBRERO</span>
                    </div>
                    <h1 className="hero-title">Un rincón exclusivo para momentos inolvidables.</h1>
                    <p className="hero-subtitle">Este Febrero, transforme sus sentimientos en recuerdos inolvidables con nuestra experiencia exclusiva <strong>"Charming Romance"</strong>.</p>
                    <div className="hero-cta-box">
                        <a href="#booking-form" className="btn btn-primary btn-lg">RESERVAR CON BENEFICIOS <ArrowRight size={20} /></a>
                        <span className="stock-warning">Solo quedan 4 suites disponibles con esta promo.</span>
                    </div>
                </div>
            </section>

            {/* The Hook / Emotional Value */}
            <section className="romantic-hook container">
                <div className="hook-grid">
                    <div className="hook-text reveal">
                        <h2 className="section-title">Imagine despertar frente al Nahuel Huapi...</h2>
                        <p className="lead">Sin horarios, sin ruidos, solo ustedes dos y la calma de la Patagonia. Hemos diseñado cada detalle para que la chispa se convierta en fuego.</p>
                        <div className="hook-features">
                            <div className="h-feat">
                                <Sparkles className="h-icon" />
                                <div>
                                    <h4>Ambientación Sensorial</h4>
                                    <p>Pétalos de rosa, sales de baño artesanales y velas aromáticas en su Private Spa.</p>
                                </div>
                            </div>
                            <div className="h-feat">
                                <Wine className="h-icon" />
                                <div>
                                    <h4>Brindis de Bienvenida</h4>
                                    <p>Botella de Espumante Premium y selección de chocolates de autor esperándolos.</p>
                                </div>
                            </div>
                            <div className="h-feat">
                                <Moon className="h-icon" />
                                <div>
                                    <h4>Cena bajo las estrellas</h4>
                                    <p>Una mesa exclusiva en Stag con menú de pasos maridado con vinos de bodega.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hook-visual reveal">
                        <div className="image-stack">
                            <img src={IMAGES.jacuzzi_view} alt="Relax en pareja" />
                            <div className="floating-card">
                                <span>"La mejor experiencia de nuestras vidas"</span>
                                <small>— María & Juan, Febrero 2025</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Package - Clear & Compelling */}
            <section className="romantic-pricing container reveal">
                <div className="pricing-box">
                    <h2 className="pricing-title">¿Qué incluye el paquete?</h2>
                    <div className="pricing-grid">
                        <ul className="include-list">
                            <li><CheckCircle size={18} /> 3 Noches en Suite Lodge Romantic</li>
                            <li><CheckCircle size={18} /> Desayuno gourmet servido en la suite</li>
                            <li><CheckCircle size={18} /> Masaje descontracturante en pareja (50 min)</li>
                            <li><CheckCircle size={18} /> Acceso ilimitado al Wellness Outdoor</li>
                        </ul>
                        <div className="price-tag">
                            <span className="old-price">Antes USD 1.540</span>
                            <span className="current-price">USD 1.190</span>
                            <span className="price-note">Precio total por pareja (3 noches)</span>
                            <a href="/contact" className="btn btn-accent full-width">RESERVAR AHORA</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof / Trust */}
            <section className="romantic-footer container reveal">
                <div className="trust-badges">
                    <p>RESEÑADO EN TRIVAGO COMO EL MEJOR HOTEL ROMÁNTICO DE ARGENTINA</p>
                    <div className="stars">⭐⭐⭐⭐⭐ 4.9/5 en Google Reviews</div>
                </div>
            </section>
        </div>
    );
};

export default RomanticMonth;
