import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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

  const quickActions = [
    {
      icon: Package,
      title: "Create Product",
      description: "Launch a new digital product",
      action: () => navigate("/create-product"),
      gradient: "from-[#3533cd] to-[#3533cd]/80"
    },
    {
      icon: Calendar,
      title: "Host Event",
      description: "Create a new event",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Creator Dashboard
              </h1>
              <p className="font-body text-muted-foreground">
                Welcome back, {profile?.full_name || user?.email}
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => navigate("/qora-agent")}
                className="border-[#3533cd]/30 hover:bg-[#3533cd]/5"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Qora Agent
              </Button>
              <Button
                variant="outline"
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

      {/* Stats Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-[#3533cd]/30 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-body font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 text-[#3533cd]" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
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
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-[#3533cd]/30 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                      onClick={action.action}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-heading text-xl">
                      {action.title}
                    </CardTitle>
                    <CardDescription className="font-body">
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
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Card className="border-2 border-[#3533cd]/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3533cd] to-[#fdcb08] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="font-heading text-2xl">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="font-body mt-1">
                    Launch your first product or event to start earning
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/create-product")}
                  className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80 hover:shadow-[0_0_40px_rgba(53,51,205,0.4)] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Product
                </Button>
                <Button
                  onClick={() => navigate("/qora-agent")}
                  variant="outline"
                  className="border-[#3533cd]/30 hover:bg-[#3533cd]/5"
                >
                  Try Qora Agent
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;