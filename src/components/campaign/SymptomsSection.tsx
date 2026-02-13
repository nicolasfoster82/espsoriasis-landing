import { motion } from "framer-motion";
import { Eye, Droplets, Flame, Layers } from "lucide-react";

const signs = [
  {
    icon: Layers,
    title: "Placas rojas elevadas",
    desc: "Áreas de piel engrosada, rojas o rosadas, bien delimitadas.",
  },
  {
    icon: Droplets,
    title: "Escamas plateadas",
    desc: "Descamación gruesa plateada o blanca sobre las placas.",
  },
  {
    icon: Flame,
    title: "Picazón y ardor",
    desc: "Sensación de picazón, ardor o dolor en las áreas afectadas.",
  },
  {
    icon: Eye,
    title: "Cambios en las uñas",
    desc: "Punteo, engrosamiento, decoloración o separación de la uña.",
  },
];

const SymptomsSection = () => {
  return (
    <section className="py-20 lg:px-6 bg-teal-700 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-teal-600/30 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-coral-400/15 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Signos y Síntomas Tempranos
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Reconocer estos signos puede marcar la diferencia en un diagnóstico y tratamiento oportuno.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signs.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {s.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/75 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
