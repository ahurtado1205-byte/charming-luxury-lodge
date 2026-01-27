import React from 'react';
import { Clock, Users, Utensils, MapPin, Wine, Star, Heart, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';
import '../styles/Stag.css';

const Stag = () => {
    const dishes = [
        {
            name: "Cordero Patagónico en dos cocciones",
            desc: "Braseado por 6 horas y sellado al hierro, acompañado de emulsión de zanahorias y hierbas de nuestro jardín.",
            image: IMAGES.stag_dish_1
        },
        {
            name: "Trucha Arcoíris del Nahuel Huapi",
            desc: "A la manteca negra, con alcaparras patagónicas y risotto de hongos de pino.",
            image: IMAGES.stag_gastronomy
        },
        {
            name: "Esfera de Chocolate & Frutos Rojos",
            desc: "Texturas de chocolate amargo, corazón de frambuesas de El Bolsón y crocante de avellanas.",
            image: IMAGES.stag_dish_2
        }
    ];

    const diningPromos = [
        {
            title: "Cena Romántica Premium",
            price: "$85.000",
            desc: "Menú de 5 pasos, maridaje de vinos reserva y ubicación preferencial frente al lago.",
            tag: "Más Popular"
        },
        {
            title: "Experiencia de Vinos & Tapas",
            price: "$42.000",
            desc: "Degustación de 4 etiquetas exclusivas guiada por nuestro sommelier, con maridaje regional.",
            tag: "Solo Jueves"
        }
    ];

    return (
        <div className="stag-page">
            {/* Hero Section */}
            <section className="stag-hero">
                <div className="hero-bg">
                    <img src={IMAGES.stag_atmosphere} alt="Restaurante Stag" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content reveal">
                    <div className="stag-badge">GASTRONOMÍA DE AUTOR</div>
                    <h1 className="hero-title">STAG</h1>
                    <p className="hero-subtitle">Donde el fuego, el lago y la alta cocina se encuentran.</p>
                    <div className="hero-btns">
                        <a href="#menu" className="btn btn-outline-white">VER MENÚ</a>
                        <a href="#reservar" className="btn btn-primary">RESERVAR MESA</a>
                    </div>
                </div>
            </section>

            {/* Storytelling Section */}
            <section className="stag-storytelling container reveal">
                <div className="story-grid">
                    <div className="story-image">
                        <img src={IMAGES.stag_storytelling} alt="Atmósfera de Stag" className="premium-img" />
                        <div className="story-floating-card">
                            <Star size={24} color="var(--accent)" fill="var(--accent)" />
                            <span>Recomendado por Guía Luxury</span>
                        </div>
                    </div>
                    <div className="story-text">
                        <h2 className="section-title">Nuestra Historia entre Fuegos.</h2>
                        <p className="p-accent">Stag no es solo un restaurante, es un homenaje a la Patagonia.</p>
                        <p>Inspirado en los sabores silvestres y la calidez de las casas de montaña, nuestro nombre rinde tributo al Ciervo Colorado, símbolo de majestuosidad y naturaleza. </p>
                        <p>Aquí, cada plato cuenta una historia a través de productos locales: desde el cordero criado en estancias cercanas hasta los frutos rojos recolectados en el valle. Nuestra cocina es honesta, refinada y profundamente arraigada al paisaje que nos rodea.</p>
                        <div className="story-features">
                            <div className="s-feat">
                                <Wine size={24} />
                                <span>Cava Selection</span>
                            </div>
                            <div className="s-feat">
                                <Utensils size={24} />
                                <span>Kilómetro 0</span>
                            </div>
                            <div className="s-feat">
                                <Heart size={24} />
                                <span>Experiencia Íntima</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Little Stag - The Treehouse */}
            <section className="little-stag reveal">
                <div className="container">
                    <div className="little-stag-grid">
                        <div className="little-stag-content">
                            <img src={IMAGES.little_stag_logo} alt="Little Stag Logo" className="little-stag-logo-img" />
                            <h2 className="section-title">Little Stag</h2>
                            <p className="p-accent">La auténtica casa del árbol en Bariloche.</p>
                            <p>Descubre el rincón más exclusivo de nuestro lodge. Una estructura única construida sobre troncos centenarios, donde la calidez de la madera y las vistas al bosque crean un refugio de ensueño.</p>
                            <p>Perfecto para una cena íntima, un té de tarde especial o simplemente para desconectar del mundo en un entorno de cuento.</p>
                            <ul className="little-stag-list">
                                <li>Experiencia gastronómica privada</li>
                                <li>Vistas panorámicas al bosque nativo</li>
                                <li>Calefacción y confort de alta gama</li>
                                <li>Un entorno de cuentos para momentos únicos</li>
                            </ul>
                            <button className="btn btn-primary">Reservar Experiencia</button>
                        </div>
                        <div className="little-stag-image-wrapper">
                            <div className="onda-frame">
                                <img src={IMAGES.little_stag} alt="Little Stag Treehouse Real" className="little-stag-img" />
                                <div className="floating-badge-onda">100% REAL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Dish Showcase (The "Visual Menu") */}
            <section id="menu" className="stag-visual-menu reveal">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Platos de Firma</h2>
                        <p className="section-desc">Una muestra de nuestra carta actual, diseñada por el Chef Ejecutivo.</p>
                    </div>
                    <div className="dishes-grid">
                        {dishes.map((dish, index) => (
                            <div key={index} className="dish-card reveal">
                                <div className="dish-img-wrapper">
                                    <img src={dish.image} alt={dish.name} />
                                </div>
                                <div className="dish-info">
                                    <h3>{dish.name}</h3>
                                    <p>{dish.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-action">
                        <button className="btn btn-primary">Descargar Menú Completo (PDF)</button>
                    </div>
                </div>
            </section>

            {/* Promotions Section */}
            <section className="stag-promos container reveal">
                <div className="promo-container">
                    <div className="promo-text-side">
                        <h2 className="section-title white">Experiencias Stag</h2>
                        <p className="white opacity-80">Diseñamos momentos especiales para quienes buscan algo más que una cena.</p>
                        <div className="dining-promos-grid">
                            {diningPromos.map((p, i) => (
                                <div key={i} className="dining-promo-card">
                                    <span className="promo-tag">{p.tag}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                    <div className="promo-footer">
                                        <span className="promo-price">{p.price} <small>per pax</small></span>
                                        <button className="btn-text">Reservar <ArrowRight size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="promo-image-side">
                        <img src={IMAGES.stag_wine} alt="Wine Experience" />
                    </div>
                </div>
            </section>

            {/* Info & Reservations */}
            <section id="reservar" className="stag-footer-info container reveal">
                <div className="info-grid">
                    <div className="info-block">
                        <Clock size={32} color="var(--accent)" />
                        <h3>Horarios</h3>
                        <p>Desayuno: 07:30 - 10:30 hs</p>
                        <p>Almuerzo: 12:30 - 15:00 hs</p>
                        <p>Cena: 20:00 - 23:30 hs</p>
                    </div>
                    <div className="info-block">
                        <Users size={32} color="var(--accent)" />
                        <h3>Reservas</h3>
                        <p>Abierto a huéspedes y público externo.</p>
                        <p>Se recomienda reserva previa de 24 hs.</p>
                        <a href="https://wa.me/542944441234" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Directo</a>
                    </div>
                    <div className="info-block">
                        <MapPin size={32} color="var(--accent)" />
                        <h3>Ubicación</h3>
                        <p>Av. Bustillo Km 7.5, Bariloche.</p>
                        <p>Estacionamiento privado.</p>
                        <p>Vistas al Lago Nahuel Huapi.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stag;
