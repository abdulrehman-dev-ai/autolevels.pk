import { motion } from "framer-motion";
import { Medal, Clock, Wrench, Users } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Medal className="w-6 h-6 text-primary" />, 
      value: "10+", 
      label: "Years Experience"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />, 
      value: "500+", 
      label: "Projects Completed"
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />, 
      value: "50+", 
      label: "Custom Mods"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />, 
      value: "1000+", 
      label: "Happy Clients"
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">
              Premium Vehicle Modifications
              <span className="text-primary"> Redefined</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Auto Levels specializes in transforming luxury 4x4 vehicles into personalized 
              masterpieces. With over a decade of experience, we've established ourselves as 
              the premier choice for discerning vehicle enthusiasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "https://wallpapercave.com/wp/wp2499227.jpg",
                "https://wallpapercave.com/wp/wp13655129.jpg",
                "https://wallpapercave.com/wp/wp5255482.jpg",
                "https://wallpapercave.com/wp/wp14123851.jpg"
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Workshop ${index + 1}`}
                  className="rounded-lg shadow-xl"
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Workshop</h2>
              <p className="text-muted-foreground">
                Equipped with state-of-the-art technology and staffed by expert technicians,
                our workshop is designed to handle every aspect of vehicle modification.
                From interior upgrades to performance enhancements, we ensure every project
                meets our exacting standards.
              </p>
              <ul className="space-y-4">
                {[
                  "State-of-the-art facilities",
                  "Expert technicians",
                  "Premium materials",
                  "Quality assurance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
