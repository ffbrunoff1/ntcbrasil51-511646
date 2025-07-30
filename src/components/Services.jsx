import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: 'Qualidade Superior',
      description:
        'Nosso compromisso é com a excelência. Utilizamos os melhores materiais e as mais rigorosas normas técnicas para garantir a durabilidade e segurança de cada projeto.',
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: 'Inovação Constante',
      description:
        'Estamos sempre à frente, incorporando as últimas tecnologias e tendências da construção civil para oferecer soluções mais eficientes, sustentáveis e inteligentes.',
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: 'Foco no Cliente',
      description:
        'Cada projeto é único. Ouvimos suas necessidades e trabalhamos em estreita colaboração para que o resultado final seja a materialização exata da sua visão.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Pilares que sustentam cada tijolo que assentamos e cada projeto que
            entregamos.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-strong transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="mb-6 bg-primary/10 p-4 rounded-full w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
