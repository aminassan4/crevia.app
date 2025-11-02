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
  CheckCircle,
  BarChart3,
  Video,
  BookOpen,
  Bot,
  DollarSign,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Globe,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Clean manual navigation testimonials component
const CleanManualNavigationTestimonials = ({ testimonials }: { testimonials: { quote: string; author: string; role: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4 mb-8">
        {visibleTestimonials.map((testimonial, index) => (
          <motion.div
            key={`testimonial-${currentIndex}-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8 bg-background hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 h-full group relative">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 h-8 rounded-full bg-muted/50 group-hover:bg-primary/10 flex items-center justify-center transition-all">
                  <Quote className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>

                <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-heading font-bold text-foreground">{testimonial.author}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="rounded-full w-10 h-10 md:w-12 md:h-12"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
        </Button>
        <div className="text-xs md:text-sm text-muted-foreground font-medium">
          {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, testimonials.length)} of {testimonials.length}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="rounded-full w-10 h-10 md:w-12 md:h-12"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Crevia Connect",
      description: "Connect creators with brands for authentic collaborations and partnerships.",
      link: "/crevia-connect"
    },
    {
      icon: ShoppingBag,
      title: "Crevia Digital Products",
      description: "Sell and host premium templates and digital products with ease.",
      link: "/products"
    },
    {
      icon: Bot,
      title: "Crevia AI",
      description: "Your AI-powered copilot for content creation, planning, and growth.",
      link: "/crevia-ai"
    }
  ];

  const testimonials = [
    {
      quote: "Crevia changed my perspective on what's possible as an African creator. The community is incredible and the platform makes it so easy to monetize my skills.",
      author: "Sarah Mwangi",
      role: "UX Designer"
    },
    {
      quote: "The platform made it so easy to launch my digital products and connect with my audience. I've never felt more empowered as a creator.",
      author: "James Ochieng",
      role: "Business Coach"
    },
    {
      quote: "I got early access to Crevia and it's making history! Watch as I easily create content and build my community with this powerful platform.",
      author: "Aisha Kamara",
      role: "Content Creator"
    },
    {
      quote: "Amazing is an understatement for how Crevia looks and interacts with users! The tricky thing about platforms is it's not always intuitive, but these folks nailed it!",
      author: "David Mensah",
      role: "Digital Entrepreneur"
    },
    {
      quote: "Future of African creators under 4 mins similar tools will be the new platform for modern times? I mean, this is just revolutionary for our community.",
      author: "Fatima Hassan",
      role: "Creative Director"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Creators" },
    { icon: DollarSign, value: "$5M+", label: "Creator Earnings" },
    { icon: Globe, value: "120+", label: "Countries" },
    { icon: Heart, value: "98%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Demo Video Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Video className="w-3 h-3 mr-1" />
              See It In Action
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Watch Crevia in Action
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Crevia empowers creators to build, sell, and grow their digital empire
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 bg-muted">
              <div className="relative aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg"
                >
                  <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all cursor-pointer pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                    <Video className="w-10 h-10 text-primary ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              Growing Fast
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by Creators Worldwide
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who are building their empire on Crevia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-background">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-hero flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-heading text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <p className="font-body text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - The 3 Crevia Products */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Our Products
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Three Powerful <span className="bg-gradient-hero bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to connect, create, and grow as a digital creator
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link}>
                  <Card className="group p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-background cursor-pointer">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed text-lg">
                        {feature.description}
                      </p>
                      <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              One Platform. Unlimited Potential.
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stop juggling multiple tools. Crevia brings everything together in one powerful platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-300" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">Other Platforms</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { tool: "Course Platform", price: "$99/mo" },
                      { tool: "Email Marketing", price: "$49/mo" },
                      { tool: "Community", price: "$79/mo" },
                      { tool: "Payment Processing", price: "$29/mo" },
                      { tool: "Website Builder", price: "$39/mo" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="font-body text-white/90">{item.tool}</span>
                        <span className="font-body font-semibold text-white">{item.price}</span>
                      </div>
                    ))}
                    <div className="pt-4 flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-white">Total</span>
                      <span className="font-heading text-3xl font-bold text-red-300">$295/mo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white border-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero rounded-full blur-2xl opacity-20" />
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Crevia</h3>
                    <Badge className="bg-green-500 text-white border-0 ml-auto">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    {[
                      "All Course Features",
                      "Email Marketing",
                      "Community Platform",
                      "Payment Processing",
                      "Website Builder",
                      "AI Assistant",
                      "Analytics Dashboard",
                      "Priority Support"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 py-3 border-b border-border">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-body text-foreground">{feature}</span>
                      </div>
                    ))}
                    <div className="pt-4 flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-foreground">Total</span>
                      <div className="text-right">
                        <div className="font-heading text-3xl font-bold text-primary">$49/mo</div>
                        <div className="text-sm text-green-600 font-semibold">Save $246/mo</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button variant="glass" size="xl" asChild className="group">
              <Link to="/pricing">
                View All Plans
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Star className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Loved by Creators
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our community has to say about their journey with Crevia
            </p>
          </motion.div>

          <CleanManualNavigationTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-hero/10"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Sparkles className="w-20 h-20 text-primary mx-auto mb-8" />
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Start Building Your Creator Empire Today
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Join 50,000+ creators who are turning their passion into profit with Crevia
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/dashboard">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-8">
              No credit card required • Free forever plan • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;