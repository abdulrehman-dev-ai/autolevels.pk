import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./button";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf)",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Elevate Your
            <span className="text-primary"> 4x4 Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Luxury vehicle modifications and premium upgrades for discerning 4x4 enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="font-semibold">
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="font-semibold text-white border-white hover:bg-white/10">
                View Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
