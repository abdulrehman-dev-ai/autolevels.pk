import { useState } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "./aspect-ratio";
import { Dialog, DialogContent } from "./dialog";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    alt: "Modified Land Cruiser"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
    alt: "Luxury SUV"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    alt: "Off-road Vehicle"
  },
  // Add more images as needed
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform hover:scale-105"
                loading="lazy"
              />
            </AspectRatio>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
