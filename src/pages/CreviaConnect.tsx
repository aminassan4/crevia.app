import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const CreviaConnect = () => {
  const features = [
    {
      icon: Users,
      title: "Instant Discovery",
      description: "Find the perfect creators for your brand with AI-powered matching and real-time filters."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Escrow protection, automated payouts, and transparent fee structure for peace of mind."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Real-time analytics, ROI measurement, and quality assurance for every campaign."
    }
  ];

  const benefits = [
    "Your Personal Link-in-Bio",
    "Access Premium Campaigns",
    "Get Paid Securely",
    "Grow Your Brand"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Flagship Feature
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary mb-6">
              Crevia Link
            </h1>
            <p className="font-body text-xl md:text-2xl text-foreground/80 mb-8">
              The marketplace that connects brands and creators for UGC, 
              digital products, events, and authentic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant"
                asChild
              >
                <Link to="/dashboard">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join as Creator
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <Link to="/brand-dashboard">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Post Campaign
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 text-primary">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Creators / For Brands Toggle Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Build Your Creator Empire
            </h2>
            <p className="font-body text-xl text-foreground/70">
              One platform to showcase your work, connect with brands, and get paid for your creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-body text-lg text-foreground/80">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20 shadow-elegant">
              <div className="text-center mb-6">
                <div className="text-5xl font-heading font-bold text-primary mb-2">$2.5M+</div>
                <p className="font-body text-muted-foreground">Total Earned by Creators</p>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                asChild
              >
                <Link to="/dashboard">
                  Start Creating →
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              How It Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Create Profile",
                description: "Sign up as a creator or brand and build your profile in minutes."
              },
              {
                step: "2",
                title: "Connect & Collaborate",
                description: "Match with the right partners and start working on campaigns."
              },
              {
                step: "3",
                title: "Deliver & Get Paid",
                description: "Submit work, track performance, and receive secure payments."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Creator Journey?
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8">
              Join thousands of African creators and brands building authentic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="secondary" 
                size="xl"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-glow shadow-accent"
                asChild
              >
                <Link to="/dashboard">
                  I'm a Creator
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/brand-dashboard">
                  I'm a Brand
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreviaConnect;
