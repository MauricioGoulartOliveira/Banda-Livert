import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact" id="contact">
      <h2 className="text-center text-uppercase mb-4">Contato</h2>
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="contact-info">
            <h3>Fale conosco</h3>
            <p><FaEnvelope className="me-3" /> bandalivert@gmail.com</p>
            <p><FaWhatsapp className="me-3" /> (48) 999417064</p>
            <div className="social-links mt-5">
              <a href="mailto:bandalivert@gmail.com" className="text-decoration-none me-3">
                <FaEnvelope className="social-icon" />
              </a>
              <a href="https://www.instagram.com/bandalivert?utm_source=qr&igsh=aDNnc2llcHFiZTRv/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-decoration-none me-3">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://wa.me/5548999417064" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-decoration-none">
                <FaWhatsapp className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://seusite.com/obrigado.html" />
            
            <div className="mb-3">
              <input 
                type="text" 
                name="name" 
                className="form-control form-control-lg" 
                placeholder="Seu nome" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                name="email" 
                className="form-control form-control-lg" 
                placeholder="Seu e-mail" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <input 
                type="tel" 
                name="phone" 
                className="form-control form-control-lg" 
                placeholder="Seu telefone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea 
                name="message" 
                className="form-control form-control-lg" 
                rows={5} 
                placeholder="Sua mensagem" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-3 fw-bold text-uppercase">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;