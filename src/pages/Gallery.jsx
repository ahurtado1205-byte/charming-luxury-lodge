import React, { useState } from 'react';
import { IMAGES } from '../config/images';
import { X, ZoomIn } from 'lucide-react';
import '../styles/Gallery.css';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="gallery-page">
            <section className="gallery-header container reveal">
                <span className="hero-status">Imágenes de nuestra casa</span>
                <h1 className="section-title">Galería de Fotos</h1>
                <p className="section-subtitle">Un recorrido visual por los rincones más especiales de Charming Luxury Lodge.</p>
            </section>

            <section className="gallery-grid-container container reveal">
                <div className="gallery-impact-grid">
                    {IMAGES.gallery.map((img, index) => (
                        <div
                            key={index}
                            className={`gallery-item item-${index % 5}`}
                            onClick={() => setSelectedImg(img)}
                        >
                            <img src={img} alt={`Gallery ${index}`} loading="lazy" />
                            <div className="gallery-hover">
                                <ZoomIn color="white" size={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImg && (
                <div className="lightbox" onClick={() => setSelectedImg(null)}>
                    <div className="lightbox-content">
                        <img src={selectedImg} alt="Lightbox" />
                        <button className="close-lightbox"><X size={32} /></button>
                    </div>
                </div>
            )}

            <section className="gallery-cta">
                <div className="container reveal">
                    <h2>¿Listo para vivirlo en persona?</h2>
                    <a href="/contact" className="btn btn-primary">Reservar ahora</a>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
