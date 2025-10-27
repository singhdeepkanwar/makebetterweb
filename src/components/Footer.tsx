import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/products", label: "Products" },
    ],
    legal: [
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact Us" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms-conditions", label: "Terms & Conditions" },
    ],
  };

  return (
    <footer className="border-t border-border bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-primary">makeBetter</span>
              <span className="text-sm tracking-wider text-muted-foreground uppercase">Technologies</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering businesses worldwide with intelligent, scalable technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal & More</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> contact@makebetter.tech
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Legal Entity:</span> Shree Ananta Consultancy and Solutions LLP
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shree Ananta Consultancy and Solutions LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
