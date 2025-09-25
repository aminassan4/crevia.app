import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Plus,
  Crown,
  Globe,
  Lock,
  MessageCircle,
  TrendingUp,
  Filter,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredCommunities = [
    {
      id: 1,
      name: "African UI/UX Designers",
      description: "A vibrant community of designers from across Africa sharing resources, feedback, and opportunities.",
      members: 2847,
      category: "Design",
      privacy: "public",
      isVerified: true,
      image: "gradient-hero",
      tags: ["Design", "UI/UX", "Portfolio Reviews"]
    },
    {
      id: 2,
      name: "Tech Entrepreneurs Hub",
      description: "Connect with fellow entrepreneurs, share startup ideas, and get mentorship from successful founders.",
      members: 1923,
      category: "Business",
      privacy: "public",
      isVerified: true,
      image: "gradient-accent",
      tags: ["Startups", "Funding", "Mentorship"]
    },
    {
      id: 3,
      name: "Content Creators Africa",
      description: "For YouTubers, podcasters, writers and all content creators building audiences across Africa.",
      members: 3156,
      category: "Creators",
      privacy: "public",
      isVerified: false,
      image: "gradient-hero",
      tags: ["YouTube", "Podcasting", "Writing"]
    }
  ];

  const trendingCommunities = [
    {
      id: 4,
      name: "Freelancers Guild",
      members: 1534,
      category: "Business",
      growth: "+24%"
    },
    {
      id: 5,
      name: "Digital Marketing Masters",
      members: 987,
      category: "Marketing",
      growth: "+18%"
    },
    {
      id: 6,
      name: "African Photographers",
      members: 2103,
      category: "Photography",
      growth: "+31%"
    }
  ];

  const categories = [
    { name: "Design", count: 45, icon: Star },
    { name: "Business", count: 38, icon: TrendingUp },
    { name: "Technology", count: 52, icon: Users },
    { name: "Marketing", count: 29, icon: MessageCircle },
    { name: "Photography", count: 33, icon: Crown },
    { name: "Writing", count: 24, icon: Globe }
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
              Discover <span className="bg-gradient-hero bg-clip-text text-transparent">Communities</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Join thousands of creators, entrepreneurs, and innovators building the future of Africa together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/create-community">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Community
                </Link>
              </Button>
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search communities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Communities
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Join our most active and engaging communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift overflow-hidden h-full">
                  <div className={`h-32 bg-${community.image} flex items-center justify-center`}>
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-heading text-lg font-bold">{community.name}</h3>
                        {community.isVerified && (
                          <Crown className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        {community.privacy === "public" ? (
                          <Globe className="w-4 h-4" />
                        ) : (
                          <Lock className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
                      {community.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{community.category}</Badge>
                      <span className="font-body text-sm text-muted-foreground">
                        {community.members.toLocaleString()} members
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {community.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => {
                        // TODO: Implement community joining with Supabase
                        console.log("Join community:", community.name);
                      }}
                    >
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending & Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Trending Communities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl font-bold mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-primary" />
                Trending Communities
              </h3>
              <div className="space-y-4">
                {trendingCommunities.map((community, index) => (
                  <motion.div
                    key={community.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold">{community.name}</h4>
                            <p className="font-body text-sm text-muted-foreground">
                              {community.members.toLocaleString()} members
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary">{community.category}</Badge>
                          <Badge variant="default" className="bg-green-500 text-white">
                            {community.growth}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl font-bold mb-8 flex items-center">
                <Filter className="w-8 h-8 mr-3 text-primary" />
                Browse by Category
              </h3>
              <div className="grid gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift p-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <category.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-heading font-semibold">{category.name}</span>
                        </div>
                        <Badge variant="outline">{category.count} communities</Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Community?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Create a space where your audience can connect, learn, and grow together.
              Everything you need to build and manage a thriving community.
            </p>
            <Button variant="glass" size="xl" asChild>
              <Link to="/create-community">
                <Plus className="w-5 h-5 mr-2" />
                Create Your Community
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Communities;