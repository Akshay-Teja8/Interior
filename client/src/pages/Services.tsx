import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Interior Designing",
      tagline: "Complete Space Transformation",
      description: "Complete interior solutions that blend aesthetics with functionality.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "3D Visualization"]
    },
    {
      id: 2,
      title: "Modular Kitchen",
      tagline: "Smart & Stylish",
      description: "Ergonomic and stylish modular kitchens designed for the modern lifestyle.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop",
      features: ["Custom Storage", "Smart Appliances", "Workflow Optimization", "Material Selection"]
    },
    {
      id: 3,
      title: "Wood Works",
      tagline: "Craftsmanship Excellence",
      description: "Custom carpentry and woodwork that adds warmth and character.",
      image: "https://images.unsplash.com/photo-1601058268499-e52642d18d89?q=80&w=600&auto=format&fit=crop",
      features: ["Custom Carpentry", "Wood Selection", "Finishes & Polish", "Installation"]
    },
    {
      id: 4,
      title: "Wardrobes",
      tagline: "Storage Solutions",
      description: "Spacious and elegant wardrobe designs tailored to your storage needs.",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600&auto=format&fit=crop",
      features: ["Space Maximization", "Sliding Doors", "Internal Organization", "Premium Hardware"]
    },
    {
      id: 5,
      title: "Electrical Works",
      tagline: "Intelligent Lighting",
      description: "Safe and strategic electrical planning with exceptional lighting design.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&auto=format&fit=crop",
      features: ["Lighting Design", "Smart Wiring", "Safety Compliance", "Modern Fixtures"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Comprehensive interior solutions for every space and style
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Alternating Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
                />
              </div>
              
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{service.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{service.title}</h2>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-sm uppercase text-muted-foreground">What's Included:</p>
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
          >
            Our Process
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision, budget, and timeline" },
              { step: "02", title: "Design", desc: "Creating detailed designs and 3D visualizations" },
              { step: "03", title: "Execution", desc: "Expert craftsmen bringing designs to life" },
              { step: "04", title: "Handover", desc: "Perfect finishing touches and your satisfaction" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/20 font-display mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="https://wa.me/919966665438"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
