import { Heart } from "lucide-react";

const FooterSection = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <footer className="py-12 lg:px-6 bg-teal-700">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <img src={`${baseUrl}assets/logo-Behealth-blanco-scaled.png`} alt="logo de behealth" className="lg:w-6/12 md:w-6/12 sm:w-100" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          La psoriasis no define quién eres.
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Comparte esta campaña y ayuda a romper el estigma. Juntos podemos construir un mundo más informado y compasivo.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/60 font-body text-sm">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-coral-400 fill-coral-400" />
          <span>para la educación en salud</span>
        </div>
        <p className="font-body text-xs text-primary-foreground/40 mt-4">
          Campaña Educativa "No es contagiosa. Es Psoriasis." — Información con propósito educativo. Consulte siempre a su médico.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
