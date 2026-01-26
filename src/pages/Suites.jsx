import React, { useState } from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';
import '../styles/Suites.css';

const suitesData = [
    {
        id: 1,
        name: "Lodge Romantic Suite",
        type: "Matrimonial Premium",
        size: "70 m²",
        features: ["Vista panorámica al infinito", "Vapor & Ducha Escocesa Privada", "Doble Hidromasaje", "Hogar a leña"],
        image: IMAGES.suite_view,
        price: "Desde USD 480",
        spa: true
    },
    {
        id: 2,
        name: "Patagonia Sanctuary",
        type: "Familia / Grupos",
        size: "130 m²",
        features: ["2 Dormitorios con chimenea", "Living de madera & piedra", "Cocina de autor", "Terraza privada"],
        image: IMAGES.master_bed,
        price: "Desde USD 820",
        spa: true
    },
    {
        id: 3,
        name: "Refugio del Bosque",
        type: "Matrimonial",
        size: "50 m²",
        features: ["Balcón sobre la costa", "Ozonoterapia & Jacuzzi", "Deck de lectura", "Esencia de ciprés"],
        image: IMAGES.suite_detail,
        price: "Desde USD 350",
        spa: false
    }
];

const Suites = () => {
    const [filter, setFilter] = useState('All');

    const filteredSuites = filter === 'All'
        ? suitesData
        : suitesData.filter(s => s.type.includes(filter) || (filter === 'Spa' && s.spa));

    return (
        <div className="suites-page">
            <section className="suites-hero">
                <div className="container reveal">
                    <span className="hero-status">Alojamiento Exclusivo en Bariloche</span>
                    <h1 className="section-title">Nuestras Suites & Private Spa</h1>
                    <p className="section-subtitle">Charming ofrece suites totalmente equipadas con spa privado integrado (sauna, hidromasaje y ducha escocesa). Todas las unidades cuentan con amplios ventanales y vistas inmejorables al Lago Nahuel Huapi.</p>

                    <div className="filter-btns">
                        {['All', 'Matrimonial', 'Familia', 'Spa'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={filter === f ? 'active' : ''}
                            >
                                {f === 'All' ? 'Todas' : f === 'Spa' ? 'Con Spa Master' : f === 'Matrimonial' ? 'Parejas' : 'Familias'}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="suites-list container">
                <div className="suites-impact-grid">
                    {filteredSuites.map((suite, index) => (
                        <div key={suite.id} className={`suite-premium-row reveal ${index % 2 !== 0 ? 'row-reverse' : ''}`}>
                            <div className="suite-visual">
                                <img src={suite.image} alt={suite.name} className="suite-img-parallax" />
                                {suite.spa && <div className="spa-badge">PRIVATE SPA INCLUIDO</div>}
                            </div>
                            <div className="suite-content">
                                <span className="suite-type-label">{suite.type}</span>
                                <h2 className="suite-name">{suite.name}</h2>
                                <p className="suite-desc-main">{suite.size} con amplios balcones y equipamiento de alta gama. Un espacio diseñado para brindar privacidad total y el descanso que usted busca.</p>
                                <ul className="suite-features-list">
                                    {suite.features.map((f, i) => (
                                        <li key={i} className="suite-feature-item">
                                            <Check size={16} color="var(--accent)" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="suite-cta-group">
                                    <a href="/contact" className="btn btn-primary">Reservar ahora</a>
                                    <a href={`https://wa.me/542944441234?text=Quisiera consultar disponibilidad para la ${suite.name}`} className="btn-text-link">CONSULTAR DISPONIBILIDAD <ArrowRight size={16} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="suites-expert-advice">
                <div className="container reveal">
                    <h2 className="advice-title">¿Necesita una recomendación?</h2>
                    <p className="advice-desc">Nuestro equipo de reservas está disponible para ayudarle a elegir la suite que mejor se adapte a sus necesidades.</p>
                    <a href="https://wa.me/542944441234" className="btn btn-accent">Consultar con un Agente</a>
                </div>
            </section>
        </div>
    );
};

export default Suites;
