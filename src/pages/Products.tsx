import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  CheckCircle,
  Sparkles,
  ArrowRight,
  Package,
  Target,
  Zap,
  Users,
  Rocket,
  Shield,
  Globe,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Products = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Launch your template pack in minutes with our intuitive builder"
    },
    {
      icon: Shield,
      title: "Secure Hosting",
      description: "Your templates are protected with enterprise-grade security"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Sell to customers worldwide with built-in payment processing"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Track sales and customer engagement with detailed insights"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "We handle customer inquiries and support for your products"
    },
    {
      icon: Rocket,
      title: "Grow Fast",
      description: "Scale your template business without technical headaches"
    }
  ];

  const benefits = [
    "No upfront costs - only pay when you sell",
    "Instant delivery to customers",
    "Automatic updates and versioning",
    "Built-in licensing and protection",
    "Marketing tools included",
    "Community of fellow creators"
  ];

  const stats = [
    { value: "10K+", label: "Templates Sold" },
    { value: "$2M+", label: "Creator Earnings" },
    { value: "5K+", label: "Active Sellers" },
    { value: "98%", label: "Satisfaction" }
  ];

  const howItWorks = [
    {
      icon: Package,
      title: "Create Your Pack",
      description: "Upload your templates and organize them into a professional pack"
    },
    {
      icon: DollarSign,
      title: "Set Your Price",
      description: "Choose your pricing strategy and we'll handle all the payments"
    },
    {
      icon: Rocket,
      title: "Launch & Earn",
      description: "Go live instantly and start earning from your creative work"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Animated Gradient Orbs - Same as Crevia AI */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 via-purple-500/30 to-pink-500/40 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-teal-500/40 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/30 via-rose-500/30 to-fuchsia-500/30 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 border-2 border-primary/30 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            >
              <Package className="w-5 h-5" />
              <span>Create & Sell Premium Templates</span>
              <Sparkles className="w-5 h-5" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-7xl md:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Crevia Digital Products
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="font-body text-3xl md:text-5xl text-foreground font-semibold mb-4">
                Create & Sell Template Packs
              </p>
              <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Turn your creative templates into income. Host, sell, and deliver premium template packs to customers worldwide - all in one platform.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button 
                size="xl" 
                onClick={() => navigate("/create-product")}
                className="group bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:shadow-2xl hover:shadow-primary/50 text-primary-foreground text-lg px-10 py-7 rounded-full transition-all duration-300"
              >
                Create Your Pack
                <Package className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-500" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                onClick={() => navigate("/pricing")}
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-lg px-10 py-7 rounded-full transition-all duration-300"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/30">
              Simple Process
            </Badge>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/30">
              Everything You Need
            </Badge>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Powerful Features for Sellers
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              All the tools you need to create, host, and sell successful template packs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
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

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/30">
              Why Choose Crevia
            </Badge>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Built for Creator Success
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-background hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="font-body text-lg text-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
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
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Target className="w-20 h-20 text-white mx-auto mb-8" />
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Start Earning From Your Templates Today
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join 5,000+ creators who are building passive income streams with their template packs on Crevia
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glass" size="xl" onClick={() => navigate("/create-product")} className="group">
                Create Your First Pack
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
            <p className="font-body text-sm text-white/70 mt-8">
              No upfront costs • Keep 90% of revenue • Get paid instantly
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;