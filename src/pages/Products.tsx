import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, Stethoscope, Calculator, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Store,
      title: "Vyapar Sahayak",
      tagline: "Smart Solutions for Kirana Stores",
      description: "A comprehensive digital management system designed specifically for neighborhood Kirana stores and small retail businesses. Streamline inventory management, billing, and customer relationships with an intuitive, affordable solution.",
      features: [
        "Easy inventory tracking and stock alerts",
        "Quick billing and invoice generation",
        "Customer loyalty management",
        "Sales analytics and insights",
        "Multi-language support (Hindi, English, and regional languages)",
        "Offline-first capability"
      ],
      targetAudience: "Kirana stores, small retail shops, neighborhood markets"
    },
    {
      icon: Stethoscope,
      title: "ClinicBase Lite",
      tagline: "Practice Management for Single-Doctor Clinics",
      description: "An affordable, user-friendly practice management system tailored for independent doctors and small clinics. Manage appointments, patient records, and prescriptions with ease.",
      features: [
        "Patient appointment scheduling",
        "Digital patient records (EMR)",
        "Prescription generation and management",
        "Billing and payment tracking",
        "SMS appointment reminders",
        "HIPAA-compliant data security"
      ],
      targetAudience: "Solo practitioners, small clinics, general physicians"
    },
    {
      icon: Calculator,
      title: "GST-Buddy AI",
      tagline: "AI-Powered GST Compliance Assistant",
      description: "Simplify GST filing and compliance for small accounting firms and businesses. Our AI-powered assistant helps automate data entry, identify errors, and ensure accurate filing.",
      features: [
        "Automated GST return preparation",
        "Invoice reconciliation and error detection",
        "AI-powered compliance suggestions",
        "Multi-client management for accountants",
        "Real-time GST rate updates",
        "Report generation and analytics"
      ],
      targetAudience: "Small accounting firms, MSMEs, tax consultants"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our SaaS Products
            </h1>
            <p className="text-xl opacity-90">
              Innovative solutions designed specifically for Indian MSMEs
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Affordable, Intuitive SaaS Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              We're building powerful yet easy-to-use software products that help small businesses digitize their operations, improve efficiency, and focus on growth. Our products are designed with the unique needs of Indian MSMEs in mind.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-large transition-smooth border-border overflow-hidden">
                  <CardHeader className="bg-gradient-subtle">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-1">{product.title}</CardTitle>
                        <p className="text-accent font-medium mb-2">{product.tagline}</p>
                        <CardDescription className="text-base text-muted-foreground">
                          {product.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-2" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Perfect For:</h4>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">{product.targetAudience}</p>
                        </div>
                        <div className="mt-6">
                          <Button variant="accent" asChild className="w-full">
                            <Link to="/contact">
                              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-medium p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Products in Development
            </h3>
            <p className="text-muted-foreground mb-6">
              Our SaaS products are currently in early development stages. We're working hard to bring these innovative solutions to market soon. Interested in being an early adopter or providing feedback during our beta phase?
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Express Your Interest</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We also build bespoke software solutions tailored to your specific business needs
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
