import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";
import { Settings, Paintbrush, Wrench, Car, Shield, Hammer, Gauge, FileSpreadsheet } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Luxury Interior Upgrades",
      description: "Premium interior customization for the ultimate comfort.",
      icon: <Settings className="w-6 h-6 text-primary" />,
      features: [
        "Premium leather upholstery",
        "Custom dashboard design",
        "Advanced entertainment systems",
        "Climate control upgrades"
      ]
    },
    {
      title: "Exterior Modifications",
      description: "Transform your vehicle's appearance with professional modifications.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
      features: [
        "Custom paint finishes",
        "Body kit installation",
        "LED lighting upgrades",
        "Wheel and tire packages"
      ]
    },
    {
      title: "Performance Enhancements",
      description: "Boost your vehicle's capabilities with expert tuning.",
      icon: <Gauge className="w-6 h-6 text-primary" />,
      features: [
        "Engine tuning & remapping",
        "Suspension upgrades",
        "Brake system improvements",
        "Exhaust modifications"
      ]
    },
    {
      title: "Off-Road Packages",
      description: "Prepare your vehicle for any terrain.",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      features: [
        "Lift kit installation",
        "Off-road tire packages",
        "Underbody protection",
        "Recovery equipment"
      ]
    },
    {
      title: "Protection Packages",
      description: "Preserve your vehicle's finish and value.",
      icon: <Shield className="w-6 h-6 text-primary" />,
      features: [
        "Paint protection film",
        "Ceramic coating",
        "Window tinting",
        "Interior protection"
      ]
    },
    {
      title: "Maintenance Services",
      description: "Keep your modified vehicle in peak condition.",
      icon: <Hammer className="w-6 h-6 text-primary" />,
      features: [
        "Custom service schedules",
        "Performance diagnostics",
        "Firmware updates",
        "Calibration services"
      ]
    },
    {
      title: "Vehicle Trading",
      description: "Expert assistance in buying and selling luxury 4x4s.",
      icon: <Car className="w-6 h-6 text-primary" />,
      features: [
        "Market analysis",
        "Vehicle inspection",
        "Negotiation support",
        "Documentation handling"
      ]
    },
    {
      title: "Consultation Services",
      description: "Professional advice for your modification project.",
      icon: <FileSpreadsheet className="w-6 h-6 text-primary" />,
      features: [
        "Project planning",
        "Budget optimization",
        "Design consultation",
        "Performance recommendations"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">
              Our Premium
              <span className="text-primary"> Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of vehicle modification services,
              each crafted to enhance your driving experience and vehicle performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}