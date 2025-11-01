import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart,
  Calendar,
  DollarSign,
  Users,
  Target,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

// Auto-scroll component for event photos
const AutoScrollEventGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const eventPhotos = [
    { id: 1, title: "Freelancers Summit 2024", gradient: "from-blue-500 to-purple-600" },
    { id: 2, title: "Tech Innovation Workshop", gradient: "from-green-500 to-teal-600" },
    { id: 3, title: "Creative Economy Conference", gradient: "from-orange-500 to-red-600" },
    { id: 4, title: "Digital Skills Bootcamp", gradient: "from-pink-500 to-rose-600" },
    { id: 5, title: "Entrepreneur Meetup", gradient: "from-indigo-500 to-blue-600" },
    { id: 6, title: "Design Thinking Session", gradient: "from-yellow-500 to-orange-600" },
    { id: 7, title: "Community Builder Summit", gradient: "from-cyan-500 to-blue-600" }
  ];

  // Duplicate for seamless loop
  const allPhotos = [...eventPhotos, ...eventPhotos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollSpeed = 1;
    let animationId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset scroll when halfway through
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        
        animationId = requestAnimationFrame(scroll);
      }
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allPhotos.map((photo, index) => (
          <div 
            key={`${photo.id}-${index}`}
            className="flex-shrink-0 w-80 group"
          >
            <div className={`h-96 bg-gradient-to-br ${photo.gradient} rounded-2xl flex items-end p-6 hover-lift relative overflow-hidden`}>
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-heading text-white font-semibold text-lg">
                  {photo.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Manual navigation component for past events
const ManualNavigationPastEvents = ({ events }: { events: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, events.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="flex gap-8 mb-8">
        {visibleEvents.map((event, index) => (
          <div 
            key={`${event.title}-${index}`}
            className="flex-1"
          >
            <Card className="hover-lift h-full">
              <CardHeader>
                <Badge variant="outline" className="w-fit">{event.type}</Badge>
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
                    👥 {event.attendees} attendees
                  </p>
                </div>
                <Button variant="ghost" className="w-full">
                  View Highlights
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="rounded-full w-12 h-12"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
        </Button>
        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, events.length)} of {events.length}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="rounded-full w-12 h-12"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const Community = () => {
  const missions = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To help Africans work for themselves and build sustainable creative businesses that drive economic growth across the continent."
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "Empower Africa's next generation of creators, techies, and entrepreneurs through creative freedom and collaborative innovation."
    }
  ];


  const upcomingEvents = [
    {
      title: "AI for African Creators Summit",
      date: "January 2025",
      location: "Accra, Ghana",
      attendees: "500+ Expected",
      type: "Summit",
      status: "Early Bird"
    }
  ];

  const pastEvents = [
    {
      title: "Freelancers Summit 2024",
      date: "November 2024",
      location: "iHub Nairobi",
      attendees: 500,
      type: "Summit"
    },
    {
      title: "Creative Economy Workshop",
      date: "October 2024",
      location: "Lagos, Nigeria",
      attendees: 300,
      type: "Workshop"
    },
    {
      title: "Digital Innovation Conference",
      date: "September 2024",
      location: "Cape Town, SA",
      attendees: 800,
      type: "Conference"
    },
    {
      title: "Entrepreneur Bootcamp",
      date: "August 2024",
      location: "Kigali, Rwanda",
      attendees: 450,
      type: "Bootcamp"
    }
  ];

  const [eventView, setEventView] = useState<"upcoming" | "previous">("upcoming");


  return (
    <div className="min-h-screen pt-16">
      {/* Event Gallery - First Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">In Action</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Moments captured from our events across Africa
            </p>
          </motion.div>
          <AutoScrollEventGallery />
        </div>
      </section>

      {/* Header */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Building Africa's largest community of creators, entrepreneurs, and innovators. 
              Together, we're shaping the future of work on our continent.
            </p>
            <Button variant="hero" size="xl" onClick={() => {
              // TODO: Implement community joining with Supabase
              console.log("Join community movement");
            }}>
              <Users className="w-5 h-5 mr-2" />
              Join Our Movement
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              What We Stand For
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Our core beliefs and aspirations for Africa's creative economy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift p-8 text-center h-full">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center text-white">
                      <mission.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4">{mission.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {mission.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  {/* Yellow decorative blob */}
                  <div className="absolute -left-8 -top-8 w-64 h-64 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full opacity-20 blur-3xl"></div>
                  
                  {/* Main image container */}
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="relative rounded-full overflow-hidden border-8 border-background shadow-2xl aspect-square">
                      <img 
                        src={new URL("@/assets/founder.jpg", import.meta.url).href}
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative accent circles */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full opacity-30 blur-xl"></div>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Get to know our founder's vision 
                    <span className="inline-block ml-2 animate-wave">👋</span>
                  </h2>
                  
                  <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                    <p>
                      At Qlova, we believe in the power of African creativity and entrepreneurship. Our mission is to empower every creator on the continent with the tools and community they need to transform their passion into sustainable income.
                    </p>
                    <p>
                      We're not just building a platform—we're building a movement. A movement that celebrates African innovation, connects creators across borders, and proves that the future of work is creative, collaborative, and unmistakably African.
                    </p>
                    <p className="font-semibold text-primary">
                      Together, we're rewriting what's possible for African creators. Join us on this journey.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Target */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our 5-Year Goal
            </h2>
            <p className="font-body text-2xl text-muted-foreground mb-8">
              What does success mean to Qlova in the next 5 years?
            </p>
            <div className="bg-gradient-hero text-white rounded-2xl p-12 max-w-2xl mx-auto">
              <div className="font-heading text-6xl font-bold mb-4">1 Million</div>
              <p className="font-body text-xl">
                Creators and entrepreneurs in Africa helped to work for themselves
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Archive */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              <Calendar className="w-12 h-12 inline-block mr-4 text-primary" />
              Our Events
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Join us at upcoming events or see what we've accomplished
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Button
                variant={eventView === "upcoming" ? "default" : "outline"}
                onClick={() => setEventView("upcoming")}
                className="rounded-full px-8"
              >
                Upcoming Events
              </Button>
              <Button
                variant={eventView === "previous" ? "default" : "outline"}
                onClick={() => setEventView("previous")}
                className="rounded-full px-8"
              >
                Previous Events
              </Button>
            </div>
          </motion.div>

          {/* Upcoming Events - Single Column */}
          {eventView === "upcoming" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover-lift border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="default" className="bg-primary">{event.type}</Badge>
                      <Badge variant="secondary" className="bg-accent">{event.status}</Badge>
                    </div>
                    <CardTitle className="font-heading text-2xl md:text-3xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <p className="font-body text-base text-muted-foreground flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-primary" />
                        {event.date}
                      </p>
                      <p className="font-body text-base text-muted-foreground flex items-center">
                        <span className="mr-3 text-primary">📍</span>
                        {event.location}
                      </p>
                      <p className="font-body text-base text-muted-foreground flex items-center">
                        <Users className="w-5 h-5 mr-3 text-primary" />
                        {event.attendees}
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-hero">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {/* Previous Events - Two Column Grid */}
          {eventView === "previous" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pastEvents.map((event, index) => (
                <Card key={index} className="hover-lift h-full">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{event.type}</Badge>
                    <CardTitle className="font-heading text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="font-body text-sm text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </p>
                      <p className="font-body text-sm text-muted-foreground flex items-center">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </p>
                      <p className="font-body text-sm text-muted-foreground flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {event.attendees} attendees
                      </p>
                    </div>
                    <Button variant="ghost" className="w-full">
                      View Highlights
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </div>
      </section>


      {/* Qlova Academy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Coming Soon</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Qlova Academy
            </h2>
            
            <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive learning platform designed to help African creators and entrepreneurs master the skills they need to thrive. 
              From business fundamentals to advanced digital strategies, Qlova Academy will be your gateway to continuous growth and success.
            </p>
            
            <Button variant="hero" size="xl" onClick={() => {
              // TODO: Implement waitlist functionality with Supabase
              console.log("Join Qlova Academy waitlist");
            }}>
              Join the Waitlist
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Support Our Mission
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Help us reach our goal of empowering 1 million African creators. 
              Your donation directly supports community programs and free educational content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="glass" size="xl" onClick={() => {
                // TODO: Implement donation system with Supabase/Stripe
                console.log("Make donation");
              }}>
                <DollarSign className="w-5 h-5 mr-2" />
                Make a Donation
              </Button>
              <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90" onClick={() => {
                // TODO: Implement learn more functionality
                console.log("Learn more about donations");
              }}>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📞</span>
                </div>
                <div>
                  <p className="font-body font-semibold">Phone</p>
                  <p className="font-body text-muted-foreground">+254-795-284-028</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">✉️</span>
                </div>
                <div>
                  <p className="font-body font-semibold">Email</p>
                  <p className="font-body text-muted-foreground">contact@qlova.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;