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
import Footer from "@/components/Footer";
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

      {/* Enhanced Interactive Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-primary/90 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Where all-in-one meets best-in-class
            </h2>
            <p className="font-body text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              You don't need another tool. You need a platform to power your vision.
            </p>
          </motion.div>

          {/* Interactive Feature Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { name: "Community", active: false },
              { name: "Chat", active: false },
              { name: "CRM", active: false },
              { name: "Events", active: false },
              { name: "Live", active: false },
              { name: "Courses", active: true },
              { name: "AI Agents", active: false },
              { name: "Email Marketing", active: false },
              { name: "Payments", active: false },
              { name: "Website Builder", active: false }
            ].map((feature, index) => (
              <motion.button
                key={feature.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 hover:scale-105 ${
                  feature.active 
                    ? 'bg-white text-primary shadow-lg' 
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {feature.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Feature Demonstration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Mock Interface Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-body font-semibold text-slate-700">KaizenWellness</span>
                  </div>
                  <div className="flex items-center space-x-4 font-body text-sm text-slate-600">
                    <span>Home</span>
                    <span className="font-semibold text-primary">Courses</span>
                    <span>Events</span>
                    <span>Members</span>
                    <span>Leaderboard</span>
                  </div>
                </div>
              </div>

              {/* Mock Course Interface */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Courses</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-full font-body text-sm font-medium">All</button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">Fitness</button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">Healing Circles</button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">Nutrition</button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">Guided Sessions</button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">More</button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Course Card 1 */}
                  <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-40 bg-gradient-to-br from-orange-400 to-pink-400"></div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">NEW</span>
                      </div>
                      <h4 className="font-body font-semibold text-slate-900 mb-2">Morning Yoga Flow</h4>
                      <p className="font-body text-sm text-slate-600">Start your day with intention</p>
                    </div>
                  </div>

                  {/* Course Card 2 */}
                  <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-40 bg-gradient-to-br from-green-400 to-blue-400"></div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">NEW</span>
                      </div>
                      <h4 className="font-body font-semibold text-slate-900 mb-2">Mindful Nutrition</h4>
                      <p className="font-body text-sm text-slate-600">Nourish your body and soul</p>
                    </div>
                  </div>

                  {/* Course Card 3 */}
                  <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-40 bg-gradient-to-br from-purple-400 to-indigo-400"></div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">NEW</span>
                      </div>
                      <h4 className="font-body font-semibold text-slate-900 mb-2">Deep Meditation</h4>
                      <p className="font-body text-sm text-slate-600">Find inner peace and clarity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              {
                icon: "🏪",
                title: "Digital Storefront",
                description: "Create your professional online presence"
              },
              {
                icon: "📚",
                title: "Digital Products",
                description: "Sell eBooks, courses, and digital resources"
              },
              {
                icon: "👥",
                title: "Community Building",
                description: "Foster meaningful connections and engagement"
              },
              {
                icon: "🎯",
                title: "Analytics & Insights",
                description: "Track performance and optimize growth"
              }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-heading font-bold text-white mb-2">{feature.title}</h4>
                <p className="font-body text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              What kind of Creator are you?
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Maximize your potential, minimize your cost—we provide everything you need to grow your business your way.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <Button variant="default" className="px-8 py-3">
                Monthly
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Annual <span className="text-primary ml-2">(save 20%)</span>
              </Button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Creator Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift p-8 h-full relative bg-background">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold">Creator</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-heading text-5xl font-bold">$29</span>
                      <span className="font-body text-muted-foreground">/mo</span>
                      <Badge variant="secondary">0% transaction fee</Badge>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      or ~$0.97/day
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-heading font-bold mb-3 text-primary">Build</h4>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">🏪</span>
                        <span className="font-body">Digital Storefront</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-bold mb-3 text-primary">Sell</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">📚</span>
                          <span className="font-body">Digital Downloads</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">🎥</span>
                          <span className="font-body">Video Courses</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">👨‍🏫</span>
                          <span className="font-body">Coaching Calls</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">🌐</span>
                          <span className="font-body">Webinars & Workshops</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold mb-3 text-primary">Grow</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">📧</span>
                          <span className="font-body">Email Marketing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">📊</span>
                          <span className="font-body">Analytics</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">💜</span>
                          <span className="font-body">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-8" size="lg">
                    Start Creating
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Creator Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift p-8 h-full relative bg-gradient-subtle border-primary/20 shadow-glow">
                <CardContent className="p-0">
                  <div className="absolute -top-3 right-6">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold">Creator <span className="text-primary">Pro</span></h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-heading text-5xl font-bold">$99</span>
                      <span className="font-body text-muted-foreground">/mo</span>
                      <Badge variant="secondary">0% transaction fee</Badge>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      or ~$3.30/day
                    </p>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 mb-6">
                    <p className="font-body font-medium text-center">
                      Everything in the Stan Creator Plan, plus:
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🤖</span>
                      <span className="font-body">AI Marketing Flows</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📈</span>
                      <span className="font-body">Order Bumps</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🔗</span>
                      <span className="font-body">Affiliate Links</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📊</span>
                      <span className="font-body">Pixel Tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">⚡</span>
                      <span className="font-body">Priority Support</span>
                    </div>
                  </div>

                  <Button className="w-full mt-8 bg-primary hover:bg-primary/90" size="lg">
                    Upgrade to Pro
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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

      <Footer />
    </div>
  );
};

export default Home;