import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users, Instagram, Youtube, MessageCircle, Star, Filter } from "lucide-react";
import { motion } from "framer-motion";

interface Creator {
  id: number;
  name: string;
  category: string;
  followers: string;
  engagement: string;
  platforms: string[];
  avatar: string;
  rating: number;
  price: string;
}

export const CreatorMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");

  const creators: Creator[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "Fashion & Lifestyle",
      followers: "125K",
      engagement: "5.8%",
      platforms: ["Instagram", "TikTok"],
      avatar: "",
      rating: 4.9,
      price: "$500-1K"
    },
    {
      id: 2,
      name: "Mike Chen",
      category: "Tech & Gaming",
      followers: "250K",
      engagement: "6.2%",
      platforms: ["YouTube", "Twitch"],
      avatar: "",
      rating: 4.8,
      price: "$1K-2K"
    },
    {
      id: 3,
      name: "Emma Davis",
      category: "Beauty & Wellness",
      followers: "180K",
      engagement: "7.1%",
      platforms: ["Instagram", "YouTube"],
      avatar: "",
      rating: 4.9,
      price: "$800-1.5K"
    },
    {
      id: 4,
      name: "Alex Martinez",
      category: "Fitness & Health",
      followers: "95K",
      engagement: "8.5%",
      platforms: ["Instagram", "TikTok"],
      avatar: "",
      rating: 4.7,
      price: "$400-800"
    },
    {
      id: 5,
      name: "Lily Thompson",
      category: "Food & Travel",
      followers: "210K",
      engagement: "6.8%",
      platforms: ["Instagram", "YouTube"],
      avatar: "",
      rating: 4.8,
      price: "$1K-2K"
    },
    {
      id: 6,
      name: "David Lee",
      category: "Business & Finance",
      followers: "150K",
      engagement: "5.5%",
      platforms: ["LinkedIn", "Twitter"],
      avatar: "",
      rating: 4.6,
      price: "$700-1.2K"
    }
  ];

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || creator.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchesPlatform = platformFilter === "all" || creator.platforms.some(p => p.toLowerCase() === platformFilter.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-heading text-3xl font-bold text-primary mb-2">
          Creator Marketplace
        </h2>
        <p className="font-body text-muted-foreground">
          Discover and connect with talented creators for your campaigns
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search creators..."
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
                <SelectItem value="fashion">Fashion & Lifestyle</SelectItem>
                <SelectItem value="tech">Tech & Gaming</SelectItem>
                <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                <SelectItem value="fitness">Fitness & Health</SelectItem>
                <SelectItem value="food">Food & Travel</SelectItem>
                <SelectItem value="business">Business & Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="font-body text-sm text-muted-foreground">
          Showing {filteredCreators.length} creator{filteredCreators.length !== 1 ? 's' : ''}
        </p>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Creator Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCreators.map((creator, index) => (
          <motion.div
            key={creator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={creator.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-heading text-lg">
                      {creator.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-bold truncate">{creator.name}</h3>
                    <p className="text-sm text-muted-foreground">{creator.category}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold">{creator.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Followers</p>
                    <p className="font-heading font-bold text-primary">{creator.followers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                    <p className="font-heading font-bold text-primary">{creator.engagement}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Platforms</p>
                  <div className="flex gap-2 flex-wrap">
                    {creator.platforms.map((platform) => (
                      <Badge key={platform} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground mb-1">Typical Rate</p>
                  <p className="font-heading font-bold text-lg text-primary mb-3">{creator.price}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
