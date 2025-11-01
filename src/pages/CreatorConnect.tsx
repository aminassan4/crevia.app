import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Building2, MessageCircle, Star, TrendingUp, DollarSign, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

interface Brand {
  id: number;
  name: string;
  category: string;
  budget: string;
  campaigns: number;
  rating: number;
  avatar: string;
  description: string;
  activeCampaigns: string[];
}

const CreatorConnect = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"overview" | "find-brands" | "campaigns" | "analytics" | "payments" | "settings">("overview");

  const brands: Brand[] = [
    {
      id: 1,
      name: "TechGear Pro",
      category: "Technology",
      budget: "$5K-10K",
      campaigns: 15,
      rating: 4.8,
      avatar: "",
      description: "Leading tech accessories brand looking for tech reviewers",
      activeCampaigns: ["Product Reviews", "Unboxing Videos"]
    },
    {
      id: 2,
      name: "BeautyBox Co",
      category: "Beauty & Wellness",
      budget: "$3K-7K",
      campaigns: 23,
      rating: 4.9,
      avatar: "",
      description: "Premium beauty subscription service seeking beauty influencers",
      activeCampaigns: ["Tutorial Videos", "Product Reviews"]
    },
    {
      id: 3,
      name: "FitLife Nutrition",
      category: "Health & Fitness",
      budget: "$4K-8K",
      campaigns: 18,
      rating: 4.7,
      avatar: "",
      description: "Health supplement brand partnering with fitness creators",
      activeCampaigns: ["Workout Videos", "Nutrition Tips"]
    },
    {
      id: 4,
      name: "Urban Fashion",
      category: "Fashion",
      budget: "$6K-12K",
      campaigns: 30,
      rating: 4.9,
      avatar: "",
      description: "Trendy streetwear brand looking for fashion influencers",
      activeCampaigns: ["Outfit Videos", "Fashion Hauls"]
    }
  ];

  const stats = [
    {
      icon: Building2,
      title: "Available Brands",
      value: "150+",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: MessageCircle,
      title: "Active Requests",
      value: "0",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: CheckCircle,
      title: "Completed",
      value: "0",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: DollarSign,
      title: "Total Earned",
      value: "$0",
      gradient: "from-secondary/10 to-secondary/5"
    },
  ];

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || brand.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const sidebarItems = [
    { id: "overview" as const, icon: TrendingUp, label: "Overview" },
    { id: "find-brands" as const, icon: Building2, label: "Find Brands" },
    { id: "campaigns" as const, icon: CheckCircle, label: "Campaigns" },
    { id: "analytics" as const, icon: TrendingUp, label: "Analytics" },
    { id: "payments" as const, icon: DollarSign, label: "Payments" },
    { id: "settings" as const, icon: Clock, label: "Settings" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/dashboard")}
                className="rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                  Crevia Connect
                </h1>
                <p className="font-body text-sm text-muted-foreground">
                  Connect with brands and grow your creator business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
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

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <section className="py-8 px-4">
          <div className="container mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-body font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Quick Actions</CardTitle>
                <CardDescription>Start connecting with brands today</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => setActiveTab("find-brands")}
                  className="bg-primary hover:bg-primary-glow h-auto py-6 flex flex-col items-start"
                >
                  <Building2 className="w-6 h-6 mb-2" />
                  <span className="font-heading font-semibold">Find Brands</span>
                  <span className="text-xs opacity-90 mt-1">Browse available opportunities</span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setActiveTab("campaigns")}
                  className="h-auto py-6 flex flex-col items-start border-2"
                >
                  <CheckCircle className="w-6 h-6 mb-2" />
                  <span className="font-heading font-semibold">My Campaigns</span>
                  <span className="text-xs opacity-70 mt-1">View your collaborations</span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setActiveTab("payments")}
                  className="h-auto py-6 flex flex-col items-start border-2"
                >
                  <DollarSign className="w-6 h-6 mb-2" />
                  <span className="font-heading font-semibold">Payments</span>
                  <span className="text-xs opacity-70 mt-1">Track your earnings</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Find Brands Tab */}
      {activeTab === "find-brands" && (
        <section className="py-8 px-4">
          <div className="container mx-auto">
            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search brands..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Beauty & Wellness">Beauty & Wellness</SelectItem>
                      <SelectItem value="Health & Fitness">Health & Fitness</SelectItem>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Results Count */}
            <div className="mb-6">
              <p className="font-body text-sm text-muted-foreground">
                Showing {filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Brands Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBrands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={brand.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary font-heading text-lg">
                            {brand.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-lg font-bold truncate">{brand.name}</h3>
                          <p className="text-sm text-muted-foreground">{brand.category}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-semibold">{brand.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{brand.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Campaign Budget</p>
                          <p className="font-heading font-bold text-primary">{brand.budget}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Active Campaigns</p>
                          <p className="font-heading font-bold text-primary">{brand.campaigns}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Current Opportunities</p>
                        <div className="flex gap-2 flex-wrap">
                          {brand.activeCampaigns.map((campaign) => (
                            <Badge key={campaign} variant="secondary" className="text-xs">
                              {campaign}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t flex gap-2">
                        <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Connect
                        </Button>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Tabs - Placeholder Content */}
      {activeTab === "campaigns" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <CheckCircle className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">No active campaigns yet</h3>
                <p className="font-body text-muted-foreground text-center mb-6 max-w-md">
                  Start connecting with brands to see your campaigns here
                </p>
                <Button onClick={() => setActiveTab("find-brands")}>Find Brands</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "analytics" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Campaign Analytics</CardTitle>
                <CardDescription>Track your performance and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  Analytics data will appear here once you start collaborating with brands
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeTab === "payments" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <DollarSign className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">No payments yet</h3>
                <p className="font-body text-muted-foreground text-center mb-6 max-w-md">
                  Complete campaigns with brands to start earning
                </p>
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
                <CardTitle className="font-heading text-2xl">Connect Settings</CardTitle>
                <CardDescription>Manage your collaboration preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Notification Preferences</h4>
                    <p className="text-sm text-muted-foreground">
                      Configure how you want to be notified about new opportunities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Portfolio Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Customize what brands see when they view your profile
                    </p>
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

export default CreatorConnect;

