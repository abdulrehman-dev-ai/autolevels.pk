import { useState } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "./aspect-ratio";
import { Dialog, DialogContent } from "./dialog";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video"; // New field to differentiate
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/dXvHHRLnagE", // Embed link
    alt: "Modified Land Cruiser",
    type: "video",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/6ruEjPRKiDw",
    alt: "Luxury SUV",
    type: "video",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/Y_Xw_J-eZl8", // Replace with actual ID
    alt: "Off-road Adventure",
    type: "video",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/wcJnArgULmg", // Replace with actual ID
    alt: "Extreme Off-road Challenge",
    type: "video",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/_DGaQDEAG5o", // Replace with actual ID
    alt: "Custom Vehicle Upgrade",
    type: "video",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/8gpj_x6mFZs", // Replace with actual ID
    alt: "Luxury Car Reveal",
    type: "video",
  },
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedItem(item)}
          >
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={item.src}
                title={item.alt}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl">
          {selectedItem?.type === "video" ? (
            <iframe
              src={selectedItem.src}
              title={selectedItem.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto"
            ></iframe>
          ) : (
            <img
              src={selectedItem?.src}
              alt={selectedItem?.alt}
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
