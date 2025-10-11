import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Plus,
  LogOut,
  Store,
  ExternalLink,
  Edit,
  Video,
  BookOpen,
  ShoppingBag,
  Link as LinkIcon,
  Share2,
  Eye,
  Copy,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "store">("overview");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/");
      return;
    }

    setUser(user);

    // Fetch profile
    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(profileData);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
    navigate("/");
  };

  const handleCopyLink = () => {
    const username = profile?.full_name?.toLowerCase().replace(/\s+/g, '') || user?.email?.split('@')[0];
    const profileLink = `https://kaizen.app/${username}`;
    navigator.clipboard.writeText(profileLink);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "Your profile link has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    {
      icon: DollarSign,
      title: "Total Earnings",
      value: "$0",
      change: "+0%",
      gradient: "from-[#3533cd]/10 to-[#3533cd]/5"
    },
    {
      icon: Package,
      title: "Products",
      value: "0",
      change: "0 active",
      gradient: "from-[#fdcb08]/10 to-[#fdcb08]/5"
    },
    {
      icon: Calendar,
      title: "Events",
      value: "0",
      change: "0 upcoming",
      gradient: "from-[#3533cd]/10 to-[#3533cd]/5"
    },
    {
      icon: Users,
      title: "Followers",
      value: "0",
      change: "+0 this month",
      gradient: "from-[#fdcb08]/10 to-[#fdcb08]/5"
    },
  ];

  // My Store - Link in Bio sections
  const storeItems = [
    {
      id: 1,
      type: "product",
      title: "Ultimate UI/UX Design Course",
      description: "Master design principles and create stunning interfaces",
      price: "$99",
      image: "gradient-hero",
      status: "active"
    },
    {
      id: 2,
      type: "event",
      title: "Figma Workshop 2025",
      description: "Live masterclass on advanced Figma techniques",
      price: "$49",
      image: "gradient-accent",
      status: "upcoming"
    },
    {
      id: 3,
      type: "program",
      title: "1-on-1 Mentorship",
      description: "Personalized guidance for your creative journey",
      price: "$199/mo",
      image: "gradient-hero",
      status: "active"
    }
  ];

  const quickActions = [
    {
      icon: Package,
      title: "Add Product",
      description: "Launch a new digital product",
      action: () => navigate("/create-product"),
      gradient: "from-[#3533cd] to-[#3533cd]/80"
    },
    {
      icon: Calendar,
      title: "Create Event",
      description: "Host a new event or masterclass",
      action: () => navigate("/create-event"),
      gradient: "from-[#fdcb08] to-[#fdcb08]/80"
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3533cd]"></div>
      </div>
    );
  }

  const username = profile?.full_name?.toLowerCase().replace(/\s+/g, '') || user?.email?.split('@')[0];
  const profileLink = `kaizen.app/${username}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                Creator Dashboard
              </h1>
              <p className="font-body text-sm text-muted-foreground">
                Welcome back, {profile?.full_name || user?.email}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/qora-agent")}
                className="border-[#3533cd]/30 hover:bg-[#3533cd]/5"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Qora Agent
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="border-border"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center space-x-2 mt-6">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              onClick={() => setActiveTab("overview")}
              className="rounded-full"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={activeTab === "store" ? "default" : "ghost"}
              onClick={() => setActiveTab("store")}
              className="rounded-full"
            >
              <Store className="w-4 h-4 mr-2" />
              My Store
            </Button>
          </div>
        </div>
      </section>

      {activeTab === "overview" && (
        <>
          {/* Stats Grid */}
          <section className="py-8 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:border-[#3533cd]/30 transition-all duration-300">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs md:text-sm font-body font-medium text-muted-foreground">
                          {stat.title}
                        </CardTitle>
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                          <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-[#3533cd]" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl md:text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {stat.change}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="py-8 px-4">
            <div className="container mx-auto">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:border-[#3533cd]/30 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                          onClick={action.action}>
                      <CardHeader className="p-4 md:p-6">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <CardTitle className="font-heading text-lg md:text-xl">
                          {action.title}
                        </CardTitle>
                        <CardDescription className="font-body text-sm">
                          {action.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="py-8 px-4 bg-muted/30">
            <div className="container mx-auto">
              <Card className="border-2 border-[#3533cd]/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#3533cd] to-[#fdcb08] flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg md:text-2xl">
                        Ready to Get Started?
                      </CardTitle>
                      <CardDescription className="font-body text-xs md:text-sm mt-1">
                        Launch your first product or event to start earning
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Button
                      onClick={() => navigate("/create-product")}
                      className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80 hover:shadow-[0_0_40px_rgba(53,51,205,0.4)] text-white"
                      size="sm"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create First Product
                    </Button>
                    <Button
                      onClick={() => navigate("/qora-agent")}
                      variant="outline"
                      className="border-[#3533cd]/30 hover:bg-[#3533cd]/5"
                      size="sm"
                    >
                      Try Qora Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
      )}

      {activeTab === "store" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Profile Link Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background mb-8">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-heading text-2xl mb-2 flex items-center">
                        <LinkIcon className="w-5 h-5 mr-2 text-primary" />
                        Your Link in Bio
                      </CardTitle>
                      <CardDescription className="text-base">
                        Share this link to showcase all your products, events, and programs in one place
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 bg-background rounded-lg border-2 border-dashed border-primary/30">
                    <LinkIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <code className="flex-1 font-mono text-sm md:text-base text-foreground">
                      {profileLink}
                    </code>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      onClick={handleCopyLink}
                      className="flex-1 bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Link
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Store Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  My Store
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Manage all your products, events, and programs
                </p>
              </div>
              <Button 
                onClick={() => navigate("/create-product")}
                className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New
              </Button>
            </div>

            {/* Store Items */}
            <div className="space-y-4">
              {storeItems.length === 0 ? (
                <Card className="border-2 border-dashed border-border">
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <Store className="w-16 h-16 text-muted-foreground mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Your store is empty</h3>
                    <p className="font-body text-muted-foreground text-center mb-6 max-w-md">
                      Start building your creator empire by adding products, events, or programs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={() => navigate("/create-product")}
                        className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80"
                      >
                        <Package className="w-4 h-4 mr-2" />
                        Add Product
                      </Button>
                      <Button 
                        onClick={() => navigate("/create-event")}
                        variant="outline"
                        className="border-[#3533cd]/30"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Create Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                storeItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:border-[#3533cd]/30 transition-all duration-300 group">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          {/* Item Image */}
                          <div className={`w-full md:w-32 h-32 rounded-lg bg-${item.image} flex items-center justify-center flex-shrink-0`}>
                            {item.type === "product" && <ShoppingBag className="w-12 h-12 text-white" />}
                            {item.type === "event" && <Video className="w-12 h-12 text-white" />}
                            {item.type === "program" && <BookOpen className="w-12 h-12 text-white" />}
                          </div>

                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1 min-w-0">
                                <h3 className="font-heading text-lg font-bold text-foreground mb-1 truncate">
                                  {item.title}
                                </h3>
                                <p className="font-body text-sm text-muted-foreground line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                              <Badge 
                                variant={item.status === "active" ? "default" : "secondary"}
                                className="ml-2 flex-shrink-0"
                              >
                                {item.status}
                              </Badge>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
                              <div className="font-heading text-2xl font-bold text-[#3533cd]">
                                {item.price}
                              </div>
                              <div className="flex gap-2 w-full sm:w-auto">
                                <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 sm:flex-initial">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>

            {/* Add More Section */}
            {storeItems.length > 0 && (
              <Card className="border-2 border-dashed border-primary/20 mt-6 hover:border-primary/40 transition-all cursor-pointer group"
                    onClick={() => navigate("/create-product")}>
                <CardContent className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Plus className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">Add More to Your Store</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Expand your offerings with more products and events
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Dashboard;
