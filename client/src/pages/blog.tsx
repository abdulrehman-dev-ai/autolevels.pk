import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Land Cruiser Modifications",
    description: "Discover the best modifications to enhance your Land Cruiser's performance and style.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    date: "February 20, 2025",
    category: "Guides"
  },
  {
    id: 2,
    title: "Top 5 Luxury Interior Upgrades for Your 4x4",
    description: "Transform your vehicle's interior into a premium space with these modifications.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
    date: "February 15, 2025",
    category: "Interior"
  },
  {
    id: 3,
    title: "Off-Road Performance: Essential Modifications",
    description: "Essential modifications to prepare your luxury 4x4 for off-road adventures.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    date: "February 10, 2025",
    category: "Performance"
  }
];

export default function Blog() {
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
              Latest from Our
              <span className="text-primary"> Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in vehicle modifications
              and luxury automotive customization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
