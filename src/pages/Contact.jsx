import React, { useState } from 'react';
import { Plus, Minus, Send, Phone, MapPin, Mail } from 'lucide-react';
import '../styles/Contact.css';

const faqs = [
    {
        q: "¿Cuáles son los horarios de Check-in y Check-out?",
        a: "El check-in es a partir de las 15:00 hs y el check-out hasta las 11:00 hs. Ofrecemos late check-out sujeto a disponibilidad para reservas directas."
    },
    {
        q: "¿Es apto para niños?",
        a: "Sí, aceptamos familias. Contamos con suites conectadas y servicios especiales para menores, aunque mantenemos una atmósfera de tranquilidad absoluta."
    },
    {
        q: "¿Cómo es el acceso en invierno?",
        a: "El lodge cuenta con acceso pavimentado y servicio de limpieza de nieve permanente. Estamos a solo 20 minutos del Cerro Catedral."
    },
    {
        q: "¿Necesito reserva para el restaurante Stag si soy huésped?",
        a: "Se recomienda reservar, especialmente en temporada alta, para asegurar su mesa preferida, aunque los huéspedes siempre tienen prioridad de asignación."
    },
    {
        q: "¿Tienen estacionamiento?",
        a: "Sí, contamos con estacionamiento privado y gratuito dentro del predio, con seguridad las 24 hs."
    }
];

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };

    return (
        <div className="contact-page">
            <section className="contact-hero container">
                <h1 className="section-title">Estamos para acompañarle</h1>
                <p className="section-subtitle">Queremos que su experiencia comience antes de su llegada. Consúltenos sobre traslados, cenas románticas o cualquier detalle para hacer su estadía inolvidable.</p>
            </section>

            <section className="contact-content container">
                <div className="contact-grid">
                    <div className="contact-info-cards">
                        <div className="info-card reveal">
                            <Phone size={24} />
                            <h3>Teléfono & WhatsApp</h3>
                            <p>Atención inmediata las 24 hs.</p>
                            <a href="tel:+542944441234">+54 294 444 1234</a>
                        </div>
                        <div className="info-card reveal">
                            <Mail size={24} />
                            <h3>Email</h3>
                            <p>Consultas y reservas.</p>
                            <a href="mailto:reservas@charming-lodge.com">reservas@charming-lodge.com</a>
                        </div>
                        <div className="info-card reveal">
                            <MapPin size={24} />
                            <h3>Ubicación</h3>
                            <p>Av. Bustillo Km 7.5, Bariloche.</p>
                            <a href="#">Ver en Google Maps</a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper reveal">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input type="text" placeholder="Ej: Juan Pérez" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="juan@ejemplo.com" />
                            </div>
                            <div className="form-group">
                                <label>Asunto</label>
                                <select>
                                    <option>Consulta General</option>
                                    <option>Reserva de Alojamiento</option>
                                    <option>Reserva Stag Restaurant</option>
                                    <option>Eventos / Grupos</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Mensaje</label>
                                <textarea rows="5" placeholder="¿En qué podemos ayudarle?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Enviar Mensaje <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="faq-section reveal">
                <div className="container">
                    <h2 className="section-title">Preguntas Frecuentes</h2>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                                <div className="faq-question">
                                    <h4>{faq.q}</h4>
                                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
