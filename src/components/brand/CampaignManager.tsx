import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rocket, Plus, Calendar, DollarSign, Users, Eye, Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Campaign {
  id: number;
  title: string;
  status: "draft" | "active" | "completed";
  budget: string;
  creators: number;
  startDate: string;
  endDate: string;
  engagement: string;
}

export const CampaignManager = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { toast } = useToast();

  const campaigns: Campaign[] = [
    {
      id: 1,
      title: "Summer Collection Launch",
      status: "active",
      budget: "$5,000",
      creators: 3,
      startDate: "2025-06-01",
      endDate: "2025-06-30",
      engagement: "4.2%"
    },
    {
      id: 2,
      title: "Holiday Special Campaign",
      status: "draft",
      budget: "$8,000",
      creators: 0,
      startDate: "2025-12-01",
      endDate: "2025-12-25",
      engagement: "N/A"
    }
  ];

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Campaign created!",
      description: "Your campaign has been successfully created.",
    });
    setShowCreateForm(false);
  };

  if (showCreateForm) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => setShowCreateForm(false)}
            className="mb-4"
          >
            ← Back to Campaigns
          </Button>
          <h2 className="font-heading text-3xl font-bold text-primary mb-2">
            Create New Campaign
          </h2>
          <p className="font-body text-muted-foreground">
            Set up your campaign details and objectives
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleCreateCampaign} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name *</Label>
                <Input
                  id="campaign-name"
                  placeholder="e.g., Summer Product Launch"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-description">Description</Label>
                <Textarea
                  id="campaign-description"
                  placeholder="Describe your campaign goals and key messages..."
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget *</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="5000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fashion">Fashion & Lifestyle</SelectItem>
                      <SelectItem value="tech">Tech & Gaming</SelectItem>
                      <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                      <SelectItem value="fitness">Fitness & Health</SelectItem>
                      <SelectItem value="food">Food & Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date *</Label>
                  <Input
                    id="start-date"
                    type="date"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date *</Label>
                  <Input
                    id="end-date"
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-creators">Target Number of Creators</Label>
                <Input
                  id="target-creators"
                  type="number"
                  placeholder="3"
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deliverables">Deliverables</Label>
                <Textarea
                  id="deliverables"
                  placeholder="e.g., 3 Instagram posts, 2 Stories, 1 Reel..."
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Rocket className="w-4 h-4 mr-2" />
                  Create Campaign
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-3xl font-bold text-primary mb-2">
            Campaign Management
          </h2>
          <p className="font-body text-muted-foreground">
            Create, manage, and track all your brand campaigns
          </p>
        </div>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      {campaigns.length === 0 ? (
        <Card className="border-2 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Rocket className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">No campaigns yet</h3>
            <p className="font-body text-muted-foreground text-center mb-6 max-w-md">
              Launch your first campaign to start collaborating with creators
            </p>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-primary hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create First Campaign
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-xl font-bold mb-2">
                            {campaign.title}
                          </h3>
                          <Badge
                            variant={
                              campaign.status === "active"
                                ? "default"
                                : campaign.status === "draft"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Budget</p>
                          <p className="font-heading font-bold text-primary flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {campaign.budget}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Creators</p>
                          <p className="font-heading font-bold text-primary flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {campaign.creators}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Duration</p>
                          <p className="font-body text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(campaign.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(campaign.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                          <p className="font-heading font-bold text-primary">
                            {campaign.engagement}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:flex-col gap-2 lg:w-32">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
