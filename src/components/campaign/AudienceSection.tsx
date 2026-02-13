import { motion } from "framer-motion";
import { useState } from "react";
import { User, Stethoscope, Microscope } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;

const audiences = [
  {
    id: "paciente",
    icon: User,
    label: "Soy Paciente",
    img:"",
    alt:"",
    title: "Para ti, que vives con psoriasis",
    content: [
      {
        heading: "No estás solo/a",
        text: "La psoriasis afecta al 2-3% de la población mundial. No es tu culpa, no es contagiosa, y hay opciones de tratamiento que pueden mejorar significativamente tu calidad de vida.",
      },
      {
        heading: "Busca ayuda profesional",
        text: "Un dermatólogo es el especialista indicado para evaluar tu caso. No te conformes con un diagnóstico genérico. Exige un plan de tratamiento personalizado.",
      },
      {
        heading: "Cuida tu salud mental",
        text: "La psoriasis puede generar ansiedad, depresión y aislamiento. Hablar sobre cómo te sientes es parte fundamental del tratamiento. Busca grupos de apoyo.",
      },
      {
        heading: "Tus derechos",
        text: "Tienes derecho a un trato digno. Si alguien te discrimina por tu condición de piel, recuerda: la ignorancia está en quien juzga, no en ti.",
      },
    ],
  },
  {
    id: "medico",
    icon: Stethoscope,
    label: "Soy Médico Primario",
    img: `${baseUrl}assets/logo-behealth-med-color.png`,
    alt:"logo de behealthMED",
    title: "Tu rol es clave en la identificación temprana",
    content: [
      {
        heading: "Reconoce los signos",
        text: "La psoriasis no siempre se presenta como placas clásicas. Aprende a identificar formas atípicas: genital, inversa, palmo-plantar y guttata, que pueden confundirse con otras dermatosis.",
      },
      {
        heading: "Explora más allá",
        text: "Pregunta al paciente sobre articulaciones, uñas y cuero cabelludo. El 30% de los pacientes con psoriasis desarrolla artritis psoriásica.",
      },
      {
        heading: "Referencia oportuna",
        text: "Refiere al dermatólogo cuando: la psoriasis afecta >5% de superficie corporal, hay compromiso articular, o el paciente no responde a tratamientos tópicos en 4-8 semanas.",
      },
      {
        heading: "Abordaje integral",
        text: "Evalúa comorbilidades: síndrome metabólico, enfermedad cardiovascular, depresión. La psoriasis es una enfermedad sistémica.",
      },
    ],
  },
  {
    id: "dermatologo",
    icon: Microscope,
    label: "Soy Dermatólogo",
    img: `${baseUrl}assets/logo-behealth-med-color.png`,
    alt:"logo de behealthMED",
    title: "Liderando el manejo especializado",
    content: [
      {
        heading: "Formas menos visibilizadas",
        text: "La psoriasis genital, del cuero cabelludo y palmo-plantar requieren abordajes terapéuticos específicos. La sensibilidad de estas zonas demanda opciones de tratamiento adaptadas.",
      },
      {
        heading: "Educación del paciente",
        text: "Dedica tiempo a explicar la naturaleza crónica de la enfermedad, las expectativas realistas del tratamiento y la importancia de la adherencia terapéutica.",
      },
      {
        heading: "Arsenal terapéutico",
        text: "Desde tópicos hasta biológicos de última generación. Personaliza el tratamiento según la forma clínica, extensión, impacto en la calidad de vida y preferencias del paciente.",
      },
      {
        heading: "Red de apoyo",
        text: "Conéctalo con grupos de apoyo, psicología y otros especialistas según comorbilidades. El manejo multidisciplinario mejora los resultados.",
      },
    ],
  },
];

const AudienceSection = () => {
  const [active, setActive] = useState("paciente");
  const current = audiences.find((a) => a.id === active)!;

  return (
    <section id="audiencias" className="py-20 lg:px-6 warm-gradient">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Información para <span className="text-gradient">Ti</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Selecciona tu perfil para ver contenido personalizado.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {audiences.map((a) => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-base transition-all duration-300 ${active === a.id
                  ? "bg-primary text-primary-foreground shadow-campaign"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                }`}
            >
              <a.icon className="w-5 h-5" />
              {a.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {current.img ? (
            <div className="flex justify-center">
              <img src={current.img} alt={current.alt} className="lg:w-3/12 md:w-3/12 sm:w-100" />
            </div>
          ) : null}

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            {current.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {current.content.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-6 border border-border shadow-campaign"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-primary font-display font-bold text-sm">
                    {i + 1}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {item.heading}
                  </h4>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection;
