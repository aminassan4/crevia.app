import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Users, 
  Shield, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  Rocket,
  Zap,
  DollarSign,
  BarChart,
  Star,
  Megaphone,
  Building2,
  Heart,
  Globe,
  Lock,
  Clock,
  Video,
  FileText,
  MessageSquare,
  TrendingDown,
  ArrowUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const CreviaConnect = () => {
  const [activeTab, setActiveTab] = useState<"creators" | "brands">("creators");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const creatorFeatures = [
    {
      icon: Megaphone,
      title: "Premium Brand Campaigns",
      description: "Access exclusive collaborations with top brands looking for authentic creator partnerships.",
      gradient: "from-purple-500/10 to-pink-500/5"
    },
    {
      icon: DollarSign,
      title: "Secure & Fast Payments",
      description: "Get paid securely with escrow protection and automated payouts directly to your account.",
      gradient: "from-green-500/10 to-emerald-500/5"
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track your campaign performance, engagement metrics, and earnings in real-time.",
      gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Earn ratings and reviews that help you land better campaigns and grow your creator business.",
      gradient: "from-amber-500/10 to-yellow-500/5"
    }
  ];

  const brandFeatures = [
    {
      icon: Users,
      title: "Discover Top Creators",
      description: "Find and connect with verified creators who align with your brand values and target audience.",
      gradient: "from-blue-500/10 to-indigo-500/5"
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "Launch, manage, and track multiple campaigns from one powerful dashboard.",
      gradient: "from-orange-500/10 to-red-500/5"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Review deliverables before payment and ensure every campaign meets your standards.",
      gradient: "from-cyan-500/10 to-teal-500/5"
    },
    {
      icon: TrendingUp,
      title: "ROI Tracking",
      description: "Measure campaign performance, engagement rates, and return on investment with detailed analytics.",
      gradient: "from-purple-500/10 to-fuchsia-500/5"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Creators", icon: Users },
    { value: "500+", label: "Brand Partners", icon: Building2 },
    { value: "$3.5M+", label: "Total Payouts", icon: DollarSign },
    { value: "98%", label: "Satisfaction Rate", icon: Heart }
  ];

  const benefits = [
    { icon: Zap, text: "Instant matching with AI-powered recommendations" },
    { icon: Lock, text: "Secure escrow payments and contract protection" },
    { icon: Clock, text: "Automated workflows and milestone tracking" },
    { icon: Globe, text: "Global reach with local expertise" },
    { icon: Video, text: "Support for all content types and formats" },
    { icon: CheckCircle2, text: "Dedicated support and dispute resolution" }
  ];

  const howItWorksCreators = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "Sign up and showcase your portfolio, content style, and audience demographics.",
      icon: FileText
    },
    {
      step: "2",
      title: "Browse Campaigns",
      description: "Explore brand campaigns that match your niche and apply to collaborate.",
      icon: Target
    },
    {
      step: "3",
      title: "Create Content",
      description: "Deliver high-quality content according to campaign briefs and guidelines.",
      icon: Video
    },
    {
      step: "4",
      title: "Get Paid",
      description: "Receive secure payments once your work is approved by the brand.",
      icon: DollarSign
    }
  ];

  const howItWorksBrands = [
    {
      step: "1",
      title: "Post Your Campaign",
      description: "Create a campaign brief with your goals, budget, and deliverables.",
      icon: Megaphone
    },
    {
      step: "2",
      title: "Review Applications",
      description: "Browse creator profiles and select the best fit for your brand.",
      icon: Users
    },
    {
      step: "3",
      title: "Monitor Progress",
      description: "Track content creation, review drafts, and request revisions if needed.",
      icon: BarChart
    },
    {
      step: "4",
      title: "Launch & Measure",
      description: "Approve final content and track campaign performance and ROI.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Animated Gradient Orbs */}
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
              <Sparkles className="w-5 h-5" />
              <span>Flagship Feature • Connect Brands & Creators</span>
              <Building2 className="w-5 h-5" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-7xl md:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Crevia Connect
              </span>
            </motion.h1>

            {/* Dynamic Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="font-body text-3xl md:text-5xl text-foreground font-semibold mb-4">
                Where Brands Meet Creators
              </p>
              <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The ultimate marketplace connecting brands with authentic creators for UGC campaigns, 
                sponsored content, and meaningful collaborations that drive results.
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
                className="group bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:shadow-2xl hover:shadow-primary/50 text-primary-foreground text-lg px-10 py-7 rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/dashboard">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Join as Creator
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-lg px-10 py-7 rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/brand-dashboard">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Post Campaign
                </Link>
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowUp className="w-5 h-5 rotate-180" />
        </motion.div>
      </section>

      {/* Features Section with Tabs */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/30">
              Powerful Features for Everyone
            </Badge>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Built for Success
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, manage, and succeed in creator-brand collaborations
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "creators" | "brands")} className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
              <TabsTrigger value="creators" className="text-lg">
                <Users className="w-5 h-5 mr-2" />
                For Creators
              </TabsTrigger>
              <TabsTrigger value="brands" className="text-lg">
                <Building2 className="w-5 h-5 mr-2" />
                For Brands
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="creators" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {creatorFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-7 h-7 text-primary" />
                          </div>
                          <CardTitle className="font-heading text-2xl mb-2">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="brands" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {brandFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-7 h-7 text-primary" />
                          </div>
                          <CardTitle className="font-heading text-2xl mb-2">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Why Choose Crevia Connect?
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the most trusted platform for creator-brand collaborations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-base text-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              How It Works
            </h2>
          </motion.div>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "creators" | "brands")} className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
              <TabsTrigger value="creators" className="text-lg">For Creators</TabsTrigger>
              <TabsTrigger value="brands" className="text-lg">For Brands</TabsTrigger>
            </TabsList>

            <TabsContent value="creators">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorksCreators.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-2xl flex items-center justify-center text-3xl font-heading font-bold mx-auto shadow-xl">
                        {item.step}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="brands">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorksBrands.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-primary-foreground rounded-2xl flex items-center justify-center text-3xl font-heading font-bold mx-auto shadow-xl">
                        {item.step}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Start Connecting?
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-12">
              Join thousands of creators and brands building authentic partnerships that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:shadow-2xl hover:shadow-primary/50 text-primary-foreground text-lg px-12 py-7 rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/dashboard">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Join as Creator
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-lg px-12 py-7 rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/brand-dashboard">
                  <Building2 className="w-5 h-5 mr-2" />
                  Post Campaign
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CreviaConnect;
