import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  MessageSquare, 
  Lightbulb, 
  Users, 
  Mail,
  FileText,
  Calendar,
  ArrowRight,
  Wand2
} from "lucide-react";
import { useState } from "react";

const QoraAgent = () => {
  const [activePrompt, setActivePrompt] = useState(0);
  
  const examplePrompts = [
    "Write a product description for my eBook",
    "Plan my next workshop",
    "Create a welcome post for my community"
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Copy & Content Assistant",
      description: "Generate compelling product descriptions, social posts, and marketing copy in seconds.",
      gradient: "from-[#3533cd]/10 to-[#3533cd]/5"
    },
    {
      icon: Lightbulb,
      title: "Idea Generator",
      description: "Brainstorm fresh content ideas, course topics, and community engagement strategies.",
      gradient: "from-[#fdcb08]/10 to-[#fdcb08]/5"
    },
    {
      icon: Users,
      title: "Community & Event Planner",
      description: "Design engaging events, workshops, and community activities that bring people together.",
      gradient: "from-[#3533cd]/10 to-[#3533cd]/5"
    },
    {
      icon: Mail,
      title: "Messaging Helper",
      description: "Craft professional emails, announcements, and personalized messages for your audience.",
      gradient: "from-[#fdcb08]/10 to-[#fdcb08]/5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3533cd]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#fdcb08]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#3533cd]/10 border border-[#3533cd]/20 text-[#3533cd] px-4 py-2 rounded-full text-sm font-body mb-8"
            >
              <Wand2 className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Qora Agent
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Your AI Partner for Creation, Community, and Growth.
            </motion.p>

            {/* Interactive Demo Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <Card className="border-2 border-[#3533cd]/20 shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3533cd] to-[#fdcb08] flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Try asking me:</p>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-[#fdcb08]" />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    {examplePrompts.map((prompt, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActivePrompt(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          activePrompt === index
                            ? "bg-[#3533cd]/10 border-2 border-[#3533cd]/30"
                            : "bg-muted/50 border-2 border-transparent hover:border-[#3533cd]/20"
                        }`}
                      >
                        <p className="font-body text-sm md:text-base">{prompt}</p>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80 hover:shadow-[0_0_40px_rgba(53,51,205,0.4)] text-white"
              >
                Start Creating with AI
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Qora Agent Can Do
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              From ideation to execution, your AI copilot handles it all
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-[#3533cd]/30 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <useCase.icon className="w-7 h-7 text-[#3533cd]" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-2">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="font-body text-base leading-relaxed">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Qora Pro */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3533cd]/5 via-background to-[#fdcb08]/5" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-[#3533cd]/20 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3533cd]/10 to-[#fdcb08]/10" />
              <CardHeader className="text-center relative z-10 py-12">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#3533cd] to-[#fdcb08] flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
                <CardTitle className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Unlock Unlimited Creativity
                </CardTitle>
                <CardDescription className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Upgrade to Qora Pro and get unlimited AI assistance, priority support, and exclusive features
                </CardDescription>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="xl"
                    className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80 hover:shadow-[0_0_40px_rgba(53,51,205,0.4)] text-white group"
                  >
                    Upgrade to Qora Pro
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="xl"
                    variant="outline"
                    className="border-2 border-[#3533cd]/30 hover:bg-[#3533cd]/5"
                  >
                    Learn More
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QoraAgent;