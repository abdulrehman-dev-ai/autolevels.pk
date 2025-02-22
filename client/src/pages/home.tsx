import { Hero } from "@/components/ui/hero";
import { ServiceCard } from "@/components/ui/service-card";
import { Settings, Paintbrush, Wrench, Car } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Luxury Interior Upgrades",
      description: "Transform your vehicle's interior with premium materials and custom designs.",
      icon: <Settings className="w-6 h-6 text-primary" />,
      features: ["Premium leather upholstery", "Custom dashboard", "Entertainment systems"]
    },
    {
      title: "Exterior Modifications",
      description: "Enhance your vehicle's appearance with professional modifications.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
      features: ["Custom paint jobs", "Body kits", "Lighting upgrades"]
    },
    {
      title: "Performance Enhancements",
      description: "Boost your vehicle's performance with expert modifications.",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      features: ["Engine tuning", "Suspension upgrades", "Brake systems"]
    },
    {
      title: "Vehicle Trading",
      description: "Buy and sell premium 4x4 vehicles with our expert assistance.",
      icon: <Car className="w-6 h-6 text-primary" />,
      features: ["Market analysis", "Vehicle inspection", "Negotiation support"]
    }
  ];

  return (
    <div>
      <Hero />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Premium Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}