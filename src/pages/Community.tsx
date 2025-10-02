import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart,
  Calendar,
  DollarSign,
  Users,
  Target,
  Lightbulb
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
            className="flex-shrink-0 w-80"
          >
            <div className={`h-96 bg-gradient-to-br ${photo.gradient} rounded-2xl flex items-end p-6 hover-lift`}>
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 w-full">
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

// Auto-scroll component for past events
const AutoScrollPastEvents = ({ events }: { events: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless loop
  const allEvents = [...events, ...events];

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
        className="flex gap-8 overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allEvents.map((event, index) => (
          <div 
            key={`${event.title}-${index}`}
            className="flex-shrink-0 w-96"
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
    }
  ];


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
              Community <span className="bg-gradient-hero bg-clip-text text-transparent">In Action</span>
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
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Community</span>
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
              What does success mean to Kaizen Afrika in the next 5 years?
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              <Calendar className="w-12 h-12 inline-block mr-4 text-primary" />
              Past Events
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Highlights from our community gatherings across Africa
            </p>
          </motion.div>

          <AutoScrollPastEvents events={pastEvents} />
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
                  <p className="font-body text-muted-foreground">kaizenafrika@gmail.com</p>
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