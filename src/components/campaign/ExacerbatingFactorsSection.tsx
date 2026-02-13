import { motion } from "framer-motion";
import {
  Cigarette,
  Wine,
  Frown,
  Sun,
  Pill,
  Thermometer,
} from "lucide-react";

const factors = [
  { icon: Frown, label: "Estrés emocional", desc: "El estrés es uno de los desencadenantes más comunes de brotes." },
  { icon: Thermometer, label: "Infecciones", desc: "Especialmente faringitis estreptocócica en psoriasis guttata." },
  { icon: Pill, label: "Medicamentos", desc: "Betabloqueantes, litio y antimaláricos pueden exacerbar brotes." },
  { icon: Cigarette, label: "Tabaquismo", desc: "Aumenta el riesgo y la severidad de la psoriasis." },
  { icon: Wine, label: "Consumo de alcohol", desc: "Puede empeorar los síntomas y reducir la eficacia del tratamiento." },
  { icon: Sun, label: "Clima frío y seco", desc: "La falta de humedad y radiación solar puede agravar las lesiones." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const ExacerbatingFactorsSection = () => {
  return (
    <section className="py-20 lg:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Factores que <span className="text-gradient">Exacerban</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Conocer los factores desencadenantes ayuda a prevenir brotes y manejar mejor la enfermedad.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {factors.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-card rounded-xl p-6 shadow-campaign hover:shadow-campaign-hover border border-border transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {f.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExacerbatingFactorsSection;
