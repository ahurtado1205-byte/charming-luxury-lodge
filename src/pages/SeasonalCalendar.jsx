import React, { useState, useEffect } from 'react';
import { Leaf, Snowflake, Flower, Sun, HelpCircle, ArrowRight, BookOpen, Lock, Compass, Eye, Map as MapIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../config/images';
import '../styles/SeasonalCalendar.css';

const SeasonalCalendar = () => {
    const [activeSeason, setActiveSeason] = useState(null);
    const [discoveredSecrets, setDiscoveredSecrets] = useState([]);
    const [showExperience, setShowExperience] = useState(false);

    const seasons = [
        {
            id: 'autumn',
            name: 'Otoño',
            months: 'Marzo - Mayo',
            icon: <Leaf />,
            color: '#A65D37',
            secret: 'El bosque se viste de rubí sin necesidad de fuego. Las Lengas tornan su follaje a un rojo intenso, creando espejos de rubí en el Lago Nahuel Huapi.',
            mysteryOffer: 'Escapada "Rubí Otoñal": 4 noches al precio de 3 + Degustación de chocolates locales en la Suite.',
            image: IMAGES.exterior,
            hook: 'Descubra el silencio del bosque cuando las hojas caen...',
            curiousFacts: [
                "Las Lengas cambian de color en capas, descendiendo por el cerro como una marea roja.",
                "El viento se detiene casi por completo, creando el 'efecto espejo' más puro en los lagos.",
                "Los hongos de pino y los 'Llao Llao' brotan en los troncos de los árboles centenarios.",
                "Es la temporada de la Rosa Mosqueta, cuyos frutos llenan de color las orillas de los senderos.",
                "Los ciervos colorados inician la 'brama', un sonido ancestral que resuena en los valles."
            ]
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
            hook: 'Un refugio cálido mientras el mundo se congela afuera.',
            curiousFacts: [
                "El Lago Nahuel Huapi, con 464 metros de profundidad, nunca se congela.",
                "Los copos de nieve pueden llegar a medir hasta 5 cm en días de calma total.",
                "Usamos leña de manzanos en las suites para que el humo tenga un aroma cítrico y relajante.",
                "El aire es tan seco que la visibilidad del Cerro Tronador es perfecta desde el lodge.",
                "La nieve 'polvo' de Bariloche es famosa por ser ultra ligera, ideal para deportistas."
            ]
        },
        {
            id: 'spring',
            name: 'Primavera',
            months: 'Septiembre - Noviembre',
            icon: <Flower />,
            color: '#68D391',
            secret: 'El despertar de los Amancay. Flores amarillas tapizan los cerros y las cascadas rugen con el deshielo de las altas cumbres.',
            mysteryOffer: 'Renacer Wellness: Upgrade garantizado a Master Suite + Circuito de masajes con esencias de flores patagónicas.',
            image: IMAGES.spa_exterior,
            hook: 'Sea testigo del momento exacto en que la vida despierta.',
            curiousFacts: [
                "El rugido de las cascadas es máximo debido al deshielo de las cumbres nevadas.",
                "Miles de flores Amancay cubren las montañas con una alfombra amarilla vibrante.",
                "Regresan los Cóndores de sus refugios altos; es fácil verlos planear sobre el lodge.",
                "Los brotes de los Ñires desprenden un aroma a resina y tierra húmeda único.",
                "Los días se 'estiran', dándonos más horas de sol para disfrutar el spa outdoor."
            ]
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
            hook: 'La luz que nunca se acaba y el lago que invita a quedarse.',
            curiousFacts: [
                "Bariloche goza de las 'Noches Planisferio': el sol se oculta recién a las 22:00 hs.",
                "El lago alcanza su temperatura ideal para kayak, con transparencia de 20 metros.",
                "Existen playas secretas en el lago que únicamente son accesibles en bote en esta época.",
                "La Vía Láctea es visible a simple vista desde nuestros jacuzzis durante el verano.",
                "Sedimentos glaciares tiñen el agua de los lagos de altura con un turquesa hipnótico."
            ]
        }
    ];

    const discoverSecret = (id) => {
        if (!discoveredSecrets.includes(id)) {
            setDiscoveredSecrets([...discoveredSecrets, id]);
        }
    };

    return (
        <div className="calendar-page">
            <section className="calendar-hero">
                <div className="hero-atmosphere"></div>
                <div className="container reveal">
                    <div className="experience-tracker">
                        <Compass className="compass-icon" />
                        <div className="tracker-text">
                            <span>Descubrimientos: {discoveredSecrets.length}/4</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${(discoveredSecrets.length / 4) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <span className="hero-tag">MISION: DESCUBRIR LA PATAGONIA</span>
                    <h1 className="hero-title">El Almanaque de Secretos</h1>
                    <p className="hero-subtitle">
                        No es una reserva, es una expedición. Interactúe con las estaciones para desbloquear los privilegios que la montaña reserva solo para los curiosos.
                    </p>
                </div>
            </section>

            <section className="almanac-interaction container">
                <div className="seasons-grid-modern reveal">
                    {seasons.map((season) => (
                        <div
                            key={season.id}
                            className={`season-card-luxury ${activeSeason?.id === season.id ? 'active' : ''} ${discoveredSecrets.includes(season.id) ? 'discovered' : ''}`}
                            onClick={() => {
                                setActiveSeason(season);
                                discoverSecret(season.id);
                            }}
                        >
                            <div className="card-visual">
                                <img src={season.image} alt={season.name} />
                                {activeSeason && activeSeason.id === season.id && (
                                    <div className="season-overlay" style={{ background: `linear-gradient(45deg, ${activeSeason.color}CC, transparent)` }}></div>
                                )}
                                <div className="card-icon">{season.icon}</div>
                            </div>
                            <div className="card-info">
                                <h3>{season.name}</h3>
                                <span className="card-status">
                                    {discoveredSecrets.includes(season.id) ? <Sparkles size={14} /> : <Lock size={14} />}
                                    {discoveredSecrets.includes(season.id) ? 'DESBLOQUEADO' : 'MISTERIO'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="almanac-display">
                    {!activeSeason ? (
                        <div className="empty-exp reveal">
                            <div className="instruction-box">
                                <MapIcon size={32} />
                                <h3>Comience su viaje</h3>
                                <p>Toque una de las estaciones arriba para revelar su secreto y su beneficio exclusivo.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="season-reveal-experience reveal">
                            <div className="discovery-header">
                                <div className="discovery-label">ESTÁS DESCUBRIENDO: {activeSeason.name.toUpperCase()}</div>
                                <h2 className="discovery-title">{activeSeason.secret}</h2>
                            </div>

                            <div className="discovery-main">
                                <div className="discovery-clue">
                                    <div className="clue-box">
                                        <div className="clue-header">
                                            <Eye size={20} />
                                            <span>5 Hechos Curiosos</span>
                                        </div>
                                        <ul className="curious-list">
                                            {activeSeason.curiousFacts.map((fact, i) => (
                                                <li key={i}>{fact}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="discovery-reward">
                                    <div className="reward-inner">
                                        <div className="reward-tag">BENEFICIO EXCLUSIVO DESBLOQUEADO</div>
                                        <h3 className="reward-name">{activeSeason.mysteryOffer}</h3>
                                        <p className="reward-hook">{activeSeason.hook}</p>
                                        <div className="reward-actions">
                                            <Link to="/contact" className="btn btn-accent">Reclamar este Secreto</Link>
                                            <button className="btn btn-outline-white" onClick={() => setActiveSeason(null)}>Seguir Explorando</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {discoveredSecrets.length === 4 && (
                <section className="grand-discovery container reveal">
                    <div className="grand-box">
                        <Sparkles size={48} color="var(--accent)" />
                        <h2>Maestro de la Montaña</h2>
                        <p>Ha descubierto todos los secretos estacionales. Como recompensa adicional, tiene acceso a una <strong>tarjeta de beneficios vitalicia</strong> para todas sus futuras estadías.</p>
                        <button className="btn btn-primary">Obtener mi Carnet VIP</button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SeasonalCalendar;
