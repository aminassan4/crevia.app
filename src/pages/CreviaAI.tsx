import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MessageSquare, 
  Lightbulb, 
  Users, 
  Mail,
  FileText,
  Calendar,
  ArrowRight,
  Wand2,
  ArrowUp,
  TrendingUp,
  Zap,
  Target,
  Megaphone,
  ShoppingBag,
  Video,
  BarChart,
  Globe,
  CheckCircle2,
  Brain,
  Rocket,
  LineChart,
  Star,
  Lock,
  Cpu,
  ImageIcon,
  Code,
  Languages,
  Search,
  Clock,
  Shield
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import QoraChatbot from "@/components/chat/QoraChatbot";

const CreviaAI = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleGetStarted = () => {
    const chatSection = document.getElementById("try-agent");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUpgrade = () => {
    navigate("/pricing");
  };

  const capabilities = [
    {
      category: "Content Creation",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Product Descriptions", icon: ShoppingBag },
        { name: "Marketing Copy", icon: Megaphone },
        { name: "Email Campaigns", icon: Mail },
        { name: "Social Media Posts", icon: MessageSquare },
        { name: "Video Scripts", icon: Video },
        { name: "Blog Articles", icon: FileText }
      ]
    },
    {
      category: "Business Strategy",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Market Analysis", icon: BarChart },
        { name: "Competitor Research", icon: Search },
        { name: "Pricing Strategy", icon: TrendingUp },
        { name: "Growth Planning", icon: Rocket },
        { name: "Campaign Strategy", icon: Target },
        { name: "Data Insights", icon: LineChart }
      ]
    },
    {
      category: "Community & Events",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Event Planning", icon: Calendar },
        { name: "Community Posts", icon: MessageSquare },
        { name: "Workshop Design", icon: Lightbulb },
        { name: "Engagement Ideas", icon: Users },
        { name: "Announcement Copy", icon: Megaphone },
        { name: "Q&A Responses", icon: Brain }
      ]
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art language models trained specifically for creator needs",
      badge: "GPT-5 & Gemini"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get answers and content in seconds, not hours. Real-time AI assistance whenever you need it",
      badge: "< 1s response"
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Create content in multiple languages to reach a global audience effortlessly",
      badge: "50+ Languages"
    },
    {
      icon: Code,
      title: "Template Library",
      description: "Pre-built prompts and templates for common creator tasks and workflows",
      badge: "100+ Templates"
    },
    {
      icon: LineChart,
      title: "Data-Driven Insights",
      description: "Get actionable recommendations based on your performance data and industry trends",
      badge: "Smart Analytics"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data and conversations are encrypted and never used to train public AI models",
      badge: "Enterprise Grade"
    }
  ];

  const useCases = [
    {
      icon: Lightbulb,
      title: "Smart Content Creation",
      description: "Generate compelling product descriptions, sales copy, and marketing materials that convert visitors into customers.",
      gradient: "from-primary/10 to-primary/5",
      examples: ["Product pages", "Landing pages", "Sales emails"]
    },
    {
      icon: Target,
      title: "Marketing Strategy",
      description: "Get AI-powered insights for campaigns, product launches, and promotional strategies tailored to your audience.",
      gradient: "from-blue-500/10 to-blue-500/5",
      examples: ["Campaign plans", "Launch strategies", "Ad copy"]
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Design compelling workshops, masterclasses, and community events with detailed agendas and promotional content.",
      gradient: "from-purple-500/10 to-purple-500/5",
      examples: ["Workshop outlines", "Event descriptions", "Schedules"]
    },
    {
      icon: Mail,
      title: "Email & Messaging",
      description: "Craft personalized, professional emails and messages that build stronger relationships with your audience.",
      gradient: "from-green-500/10 to-green-500/5",
      examples: ["Welcome sequences", "Newsletters", "Follow-ups"]
    },
    {
      icon: Video,
      title: "Content Ideas",
      description: "Never run out of ideas for videos, courses, podcasts, or social media with endless AI-generated suggestions.",
      gradient: "from-orange-500/10 to-orange-500/5",
      examples: ["Video topics", "Content calendars", "Post ideas"]
    },
    {
      icon: ShoppingBag,
      title: "Product Development",
      description: "Brainstorm digital products, pricing strategies, and market positioning for maximum impact and profitability.",
      gradient: "from-pink-500/10 to-pink-500/5",
      examples: ["Product ideas", "Pricing models", "Feature planning"]
    },
    {
      icon: BarChart,
      title: "Analytics Insights",
      description: "Interpret your data and get actionable recommendations to optimize performance and drive growth.",
      gradient: "from-cyan-500/10 to-cyan-500/5",
      examples: ["Performance reports", "Growth recommendations", "Trend analysis"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Create engaging posts, discussion starters, and announcements that foster active, thriving communities.",
      gradient: "from-indigo-500/10 to-indigo-500/5",
      examples: ["Discussion topics", "Welcome posts", "Announcements"]
    }
  ];

  const benefits = [
    { icon: Clock, text: "Save 10+ hours per week on content creation" },
    { icon: TrendingUp, text: "Increase conversion rates by up to 40%" },
    { icon: Rocket, text: "Launch products 3x faster" },
    { icon: Star, text: "Maintain consistent brand voice" },
    { icon: Globe, text: "Scale content to any language" },
    { icon: CheckCircle2, text: "Never face writer's block again" }
  ];

  const stats = [
    { value: "10M+", label: "Words Generated" },
    { value: "50K+", label: "Creators Helped" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Availability" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Revolutionary Design */}
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
              <Cpu className="w-5 h-5" />
              <span>Powered by Advanced AI • GPT-5 & Gemini 2.5</span>
              <Sparkles className="w-5 h-5" />
            </motion.div>

            {/* Main Heading with Gradient Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-7xl md:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Crevia AI
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
                Your AI-Powered Creator Companion
              </p>
              <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From ideation to execution, Crevia AI helps you create, market, and grow your creator business with cutting-edge AI assistance at every step.
              </p>
            </motion.div>

            {/* Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button 
                size="xl" 
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:shadow-2xl hover:shadow-primary/50 text-primary-foreground text-lg px-10 py-7 rounded-full transition-all duration-300"
              >
                Try Crevia AI Now
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-180 transition-transform duration-500" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                onClick={handleUpgrade}
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-lg px-10 py-7 rounded-full transition-all duration-300"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
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

      {/* AI Features Grid - Premium Showcase */}
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
              Enterprise-Grade AI Technology
            </Badge>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Powered by the Latest AI
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experience next-generation AI capabilities designed specifically for creators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="font-body text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AI Chatbot Section */}
      <section id="try-agent" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border-primary/30">
              Try It Now • No Sign-Up Required
            </Badge>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Experience Crevia AI Live
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Chat with our AI assistant and see how it can transform your creator workflow in seconds
            </p>
            
            {/* Quick Examples */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="text-sm text-muted-foreground font-medium">Try asking:</span>
              {["Write a product description", "Plan a workshop", "Create email copy"].map((prompt, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all px-4 py-2"
                >
                  "{prompt}"
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <QoraChatbot />
          </motion.div>
        </div>
      </section>

      {/* Capabilities Showcase - Tabbed Interface */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              What Crevia AI Can Do
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Your complete AI toolkit for every aspect of your creator journey
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {capabilities.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : "bg-card border-2 border-border hover:border-primary/30"
                }`}
              >
                <category.icon className="w-6 h-6" />
                <span>{category.category}</span>
              </motion.button>
            ))}
          </div>

          {/* Capability Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {capabilities[activeTab].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <Card className="h-full border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-xl cursor-pointer bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${capabilities[activeTab].color} opacity-10 group-hover:opacity-20 flex items-center justify-center mb-4 transition-all duration-300`}>
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-semibold text-lg">{item.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Use Cases - Detailed Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Real-World Applications
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See how creators are using Crevia AI to transform their businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group cursor-pointer">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl mb-3">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="font-body text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {useCase.examples.map((example, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-2 border-primary/30 overflow-hidden bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center py-16">
                <div className="flex items-center justify-center gap-6 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-2xl"
                  >
                    <Sparkles className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  <span className="text-5xl font-bold text-muted-foreground">×</span>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <CardTitle className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Seamlessly Integrated with Crevia
                </CardTitle>
                <CardDescription className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Crevia AI works natively with all your products, communities, events, and marketing tools. No setup, no complexity—just powerful AI assistance wherever you need it.
                </CardDescription>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
                  {["Products", "Communities", "Events", "Analytics"].map((feature, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2 bg-background/80 backdrop-blur-sm border border-primary/20 px-4 py-3 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.15),transparent_70%)]"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
              <CardHeader className="text-center relative z-10 py-20">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-purple-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-primary/50"
                >
                  <Rocket className="w-12 h-12 text-primary-foreground" />
                </motion.div>
                
                <CardTitle className="font-heading text-5xl md:text-7xl font-bold mb-8">
                  Ready to Supercharge Your Creator Business?
                </CardTitle>
                <CardDescription className="font-body text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                  Join thousands of creators using Crevia AI to build, market, and grow faster than ever before.
                </CardDescription>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button 
                    size="xl"
                    onClick={handleGetStarted}
                    className="group bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:shadow-2xl hover:shadow-primary/50 text-primary-foreground text-xl px-12 py-8 rounded-full transition-all duration-300"
                  >
                    Start Creating with AI
                    <Sparkles className="w-6 h-6 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                  </Button>
                  <Button 
                    size="xl"
                    variant="outline"
                    onClick={handleUpgrade}
                    className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-xl px-12 py-8 rounded-full transition-all duration-300"
                  >
                    View Pricing Plans
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-primary" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:shadow-2xl hover:shadow-primary/50 text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="w-7 h-7" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CreviaAI;
