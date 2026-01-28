import React, { useState } from 'react';
import { Leaf, Snowflake, Flower2, Sun, HelpCircle, ArrowRight, BookOpen, Lock } from 'lucide-react';
import { IMAGES } from '../config/images';
import '../styles/SeasonalCalendar.css';

const SeasonalCalendar = () => {
    const [activeSeason, setActiveSeason] = useState(null);

    const seasons = [
        {
            id: 'autumn',
            name: 'Otoño',
            months: 'Marzo - Mayo',
            icon: <Leaf />,
            color: '#A65D37',
            secret: 'El bosque se incendia sin fuego. Las Lengas tornan su follaje a un rojo intenso, creando espejos de rubí en el Lago Nahuel Huapi.',
            mysteryOffer: 'Escapada "Fuego Otoñal": 4 noches al precio de 3 + Degustación de chocolates locales en la Suite.',
            image: IMAGES.exterior, // Fallback to exterior
            hook: 'Descubra el silencio del bosque cuando las hojas caen...'
        },
        {
            id: 'winter',
            name: 'Invierno',
            months: 'Junio - Agosto',
            icon: <Snowflake />,
            color: '#2C5282',
            secret: 'El crujir de la nieve virgen. Bariloche se transforma en un refugio de paz blanca, donde el tiempo se detiene frente a la chimenea.',
            mysteryOffer: 'Experiencia "Nieve & Fuego": Traslados exclusivos al Cerro + Kit de invierno (Vino caliente y mantas de lana puras).',
            image: IMAGES.hero_night,
            hook: 'Un refugio cálido mientras el mundo se congela afuera.'
        },
        {
            id: 'spring',
            name: 'Primavera',
            months: 'Septiembre - Noviembre',
            icon: <Flower2 />,
            color: '#68D391',
            secret: 'El despertar de los Amancay. Flores amarillas tapizan los cerros y las cascadas rugen con el deshielo de las altas cumbres.',
            mysteryOffer: 'Renacer Wellness: Upgrade garantizado a Master Suite + Circuito de masajes con esencias de flores patagónicas.',
            image: IMAGES.spa_exterior,
            hook: 'Sea testigo del momento exacto en que la vida despierta.'
        },
        {
            id: 'summer',
            name: 'Verano',
            months: 'Diciembre - Febrero',
            icon: <Sun />,
            color: '#ECC94B',
            secret: 'Días infinitos. El sol se oculta pasadas las 21:00 hs, permitiendo sumergirse en las aguas cristalinas del lago hasta el atardecer.',
            mysteryOffer: 'Aventura de Verano: Picnic gourmet privado en playa secreta + Navegación exclusiva al atardecer.',
            image: IMAGES.aerial_wide,
            hook: 'La luz que nunca se acaba y el lago que invita a quedarse.'
        }
    ];

    return (
        <div className="calendar-page">
            <section className="calendar-hero">
                <div className="container reveal">
                    <span className="hero-tag">EXPERIENCIA INTERACTIVA</span>
                    <h1 className="hero-title">Almanaque de Sensaciones</h1>
                    <p className="hero-subtitle">
                        La Patagonia no es un lugar, son mil momentos. Explore los secretos de cada estación y desbloquee experiencias diseñadas para lo inesperado.
                    </p>
                </div>
            </section>

            <section className="almanac-interaction container">
                <div className="seasons-nav reveal">
                    {seasons.map((season) => (
                        <button
                            key={season.id}
                            className={`season-btn ${activeSeason?.id === season.id ? 'active' : ''}`}
                            onClick={() => setActiveSeason(season)}
                            style={{ '--season-color': season.color }}
                        >
                            <span className="s-icon">{season.icon}</span>
                            <span className="s-name">{season.name}</span>
                        </button>
                    ))}
                </div>

                <div className="almanac-content">
                    {!activeSeason ? (
                        <div className="empty-state reveal">
                            <div className="mystery-circle">
                                <HelpCircle size={48} className="pulse-icon" />
                            </div>
                            <h3>Elija una estación para revelar sus secretos</h3>
                            <p>Cada época del año esconde una llave maestra a un beneficio exclusivo.</p>
                        </div>
                    ) : (
                        <div className="season-detail reveal">
                            <div className="detail-grid">
                                <div className="detail-visual">
                                    <div className="image-frame">
                                        <img src={activeSeason.image} alt={activeSeason.name} />
                                        <div className="season-overlay" style={{ background: `linear-gradient(45-deg, ${activeSeason.color}CC, transparent)` }}></div>
                                    </div>
                                    <div className="floating-info">
                                        <span className="months">{activeSeason.months}</span>
                                    </div>
                                </div>

                                <div className="detail-text">
                                    <div className="learning-box">
                                        <div className="box-header">
                                            <BookOpen size={20} />
                                            <span>Sabiduría de Montaña</span>
                                        </div>
                                        <h3>{activeSeason.secret}</h3>
                                    </div>

                                    <div className="mystery-box">
                                        <div className="box-header">
                                            <Lock size={20} />
                                            <span>Beneficio Desbloqueado</span>
                                        </div>
                                        <p className="mystery-desc">{activeSeason.hook}</p>
                                        <div className="mystery-reveal">
                                            <h4 className="offer-reveal">{activeSeason.mysteryOffer}</h4>
                                        </div>
                                        <button className="btn btn-primary">
                                            Solicitar este Secreto <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="calendar-footer container reveal">
                <div className="discovery-box">
                    <h2>¿Listo para lo inesperado?</h2>
                    <p>Déjenos saber en qué fecha nos visita y nuestro Concierge de Experiencias diseñará un momento "fuera de calendario" solo para usted.</p>
                    <a href="/contact" className="btn btn-outline-white">Hablar con un Experto</a>
                </div>
            </section>
        </div>
    );
};

export default SeasonalCalendar;
