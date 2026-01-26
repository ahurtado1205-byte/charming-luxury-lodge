import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => (
    <div style={{ paddingTop: '150px', minHeight: '80vh' }} className="container">
        <h1 className="section-title">En el corazón de la belleza</h1>
        <p className="section-subtitle">Ubicados estratégicamente para disfrutar del silencio del Nahuel Huapi, con la cercanía justa a los hitos de Bariloche.</p>
        <div className="contact-grid">
            <div className="contact-info">
                <h3>El mapa de su retiro</h3>
                <p>Nuestra exclusiva ubicación en el Km 7.5 de la Av. Bustillo nos sitúa en un balcón natural sobre el lago, a mitad de camino entre la sofisticación del centro y la aventura de los cerros.</p>
                <div style={{ marginTop: '30px' }}>
                    <p><strong>Desde el Aeropuerto:</strong> Un breve viaje de 30 min por la estepa y el lago.</p>
                    <p><strong>Hacia el Centro Cívico:</strong> 10 min de pintoresco recorrido costero.</p>
                    <p><strong>Catedral Alta Patagonia:</strong> 20 min para encontrar la nieve.</p>
                </div>
            </div>
            <div style={{ background: '#eee', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p><MapPin size={40} /> [Mapa Interactivo de Google]</p>
            </div>
        </div>
    </div>
);
export default Location;
