import React from 'react';
const Events = () => (
    <div style={{ paddingTop: '150px', minHeight: '80vh' }} className="container">
        <h1 className="section-title">Eventos & Grupos Corporate</h1>
        <p className="section-subtitle">Privacidad inspiradora para decisiones estratégicas o celebraciones íntimas.</p>
        <div className="itinerary-grid">
            <div className="itinerary-card">
                <div className="itinerary-info">
                    <h3>Salón Panorámico</h3>
                    <p>Equipado con tecnología de punta y vistas al Nahuel Huapi. Ideal para juntas directivas de hasta 15 personas.</p>
                </div>
            </div>
            <div className="itinerary-card">
                <div className="itinerary-info">
                    <h3>Buy-out de Lodge</h3>
                    <p>La posibilidad de tener todo el resort y el staff dedicado exclusivamente a su grupo. Privacidad absoluta garantizada.</p>
                </div>
            </div>
        </div>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <button className="btn btn-primary">Solicitar Dossier para Empresas</button>
        </div>
    </div>
);
export default Events;
