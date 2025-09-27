import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart,
  BookOpen,
  Calendar,
  ShoppingBag,
  DollarSign,
  Users,
  Target,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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

  const academyPrograms = [
    {
      title: "Digital Marketing Fundamentals",
      duration: "6 weeks",
      level: "Beginner",
      students: 1200,
      price: "Free"
    },
    {
      title: "Advanced UI/UX Design",
      duration: "12 weeks",
      level: "Advanced",
      students: 650,
      price: "$199"
    },
    {
      title: "Business Development",
      duration: "8 weeks",
      level: "Intermediate",
      students: 890,
      price: "$149"
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

  const merchItems = [
    {
      title: "Kaizen Afrika Hoodie",
      price: "$45",
      colors: ["Black", "Blue", "Yellow"],
      image: "hoodie"
    },
    {
      title: "Own Your Story T-Shirt",
      price: "$25",
      colors: ["White", "Black", "Blue"],
      image: "tshirt"
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

      {/* Kaizen Academy */}
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
              <BookOpen className="w-12 h-12 inline-block mr-4 text-primary" />
              Kaizen Academy
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Our education arm providing world-class training for African creators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {academyPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{program.level}</Badge>
                      <span className="font-heading text-lg font-bold text-primary">{program.price}</span>
                    </div>
                    <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="font-body text-sm text-muted-foreground">
                        ⏱️ Duration: {program.duration}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        👥 {program.students} students enrolled
                      </p>
                    </div>
                    <Button variant="default" className="w-full" onClick={() => {
                      // TODO: Implement course enrollment with Supabase
                      console.log("Enroll in program:", program.title);
                    }}>
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
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
              </motion.div>
            ))}
          </div>
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