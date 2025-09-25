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
  BarChart3,
  Eye,
  Download
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Earnings",
      value: "$2,456",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Products Sold",
      value: "124",
      change: "+8%",
      icon: ShoppingBag,
      color: "text-primary"
    },
    {
      title: "Community Members",
      value: "892",
      change: "+24%",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Event Attendees",
      value: "156",
      change: "+16%",
      icon: Calendar,
      color: "text-primary"
    }
  ];

  const recentProducts = [
    {
      title: "UI/UX Design Course",
      sales: 45,
      revenue: "$1,125",
      status: "Active"
    },
    {
      title: "Figma Templates Pack",
      sales: 23,
      revenue: "$460",
      status: "Active"
    },
    {
      title: "Brand Strategy Guide",
      sales: 12,
      revenue: "$240",
      status: "Draft"
    }
  ];

  const upcomingEvents = [
    {
      title: "Design Masterclass",
      date: "Jan 15, 2025",
      attendees: 45,
      status: "Confirmed"
    },
    {
      title: "Freelancer Workshop",
      date: "Jan 22, 2025",
      attendees: 23,
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Welcome back, <span className="bg-gradient-hero bg-clip-text text-transparent">Creator</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground">
                Here's what's happening with your business today.
              </p>
            </div>
            <Button variant="hero" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-green-600">
                        {stat.change}
                      </Badge>
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="font-body text-sm text-muted-foreground">{stat.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Products */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center justify-between">
                    Recent Products
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProducts.map((product) => (
                      <div key={product.title} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold mb-1">{product.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body">
                            <span>{product.sales} sales</span>
                            <span>{product.revenue}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={product.status === "Active" ? "default" : "secondary"}>
                            {product.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center justify-between">
                    Upcoming Events
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.title} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold mb-1">{event.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body">
                            <span>📅 {event.date}</span>
                            <span>👥 {event.attendees} registered</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={event.status === "Confirmed" ? "default" : "secondary"}>
                            {event.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              What would you like to do today?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Create Product</h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Launch a new course, template, or digital product
                  </p>
                  <Button variant="default" className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Host Event</h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Plan and host virtual or in-person events
                  </p>
                  <Button variant="default" className="w-full">
                    Plan Event
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Build Community</h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Create and grow your community of followers
                  </p>
                  <Button variant="default" className="w-full">
                    Start Building
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;