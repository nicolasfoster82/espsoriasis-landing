import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Brain } from "lucide-react";

const myths = [
  {
    icon: ShieldCheck,
    myth: "La psoriasis es contagiosa",
    truth: "La psoriasis es una enfermedad autoinmune. No se transmite por contacto, abrazos, ni compartir objetos.",
  },
  {
    icon: Heart,
    myth: "Es solo un problema estético",
    truth: "Puede causar dolor, picazón intensa, artritis psoriásica y afectar significativamente la calidad de vida.",
  },
  {
    icon: Users,
    myth: "Es causada por falta de higiene",
    truth: "No tiene relación con la higiene. Es una condición genética e inmunológica que puede ser desencadenada por múltiples factores.",
  },
  {
    icon: Brain,
    myth: "No tiene tratamiento",
    truth: "Existen múltiples opciones terapéuticas que controlan los síntomas y mejoran la calidad de vida del paciente.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MythBusterSection = () => {
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
            Derribando <span className="text-gradient">Mitos</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            La desinformación genera estigma. Conozcamos la verdad sobre la psoriasis.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {myths.map((m, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-card rounded-xl p-8 shadow-campaign hover:shadow-campaign-hover transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-coral-50 flex items-center justify-center group-hover:bg-coral-100 transition-colors">
                  <m.icon className="w-7 h-7 text-coral-500" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-coral-500 uppercase tracking-wider mb-1">
                    Mito
                  </p>
                  <p className="font-display text-xl font-semibold text-foreground mb-3 line-through decoration-coral-400/50">
                    "{m.myth}"
                  </p>
                  <p className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                    Realidad
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {m.truth}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MythBusterSection;
