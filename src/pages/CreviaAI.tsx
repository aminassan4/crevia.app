import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import QoraChatbot from "@/components/chat/QoraChatbot";

const CreviaAI = () => {
  const [activePrompt, setActivePrompt] = useState(0);
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
  
  const examplePrompts = [
    "Write a product description for my eBook",
    "Plan my next workshop",
    "Create a welcome post for my community"
  ];

  const handleGetStarted = () => {
    toast({
      title: "Coming Soon! 🚀",
      description: "Crevia AI will be available soon. Join our waitlist to be notified when it launches!",
    });
  };

  const handleUpgrade = () => {
    navigate("/#pricing");
  };

  const handlePromptClick = (index: number) => {
    setActivePrompt(index);
    toast({
      title: "Try this prompt",
      description: `"${examplePrompts[index]}" - This is a preview of what Crevia AI can do!`,
    });
  };

  const useCases = [
    {
      icon: Lightbulb,
      title: "Smart Content Creation",
      description: "Generate compelling product descriptions, sales copy, and marketing materials that convert.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Target,
      title: "Community Engagement",
      description: "Create engaging posts, announcements, and conversation starters that build stronger connections.",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: Calendar,
      title: "Event Planning Assistant",
      description: "Design and structure compelling workshops, masterclasses, and community events effortlessly.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Mail,
      title: "Email & Messaging",
      description: "Craft professional, personalized emails and messages that resonate with your audience.",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description: "Get AI-powered insights for campaigns, launches, and promotional strategies tailored to your niche.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Video,
      title: "Content Ideas",
      description: "Never run out of ideas for videos, courses, podcasts, or social media content.",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: ShoppingBag,
      title: "Product Development",
      description: "Brainstorm new digital products, pricing strategies, and positioning for maximum impact.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: BarChart,
      title: "Analytics Insights",
      description: "Get help interpreting your data and making data-driven decisions to grow your creator business.",
      gradient: "from-accent/10 to-accent/5"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Assistance",
      description: "Get immediate help with any creator task, 24/7"
    },
    {
      icon: Globe,
      title: "Platform-Integrated",
      description: "Seamlessly works with all Crevia tools and features"
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Optimized to help you grow your audience and revenue"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border-2 border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Wand2 className="w-5 h-5" />
              <span>Powered by Advanced AI Technology</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Crevia AI
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-2xl md:text-4xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed"
            >
              Your AI-Powered Creator Companion
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto"
            >
              From ideation to execution, Crevia AI helps you create, market, and grow your creator business with AI-powered assistance at every step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button 
                size="xl" 
                onClick={handleGetStarted}
                className="group bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant text-lg px-8 py-6"
              >
                Start Creating with AI
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="border-2 border-primary/30 hover:bg-primary/5 text-lg px-8 py-6"
              >
                Go to Dashboard
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section id="try-agent" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Experience Crevia AI
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Try our AI assistant right now and see how it can transform your creator workflow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <QoraChatbot />
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              What Crevia AI Can Do For You
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Your all-in-one AI assistant for every aspect of your creator journey
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
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl mb-2">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="font-body text-sm leading-relaxed">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-2 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <CardHeader className="text-center relative z-10 py-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground">×</span>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                
                <CardTitle className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Seamlessly Integrated with Crevia
                </CardTitle>
                <CardDescription className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                  Crevia AI works natively with all your products, communities, events, and marketing tools—no setup required.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Upgrade */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <CardHeader className="text-center relative z-10 py-16">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                
                <CardTitle className="font-heading text-4xl md:text-6xl font-bold mb-6">
                  Ready to Supercharge Your Creator Business?
                </CardTitle>
                <CardDescription className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                  Join thousands of creators using Crevia AI to build, market, and grow faster than ever before.
                </CardDescription>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="xl"
                    onClick={handleUpgrade}
                    className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant group text-lg px-8 py-6"
                  >
                    Upgrade to Crevia Pro
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="xl"
                    variant="outline"
                    onClick={handleGetStarted}
                    className="border-2 border-primary/30 hover:bg-primary/5 text-lg px-8 py-6"
                  >
                    Learn More
                  </Button>
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
              className="w-14 h-14 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant"
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreviaAI;
