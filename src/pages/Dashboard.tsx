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
  Check,
  UserCircle,
  Settings,
  Award,
  ArrowLeft,
  Home,
  Mail,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "store" | "events" | "community" | "earnings" | "marketing" | "affiliate" | "integrations" | "settings" | "profile">("overview");
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
    const profileLink = `https://crevia.app/${username}`;
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
  const profileLink = `crevia.app/${username}`;

  const sidebarItems = [
    { id: "overview" as const, icon: LayoutDashboard, label: "Overview" },
    { id: "store" as const, icon: Store, label: "My Store" },
    { id: "events" as const, icon: Calendar, label: "Events" },
    { id: "community" as const, icon: Home, label: "Community" },
    { id: "earnings" as const, icon: DollarSign, label: "Earnings" },
    { id: "marketing" as const, icon: TrendingUp, label: "Marketing" },
    { id: "affiliate" as const, icon: Award, label: "Affiliate" },
    { id: "integrations" as const, icon: Zap, label: "Integrations" },
    { id: "settings" as const, icon: Settings, label: "Settings" },
    { id: "profile" as const, icon: UserCircle, label: "Profile" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                  Creator Dashboard
                </h1>
                <p className="font-body text-sm text-muted-foreground">
                  Welcome back, {profile?.full_name || user?.email}
                </p>
              </div>
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

        </div>
      </section>

      {/* Sidebar Navigation (Mobile Responsive) */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {sidebarItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className="flex-shrink-0 rounded-full"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
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

      {activeTab === "events" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Events Management</CardTitle>
                <CardDescription>Create and manage your events</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">No events yet</h3>
                <p className="text-muted-foreground mb-6">Create your first event to get started</p>
                <Button onClick={() => navigate("/create-event")} className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "community" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Community Management</CardTitle>
                <CardDescription>Build and engage with your community</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Build your community</h3>
                <p className="text-muted-foreground mb-6">Create a space for your audience to connect</p>
                <Button onClick={() => navigate("/create-community")} className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "earnings" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Earnings Overview</CardTitle>
                <CardDescription>Track your revenue and payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200">
                    <CardContent className="p-6 text-center">
                      <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-green-600">$0</div>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-1">Total Earnings</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-blue-600">$0</div>
                      <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">This Month</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200">
                    <CardContent className="p-6 text-center">
                      <Package className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-purple-600">0</div>
                      <p className="text-sm text-purple-700 dark:text-purple-400 mt-1">Total Sales</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-center text-muted-foreground">Start selling to track your earnings</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "marketing" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Marketing Tools</CardTitle>
                <CardDescription>Grow your audience and find customers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-2 hover:border-primary/30 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <Mail className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-heading font-bold mb-2">Email Campaigns</h3>
                      <p className="text-sm text-muted-foreground">Send newsletters and promotions to your audience</p>
                      <Badge className="mt-3 bg-amber-100 text-amber-700">Coming Soon</Badge>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary/30 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <Share2 className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-heading font-bold mb-2">Social Media</h3>
                      <p className="text-sm text-muted-foreground">Share your content across platforms</p>
                      <Badge className="mt-3 bg-amber-100 text-amber-700">Coming Soon</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "affiliate" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Affiliate Program</CardTitle>
                <CardDescription>Earn by referring other creators</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Join the Affiliate Program</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Earn commission by inviting other creators to join Crevia
                </p>
                <Badge className="bg-amber-100 text-amber-700 px-4 py-2">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "integrations" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-primary" />
                  Integrations
                </CardTitle>
                <CardDescription>Connect your favorite tools and services to Crevia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-500/5 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">Email Marketing</h3>
                        <p className="text-sm text-muted-foreground">Connect Mailchimp, ConvertKit, or Beehiiv</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">Payment Processors</h3>
                        <p className="text-sm text-muted-foreground">Stripe, PayPal, or Flutterwave</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 flex items-center justify-center">
                        <Video className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">Video Platforms</h3>
                        <p className="text-sm text-muted-foreground">YouTube, Vimeo, or Wistia</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">Calendar Services</h3>
                        <p className="text-sm text-muted-foreground">Google Calendar, Calendly, or Cal.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-center text-muted-foreground">
                    More integrations coming soon. Need something specific?{" "}
                    <a href="mailto:support@crevia.com" className="text-primary hover:underline">Let us know</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "settings" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-heading font-semibold">Account Information</h3>
                      <p className="text-sm text-muted-foreground">Update your email and password</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-heading font-semibold">Notifications</h3>
                      <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-heading font-semibold">Payment Methods</h3>
                      <p className="text-sm text-muted-foreground">Add or update payment information</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "profile" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Profile Settings</CardTitle>
                <CardDescription>Update your public profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-2xl">
                    {profile?.full_name?.charAt(0) || user?.email?.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold">{profile?.full_name || "Your Name"}</h3>
                    <p className="text-muted-foreground">{user?.email}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div>
                    <label className="font-body font-semibold text-sm">Bio</label>
                    <p className="text-muted-foreground text-sm mt-1">{profile?.bio || "Tell us about yourself"}</p>
                  </div>
                  <div>
                    <label className="font-body font-semibold text-sm">Profile URL</label>
                    <code className="block mt-1 p-2 bg-muted rounded text-sm">{profileLink}</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Dashboard;
