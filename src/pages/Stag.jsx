import React from 'react';
import { Clock, Users, Utensils, MapPin } from 'lucide-react';
import { IMAGES } from '../config/images';
import '../styles/Stag.css';

const Stag = () => (
    <div className="stag-page">
        {/* Hero Informativo */}
        <section className="stag-hero">
            <div className="hero-bg">
                <img src={IMAGES.stag_atmosphere} alt="Restaurante Stag Bariloche" />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content reveal">
                <span className="stag-label">Propuesta Gastronómica</span>
                <h1 className="hero-title">STAG</h1>
                <p className="hero-subtitle">Cocina de Autor y Regional frente al Lago Nahuel Huapi.</p>
                <div className="hero-btns">
                    <a href="#reservar" className="btn btn-primary btn-white">Reservar una Mesa</a>
                </div>
            </div>
        </section>

        {/* Concepto Gastronómico */}
        <section className="stag-concept container reveal">
            <div className="concept-grid">
                <div className="concept-text">
                    <h2 className="section-title">Nuestra Cocina.</h2>
                    <p className="concept-desc">Stag ofrece una experiencia gastronómica de alta gama inspirada en los productos de la Patagonia. Nuestra carta combina técnicas modernas con ingredientes locales seleccionados, servidos en un salón de montaña con vistas panorámicas al lago.</p>
                    <p className="concept-note">Un espacio ideal tanto para cenas individuales como para eventos especiales, donde el paisaje natural integra la propuesta culinaria.</p>

                    <div className="stag-details">
                        <div className="s-detail">
                            <Clock size={20} color="var(--accent)" />
                            <div className="detail-info">
                                <strong className="detail-label">HORARIOS</strong>
                                <span className="detail-value">Desayunos, Almuerzos & Cenas</span>
                            </div>
                        </div>
                        <div className="s-detail">
                            <Users size={20} color="var(--accent)" />
                            <div className="detail-info">
                                <strong className="detail-label">RESERVAS</strong>
                                <span className="detail-value">Mesas exclusivas para huéspedes y comensales externos.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="concept-image">
                    <img src={IMAGES.stag_gastronomy} alt="Platos del Restaurante Stag Bariloche" className="floating-img-stag" />
                </div>
            </div>
        </section>

        {/* Carta & Bodega */}
        <section className="stag-menu-cta">
            <div className="container reveal">
                <div className="menu-box">
                    <h2 className="menu-title">Nuestra Carta</h2>
                    <p className="menu-desc">Contamos con opciones a la carta y menús de pasos que se renuevan según los productos de estación.</p>
                    <div className="menu-btns">
                        <button className="btn btn-outline-white">Ver Menú</button>
                        <button className="btn btn-outline-white">Carta de Vinos</button>
                    </div>
                </div>
            </div>
        </section>

        {/* Reservas */}
        <section id="reservar" className="stag-reservation container reveal">
            <div className="reservation-grid">
                <div className="res-card guests">
                    <h3 className="res-title">Huéspedes del Lodge</h3>
                    <p className="res-desc">Consulte por prioridad en mesas con vista al lago y opciones de cargo a la habitación.</p>
                    <button className="btn btn-primary">Gestionar Reserva</button>
                </div>
                <div className="res-card external">
                    <h3 className="res-title">Comensales Externos</h3>
                    <p className="res-desc">Aceptamos reservas externas según disponibilidad diaria. Se recomienda aviso previo de 48 hs.</p>
                    <button className="btn btn-primary">Reservar Online</button>
                </div>
            </div>
        </section>

        {/* Ubicación */}
        <section className="stag-location container reveal">
            <MapPin size={40} color="var(--accent)" />
            <h2 className="section-title">Encuéntrenos en Bariloche</h2>
            <p className="location-desc">Av. Bustillo Km 7.5. Estacionamiento privado disponible.</p>
        </section>
    </div>
);

export default Stag;
