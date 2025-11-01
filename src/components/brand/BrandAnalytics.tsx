import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Download,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";

export const BrandAnalytics = () => {
  const overallStats = [
    { label: "Total Reach", value: "2.4M", change: "+24.5%", icon: Eye, trend: "up" },
    { label: "Total Engagement", value: "145K", change: "+18.2%", icon: Heart, trend: "up" },
    { label: "Campaign ROI", value: "3.2x", change: "+12.8%", icon: TrendingUp, trend: "up" },
    { label: "Avg. Engagement Rate", value: "5.8%", change: "+2.1%", icon: MessageCircle, trend: "up" }
  ];

  const campaignPerformance = [
    {
      name: "Summer Collection Launch",
      reach: "1.2M",
      engagement: "72K",
      roi: "3.5x",
      status: "active"
    },
    {
      name: "Holiday Special Campaign",
      reach: "980K",
      engagement: "58K",
      roi: "2.8x",
      status: "completed"
    },
    {
      name: "Spring Fashion Week",
      reach: "850K",
      engagement: "45K",
      roi: "3.1x",
      status: "completed"
    }
  ];

  const topCreators = [
    { name: "Sarah Johnson", reach: "450K", engagement: "6.8%", collaborations: 3 },
    { name: "Mike Chen", reach: "380K", engagement: "7.2%", collaborations: 2 },
    { name: "Emma Davis", reach: "320K", engagement: "6.5%", collaborations: 4 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-3xl font-bold text-primary mb-2">
            Analytics & Insights
          </h2>
          <p className="font-body text-muted-foreground">
            Track performance metrics and campaign ROI
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Overall Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {overallStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  >
                    {stat.change}
                  </Badge>
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

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="creators">Top Creators</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">Campaign Performance</CardTitle>
              <CardDescription>Overview of your campaign results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <motion.div
                    key={campaign.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg hover:border-primary/30 transition-all"
                  >
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-heading font-semibold">{campaign.name}</h4>
                        <Badge
                          variant={campaign.status === "active" ? "default" : "secondary"}
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Reach:</span>{" "}
                          <span className="font-semibold text-primary">{campaign.reach}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Engagement:</span>{" "}
                          <span className="font-semibold text-primary">{campaign.engagement}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">ROI:</span>{" "}
                          <span className="font-semibold text-primary">{campaign.roi}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creators" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">Top Performing Creators</CardTitle>
              <CardDescription>Your most successful collaborations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCreators.map((creator, index) => (
                  <motion.div
                    key={creator.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold">{creator.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {creator.collaborations} collaborations
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-heading font-bold text-primary">{creator.reach}</div>
                      <div className="text-sm text-muted-foreground">{creator.engagement} engagement</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">Audience Demographics</CardTitle>
              <CardDescription>Insights about your campaign reach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold">Age Distribution</h4>
                  <div className="space-y-3">
                    {[
                      { range: "18-24", percentage: 35 },
                      { range: "25-34", percentage: 42 },
                      { range: "35-44", percentage: 18 },
                      { range: "45+", percentage: 5 }
                    ].map((age) => (
                      <div key={age.range}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{age.range}</span>
                          <span className="font-semibold">{age.percentage}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${age.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold">Gender Distribution</h4>
                  <div className="space-y-3">
                    {[
                      { gender: "Female", percentage: 58 },
                      { gender: "Male", percentage: 40 },
                      { gender: "Other", percentage: 2 }
                    ].map((gender) => (
                      <div key={gender.gender}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{gender.gender}</span>
                          <span className="font-semibold">{gender.percentage}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${gender.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-heading font-semibold mb-4">Top Locations</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["United States", "United Kingdom", "Canada", "Australia"].map((location) => (
                    <div key={location} className="text-center p-4 border rounded-lg">
                      <div className="font-heading font-bold text-primary text-2xl mb-1">
                        {Math.floor(Math.random() * 30 + 10)}%
                      </div>
                      <div className="text-sm text-muted-foreground">{location}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
