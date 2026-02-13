import { motion } from "framer-motion";

const HeroSection = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={`${baseUrl}assets/hero-section.webp`}
          alt="Fondo Hero section"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/85 via-teal-600/70 to-coral-500/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase backdrop-blur-sm"
          >
            Campaña Educativa
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            No es contagiosa.
            <br />
            <span className="text-coral-400">Es Psoriasis.</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed">
            Una campaña para pacientes, médicos primarios y dermatólogos.
            Porque entender es el primer paso para cuidar.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#tipos"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-body font-semibold text-lg transition-all hover:shadow-campaign-hover hover:scale-105"
            >
              Conoce los Tipos
            </a>
            <a
              href="#audiencias"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-lg transition-all hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              ¿Quién eres?
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 80 1440 80V100H0V40Z"
            fill="hsl(180, 20%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
