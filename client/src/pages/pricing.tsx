import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

const packages = [
  {
    name: "Prado 120 to 160 Modifications",
    price: "28,00,000",
    description: "Basic Package with Exterior & Interior Upgradations",
    features: [
      "Exterior Upgradations",
      "Doors Alteration",
      "Door Handle Alterations",
      "Side Mirrors",
      "Quarter Fender Alterations",
      "Foot Panel",
      "LED Headlights & Taillights",
      "Custom Alloy Wheels",
      "Interior Dashboard Upgrade",
      "Premium Leather Seats"
    ]
  },
  {
    name: "Land Cruiser LC 200 to LC 300",
    price: "45,00,000",
    description: "Comprehensive modifications for luxury and performance",
    features: [
      "Advanced Engine Tuning",
      "Premium Body Kit",
      "Full Leather Interior",
      "Advanced Suspension System",
      "Premium Audio System",
      "Ceramic Coating Protection",
      "Digital Instrument Cluster",
      "360-Degree Camera System",
      "Wireless Charging Pad",
      "Adaptive Cruise Control"
    ]
  },
  {
    name: "Lexus LX 470 to LX 570",
    price: "75,00,000",
    description: "Complete vehicle transformation",
    features: [
      "Complete Engine Overhaul",
      "Custom Body Modifications",
      "Full Interior Redesign",
      "Advanced Off-Road Setup",
      "Premium Security Features",
      "Extended Warranty Coverage",
      "Priority Service Access",
      "Smart Infotainment System",
      "Electric Tailgate",
      "Ambient Lighting Customization"
    ]
  }
];

export default function Pricing() {
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
              Modification
              <span className="text-primary"> Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated packages or contact us for a custom solution
              tailored to your specific requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4">
                      <span className="text-4xl font-bold">PKR {pkg.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8">
              We offer personalized modification packages tailored to your specific needs and preferences.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get started with Custom Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
