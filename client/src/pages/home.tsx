import { Hero } from "@/components/ui/hero";
import { ServiceCard } from "@/components/ui/service-card";
import { Settings, Paintbrush, Wrench, Car } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">
              Why Choose
              <span className="text-primary"> Auto Levels</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience unmatched expertise in luxury vehicle modifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description: "Our team of skilled technicians brings years of experience in luxury vehicle modifications."
              },
              {
                title: "Premium Materials",
                description: "We use only the highest quality materials and parts for all our modifications."
              },
              {
                title: "Guaranteed Satisfaction",
                description: "Your satisfaction is our priority, backed by our quality guarantee."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your vehicle modification project
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}