import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  DollarSign,
  Filter,
  Star,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in African Business Summit",
      description: "Explore how artificial intelligence is transforming businesses across Africa. Network with AI experts and learn implementation strategies.",
      date: "March 15, 2025",
      time: "09:00 - 17:00",
      location: "Virtual Event",
      price: "Free",
      attendees: 2500,
      maxAttendees: 3000,
      organizer: "TechAfrica Foundation",
      category: "Technology",
      type: "summit",
      image: "gradient-hero",
      tags: ["AI", "Business", "Innovation"]
    },
    {
      id: 2,
      title: "Content Creator Masterclass",
      description: "Learn advanced strategies for growing your audience, creating viral content, and monetizing your creative work.",
      date: "March 22, 2025",
      time: "14:00 - 18:00",
      location: "iHub Nairobi, Kenya",
      price: "$75",
      attendees: 150,
      maxAttendees: 200,
      organizer: "CreativeHub Africa",
      category: "Creators",
      type: "workshop",
      image: "gradient-accent",
      tags: ["Content", "Social Media", "Monetization"]
    },
    {
      id: 3,
      title: "Freelancers & Remote Work Expo",
      description: "Connect with top companies hiring freelancers, learn about remote work opportunities, and improve your skills.",
      date: "April 5, 2025",
      time: "10:00 - 16:00",
      location: "Lagos Convention Centre",
      price: "$50",
      attendees: 800,
      maxAttendees: 1000,
      organizer: "FreelanceAfrica",
      category: "Business",
      type: "expo",
      image: "gradient-hero",
      tags: ["Freelancing", "Remote Work", "Networking"]
    }
  ];

  const featuredEvents = [
    {
      id: 4,
      title: "Design Thinking Workshop",
      date: "March 28, 2025",
      location: "Cape Town, SA",
      price: "$120",
      attendees: 80,
      category: "Design"
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "April 12, 2025",
      location: "Virtual",
      price: "Free",
      attendees: 500,
      category: "Business"
    },
    {
      id: 6,
      title: "Photography Bootcamp",
      date: "April 18, 2025",
      location: "Accra, Ghana",
      price: "$95",
      attendees: 120,
      category: "Photography"
    }
  ];

  const eventTypes = [
    { name: "Workshops", count: 45, icon: Star },
    { name: "Conferences", count: 23, icon: Users },
    { name: "Webinars", count: 67, icon: Video },
    { name: "Networking", count: 34, icon: TrendingUp },
    { name: "Masterclasses", count: 29, icon: Calendar },
    { name: "Bootcamps", count: 18, icon: Clock }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Discover <span className="bg-gradient-hero bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Join thousands of creators, entrepreneurs, and innovators at events across Africa.
              Learn, network, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/create-event">
                  <Plus className="w-5 h-5 mr-2" />
                  Host an Event
                </Link>
              </Button>
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Don't miss these amazing learning and networking opportunities
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift overflow-hidden">
                  <div className="grid lg:grid-cols-4 gap-6 p-6">
                    {/* Event Image */}
                    <div className={`lg:col-span-1 h-48 lg:h-auto bg-${event.image} rounded-lg flex items-center justify-center`}>
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Event Details */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{event.category}</Badge>
                          <Badge variant="outline" className="capitalize">{event.type}</Badge>
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="font-body text-muted-foreground">{event.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-body">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-body">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-body">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-body">{event.attendees}/{event.maxAttendees} attending</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Registration */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className="text-center">
                        <div className="font-heading text-3xl font-bold text-primary mb-1">{event.price}</div>
                        <p className="font-body text-sm text-muted-foreground">by {event.organizer}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <Button 
                          variant="default" 
                          className="w-full"
                          onClick={() => {
                            // TODO: Implement event registration with Supabase
                            console.log("Register for event:", event.title);
                          }}
                        >
                          Register Now
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-full bg-muted rounded-full h-2 mb-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                          />
                        </div>
                        <p className="font-body text-xs text-muted-foreground">
                          {Math.round((event.attendees / event.maxAttendees) * 100)}% capacity
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events & Event Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Events */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl font-bold mb-8 flex items-center">
                <Star className="w-8 h-8 mr-3 text-primary" />
                Featured Events
              </h3>
              <div className="space-y-4">
                {featuredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold">{event.title}</h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-heading font-bold text-primary">{event.price}</div>
                          <div className="text-sm text-muted-foreground">{event.attendees} attending</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Event Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl font-bold mb-8 flex items-center">
                <Filter className="w-8 h-8 mr-3 text-primary" />
                Browse by Type
              </h3>
              <div className="grid gap-4">
                {eventTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift p-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <type.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-heading font-semibold">{type.name}</span>
                        </div>
                        <Badge variant="outline">{type.count} events</Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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