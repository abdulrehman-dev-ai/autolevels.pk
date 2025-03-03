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
    category: "Guides",
    content: `
      <h2>Comprehensive Guide to Land Cruiser Modifications</h2>
      <p>The Toyota Land Cruiser is renowned for its reliability and off-road capability. Here's our comprehensive guide to enhancing its performance and style.</p>

      <h3>Performance Upgrades</h3>
      <ul>
        <li>Engine tuning and optimization</li>
        <li>Suspension lift kits</li>
        <li>Off-road tire packages</li>
        <li>Brake system improvements</li>
      </ul>

      <h3>Interior Modifications</h3>
      <ul>
        <li>Premium leather upholstery</li>
        <li>Advanced entertainment systems</li>
        <li>Custom dashboard designs</li>
        <li>Climate control upgrades</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Top 5 Luxury Interior Upgrades for Your 4x4",
    description: "Transform your vehicle's interior into a premium space with these modifications.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
    date: "February 15, 2025",
    category: "Interior",
    content: `
      <h2>Luxury Interior Upgrades for Your 4x4</h2>
      <p>Transform your vehicle's interior into a haven of luxury and comfort with these premium modifications.</p>

      <h3>Premium Materials</h3>
      <ul>
        <li>Full leather interior packages</li>
        <li>Alcantara headlining</li>
        <li>Custom wood trim</li>
        <li>Premium carpeting</li>
      </ul>

      <h3>Technology Integration</h3>
      <ul>
        <li>State-of-the-art entertainment systems</li>
        <li>Advanced climate control</li>
        <li>Smart device integration</li>
        <li>Ambient lighting systems</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Off-Road Performance: Essential Modifications",
    description: "Essential modifications to prepare your luxury 4x4 for off-road adventures.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    date: "February 10, 2025",
    category: "Performance",
    content: `
      <h2>Essential Off-Road Performance Modifications</h2>
      <p>Prepare your luxury 4x4 for any terrain with these crucial performance modifications.</p>

      <h3>Suspension and Chassis</h3>
      <ul>
        <li>Advanced suspension systems</li>
        <li>Heavy-duty shock absorbers</li>
        <li>Reinforced chassis components</li>
        <li>Lift kit installation</li>
      </ul>

      <h3>Protection and Recovery</h3>
      <ul>
        <li>Underbody protection plates</li>
        <li>Rock sliders and bull bars</li>
        <li>Recovery equipment mounting</li>
        <li>Winch installation</li>
      </ul>
    `
  }
];

export function BlogPost({ id }: { id: string }) {
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link href="/blog">
            <Button variant="link" className="mt-4">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="link" className="mb-8">
              ← Back to Blog
            </Button>
          </Link>

          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-primary font-medium">{post.category}</span>
            <span className="text-muted-foreground">{post.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

export default function Blog() {
  const [, params] = location.pathname.split('/blog/');

  if (params) {
    return <BlogPost id={params} />;
  }

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
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
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