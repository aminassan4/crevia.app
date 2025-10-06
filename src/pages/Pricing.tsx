import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Sparkles, 
  Zap,
  Shield,
  Users,
  TrendingUp,
  Award,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const faqs = [
    {
      question: "What can I sell on Kaizen Afrika?",
      answer: "You can sell digital products like eBooks, templates, courses, workshops, event tickets, memberships, and any other digital content you create."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are processed securely through our payment partners. You'll receive your earnings directly to your bank account or mobile money, minus any applicable transaction fees."
    },
    {
      question: "What are the fees?",
      answer: "Free plan: 5% transaction fee on each sale. Pro plan ($20/mo): 0% transaction fees - keep everything you earn!"
    },
    {
      question: "Can I use Kaizen Afrika for memberships?",
      answer: "Yes! You can create and manage membership tiers and recurring subscriptions for your audience through events and digital products."
    },
    {
      question: "What happens to my content if I cancel?",
      answer: "Your content remains yours. You can export your data at any time. If you cancel Pro, you'll be moved to the Free plan and can continue using the platform."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 7-day money-back guarantee on Pro subscriptions. If you're not satisfied, we'll refund your payment, no questions asked."
    },
    {
      question: "Can I switch between plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges."
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Our Free plan lets you experience the platform risk-free. When you're ready to unlock Pro features, you can upgrade with our 7-day money-back guarantee."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              Build Your Empire,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Your Way
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We believe in transparent pricing that helps you grow. No hidden fees, no confusing tiers. Just powerful tools to build your wealth.
            </p>
          </motion.div>

          {/* Savings Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-2 border-green-200 dark:border-green-800">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-green-600 mr-3" />
                  <span className="font-heading text-5xl font-black text-green-600">
                    Save $3,024
                  </span>
                </div>
                <p className="font-body text-lg text-green-700 dark:text-green-400 font-medium">
                  per year compared to using separate tools
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you're ready to scale. No contracts, cancel anytime.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift p-10 h-full relative bg-background border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Rocket className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl font-bold">Free Starter</h3>
                        <p className="font-body text-sm text-muted-foreground">Perfect to get started</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-10">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="font-heading text-6xl font-black text-foreground">$0</span>
                      <span className="font-body text-lg text-muted-foreground">/forever</span>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-4">
                      <p className="font-body text-sm text-amber-800 dark:text-amber-300 font-medium">
                        <strong>5% transaction fee</strong> on each sale
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      "Professional Digital Storefront",
                      "Sell Digital Products & Services",
                      "Community Building Tools",
                      "Host Events & Workshops",
                      "Basic Analytics Dashboard",
                      "Email Support"
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all" size="lg" asChild>
                    <Link to="/">
                      Start Free Today
                      <Zap className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift p-10 h-full relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-primary shadow-[0_0_40px_rgba(53,51,205,0.15)] hover:shadow-[0_0_60px_rgba(53,51,205,0.25)] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="absolute -top-4 right-8">
                    <Badge className="bg-gradient-hero text-white px-6 py-2 shadow-lg text-sm font-bold">
                      <Award className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl font-bold">
                          Creator <span className="text-primary">Pro</span>
                        </h3>
                        <p className="font-body text-sm text-muted-foreground">For serious creators</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-10">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="font-heading text-6xl font-black text-primary">$20</span>
                      <span className="font-body text-lg text-muted-foreground">/month</span>
                    </div>
                    <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-4">
                      <p className="font-body text-sm text-primary font-bold">
                        <Shield className="w-4 h-4 inline mr-2" />
                        <strong>0% transaction fees</strong> - Keep 100% of your earnings!
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10">
                    <p className="font-body font-bold text-center text-primary">
                      Everything in Free, plus:
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      { text: "Profile Badges & Verification", icon: Award },
                      { text: "Advanced Analytics & Insights", icon: TrendingUp },
                      { text: "Custom Branding Options", icon: Sparkles },
                      { text: "Priority Customer Support", icon: Shield },
                      { text: "Advanced Marketing Tools", icon: Zap },
                      { text: "Affiliate Program Access", icon: Users },
                      { text: "Early Access to New Features", icon: Rocket }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-foreground font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-hero hover:shadow-[0_0_40px_rgba(53,51,205,0.4)] text-white shadow-lg hover:shadow-xl transition-all group" size="lg" asChild>
                    <Link to="/">
                      Upgrade to Pro
                      <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="font-body text-muted-foreground mb-6 text-lg">
              ✨ Start free, upgrade anytime. No contracts, cancel whenever you want.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                7-day money-back guarantee
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                Instant account setup
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                Migration support included
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Everything you need to know about Kaizen Afrika
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background border-2 border-border rounded-xl px-6 hover:border-primary/30 transition-all"
                >
                  <AccordionTrigger className="font-body font-semibold text-left hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Empire?
            </h2>
            <p className="font-body text-xl text-white/90 mb-10">
              Join thousands of African creators building wealth on their own terms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                <Link to="/">
                  Start Free Today
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white/10" asChild>
                <Link to="/community">
                  Learn More
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

export default Pricing;
