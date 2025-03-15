import { motion } from "framer-motion";
import { z } from "zod";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+92 (302) 1070707"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@autolevels.pk"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      content: "Mon-Sat: 9AM - 9PM"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-green-500" />,
      title: "WhatsApp",
      content: (
        <a 
          href="https://wa.me/923021070707" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          +92 (302) 1070707
        </a>
      ),
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/autolevelspk/"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/Autolevels.pk/"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/c/AutoLevels"
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
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d212.51565535580752!2d74.31825085300484!3d31.5447396235805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39190500484d1bbf%3A0x56d48bb2e8cf46e6!2s11%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Jinnah%20Town%2C%20Lahore%2C%2054000!3m2!1d31.544791399999998!2d74.3183585!5e0!3m2!1sen!2s!4v1740316466690!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
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
