import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Code, Cloud, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions powered by cutting-edge technologies like LangChain, OpenAI, and TensorFlow to transform your business operations.",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Scalable, robust applications built with modern frameworks including React, Node.js, Python, and Java.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Expert cloud architecture and migration services leveraging AWS, Azure, and GCP with Infrastructure as Code.",
    },
    {
      icon: Package,
      title: "SaaS Products for MSMEs",
      description: "Affordable, intuitive software solutions designed specifically for Indian small and medium businesses.",
    },
  ];

  const values = [
    "Global expertise with local understanding",
    "Cutting-edge technology, practical solutions",
    "Dedicated to your business growth",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(20, 41, 84, 0.95) 0%, rgba(37, 99, 235, 0.85) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Grow Your Business, Not Your Workload
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Global Expertise, Local Solutions
            </p>
            <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Empowering businesses worldwide with intelligent, scalable technology solutions. We bridge the gap between cutting-edge AI innovation and practical business application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                <Link to="/services">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About MakeBetter Technologies
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              MakeBetter Technologies is a forward-thinking software development and AI consulting firm committed to delivering world-class technological solutions. Operating globally, we serve international clients seeking expert AI/ML development teams and custom software solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Simultaneously, we're dedicated to empowering Indian MSMEs with affordable, intuitive SaaS products that streamline operations and drive digitization. Our vision is simple yet powerful: enable businesses to focus on growth, not operational complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                <p className="text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you leverage technology to achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
