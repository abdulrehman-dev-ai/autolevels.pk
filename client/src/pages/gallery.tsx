import { motion } from "framer-motion";
import { Gallery } from "@/components/ui/gallery";

export default function GalleryPage() {
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
              Our Latest
              <span className="text-primary"> Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of premium vehicle modifications and transformations.
              Each project showcases our commitment to excellence and attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Gallery />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
