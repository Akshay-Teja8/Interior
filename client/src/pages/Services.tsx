import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";

export default function Services() {
  const services = [
    {
      title: "Interior Designing",
      description: "Complete interior solutions that blend aesthetics with functionality. We transform spaces into living works of art.",
      imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Modular Kitchen",
      description: "Ergonomic and stylish modular kitchens designed for the modern chef. Maximize space with smart storage solutions.",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wood Works",
      description: "Custom carpentry and woodwork that adds warmth and character. From intricate carvings to modern minimalist furniture.",
      imageUrl: "https://images.unsplash.com/photo-1601058268499-e52642d18d89?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wardrobes",
      description: "Spacious and elegant wardrobe designs tailored to your storage needs. Sliding, walk-in, and hinged options available.",
      imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Electrical Works",
      description: "Safe and strategic electrical planning and installation. Lighting design that sets the perfect mood for every room.",
      imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Services Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive interior solutions tailored to your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </Section>

      {/* Service Process Section */}
      <Section background="muted">
        <SectionHeader 
          title="Our Process"
          subtitle="A structured approach to bringing your vision to life"
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Consultation", description: "We listen to your ideas, budget, and timeline." },
            { step: "02", title: "Concept Design", description: "Our team creates detailed designs and 3D visualizations." },
            { step: "03", title: "Execution", description: "Expert craftsmen bring the design to life with precision." },
            { step: "04", title: "Completion", description: "Final touches and your complete satisfaction guarantee." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/20 font-display mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919966665438"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
