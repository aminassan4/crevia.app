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
  MessageCircle,
  BarChart3,
  Video,
  BookOpen,
  Bot,
  Mail,
  CreditCard,
  Globe,
  X,
  DollarSign,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Auto-scroll testimonials component
const AutoScrollTestimonials = ({ successStories }: { successStories: typeof Home.prototype.successStories }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 1;
        if (scrollPosition >= scrollWidth / 2) {
          scrollPosition = 0;
        }
        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollPosition;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const duplicatedStories = [...successStories, ...successStories];

  return (
    <div 
      className="relative overflow-hidden mb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedStories.map((story, index) => (
          <motion.div
            key={`${story.name}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            viewport={{ once: true }}
            className="group flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)]"
          >
            <Card className="hover-lift p-8 bg-background/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl h-full">
              <CardContent className="p-0 text-center">
                {/* Large Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {story.avatar}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Creator Info */}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{story.name}</h3>
                  <p className="font-body text-primary font-medium mb-3">{story.role}</p>
                  
                  {/* Metrics Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Success Story</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
                  <blockquote className="font-body text-muted-foreground leading-relaxed italic text-lg relative z-10">
                    {story.story}
                  </blockquote>
                </div>

                {/* Achievement Highlight */}
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-green-600">
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-semibold">
                        {(index % 3) === 0 && "300% Income Boost"}
                        {(index % 3) === 1 && "10K+ Community"}  
                        {(index % 3) === 2 && "6-Figure Creator"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Clean auto-scroll testimonials component (inspired by reference design)
const CleanAutoScrollTestimonials = ({ testimonials }: { testimonials: { quote: string; author: string; role: string }[] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollWidth / 2) {
          scrollPosition = 0;
        }
        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollPosition;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`testimonial-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-[400px]"
          >
            <Card className="p-8 bg-background hover:shadow-xl transition-all duration-300 border border-border h-full group relative">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Arrow icon in top right */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted/50 group-hover:bg-primary/10 flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Avatar with initials */}
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-sm mb-6">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Testimonial text */}
                <p className="font-body text-base text-foreground leading-relaxed mb-6 flex-grow">
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-heading font-bold text-foreground text-sm">{testimonial.author}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [activeFeature, setActiveFeature] = useState("courses");
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
      quote: "Kaizen Afrika changed my perspective on what's possible as an African creator. The community is incredible and the platform makes it so easy to monetize my skills.",
      author: "Sarah Mwangi",
      role: "UX Designer"
    },
    {
      quote: "The platform made it so easy to launch my digital products and connect with my audience. I've never felt more empowered as a creator.",
      author: "James Ochieng",
      role: "Business Coach"
    },
    {
      quote: "I got early access to Kaizen Afrika and it's making history! Watch as I easily create content and build my community with this powerful platform.",
      author: "Aisha Kamara",
      role: "Content Creator"
    },
    {
      quote: "Amazing is an understatement for how Kaizen Afrika looks and interacts with users! The tricky thing about platforms is it's not always intuitive, but these folks nailed it! Can't wait to see what's next.",
      author: "David Mensah",
      role: "Digital Entrepreneur"
    },
    {
      quote: "Future of African creators under 4 mins similar tools will be the new platform for modern times? I mean, this is just revolutionary for our community.",
      author: "Fatima Hassan",
      role: "Creative Director"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Video Demonstration Section */}
      <section className="py-32 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              See Kaizen Afrika In Action
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our platform empowers African creators to build, sell, and grow their digital empire
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg"
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Overlay (optional - shows before video plays) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="w-10 h-10 text-primary ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-background/50 rounded-xl backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-hero flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
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
              { name: "Community", demo: "community" },
              { name: "Events", demo: "events" },
              { name: "Digital Products", demo: "products" },
              { name: "Courses", demo: "courses" }
            ].map((feature, index) => (
              <motion.button
                key={feature.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeature(feature.demo)}
                className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 hover:scale-105 ${
                  activeFeature === feature.demo
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
                    <span className={`font-semibold ${activeFeature === 'courses' ? 'text-primary' : 'text-slate-600'}`}>
                      {activeFeature === 'community' && 'Community'}
                      {activeFeature === 'events' && 'Events'}
                      {activeFeature === 'products' && 'Digital Products'}
                      {activeFeature === 'courses' && 'Courses'}
                    </span>
                    <span>Members</span>
                    <span>Leaderboard</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Feature Interface */}
              <div className="p-8">
                {activeFeature === 'courses' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Courses</h3>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 bg-slate-900 text-white rounded-full font-body text-sm font-medium">All</button>
                        <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">Fitness</button>
                        <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full font-body text-sm">Nutrition</button>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="h-40 bg-gradient-to-br from-orange-400 to-pink-400"></div>
                        <div className="p-4">
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">NEW</span>
                          <h4 className="font-body font-semibold text-slate-900 mt-2 mb-2">Morning Yoga Flow</h4>
                          <p className="font-body text-sm text-slate-600">Start your day with intention</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'community' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Community</h3>
                      <button className="px-4 py-2 bg-primary text-white rounded-lg font-body text-sm">+ Create Group</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Users className="w-8 h-8 text-primary" />
                          <div>
                            <h4 className="font-body font-semibold text-slate-900">Design Community</h4>
                            <p className="font-body text-sm text-slate-600">1,234 members</p>
                          </div>
                        </div>
                        <p className="font-body text-sm text-slate-700 mb-4">Latest: New portfolio review session tomorrow!</p>
                        <div className="flex space-x-2">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Active</span>
                          <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">Design</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'products' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Digital Products</h3>
                      <ShoppingBag className="w-6 h-6 text-primary" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <div className="h-32 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="font-body font-semibold text-slate-900 mb-2">Design Course Bundle</h4>
                        <p className="font-body text-sm text-slate-600 mb-3">Complete guide to UI/UX design</p>
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-xl font-bold text-primary">$199</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">Best Seller</Badge>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-6">
                        <div className="h-32 bg-gradient-to-br from-secondary to-primary rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">📄</span>
                        </div>
                        <h4 className="font-body font-semibold text-slate-900 mb-2">Business Templates</h4>
                        <p className="font-body text-sm text-slate-600 mb-3">25+ ready-to-use templates</p>
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-xl font-bold text-primary">$49</span>
                          <Badge variant="outline">New</Badge>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'chat' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Messages</h3>
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">A</div>
                          <div className="flex-1">
                            <div className="bg-white rounded-lg p-3">
                              <p className="font-body text-sm">Hey! How's the new course coming along?</p>
                            </div>
                            <p className="font-body text-xs text-slate-500 mt-1">2 min ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'crm' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Customer Management</h3>
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="font-heading text-2xl font-bold text-primary">1,234</div>
                          <p className="font-body text-sm text-slate-600">Total Customers</p>
                        </div>
                        <div className="text-center">
                          <div className="font-heading text-2xl font-bold text-green-600">89%</div>
                          <p className="font-body text-sm text-slate-600">Satisfaction</p>
                        </div>
                        <div className="text-center">
                          <div className="font-heading text-2xl font-bold text-blue-600">456</div>
                          <p className="font-body text-sm text-slate-600">Active This Month</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'events' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Events</h3>
                      <button className="px-4 py-2 bg-primary text-white rounded-lg font-body text-sm">+ Create Event</button>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="flex items-center space-x-4">
                        <Calendar className="w-12 h-12 text-primary" />
                        <div>
                          <h4 className="font-body font-semibold text-slate-900">Design Workshop</h4>
                          <p className="font-body text-sm text-slate-600">March 15, 2025 • 2:00 PM</p>
                          <p className="font-body text-sm text-primary">56 registered</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'live' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Live Streaming</h3>
                      <Video className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-body font-semibold text-slate-900 mb-2">Live Stream: Design Critique</h4>
                        <p className="font-body text-sm text-slate-600 mb-4">234 viewers • Started 15 min ago</p>
                        <button className="px-6 py-2 bg-red-500 text-white rounded-lg font-body text-sm">Join Stream</button>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'ai' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">AI Assistant</h3>
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Bot className="w-8 h-8 text-primary mt-1" />
                          <div className="bg-white rounded-lg p-3 flex-1">
                            <p className="font-body text-sm">I can help you optimize your course content, analyze student engagement, and suggest improvements. What would you like to work on?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'email' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Email Campaigns</h3>
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-body font-semibold text-slate-900 mb-2">Welcome Series</h4>
                          <p className="font-body text-sm text-slate-600 mb-2">Open rate: 68%</p>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div>
                          <h4 className="font-body font-semibold text-slate-900 mb-2">Course Launch</h4>
                          <p className="font-body text-sm text-slate-600 mb-2">Open rate: 72%</p>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Scheduled</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'payments' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Payment Dashboard</h3>
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="font-heading text-2xl font-bold text-green-600">$12,450</div>
                          <p className="font-body text-sm text-slate-600">This Month</p>
                        </div>
                        <div className="text-center">
                          <div className="font-heading text-2xl font-bold text-blue-600">89</div>
                          <p className="font-body text-sm text-slate-600">Transactions</p>
                        </div>
                        <div className="text-center">
                          <div className="font-heading text-2xl font-bold text-purple-600">$890</div>
                          <p className="font-body text-sm text-slate-600">Pending</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeFeature === 'website' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">Website Builder</h3>
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-slate-300">
                          <Globe className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                          <p className="font-body text-sm text-slate-600">Drag & drop to build your site</p>
                        </div>
                        <div className="flex justify-center space-x-2">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs">Header</span>
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded text-xs">Hero</span>
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded text-xs">Footer</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
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

      {/* Cost Savings Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Value Breakdown
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              One Platform, Unlimited Potential 💰
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop paying for multiple tools. Kaizen Afrika brings everything you need in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-subtle border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-0">
                {/* Individual Tools Breakdown */}
                <div className="space-y-4 mb-6">
                  {[
                    { icon: Globe, name: "Professional Website Builder", replacedTools: "Wix, Squarespace", cost: "$25" },
                    { icon: Users, name: "Community Platform", replacedTools: "Circle, Mighty Networks", cost: "$39" },
                    { icon: ShoppingBag, name: "Digital Product Store", replacedTools: "Gumroad, Sellfy", cost: "$15" },
                    { icon: Calendar, name: "Event Management", replacedTools: "Eventbrite, Zoom", cost: "$29" },
                    { icon: Mail, name: "Email Marketing", replacedTools: "Mailchimp, ConvertKit", cost: "$35" },
                    { icon: BarChart3, name: "Analytics Dashboard", replacedTools: "Google Analytics Pro", cost: "$12" },
                    { icon: BookOpen, name: "Course Hosting Platform", replacedTools: "Teachable, Kajabi", cost: "$99" },
                    { icon: CreditCard, name: "Payment Processing", replacedTools: "Stripe, PayPal fees", cost: "$18" },
                  ].map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <tool.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-body font-semibold text-foreground">{tool.name}</p>
                          <p className="font-body text-xs text-muted-foreground">Replaces: {tool.replacedTools}</p>
                        </div>
                      </div>
                      <span className="font-body font-semibold text-muted-foreground">{tool.cost}/mo</span>
                    </motion.div>
                  ))}
                </div>

                {/* Total Cost Comparison */}
                <div className="border-t-2 border-dashed border-muted pt-6">
                  <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg mb-4">
                    <div className="flex items-center space-x-3">
                      <X className="w-6 h-6 text-destructive" />
                      <span className="font-body text-muted-foreground">What You'd Spend Otherwise</span>
                    </div>
                    <span className="font-heading text-2xl font-bold text-destructive">$272/mo</span>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-hero rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-body text-white/90 block text-sm">Join Kaizen Afrika Pro ✨</span>
                        <span className="font-body text-white font-semibold">All features included</span>
                      </div>
                    </div>
                    <span className="font-heading text-4xl font-bold text-white">$20/mo</span>
                  </div>
                </div>

                {/* Savings Highlight */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-200 dark:border-green-800"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <span className="font-heading text-5xl font-bold text-green-600">Save $3,024</span>
                  </div>
                  <p className="font-body text-green-700 dark:text-green-400 font-medium">per year compared to using separate tools</p>
                </motion.div>
              </CardContent>
            </Card>
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
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Join Thousands of Creators
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Creative Journey?
            </h2>
            <p className="font-body text-xl text-white/90 mb-10 leading-relaxed">
              Stop juggling multiple tools. Start building your empire on one powerful platform designed for African creators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all group"
                asChild
              >
                <Link to="/pricing">
                  View Pricing Plans
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link to="/community">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            <p className="font-body text-sm text-white/70 mt-8">
              ✨ Start free • No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Choose Your Path</Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Start Free, Scale Fast
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of African creators. Start building your empire today, upgrade when you're ready to dominate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift p-8 h-full relative bg-background border-2">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">✨</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">Free Starter</h3>
                      <p className="font-body text-sm text-muted-foreground">Perfect to get started</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="font-heading text-5xl font-bold text-green-600">$0</span>
                      <span className="font-body text-muted-foreground">/forever</span>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="font-body text-sm text-amber-800">
                        <strong>5% transaction fee</strong> on each sale
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-body">Basic Digital Storefront</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-body">Sell Digital Products</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-body">Community Access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-body">Host Events</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-body">Basic Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-body">Email Support</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                    <Link to="#pricing">
                      Start Free Today
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
              <Card className="hover-lift p-8 h-full relative bg-gradient-subtle border-2 border-primary shadow-glow">
                <CardContent className="p-0">
                  <div className="absolute -top-3 right-6">
                    <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">Creator <span className="text-primary">Pro</span></h3>
                      <p className="font-body text-sm text-muted-foreground">For serious creators</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="font-heading text-5xl font-bold text-primary">$20</span>
                      <span className="font-body text-muted-foreground">/month</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <p className="font-body text-sm text-primary font-semibold">
                        ✅ <strong>0% transaction fees</strong> - Keep everything you earn!
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <p className="font-body font-medium text-center text-primary">
                      Everything in Free, plus:
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body"><strong>Profile Badges</strong> & Verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body">Advanced Analytics & Insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body">Custom Branding Options</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body">Priority Customer Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body">Advanced Marketing Tools</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body">Affiliate Program Access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-body">Early Access to New Features</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" asChild>
                    <Link to="#pricing">
                      Upgrade to Pro
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
            className="text-center mt-12"
          >
            <p className="font-body text-muted-foreground mb-4">
              ✨ Start free, upgrade anytime. No contracts, cancel whenever you want.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>✅ 7-day money-back guarantee</span>
              <span>✅ Instant account setup</span>
              <span>✅ Migration support included</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Clean Auto-Scroll Design */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-black text-foreground mb-4 uppercase tracking-tight">
              Love From The Community
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Love from the community
            </p>
          </motion.div>

          {/* Auto-scroll testimonials with clean design */}
          <CleanAutoScrollTestimonials testimonials={testimonials} />
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
            <Button variant="glass" size="xl" className="group" asChild>
              <Link to="/dashboard">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;