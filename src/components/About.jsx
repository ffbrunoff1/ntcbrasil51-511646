import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const itemVariants = (fromLeft = true) => ({
    hidden: { x: fromLeft ? -50 : 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  });

  const features = [
    {
      icon: <CheckCircle className="text-primary" size={24} />,
      text: 'Compromisso com prazos e orçamentos.',
    },
    {
      icon: <CheckCircle className="text-primary" size={24} />,
      text: 'Uso de materiais de alta performance.',
    },
    {
      icon: <CheckCircle className="text-primary" size={24} />,
      text: 'Equipe qualificada e experiente.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants(true)}>
            <div className="relative">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-team.jpg"
                alt="Equipe de construção da NTC Brasil"
                className="rounded-2xl shadow-strong w-full h-auto object-cover"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Users size={40} />
                <div>
                  <p className="font-bold text-2xl">+15 Anos</p>
                  <p className="text-sm">de Experiência</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants(false)}>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-primary" size={30} />
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Sobre a NTC Brasil
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma empresa consolidada no setor da construção, dedicada a
              entregar projetos que combinam design inovador, funcionalidade e a
              mais alta qualidade. A NTC Brasil nasceu do desejo de transformar
              o cenário da construção civil, trazendo soluções inteligentes e
              sustentáveis para cada cliente.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
