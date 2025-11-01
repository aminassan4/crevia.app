import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Rocket, 
  BarChart3,
  Link as LinkIcon,
  Settings as SettingsIcon,
  Users,
  Target,
  DollarSign,
  TrendingUp,
  Store,
  Plus,
  Copy,
  Share2,
  Eye,
  Check,
  ShoppingBag,
  Video,
  BookOpen,
  Edit,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CreatorMarketplace } from "@/components/brand/CreatorMarketplace";
import { CampaignManager } from "@/components/brand/CampaignManager";
import { BrandAnalytics } from "@/components/brand/BrandAnalytics";
import { BrandSettings } from "@/components/brand/BrandSettings";
import { BrandLinkBuilder } from "@/components/brand/BrandLinkBuilder";
import { useToast } from "@/hooks/use-toast";

const BrandDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "find-creators", label: "Find Creators" },
    { id: "campaigns", label: "Campaigns" },
    { id: "insights", label: "Insights & Analytics" },
    { id: "my-crevia-link", label: "My Crevia Link" },
    { id: "settings", label: "Settings" }
  ];

  const stats = [
    {
      label: "Active Campaigns",
      value: "2",
      icon: Target
    },
    {
      label: "Collaborations",
      value: "5",
      icon: Users
    },
    {
      label: "Total Spent",
      value: "$789",
      icon: DollarSign
    },
    {
      label: "Average Engagement Rate",
      value: "4.8%",
      icon: TrendingUp
    }
  ];

  const quickActions = [
    {
      icon: Search,
      title: "Find Creators",
      description: "Explore our creator marketplace",
      action: () => setActiveTab("find-creators")
    },
    {
      icon: Rocket,
      title: "Launch Campaign",
      description: "Create a new collaboration",
      action: () => setActiveTab("campaigns")
    },
    {
      icon: BarChart3,
      title: "View Insights",
      description: "See detailed analytics",
      action: () => setActiveTab("insights")
    }
  ];

  // Crevia Link items (same as My Store from creator dashboard)
  const creviaLinkItems = [
    {
      id: 1,
      type: "product",
      title: "Brand Collaboration Packages",
      description: "Exclusive partnership opportunities for creators",
      price: "$2,500",
      image: "gradient-hero",
      status: "active"
    },
    {
      id: 2,
      type: "event",
      title: "Brand Workshop Series",
      description: "Monthly workshops on brand partnerships",
      price: "$299",
      image: "gradient-accent",
      status: "upcoming"
    },
    {
      id: 3,
      type: "program",
      title: "Brand Ambassador Program",
      description: "Long-term partnership opportunities",
      price: "$5K/mo",
      image: "gradient-hero",
      status: "active"
    }
  ];

  const handleCopyLink = () => {
    const brandName = "yourbrand"; // This would come from user data
    const profileLink = `https://crevia.app/${brandName}`;
    navigator.clipboard.writeText(profileLink);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "Your Crevia Link has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const brandLink = "crevia.app/yourbrand"; // This would come from user data

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-4xl font-bold text-primary mb-2">
                Brand Dashboard
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Welcome back, [Brand Name]
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate("/crevia-connect")}
              >
                Crevia Connect
              </Button>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Building connections, one creator at a time.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  rounded-none border-b-2 px-6 py-6
                  ${activeTab === tab.id 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-transparent hover:bg-muted"
                  }
                `}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="text-3xl font-heading font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Quick Actions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card 
                      className="hover-lift cursor-pointer"
                      onClick={action.action}
                    >
                      <CardContent className="p-8">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                          <action.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">
                          {action.title}
                        </h3>
                        <p className="font-body text-muted-foreground">
                          {action.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "find-creators" && (
          <CreatorMarketplace />
        )}

        {activeTab === "campaigns" && (
          <CampaignManager />
        )}

        {activeTab === "insights" && (
          <BrandAnalytics />
        )}

        {activeTab === "my-crevia-link" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto max-w-6xl"
          >
            <BrandLinkBuilder />
          </motion.div>
        )}

        {activeTab === "settings" && (
          <BrandSettings />
        )}
      </div>
    </div>
  );
};

export default BrandDashboard;
