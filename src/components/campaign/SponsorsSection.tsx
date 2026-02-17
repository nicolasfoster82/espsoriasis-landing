import { motion } from "framer-motion";

const SponsorsSection = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section className="overflow-hidden py-20 lg:px-6 bg-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                        En <span className="text-gradient">Alianza con</span>
                    </h2>
                </motion.div>
                <div className="w-full flex justify-center">
                    <div className="lg:w-3/12 md:5/12 sm:w-100">
                        <img src={`${baseUrl}assets/logo-apapp.jpeg`} alt="Logo de apapp" className="rounded-lg drop-shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;