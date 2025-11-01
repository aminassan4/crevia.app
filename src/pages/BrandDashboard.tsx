import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Rocket, 
  BarChart3,
  Link as LinkIcon,
  Settings as SettingsIcon,
  Users,
  Target,
  DollarSign,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BrandDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

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
      action: () => alert("Campaign creation modal would open here")
    },
    {
      icon: BarChart3,
      title: "View Insights",
      description: "See detailed analytics",
      action: () => setActiveTab("insights")
    }
  ];

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
                className="bg-primary hover:bg-primary-glow text-primary-foreground"
                asChild
              >
                <Link to="/crevia-connect">
                  Crevia Connect
                </Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-12 text-center">
                <Search className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Creator Marketplace
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Browse and connect with talented creators for your campaigns
                </p>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Explore Creators
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "campaigns" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-12 text-center">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Campaign Management
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Create, manage, and track all your brand campaigns
                </p>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Create Campaign
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "insights" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-12 text-center">
                <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Analytics & Insights
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Track performance metrics and campaign ROI
                </p>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "my-crevia-link" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-12 text-center">
                <LinkIcon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  My Crevia Link
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Showcase your brand's digital assets, offers, and collaborations
                </p>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Manage Your Link
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-12 text-center">
                <SettingsIcon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Account Settings
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Manage your brand profile, billing, and preferences
                </p>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Edit Settings
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BrandDashboard;
