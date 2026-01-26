import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import '../styles/StickyCTA.css';

const StickyCTA = () => {
    const waMessage = encodeURIComponent("Hola, me gustaría conversar con un anfitrión de Charming para diseñar mi estadía.");

    return (
        <div className="sticky-cta-mobile">
            <a href={`https://wa.me/542944441234?text=${waMessage}`} target="_blank" rel="noreferrer" className="sticky-btn whatsapp">
                <MessageCircle size={20} />
                <span>Anfitrión</span>
            </a>
            <a href="/suites" className="sticky-btn book">
                <Calendar size={20} />
                <span>Reservar</span>
            </a>
        </div>
    );
};

export default StickyCTA;
