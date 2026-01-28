import React from 'react';
import { IMAGES } from '../config/images';
import { Tag, Calendar, Gift, ChevronRight } from 'lucide-react';
import '../styles/Offers.css';

const Offers = () => {
    const promos = [
        {
            title: "Mes de los Enamorados",
            label: "MOMENTO ROMANCE",
            desc: "La experiencia definitiva para parejas en un entorno de ensueño. Private spa, cena de pasos y detalles que enamoran.",
            features: ["Set de bienvenida 'Romance'", "Cena de Pasos en Stag", "Masaje en pareja incluido"],
            validUntil: "Todo el mes de Febrero",
            image: IMAGES.romantic_promo,
            color: "#800020"
        },
        {
            title: "Pre-Winter 2026",
            label: "EARLY BIRD",
            desc: "Asegure su temporada de nieve con beneficios exclusivos. Viva la magia de Bariloche con la mejor tarifa garantizada.",
            features: ["20% OFF en estadía", "Upgrade de Suite (sujeto a disponibilidad)", "Early Check-in sin cargo"],
            validUntil: "Válido hasta el 30 de Mayo",
            image: IMAGES.hero,
            color: "#1a365d"
        },
        {
            title: "Stay & Dine Experience",
            label: "GASTRONOMÍA",
            desc: "Combine el descanso perfecto con una experiencia culinaria de autor en nuestro restaurante Stag.",
            features: ["Mínimo 3 noches de alojamiento", "Cena de Pasos de regalo en Stag", "Botella de vino de cortesía"],
            validUntil: "Cupos limitados por mes",
            image: IMAGES.stag_atmosphere,
            color: "#4a3728"
        },
        {
            title: "Escapada Wellness",
            label: "BIENESTAR",
            desc: "Un programa diseñado para renovar cuerpo y mente en la privacidad de su suite y nuestros espacios outdoor.",
            features: ["Circuito de masajes en habitación", "Acceso preferencial a Sauna View", "Kit de amenidades orgánicas"],
            validUntil: "Disponible todo el año",
            image: IMAGES.spa_exterior,
            color: "#2d3748"
        }
    ];

    return (
        <div className="offers-page">
            <section className="offers-hero">
                <div className="hero-bg">
                    <img src={IMAGES.aerial_wide} alt="Promociones Charming" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container reveal">
                    <span className="hero-status">Beneficios por Reserva Directa</span>
                    <h1 className="hero-title">Experiencias & Promociones</h1>
                    <p className="hero-subtitle">Diseñamos propuestas especiales para que su estadía en la Patagonia sea única y provechosa.</p>
                </div>
            </section>

            <section className="almanac-hook container reveal">
                <div className="almanac-cta-box">
                    <div className="almanac-text">
                        <span className="hook-badge">LÚDICO & MISTERIOSO</span>
                        <h2>El Almanaque de Secretos</h2>
                        <p>No todas nuestras ofertas son públicas. Hemos escondido beneficios exclusivos dentro de las estaciones de la Patagonia. ¿Se atreve a descubrirlos?</p>
                        <a href="/calendar" className="btn btn-accent">Explorar el Almanaque</a>
                    </div>
                </div>
            </section>

            <section className="promos-list container">
                {promos.map((promo, index) => (
                    <div key={index} className="promo-landing-card reveal">
                        <div className="promo-visual">
                            <img src={promo.image} alt={promo.title} />
                            <span className="promo-tag" style={{ background: promo.color }}>{promo.label}</span>
                        </div>
                        <div className="promo-content">
                            <h2 className="promo-title">{promo.title}</h2>
                            <p className="promo-desc">{promo.desc}</p>
                            <ul className="promo-feats">
                                {promo.features.map((f, i) => (
                                    <li key={i}><Gift size={16} /> {f}</li>
                                ))}
                            </ul>
                            <div className="promo-footer">
                                <span className="validity"><Calendar size={14} /> {promo.validUntil}</span>
                                <a
                                    href={promo.title.includes("Enamorados") ? "/promo/mes-de-los-enamorados" : "/contact"}
                                    className="btn btn-primary"
                                >
                                    {promo.title.includes("Enamorados") ? "VER EXPERIENCIA" : "Me interesa esta promo"} <ChevronRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="direct-booking-value container reveal">
                <div className="value-box">
                    <h3>¿Por qué reservar directo con nosotros?</h3>
                    <div className="value-grid">
                        <div className="value-item">
                            <Tag className="v-icon" />
                            <h4>Mejor Tarifa</h4>
                            <p>Garantizamos el precio más bajo que cualquier otro portal online.</p>
                        </div>
                        <div className="value-item">
                            <Calendar className="v-icon" />
                            <h4>Flexibilidad</h4>
                            <p>Políticas de cancelación mucho más amigables y directas.</p>
                        </div>
                        <div className="value-item">
                            <Gift className="v-icon" />
                            <h4>Atención</h4>
                            <p>Trato directo con nuestro equipo, sin intermediarios.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offers;

