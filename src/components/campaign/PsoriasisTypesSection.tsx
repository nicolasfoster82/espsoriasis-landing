import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";

const types = [
  {
    id: "genital",
    name: "Psoriasis Genital",
    color: "coral",
    description:
      "Afecta los genitales y zonas inguinales. Es más frecuente de lo que se cree, pero rara vez se reporta por vergüenza.",
    symptoms: [
      "Enrojecimiento brillante sin descamación típica",
      "Ardor y dolor, especialmente con fricción",
      "Puede confundirse con infecciones fúngicas o de transmisión sexual",
    ],
    tips: "No es contagiosa por contacto sexual. Es importante consultar con un dermatólogo para un diagnóstico preciso y tratamiento adecuado.",
  },
  {
    id: "cuero-cabelludo",
    name: "Psoriasis del Cuero Cabelludo",
    color: "teal",
    description:
      "Una de las formas más comunes. Puede ser leve (descamación fina) o severa (placas gruesas que cubren todo el cuero cabelludo).",
    symptoms: [
      "Placas gruesas con escamas plateadas o blancas",
      "Picazón intensa que puede causar sangrado al rascarse",
      "Puede extenderse a la frente, nuca y detrás de las orejas",
    ],
    tips: "Evite rascarse, ya que puede empeorar las lesiones (fenómeno de Koebner). Existen champús medicados y tratamientos tópicos específicos.",
  },
  {
    id: "palmo-plantar",
    name: "Psoriasis Palmo-Plantar",
    color: "coral",
    description:
      "Afecta las palmas de las manos y las plantas de los pies. Puede ser extremadamente incapacitante por el dolor y las fisuras.",
    symptoms: [
      "Piel engrosada y agrietada en palmas y plantas",
      "Pústulas estériles (ampollas con líquido no infeccioso)",
      "Dolor al caminar o usar las manos, limitando actividades diarias",
    ],
    tips: "Es importante hidratar frecuentemente y usar calzado cómodo. Puede requerir tratamientos sistémicos cuando los tópicos no son suficientes.",
  },
  {
    id: "placas",
    name: "Psoriasis en Placas (Vulgar)",
    color: "teal",
    description:
      "La forma más común, representa el 80-90% de los casos. Se presenta como placas rojas cubiertas de escamas plateadas.",
    symptoms: [
      "Placas bien delimitadas, rojas y elevadas",
      "Escamas plateadas gruesas que se desprenden",
      "Afecta comúnmente codos, rodillas, espalda baja y cuero cabelludo",
    ],
    tips: "Es la forma más reconocible y diagnosticable. El tratamiento depende de la extensión y gravedad.",
  },
  {
    id: "guttata",
    name: "Psoriasis Guttata (en Gotas)",
    color: "coral",
    description:
      "Aparece como pequeñas lesiones en forma de gota, frecuentemente después de una infección estreptocócica en niños y adultos jóvenes.",
    symptoms: [
      "Pequeñas lesiones en forma de gota por tronco y extremidades",
      "Aparición súbita, a menudo tras faringitis",
      "Puede resolverse espontáneamente o evolucionar a psoriasis en placas",
    ],
    tips: "Es importante tratar las infecciones de garganta oportunamente. Puede ser el primer episodio de psoriasis en personas jóvenes.",
  },
];

const PsoriasisTypesSection = () => {
  const [openType, setOpenType] = useState<string | null>("genital");

  return (
    <section id="tipos" className="py-20 lg:px-6 warm-gradient">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tipos de <span className="text-gradient">Psoriasis</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            No todas las psoriasis se ven iguales. Conocer las diferentes formas clínicas es clave para un diagnóstico temprano.
          </p>
        </motion.div>

        <div className="space-y-4">
          {types.map((type) => {
            const isOpen = openType === type.id;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border shadow-campaign overflow-hidden"
              >
                <button
                  onClick={() => setOpenType(isOpen ? null : type.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        type.color === "coral" ? "bg-coral-400" : "bg-teal-500"
                      }`}
                    />
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                      {type.name}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="font-body text-muted-foreground mb-6 text-lg leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-body font-semibold text-foreground mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-coral-500" />
                        Signos y Síntomas
                      </h4>
                      <ul className="space-y-2">
                        {type.symptoms.map((symptom, i) => (
                          <li
                            key={i}
                            className="font-body text-muted-foreground flex items-start gap-3"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`rounded-lg p-4 ${
                        type.color === "coral" ? "bg-coral-50" : "bg-teal-50"
                      }`}
                    >
                      <p className="font-body text-sm text-foreground/80">
                        <strong>💡 Importante:</strong> {type.tips}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PsoriasisTypesSection;
