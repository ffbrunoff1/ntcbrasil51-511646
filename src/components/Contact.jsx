import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const userEmail = 'ffbrunoff@yahoo.com.br';

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulação de envio
    console.log('Formulário enviado para:', userEmail);
    console.log('Dados:', formData);
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-primary" />,
      text: '+55 44 99104-0774',
    },
    { icon: <Mail size={24} className="text-primary" />, text: userEmail },
    {
      icon: <MapPin size={24} className="text-primary" />,
      text: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 bg-light-gray p-8 md:p-12 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Vamos construir seu projeto juntos.
            </h3>
            <p className="text-gray-600 mb-8">
              Preencha o formulário ao lado ou utilize um dos nossos canais de
              contato direto. Nossa equipe está pronta para atender você.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-md hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 disabled:bg-gray-400"
              >
                Enviar Mensagem <Send size={20} />
              </button>
            </div>
            {status && (
              <p className="text-center font-medium text-primary">{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
