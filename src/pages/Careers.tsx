import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Target, 
  Mail,
  Heart,
  Rocket,
  Award
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Innovative Projects",
      description: "Work on cutting-edge AI and cloud technologies with global clients"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning, skill development, and career advancement"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a diverse, talented team that values collaboration and creativity"
    },
    {
      icon: Rocket,
      title: "Flexible Environment",
      description: "Remote work options and flexible schedules to maintain work-life balance"
    },
    {
      icon: Target,
      title: "Impactful Work",
      description: "Build solutions that make a real difference for businesses worldwide"
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Industry-standard salaries with performance-based incentives"
    }
  ];

  const openPositions = [
    {
      title: "AI/ML Engineer",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build and deploy machine learning models using Python, TensorFlow, and modern AI frameworks."
    },
    {
      title: "Full-Stack Developer",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Develop scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Cloud Architect",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Design and implement cloud infrastructure on AWS, Azure, or GCP using IaC tools."
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build CI/CD pipelines, manage Kubernetes clusters, and optimize infrastructure."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Build your career with passionate innovators creating technology that matters
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:careers@makebetter.tech">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building something special—a company where talented individuals can grow, innovate, and make a meaningful impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-smooth border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{position.title}</h3>
                      <p className="text-muted-foreground mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Button variant="accent" asChild>
                        <a href="mailto:careers@makebetter.tech">Apply</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-large border-border text-center">
            <CardHeader>
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <CardTitle className="text-2xl mb-2">Don't See Your Role?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate talent! If you think you'd be a great fit for our team, we'd love to hear from you. Send us your resume and tell us what makes you excited about MakeBetter Technologies.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:careers@makebetter.tech" className="inline-flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Your Resume
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Email: careers@makebetter.tech
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in building technology solutions that empower businesses worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:careers@makebetter.tech">Apply Now</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
