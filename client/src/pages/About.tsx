import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { Award, CheckCircle2, Clock, Smile } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Skilled craftsmen and designers with years of expertise."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Quality Materials",
      description: "We source only the finest materials for lasting durability."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We value your time and commit to strict project timelines."
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Your vision is our priority. We work until you are delighted."
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* About Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming spaces, creating experiences, building dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section id="philosophy" className="relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              title="Our Philosophy" 
              subtitle="We believe that great design should be invisible. It should feel natural, comfortable, and effortlessly beautiful."
              center={false}
            />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Interiors Vision, we don't just fill rooms with furniture; we create atmospheres. Our mission is to translate your personality into a tangible living space.
              </p>
              <p>
                Guided by our motto <span className="text-primary font-medium italic">"Simplicity beats complexity"</span>, we strip away the unnecessary to reveal the essence of your home. Whether it's a cozy bedroom or a bustling kitchen, we focus on clean lines, thoughtful layouts, and premium materials.
              </p>
              <p>
                Each project is a collaboration. We listen, we understand, and we deliver spaces that exceed your expectations.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary rounded-2xl -z-10 transform rotate-2" />
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
              alt="Design Philosophy" 
              className="rounded-xl shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section id="why-us" background="muted">
        <SectionHeader 
          title="Why Choose Interiors Vision" 
          subtitle="We bring professionalism, creativity, and reliability to every project we undertake."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Story Section */}
      <Section>
        <SectionHeader 
          title="Our Journey"
          subtitle="From passion to profession"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary rounded-2xl -z-10 transform -rotate-2" />
            <img 
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Team" 
              className="rounded-xl shadow-xl w-full object-cover h-[400px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              Interiors Vision began with a simple idea: beautiful interiors shouldn't be complicated. Founded by a team of passionate designers and craftsmen, we've been transforming spaces across Hyderabad.
            </p>
            <p>
              Over the years, we've completed hundreds of projects, each one a testament to our commitment to excellence. From residential apartments to commercial spaces, our work speaks for itself.
            </p>
            <p>
              Today, we continue to innovate, collaborate, and create spaces that inspire. Every project reinforces our belief that simplicity truly beats complexity.
            </p>
          </motion.div>
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
