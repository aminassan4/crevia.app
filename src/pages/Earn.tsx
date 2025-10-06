import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ShoppingBag, 
  Calendar, 
  Plus,
  TrendingUp,
  DollarSign,
  Star,
  Play,
  Video
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Earn = () => {
  const earningSections = [
    {
      icon: ShoppingBag,
      title: "Digital Products",
      description: "Sell courses, templates, eBooks, guides, and create your link-in-bio store.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: ["Course Creation", "Template Store", "eBook Publishing", "Link-in-Bio"]
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Host IRL or virtual events, masterclasses, and mentorship programs.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: ["Event Hosting", "Ticket Sales", "Virtual Meetings", "Workshop Creation"]
    },
    {
      icon: Video,
      title: "Workshops & Masterclasses",
      description: "Share your expertise through live workshops, coaching sessions, and training programs.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: ["Live Sessions", "Recording Sales", "Group Coaching", "1-on-1 Mentorship"]
    }
  ];

  const featuredProducts = [
    {
      title: "UI/UX Design Masterclass",
      creator: "Amara Okafor",
      price: "$99",
      rating: 4.9,
      students: 1247,
      image: "gradient-hero",
      type: "Course"
    },
    {
      title: "Business Plan Template Pack",
      creator: "Kwame Asante",
      price: "$29",
      rating: 4.8,
      downloads: 890,
      image: "gradient-accent",
      type: "Template"
    },
    {
      title: "Content Creator's Guide",
      creator: "Zara Mohamed",
      price: "$19",
      rating: 4.7,
      downloads: 2341,
      image: "gradient-hero",
      type: "eBook"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Summit 2025",
      date: "March 15, 2025",
      location: "Strathmore University",
      price: "$50",
      attendees: 500,
      type: "IRL Event"
    },
    {
      title: "Freelancers Masterclass",
      date: "February 28, 2025",
      location: "Virtual",
      price: "Free",
      attendees: 1200,
      type: "Webinar"
    },
    {
      title: "Design Thinking Workshop",
      date: "March 8, 2025",
      location: "iHub Nairobi",
      price: "$75",
      attendees: 100,
      type: "Workshop"
    }
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
              Start <span className="bg-gradient-hero bg-clip-text text-transparent">Earning</span> Today
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Multiple ways to monetize your skills and knowledge. Sell digital products, host events, and share your expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/create-product">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Product
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/events">
                  Browse Events
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Earning Methods */}
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
              Choose Your Path
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Three powerful ways to build your creative business
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {earningSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full p-8">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${section.bgColor} flex items-center justify-center ${section.color}`}>
                      <section.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-center">{section.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6 text-center">
                      {section.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm font-body">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="default" className="w-full" asChild>
                      <Link to={section.title === "Events" ? "/events" : "/create-product"}>
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Digital Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Digital Products
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-6">
              Top-selling products from our creator community
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                See All Products
              </Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift overflow-hidden">
                  <div className={`h-48 bg-${product.image} flex items-center justify-center`}>
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{product.type}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-body text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{product.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">by {product.creator}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-bold text-primary">{product.price}</span>
                      <span className="font-body text-sm text-muted-foreground">
                        {product.students ? `${product.students} students` : `${product.downloads} downloads`}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-6">
              Don't miss these amazing learning opportunities
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/events">
                See All Events
              </Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <span className="font-heading text-lg font-bold text-primary">{event.price}</span>
                    </div>
                    <CardTitle className="font-heading text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="font-body text-sm text-muted-foreground">
                        📅 {event.date}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        📍 {event.location}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        👥 {event.attendees} expected attendees
                      </p>
                    </div>
                    <Button variant="default" className="w-full" onClick={() => {
                      // TODO: Implement event registration with Supabase
                      console.log("Register for event:", event.title);
                    }}>
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
              Creator Success Stats
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-2">$50K+</div>
                <div className="font-body text-white/90">Average Annual Earnings</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-2">10K+</div>
                <div className="font-body text-white/90">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-2">1M+</div>
                <div className="font-body text-white/90">Products Sold</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-2">500+</div>
                <div className="font-body text-white/90">Events Hosted</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Earn;