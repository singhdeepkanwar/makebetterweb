import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore and implement cutting-edge technologies to deliver superior solutions.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of all our relationships.",
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Your success is our success. We prioritize understanding and exceeding client expectations.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that speaks for itself.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients and team members grow.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MakeBetter Technologies
            </h1>
            <p className="text-xl opacity-90">
              Bridging global innovation with local expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                MakeBetter Technologies is a forward-thinking software development and AI consulting firm committed to delivering world-class technological solutions that empower businesses to thrive in an increasingly digital world.
              </p>
              <p>
                Operating globally, we serve international clients—from ambitious startups to established enterprises—who seek expert AI/ML development teams and custom software solutions. Our team brings deep technical expertise across the full spectrum of modern technologies, including Python, Java, React, Node.js, cloud platforms (AWS, Azure, GCP), and cutting-edge AI frameworks like LangChain, OpenAI, and TensorFlow.
              </p>
              <p>
                Simultaneously, we're dedicated to empowering Indian MSMEs (Micro, Small, and Medium Enterprises) with affordable, intuitive SaaS products that streamline operations, enhance productivity, and drive digitization. We understand the unique challenges faced by local businesses and create solutions that are both powerful and accessible.
              </p>
              <p>
                Our vision is simple yet powerful: to enable businesses worldwide to focus on their growth and strategic goals, not operational complexity. We bridge the gap between cutting-edge AI innovation and practical business application, ensuring technology becomes an enabler, not a barrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be recognized globally as a trusted technology partner that empowers businesses with intelligent, scalable solutions, enabling them to work on their growth rather than in their operations, while driving digital transformation across industries.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver innovative AI and software solutions to global clients while making advanced technology accessible to Indian MSMEs through affordable SaaS products. We strive to bridge the gap between cutting-edge innovation and practical business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Legal Entity:</span> Shree Ananta Consultancy and Solutions LLP
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
