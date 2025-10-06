import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  Search,
  Plus,
  MapPin,
  Users,
  Clock,
  Video,
  Globe,
  Palette,
  Brain,
  Code,
  Coffee,
  Dumbbell,
  Music,
  Briefcase,
  ChevronRight,
  Bell,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const popularEvents = [
    {
      id: 1,
      title: "Hedera Africa Hackathon Nairobi",
      organizer: "TechAfrica Foundation",
      date: "Tomorrow, 1:30 PM",
      location: "Nairobi Stock Exchange",
      image: "gradient-hero",
      attendees: 247
    },
    {
      id: 2,
      title: "GIKOMBA FASHION SHOW",
      organizer: "Fashion Africa",
      date: "Fri, Oct 10, 4:00 PM",
      location: "LUCARNDI STORE",
      image: "gradient-accent",
      attendees: 189
    },
    {
      id: 3,
      title: "Just Walk",
      organizer: "Community Wellness",
      date: "Sat, Oct 11, 9:00 AM",
      location: "Karura Forest Gate A",
      image: "gradient-hero",
      attendees: 312
    },
    {
      id: 4,
      title: "Datafest Africa 2025 - Nairobi",
      organizer: "Data Science Africa",
      date: "Wed, Oct 15, 9:00 AM",
      location: "Aga Khan University",
      image: "gradient-accent",
      attendees: 456
    },
    {
      id: 5,
      title: "Nairobi Startup Coworking Club",
      organizer: "Startup Hub Kenya",
      date: "Wed, Oct 15, 11:00 AM",
      location: "iHub Nairobi",
      image: "gradient-hero",
      attendees: 128
    },
    {
      id: 6,
      title: "Bridging the Gap: Chainlink-ing Smart Contracts",
      organizer: "Blockchain Centre NBO",
      date: "Thu, Oct 16, 6:30 PM",
      location: "Blockchain Centre NBO",
      image: "gradient-accent",
      attendees: 201
    }
  ];

  const categories = [
    { name: "Tech", count: "2K", icon: Code, color: "text-blue-500" },
    { name: "Food & Drink", count: "79", icon: Coffee, color: "text-orange-500" },
    { name: "AI", count: "2K", icon: Brain, color: "text-purple-500" },
    { name: "Arts & Culture", count: "965", icon: Palette, color: "text-pink-500" },
    { name: "Climate", count: "530", icon: Globe, color: "text-green-500" },
    { name: "Fitness", count: "768", icon: Dumbbell, color: "text-red-500" },
    { name: "Wellness", count: "1K", icon: Star, color: "text-indigo-500" },
    { name: "Crypto", count: "873", icon: Briefcase, color: "text-yellow-500" }
  ];

  const featuredCalendars = [
    {
      id: 1,
      name: "Reading Rhythms Global",
      description: "Not a book club. A reading party. Read with friends in live music...",
      avatar: "RR",
      location: "Sydney",
      events: 24,
      color: "bg-purple-500"
    },
    {
      id: 2,
      name: "Build Club",
      description: "The best place in the world to learn AI. Curated with ❤️ at the BAS! Our Etho",
      avatar: "BC",
      location: "Sydney · Online",
      events: 45,
      color: "bg-blue-500"
    },
    {
      id: 3,
      name: "Design Buddies",
      description: "Events for designers and all creatives across SF, online, and...",
      avatar: "DB",
      location: "San Francisco",
      events: 32,
      color: "bg-pink-500"
    },
    {
      id: 4,
      name: "ADPList",
      description: "Your favorite all-things happening at ADPList! We featu...",
      avatar: "AD",
      location: "Global",
      events: 67,
      color: "bg-orange-500"
    },
    {
      id: 5,
      name: "Cursor Community",
      description: "Cursor community hosted meetups, hackathons,...",
      avatar: "CC",
      location: "San Francisco",
      events: 18,
      color: "bg-green-500"
    },
    {
      id: 6,
      name: "The AI Collective",
      description: "The world's largest AI community: 100,000+ pioneers ...",
      avatar: "AI",
      location: "Global",
      events: 89,
      color: "bg-indigo-500"
    }
  ];

  const localRegions = [
    { name: "Africa", cities: ["Lagos", "Nairobi", "Cape Town", "Accra"] },
    { name: "Asia & Pacific", cities: ["Singapore", "Sydney", "Tokyo", "Mumbai"] },
    { name: "Europe", cities: ["London", "Berlin", "Paris", "Amsterdam"] },
    { name: "South America", cities: ["São Paulo", "Buenos Aires", "Bogotá"] },
    { name: "North America", cities: ["San Francisco", "New York", "Toronto", "Austin"] }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Discover Events
              </h1>
              <p className="font-body text-muted-foreground mt-2">
                Explore popular events near you, browse by category, or check out some of the great community calendars.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/create-event">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Event
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-2xl"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-muted/50"
            />
          </motion.div>
        </div>
      </section>

      {/* Popular Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Popular Events
            </h2>
            <Button variant="ghost" size="sm">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift overflow-hidden cursor-pointer group">
                  <div className={`h-40 bg-${event.image} relative flex items-center justify-center`}>
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift cursor-pointer p-6 text-center group">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} Events</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Calendars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Featured Calendars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCalendars.map((calendar, index) => (
              <motion.div
                key={calendar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 ${calendar.color} rounded-2xl flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg`}>
                        {calendar.avatar}
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-1" />
                        Subscribe
                      </Button>
                    </div>
                    
                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {calendar.name}
                    </h3>
                    
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {calendar.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{calendar.location}</span>
                      </div>
                      <span className="text-muted-foreground">{calendar.events} events</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Local Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Explore Local Events
          </h2>

          <div className="space-y-8">
            {localRegions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {region.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {region.cities.map((city) => (
                    <Card key={city} className="hover-lift cursor-pointer p-4 group">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold group-hover:text-primary transition-colors">
                            {city}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 50) + 10} Events
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
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
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Host Your Event?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Create memorable experiences that inspire, educate, and connect your audience.
              Everything you need to plan and host successful events.
            </p>
            <Button variant="glass" size="xl" asChild>
              <Link to="/create-event">
                <Plus className="w-5 h-5 mr-2" />
                Create Your Event
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
