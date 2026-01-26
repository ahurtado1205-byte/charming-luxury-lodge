import React from 'react';
import { ShieldCheck, Clock, MapPin, Tag } from 'lucide-react';
import '../styles/TrustBar.css';

const TrustBar = () => {
    const items = [
        { icon: <Tag size={18} />, text: 'Garantía de Mejor Tarifa Directa' },
        { icon: <Clock size={18} />, text: 'Prioridad de Late Check-out' },
        { icon: <ShieldCheck size={18} />, text: 'Cancelación sin Friccciones' },
        { icon: <MapPin size={18} />, text: 'El balcón más exclusivo de Bariloche' }
    ];

    return (
        <div className="trust-bar" style={{ borderBottom: '1px solid var(--border)', background: 'var(--white)' }}>
            <div className="trust-bar-container">
                {items.map((item, index) => (
                    <div key={index} className="trust-item" style={{ opacity: 0.8, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        <span className="trust-icon" style={{ color: 'var(--accent)' }}>{item.icon}</span>
                        <span className="trust-text">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustBar;
