import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ShoppingBag, 
  Calendar, 
  Star, 
  ArrowRight,
  Quote,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Communities",
      description: "Connect with like-minded creators, share resources, and build meaningful relationships that drive success.",
      color: "text-primary"
    },
    {
      icon: ShoppingBag,
      title: "Digital Products",
      description: "Sell courses, templates, eBooks, and guides. Create your own link-in-bio store and monetize your expertise.",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Host IRL or virtual events, masterclasses, and mentorship programs. Build your audience and impact.",
      color: "text-primary"
    }
  ];

  const successStories = [
    {
      name: "Amara Okafor",
      role: "Digital Designer",
      story: "Increased my income by 300% through Kaizen's community and digital products platform.",
      avatar: "A.O"
    },
    {
      name: "Kwame Asante",
      role: "Tech Educator",
      story: "Built a thriving community of 10,000+ learners and launched 5 successful courses.",
      avatar: "K.A"
    },
    {
      name: "Zara Mohamed",
      role: "Content Creator",
      story: "From side hustle to full-time creator earning 6 figures annually.",
      avatar: "Z.M"
    }
  ];

  const testimonials = [
    {
      quote: "Kaizen Afrika changed my perspective on what's possible as an African creator. The community is incredible.",
      author: "Sarah Mwangi",
      role: "UX Designer"
    },
    {
      quote: "The platform made it so easy to launch my digital products and connect with my audience.",
      author: "James Ochieng",
      role: "Business Coach"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* How Kaizen Afrika Helps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              How does Kaizen Afrika help?
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Kaizen Afrika helps in three ways: with community, digital products, and events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift p-8 text-center h-full">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-subtle flex items-center justify-center ${feature.color}`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Real creators achieving real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-heading font-bold mr-4">
                        {story.avatar}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold">{story.name}</h4>
                        <p className="font-body text-sm text-muted-foreground">{story.role}</p>
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      "{story.story}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              All The Features You Need
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Everything to build, grow, and monetize your creative journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Communities", "Digital Products", "Events & Webinars", "1:1 Bookings",
              "Lead Magnets", "Course Creation", "Link-in-Bio", "Payment Processing"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-background rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift p-8">
                  <CardContent className="p-0">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-heading font-bold">{testimonial.author}</p>
                      <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Own Your Story?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of African creators building wealth and freedom through community and creativity.
            </p>
            <Button variant="glass" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">K</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                Kaizen Afrika
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="font-body text-muted-foreground">Support: +254-795-284-028</p>
              <p className="font-body text-muted-foreground">kaizenafrika@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;