import React from 'react';
import '../styles/Home.css'; // Reusing some base styles

const Experiences = () => {
    const experiences = [
        { title: "Navegación Privada", desc: "Navegue los brazos más recónditos del Nahuel Huapi.", img: "https://www.charming-bariloche.com/wp-content/uploads/2023/03/DSCN0001_10-scaled-1.jpg" },
        { title: "Bienestar en el Fin del Mundo", desc: "Tratamientos de spa personalizados con productos patagónicos.", img: "https://www.charming-bariloche.com/wp-content/uploads/2022/09/spa-gral.jpg" },
        { title: "Santuario Gastronómico", desc: "Aprenda los secretos de Stag con nuestro Chef Ejecutivo.", img: "https://www.charming-bariloche.com/wp-content/uploads/2022/09/gastronomia-gral.jpg" }
    ];

    return (
        <div className="experiences-page" style={{ paddingTop: '120px' }}>
            <section className="container">
                <h1 className="section-title">Experiencias Curadas</h1>
                <p className="section-subtitle">No ofrecemos actividades, creamos memorias que perduran.</p>

                <div className="itinerary-grid">
                    {experiences.map((exp, i) => (
                        <div key={i} className="itinerary-card reveal">
                            <div className="itinerary-img" style={{ height: '400px' }}>
                                <img src={exp.img} alt={exp.title} />
                            </div>
                            <div className="itinerary-info">
                                <h3>{exp.title}</h3>
                                <p>{exp.desc}</p>
                                <button className="btn btn-outline">Consultar Detalles</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Experiences;
