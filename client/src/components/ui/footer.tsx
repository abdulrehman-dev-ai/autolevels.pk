import { Link } from "wouter";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/black.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-#011b3d border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <img src={logo} alt="Auto Levels Logo" className="h-24 mb-4 cursor-pointer" />
            </Link>
            <p className="text-muted-foreground mb-4">
              Premium vehicle modifications for luxury 4x4 vehicles. Transform your ride with
              our expert customization services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Packages & Pricing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>
                  18 A Jail Road Qartaba Chowk, Lahore <br />
                  <a 
                    href="https://g.co/kgs/1BVfeS8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                +92 (302) 1070707
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                +92 (300) 4714191
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                info@autolevels.pk
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/autolevelspk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Autolevels.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/c/AutoLevels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {currentYear} Auto Levels. All rights reserved. | Powered by{" "}
            <a
              href="https://linktr.ee/abdulrehman.dev.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Abdul Rehman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
