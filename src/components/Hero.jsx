import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-light-gray overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-light-gray to-primary/10"></div>
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-6"
              variants={itemVariants}
            >
              Construindo o Futuro com{' '}
              <span className="gradient-text">Qualidade e Inovação</span>.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Transforme seus sonhos em realidade com a NTC Brasil. Sua visão é
              a nossa missão. Construímos com excelência para superar suas
              expectativas.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-strong hover:bg-accent transition-all duration-300 transform hover:-translate-y-1"
              >
                Inicie seu Projeto
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-square bg-white p-4 rounded-2xl shadow-strong">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-concept.jpg"
                alt="Conceito de construção moderna"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 border-4 border-primary/20 rounded-full -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
