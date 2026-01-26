import React from 'react';
import { IMAGES } from '../config/images';
import { Droplet, Wind, Sun, ArrowRight } from 'lucide-react';
import '../styles/Wellness.css';

const Wellness = () => {
    return (
        <div className="wellness-page">
            <section className="wellness-hero">
                <div className="hero-bg">
                    <img src={IMAGES.spa_exterior} alt="Wellness Outdoor Charming" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content reveal">
                    <span className="hero-status">Bienestar frente al Lago</span>
                    <h1 className="hero-title">Wellness Outdoor</h1>
                    <p className="hero-subtitle">Descubra nuestros espacios de relax al aire libre, diseñados para conectar con la naturaleza.</p>
                </div>
            </section>

            <section className="wellness-grid container">
                <div className="wellness-item reveal">
                    <div className="wellness-visual">
                        <img src={IMAGES.pool_outdoor} alt="Piscina exterior climatizada" />
                    </div>
                    <div className="wellness-info">
                        <Sun className="wellness-icon" size={32} />
                        <h2>Piscina Exterior Climatizada</h2>
                        <p>Nuestra piscina infinita ofrece una temperatura constante durante todo el año, permitiéndole disfrutar de un baño relajante mientras contempla el Nahuel Huapi bajo el sol o la nieve.</p>
                        <ul className="wellness-feats">
                            <li>Deck solarium con reposeras</li>
                            <li>Climatización sustentable</li>
                            <li>Servicio de toallas y bar</li>
                        </ul>
                    </div>
                </div>

                <div className="wellness-item reveal row-reverse">
                    <div className="wellness-visual">
                        <img src={IMAGES.spa_exterior} alt="Jacuzzi exterior con ozonoterapia" />
                    </div>
                    <div className="wellness-info">
                        <Droplet className="wellness-icon" size={32} />
                        <h2>Hidro & Ozonoterapia Outdoor</h2>
                        <p>Sienta el poder regenerador de las burbujas en nuestro hidromasaje exterior. La ozonoterapia ayuda a la oxigenación de la piel en un entorno de pureza absoluta.</p>
                        <ul className="wellness-feats">
                            <li>Vistas panorámicas 360°</li>
                            <li>Jets de alta presión</li>
                            <li>Ambiente de silencio total</li>
                        </ul>
                    </div>
                </div>

                <div className="wellness-item reveal">
                    <div className="wellness-visual">
                        <img src={IMAGES.sauna_outdoor} alt="Sauna con vista al lago" />
                    </div>
                    <div className="wellness-info">
                        <Wind className="wellness-icon" size={32} />
                        <h2>Sauna Seco "View"</h2>
                        <p>Un refugio de calor con ventanales que enmarcan la montaña. El equilibrio perfecto entre la depuración del cuerpo y la calma visual.</p>
                        <ul className="wellness-feats">
                            <li>Madera de cedro aromático</li>
                            <li>Vistas al Cerro López</li>
                            <li>Acceso directo a zona de relax</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="wellness-cta">
                <div className="container reveal">
                    <h2>¿Desea una experiencia completa?</h2>
                    <p>Combine nuestros servicios outdoor con un masaje personalizado en su propia suite.</p>
                    <a href="/contact" className="btn btn-primary">Reservar Experiencia</a>
                </div>
            </section>
        </div>
    );
};

export default Wellness;
