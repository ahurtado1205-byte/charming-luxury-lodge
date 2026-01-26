import React from 'react';
import TrustBar from '../components/TrustBar';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { IMAGES } from '../config/images';
import PromoPopup from '../components/PromoPopup';
import '../styles/Home.css';

const Home = () => {
    const journeys = [
        {
            title: "Estadías Románticas",
            desc: "Suites equipadas con spa privado, hogar a leña y vistas panorámicas al lago para una estadía inolvidable.",
            image: IMAGES.suite_view,
            cta: "Ver Suites"
        },
        {
            title: "Viajes Familiares",
            desc: "Contamos con suites amplias y departamentos conectados, ideales para familias que buscan comodidad.",
            image: IMAGES.suite_general,
            cta: "Ver Opciones"
        },
        {
            title: "Bienestar & Relax",
            desc: "Disfrute de sauna, hidromasaje y tratamientos de spa integrados en la privacidad de su habitación.",
            image: IMAGES.spa_stone_jacuzzi,
            cta: "Ver Spa"
        }
    ];

    return (
        <div className="home-page">
            <PromoPopup />
            {/* Hero Section - Directo & Claro */}
            <section className="hero">
                <div className="hero-bg">
                    <img src={IMAGES.hero} alt="Charming Luxury Lodge & Private Spa Bariloche" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <span className="hero-award reveal">Premiado como el Lodge más Romántico</span>
                    <h1 className="reveal">Suites con Spa Privado y Vistas al Lago Nahuel Huapi</h1>
                    <div className="divider reveal"></div>
                    <p className="reveal">Un concepto de alojamiento exclusivo en Bariloche. Suites amplias con chimenea y spa propio, diseñadas para brindar máximo confort y privacidad.</p>
                    <div className="hero-btns reveal">
                        <a href="/suites" className="btn btn-primary">Ver Disponibilidad</a>
                        <a href={`https://wa.me/542944441234?text=${encodeURIComponent("Hola, quisiera realizar una consulta sobre una reserva.")}`} className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Consultar por WhatsApp</a>
                    </div>
                </div>
            </section>

            <TrustBar />

            {/* Intro Section - Valor diferencial */}
            <section className="intro container reveal">
                <div className="intro-grid">
                    <div className="intro-text">
                        <h2 className="section-title">Privacidad total y servicios de alta gama.</h2>
                        <p>En Charming, cada suite cuenta con un <strong>Private Spa</strong> integrado: sauna seco, hidromasaje doble y ducha escocesa. Disfrute de la independencia de un refugio propio con los servicios de un hotel de lujo, ubicado sobre un acantilado con vistas únicas al Nahuel Huapi.</p>
                        <p className="location-highlight">Ubicación estratégica: Av. Bustillo Km 7.5, Bariloche.</p>
                        <a href="/lodge" className="btn-text">CONOZCA EL LODGE <ArrowRight size={18} /></a>
                    </div>
                    <div className="intro-image">
                        <img src={IMAGES.jacuzzi_view} alt="Private Spa con vista al lago en Charming Bariloche" className="floating-img" />
                    </div>
                </div>
            </section>

            {/* Opciones de Alojamiento */}
            <section className="itineraries">
                <div className="container">
                    <h2 className="section-title">Encuentre su suite ideal</h2>
                    <p className="section-subtitle">Opciones de alojamiento diseñadas para parejas, familias y grupos.</p>

                    <div className="itinerary-grid">
                        {journeys.map((j, i) => (
                            <div key={i} className="itinerary-card reveal">
                                <div className="itinerary-img">
                                    <img src={j.image} alt={j.title} />
                                </div>
                                <div className="itinerary-info">
                                    <h3 className="itinerary-title">{j.title}</h3>
                                    <p className="itinerary-desc">{j.desc}</p>
                                    <a href="/suites" className="btn-link">{j.cta}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stag - Restaurante */}
            <section className="stag-feature">
                <div className="stag-container">
                    <div className="stag-content reveal">
                        <img src={IMAGES.stag_emblem} alt="Restaurante Stag Bariloche" className="stag-emblem-img" />
                        <span className="stag-label">Propuesta Gastronómica</span>
                        <h2 className="section-title">STAG: Cocina Internacional y Regional</h2>
                        <p>Nuestro restaurante ofrece una carta variada elaborada con productos locales de estación. Almuerzos y cenas frente a los ventanales con la mejor vista de la Patagonia.</p>
                        <div className="stag-btns">
                            <a href="/stag" className="btn btn-primary">Reservar Mesa</a>
                        </div>
                    </div>
                    <div className="stag-visual">
                        <img src={IMAGES.stag_atmosphere} alt="Vista desde restaurante Stag Bariloche" />
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="testimonials container reveal">
                <div className="divider"></div>
                <h2 className="section-title">La experiencia de nuestros huéspedes</h2>
                <div className="testi-grid">
                    <div className="testi-card">
                        <Quote className="quote-icon" size={30} />
                        <p className="testi-text">"Excelente atención y las vistas son inmejorables. El sistema de spa privado en la suite es lo que más nos gustó."</p>
                        <div className="testi-author">
                            <span className="author-name">Clara Mendonça</span>
                        </div>
                    </div>
                    <div className="testi-card">
                        <Quote className="quote-icon" size={30} />
                        <p className="testi-text">"Un hotel impecable en cada detalle. La gastronomía en Stag es de primer nivel y la privacidad de las suites es total."</p>
                        <div className="testi-author">
                            <span className="author-name">Ricardo G.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Directos */}
            <section className="direct-benefits">
                <div className="container">
                    <div className="benefits-box reveal">
                        <h3 className="benefits-title">Beneficios por Reserva Directa</h3>
                        <p className="benefits-desc">Reservando a través de nuestra web oficial, usted accede a condiciones exclusivas para su estadía.</p>
                        <div className="benefits-list">
                            <div className="benefit-item"><Star size={16} color="var(--accent)" /> <span>Prioridad de Upgrade</span></div>
                            <div className="benefit-item"><Star size={16} color="var(--accent)" /> <span>Late Check-out sin cargo</span></div>
                            <div className="benefit-item"><Star size={16} color="var(--accent)" /> <span>Atención Personalizada</span></div>
                        </div>
                        <a href="/suites" className="btn btn-accent">Ver Disponibilidad</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
