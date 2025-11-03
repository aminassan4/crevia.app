import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Star,
  Download,
  ShoppingBag,
  Filter,
  Sparkles,
  TrendingUp,
  Clock,
  DollarSign,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Templates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Templates" },
    { id: "social-media", label: "Social Media" },
    { id: "presentation", label: "Presentations" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" },
    { id: "business", label: "Business" }
  ];

  const templates = [
    {
      id: 1,
      title: "Instagram Content Creator Pack",
      description: "50+ professionally designed Instagram templates",
      price: "$29",
      rating: 4.9,
      downloads: 1234,
      author: "Jane Doe",
      image: "gradient-hero",
      category: "social-media",
      trending: true
    },
    {
      id: 2,
      title: "Pitch Deck Essentials",
      description: "Complete pitch deck template for startups",
      price: "$49",
      rating: 4.8,
      downloads: 892,
      author: "John Smith",
      image: "gradient-accent",
      category: "presentation",
      trending: false
    },
    {
      id: 3,
      title: "Brand Identity System",
      description: "Full branding kit with logos and guidelines",
      price: "$79",
      rating: 5.0,
      downloads: 567,
      author: "Sarah Johnson",
      image: "gradient-hero",
      category: "design",
      trending: true
    },
    {
      id: 4,
      title: "Email Marketing Templates",
      description: "20+ email templates for marketing campaigns",
      price: "$39",
      rating: 4.7,
      downloads: 1456,
      author: "Mike Wilson",
      image: "gradient-accent",
      category: "marketing",
      trending: false
    },
    {
      id: 5,
      title: "Business Proposal Pack",
      description: "Professional business proposal templates",
      price: "$59",
      rating: 4.9,
      downloads: 723,
      author: "Emily Brown",
      image: "gradient-hero",
      category: "business",
      trending: true
    },
    {
      id: 6,
      title: "Social Media Calendar",
      description: "Complete content planning templates",
      price: "$24",
      rating: 4.6,
      downloads: 2134,
      author: "Alex Turner",
      image: "gradient-accent",
      category: "social-media",
      trending: false
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 via-purple-500/30 to-pink-500/40 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-teal-500/40 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Template Marketplace
            </Badge>
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Premium Templates
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8">
              Browse and purchase high-quality templates created by talented designers worldwide
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-y border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer overflow-hidden">
                  <div className="relative">
                    {/* Template Preview */}
                    <div className={`h-48 bg-gradient-${template.image} relative`}>
                      {template.trending && (
                        <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-purple-600 text-white border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {template.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mb-3">
                          {template.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{template.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{template.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">By {template.author}</p>
                        <p className="font-heading text-2xl font-bold text-primary">{template.price}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:shadow-lg hover:shadow-primary/50 text-white">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Sell Your Templates
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Join our marketplace and start earning from your creative work
            </p>
            <Button 
              variant="glass" 
              size="xl" 
              onClick={() => navigate("/create-product")}
              className="group"
            >
              Start Selling
              <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Templates;
