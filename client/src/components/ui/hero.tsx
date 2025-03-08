import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./button";
import { Link } from "wouter";

const images = [
  "https://wallpapercave.com/wp/wp9474984.jpg",
  "https://wallpapercave.com/wp/wp2499227.jpg",
  "https://wallpapercave.com/wp/wp6633253.jpg",
  "https://wallpapercave.com/wp/wp9353405.jpg"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AnimatePresence ensures smooth exit animations */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex} // Ensures re-render when index changes
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${images[currentImageIndex]})`,
          }}
          initial={{ x: "100%", opacity: 0 }} // Start position (off-screen right)
          animate={{ x: "0%", opacity: 1 }} // Enter position (center screen)
          exit={{ x: "-100%", opacity: 0 }} // Exit position (off-screen left)
          transition={{ duration: 1 }} // Smooth transition
        />
      </AnimatePresence>
      
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
              <Button size="lg" variant="outline" className="font-semibold text-white bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 transition-all duration-300">
                View Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
