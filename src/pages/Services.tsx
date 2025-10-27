import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Code, 
  Cloud, 
  Package, 
  Users, 
  CheckCircle2,
  Cpu,
  Database,
  GitBranch,
  Shield
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI & Machine Learning Consulting & Development",
      description: "Transform your business with intelligent automation and data-driven insights. We build custom AI solutions that solve real business problems.",
      features: [
        "Custom AI model development and training",
        "Natural Language Processing (NLP) solutions",
        "Computer Vision applications",
        "Predictive analytics and forecasting",
        "AI-powered chatbots and virtual assistants",
        "Machine learning pipeline development"
      ],
      technologies: "Python, TensorFlow, PyTorch, LangChain, OpenAI API, Hugging Face, scikit-learn"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Scalable, robust applications tailored to your unique business requirements. We bring your vision to life with modern, maintainable code.",
      features: [
        "Web application development",
        "Mobile app development (iOS & Android)",
        "Enterprise software solutions",
        "API development and integration",
        "Legacy system modernization",
        "Progressive Web Apps (PWA)"
      ],
      technologies: "React, Node.js, Python, Java, TypeScript, Flutter, React Native, .NET"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Architecture",
      description: "Build, migrate, and optimize your infrastructure on leading cloud platforms. We ensure scalability, security, and cost-efficiency.",
      features: [
        "Cloud migration and modernization",
        "Infrastructure as Code (IaC)",
        "Serverless architecture design",
        "Container orchestration (Kubernetes)",
        "DevOps and CI/CD implementation",
        "Cloud cost optimization"
      ],
      technologies: "AWS, Azure, GCP, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions"
    },
    {
      icon: Package,
      title: "SaaS Product Development",
      description: "Launch your software-as-a-service product with confidence. We handle everything from architecture to deployment.",
      features: [
        "Multi-tenant architecture design",
        "Subscription and billing integration",
        "User management and authentication",
        "Data analytics and reporting dashboards",
        "Third-party API integrations",
        "Scalable microservices architecture"
      ],
      technologies: "React, Node.js, PostgreSQL, Redis, Stripe, AWS, MongoDB"
    },
    {
      icon: Users,
      title: "IT Consulting & Staff Augmentation",
      description: "Access world-class technical talent on-demand. We provide skilled professionals who integrate seamlessly with your team.",
      features: [
        "Dedicated development teams",
        "Technical project management",
        "Architecture and design consulting",
        "Code review and quality assurance",
        "Technology stack evaluation",
        "Agile transformation consulting"
      ],
      technologies: "Full-stack developers, AI/ML engineers, Cloud architects, DevOps specialists"
    }
  ];

  const methodology = [
    {
      icon: GitBranch,
      title: "Agile Methodology",
      description: "Iterative development with continuous feedback and rapid delivery"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Close partnership with your team throughout the project lifecycle"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and code reviews ensure robust solutions"
    },
    {
      icon: Cpu,
      title: "Modern Technologies",
      description: "Leveraging cutting-edge tools and frameworks for optimal results"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              From AI-powered solutions to cloud infrastructure, we provide end-to-end technology services that help businesses innovate, scale, and succeed in the digital age.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-large transition-smooth border-border overflow-hidden">
                  <CardHeader className="bg-gradient-subtle">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">{service.technologies}</p>
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

      {/* How We Work */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven approach ensures successful project delivery and long-term partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project requirements and how we can help bring your vision to life
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
