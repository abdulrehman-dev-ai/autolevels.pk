import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "123 Modification Ave, Dubai, UAE"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+971 50 123 4567"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@autolevels.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      content: "Mon-Sat: 9AM - 6PM"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com"
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
              Get in
              <span className="text-primary"> Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-card border"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-lg bg-card border">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-lg bg-card border">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
