import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe, 
  Lock, 
  Crown,
  Plus,
  Upload,
  Settings,
  MessageCircle,
  Calendar,
  Star,
  Phone,
  Mail,
  Camera,
  Image,
  Link
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";

const CreateCommunity = () => {
  const [communityType, setCommunityType] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rules: "",
    phone: "",
    email: "",
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    tiktok: "",
    youtube: ""
  });

  const communityTypes = [
    { id: "creators", label: "Creators & Artists", icon: Star },
    { id: "tech", label: "Tech & Development", icon: Settings },
    { id: "business", label: "Business & Entrepreneurship", icon: Crown },
    { id: "learning", label: "Learning & Education", icon: MessageCircle },
    { id: "networking", label: "Networking & Events", icon: Calendar },
    { id: "other", label: "Other", icon: Users }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Create topic-based discussions for your community"
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Host virtual and in-person events for members"
    },
    {
      icon: Users,
      title: "Member Management",
      description: "Manage roles, permissions, and member interactions"
    },
    {
      icon: Lock,
      title: "Private Spaces",
      description: "Create exclusive areas for premium members"
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
              Create Your <span className="bg-gradient-hero bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Build a thriving community around your passion, expertise, or business.
              Connect with like-minded people and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Creation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-heading text-2xl">Community Details</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    {/* Essential Information */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                        <h3 className="font-heading text-xl font-semibold">Essential Information</h3>
                      </div>

                      <div>
                        <Label htmlFor="community-name">Community Name *</Label>
                        <p className="text-sm text-muted-foreground mb-2">Your brand identity across the platform</p>
                        <Input 
                          id="community-name" 
                          placeholder="Enter a unique name for your community"
                          className="mt-1"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <Label>Contact Information *</Label>
                        <p className="text-sm text-muted-foreground">How fans can reach you</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Your contact number"
                              className="pl-10"
                              value={formData.phone}
                              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Your email address"
                              type="email"
                              className="pl-10"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="community-description">Description *</Label>
                        <p className="text-sm text-muted-foreground mb-2">What makes your community unique</p>
                        <Textarea 
                          id="community-description" 
                          placeholder="Describe what your community is about..."
                          className="mt-1 min-h-[120px]"
                          value={formData.description}
                          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Community Type *</Label>
                          <Select value={communityType} onValueChange={setCommunityType}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {communityTypes.map((type) => (
                                <SelectItem key={type.id} value={type.id}>
                                  <div className="flex items-center">
                                    <type.icon className="w-4 h-4 mr-2" />
                                    {type.label}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Privacy Settings *</Label>
                          <Select value={privacy} onValueChange={setPrivacy}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select privacy" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">
                                <div className="flex items-center">
                                  <Globe className="w-4 h-4 mr-2" />
                                  Public
                                </div>
                              </SelectItem>
                              <SelectItem value="private">
                                <div className="flex items-center">
                                  <Lock className="w-4 h-4 mr-2" />
                                  Private
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="community-rules">Community Rules</Label>
                        <Textarea 
                          id="community-rules" 
                          placeholder="Set guidelines for your community members..."
                          className="mt-2"
                          value={formData.rules}
                          onChange={(e) => setFormData(prev => ({ ...prev, rules: e.target.value }))}
                        />
                      </div>

                      {/* Visual Identity */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                          <h3 className="font-heading text-xl font-semibold">Visual Identity</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Upload profile and cover images</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label>Profile Picture *</Label>
                            <p className="text-sm text-muted-foreground mb-2">400x400px recommended</p>
                            <div className="mt-2 border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                              <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="font-body text-sm text-muted-foreground">
                                Choose Profile Image
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <Label>Cover Image *</Label>
                            <p className="text-sm text-muted-foreground mb-2">1200x400px recommended</p>
                            <div className="mt-2 border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                              <Image className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="font-body text-sm text-muted-foreground">
                                Choose Cover Image
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Social Media */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                          <h3 className="font-heading text-xl font-semibold">Social Media</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Link your existing social profiles</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="relative">
                            <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Website URL"
                              className="pl-10"
                              value={formData.website}
                              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="LinkedIn URL"
                              className="pl-10"
                              value={formData.linkedin}
                              onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="TikTok URL"
                              className="pl-10"
                              value={formData.tiktok}
                              onChange={(e) => setFormData(prev => ({ ...prev, tiktok: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Instagram URL"
                              className="pl-10"
                              value={formData.instagram}
                              onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Twitter/X URL"
                              className="pl-10"
                              value={formData.twitter}
                              onChange={(e) => setFormData(prev => ({ ...prev, twitter: e.target.value }))}
                            />
                          </div>
                          <div className="relative">
                            <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="YouTube URL"
                              className="pl-10"
                              value={formData.youtube}
                              onChange={(e) => setFormData(prev => ({ ...prev, youtube: e.target.value }))}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        onClick={() => {
                          // TODO: Implement community creation with Supabase
                          console.log("Create community");
                        }}
                      >
                        <Plus className="w-5 h-5 mr-2" />
                        Create Community
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-heading text-xl flex items-center">
                      <Crown className="w-5 h-5 mr-2 text-primary" />
                      Community Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    {features.map((feature) => (
                      <div key={feature.title} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-body font-semibold text-sm">{feature.title}</h4>
                          <p className="font-body text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="p-6 bg-gradient-hero text-white">
                  <CardContent className="p-0">
                    <h3 className="font-heading text-lg font-bold mb-3">Growing Your Community</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Create engaging welcome posts
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Host regular events and discussions
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Encourage member-generated content
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Recognize active members
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreateCommunity;