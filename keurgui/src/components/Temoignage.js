import React from 'react';
import './Temoignage.css'; 
import Card from '../Dashboard/Card'; 

const Temoignage = () => {
  const testimonials = [
    {
      name: 'Didi',
      image: require('./assets/didi.jpeg'),
      title: 'Excellent service !',
      content: 'Je suis vraiment satisfait des services de Kergui. Ils m\'ont aidé à prendre soin de ma santé et je recommande fortement leurs services.',
    },
    {
      name: 'Badji',
      image: require('./assets/badji.jpeg'),
      title: 'Un accompagnement de qualité',
      content: 'L\'équipe Kergui est professionnelle et très à l\'écoute. Grâce à eux, j\'ai pu obtenir les meilleurs conseils pour mon bien-être.',
    },
  ];

  return (
    <div className="temoignage-container">
      <h2 className="temoignage-title">Témoignages</h2>
      <div className="temoignage-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="temoignage-card">
            <div className="temoignage-content">
              <img src={testimonial.image} alt={testimonial.name} className="temoignage-image" />
              <div className="temoignage-card-text">
                <p className="temoignage-card-title">{testimonial.title}</p>
                <p className="temoignage-card-content">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temoignage;
