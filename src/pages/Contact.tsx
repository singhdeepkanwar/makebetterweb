import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    access_key: "83e553d4-6f36-4bf0-abb8-292749bccb0b"
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive"
    });
    return;
  }

  try {

    // In your React handleSubmit component
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({formData})
    });
    if (response.ok) {
      // Form submission was successful
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        access_key: "83e553d4-6f36-4bf0-abb8-292749bccb0b"
      });
    } else {
      // Handle server errors from your API
      const errorData = await response.json();
      toast({
        title: "Submission Failed",
        description: errorData.error || "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }
  } catch (error) {
    // Handle network errors (e.g., API server is down)
    console.error("Error submitting form:", error);
    toast({
      title: "Submission Error",
      description: "Could not connect to the server. Please try again later.",
      variant: "destructive"
    });
  }
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@makebetter.tech",
      link: "mailto:contact@makebetter.tech"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 (XXX) XXX-XXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Shree Ananta Consultancy and Solutions LLP",
      link: null
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90">
              Let's discuss how we can help transform your business with technology
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-6">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="shadow-soft border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="shadow-medium border-border overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Map integration can be added here with registered office location
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div> 
  );
};

export default Contact;
