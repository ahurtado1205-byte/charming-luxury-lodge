import React from 'react';
import { IMAGES } from '../config/images';
import '../styles/Lodge.css';

const Lodge = () => {
    return (
        <div className="lodge-page">
            {/* Hero Seccion - Directo */}
            <section className="lodge-hero">
                <div className="hero-bg">
                    <img src={IMAGES.exterior} alt="Infraestructura de Charming Luxury Lodge" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content reveal">
                    <h1 className="hero-title">Sobre Charming</h1>
                    <p className="hero-subtitle">Arquitectura de montaña y máximo confort en la Patagonia.</p>
                </div>
            </section>

            {/* Propuesta e Infraestructura */}
            <section className="lodge-story container reveal">
                <div className="story-content">
                    <h2 className="section-title">Nuestra Propuesta</h2>
                    <p className="story-desc">Charming fue diseñado como un hotel boutique que privilegia la privacidad y el contacto directo con el entorno natural. Construido con piedra y madera de la zona, el lodge se distribuye en una ladera sobre el Nahuel Huapi, asegurando que cada unidad tenga una vista despejada y un ambiente silencioso.</p>
                    <div className="divider"></div>
                    <div className="story-features">
                        <div className="s-feat">
                            <h3 className="feat-title">Entorno Privado</h3>
                            <p className="feat-desc">Nuestras suites están estratégicamente distribuidas para garantizar tranquilidad total y vistas panorámicas.</p>
                        </div>
                        <div className="s-feat">
                            <h3 className="feat-title">Atención Personalizada</h3>
                            <p className="feat-desc">Ofrecemos un servicio enfocado en las necesidades individuales de cada huésped para una estadía eficiente y placentera.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Destacados */}
            <section className="lodge-amenities">
                <div className="container">
                    <h2 className="section-title">Servicios Exclusivos</h2>
                    <div className="amenities-grid">
                        <div className="amenity reveal">
                            <img src={IMAGES.spa_stone_jacuzzi} alt="Private Spa en Suite" className="amenity-img" />
                            <div className="amenity-info">
                                <h3 className="amenity-title">Private Spa en cada Suite</h3>
                                <p className="amenity-desc">Todas nuestras suites cuentan con su propio sauna, hidromasaje y ducha escocesa integrados, sin horarios y con total privacidad.</p>
                            </div>
                        </div>
                        <div className="amenity reveal">
                            <img src={IMAGES.stag_atmosphere} alt="Restaurante Stag" className="amenity-img" />
                            <div className="amenity-info">
                                <h3 className="amenity-title">Restaurante Stag</h3>
                                <p className="amenity-desc">Cocina de autor y platos regionales en un entorno con vistas al Lago Nahuel Huapi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lodge;
