import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ShoppingBag,
  Search,
  Plus,
  Star,
  Play,
  Download,
  BookOpen,
  FileText,
  Video,
  Code,
  Users,
  TrendingUp,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      creator: "Amara Okafor",
      description: "Complete guide to modern UI/UX design principles, tools, and workflows. Learn from real projects.",
      price: "$99",
      rating: 4.9,
      reviews: 234,
      students: 1247,
      image: "gradient-hero",
      type: "Course",
      category: "design",
      tags: ["UI/UX", "Design", "Figma"],
      trending: true
    },
    {
      id: 2,
      title: "Business Plan Template Pack",
      creator: "Kwame Asante",
      description: "Professional business plan templates for startups. Includes financial models and pitch deck templates.",
      price: "$29",
      rating: 4.8,
      reviews: 156,
      downloads: 890,
      image: "gradient-accent",
      type: "Template",
      category: "business",
      tags: ["Business", "Templates", "Startup"]
    },
    {
      id: 3,
      title: "Content Creator's Guide to Success",
      creator: "Zara Mohamed",
      description: "Everything you need to know about building and monetizing your content creation business.",
      price: "$19",
      rating: 4.7,
      reviews: 89,
      downloads: 2341,
      image: "gradient-hero",
      type: "eBook",
      category: "marketing",
      tags: ["Content", "Social Media", "Growth"],
      bestseller: true
    },
    {
      id: 4,
      title: "Full-Stack Web Development Course",
      creator: "Chidi Nwankwo",
      description: "Learn to build modern web applications with React, Node.js, and MongoDB from scratch.",
      price: "$149",
      rating: 4.9,
      reviews: 567,
      students: 3421,
      image: "gradient-accent",
      type: "Course",
      category: "development",
      tags: ["Web Dev", "React", "Node.js"],
      trending: true
    },
    {
      id: 5,
      title: "Social Media Graphics Bundle",
      creator: "Fatima Hassan",
      description: "1000+ professionally designed social media templates for Instagram, Facebook, and Twitter.",
      price: "$39",
      rating: 4.6,
      reviews: 203,
      downloads: 1567,
      image: "gradient-hero",
      type: "Template",
      category: "design",
      tags: ["Graphics", "Social Media", "Templates"]
    },
    {
      id: 6,
      title: "Photography Business Blueprint",
      creator: "David Kamau",
      description: "Complete guide to starting and scaling your photography business in Africa.",
      price: "$25",
      rating: 4.8,
      reviews: 145,
      downloads: 876,
      image: "gradient-accent",
      type: "eBook",
      category: "business",
      tags: ["Photography", "Business", "Guide"]
    },
    {
      id: 7,
      title: "Digital Marketing Masterclass",
      creator: "Aisha Musa",
      description: "Master SEO, social media marketing, email campaigns, and paid advertising strategies.",
      price: "$89",
      rating: 4.9,
      reviews: 312,
      students: 2134,
      image: "gradient-hero",
      type: "Course",
      category: "marketing",
      tags: ["Marketing", "SEO", "Social Media"],
      bestseller: true
    },
    {
      id: 8,
      title: "Freelancer Contract Templates",
      creator: "John Omondi",
      description: "Legal contract templates for freelancers. Protect your work and get paid on time.",
      price: "$15",
      rating: 4.7,
      reviews: 98,
      downloads: 1234,
      image: "gradient-accent",
      type: "Template",
      category: "business",
      tags: ["Legal", "Freelancing", "Contracts"]
    },
    {
      id: 9,
      title: "Mobile App Development with Flutter",
      creator: "Grace Njeri",
      description: "Build beautiful native mobile apps for iOS and Android using Flutter and Dart.",
      price: "$129",
      rating: 4.8,
      reviews: 234,
      students: 1890,
      image: "gradient-hero",
      type: "Course",
      category: "development",
      tags: ["Mobile", "Flutter", "App Development"]
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: allProducts.length, icon: ShoppingBag },
    { id: "design", name: "Design", count: allProducts.filter(p => p.category === "design").length, icon: Sparkles },
    { id: "development", name: "Development", count: allProducts.filter(p => p.category === "development").length, icon: Code },
    { id: "business", name: "Business", count: allProducts.filter(p => p.category === "business").length, icon: FileText },
    { id: "marketing", name: "Marketing", count: allProducts.filter(p => p.category === "marketing").length, icon: TrendingUp }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const getProductIcon = (type: string) => {
    switch(type) {
      case "Course": return Video;
      case "eBook": return BookOpen;
      case "Template": return FileText;
      default: return ShoppingBag;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Digital Products
              </Badge>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Discover World-Class
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Digital Products</span>
            </h1>

            {/* Description */}
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Learn from African experts. Courses, templates, and eBooks designed to accelerate your growth.
            </p>

            {/* Search Bar & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="relative w-full sm:flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search products, courses, templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-base border-2 focus:border-primary"
                />
              </div>
              <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/create-product">
                  <Plus className="w-5 h-5 mr-2" />
                  Sell Your Product
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-8 mt-12 flex-wrap"
            >
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-foreground">10,000+</div>
                <div className="font-body text-sm text-muted-foreground">Students</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-foreground">500+</div>
                <div className="font-body text-sm text-muted-foreground">Products</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-foreground">4.8★</div>
                <div className="font-body text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sticky top-16 z-20 bg-background/80 backdrop-blur-xl border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2 h-11 px-6 transition-all duration-300"
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-1 font-semibold">
                    {category.count}
                  </Badge>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {selectedCategory === "all" ? "All Products" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              {filteredProducts.length} premium products • Handpicked by experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const ProductIcon = getProductIcon(product.type);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    {/* Image/Icon Section */}
                    <div className={`relative h-56 bg-${product.image} overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 group-hover:from-black/40 group-hover:to-black/60 transition-all duration-500" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ProductIcon className="w-20 h-20 text-white drop-shadow-2xl" />
                        </motion.div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                        <Badge className="bg-white/95 backdrop-blur-sm text-foreground border-0 font-semibold shadow-lg">
                          {product.type}
                        </Badge>
                        <div className="flex flex-col gap-2">
                          {product.trending && (
                            <Badge className="bg-orange-500 text-white border-0 font-semibold shadow-lg">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                          {product.bestseller && (
                            <Badge className="bg-green-500 text-white border-0 font-semibold shadow-lg">
                              <Zap className="w-3 h-3 mr-1" />
                              Bestseller
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Rating Overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-body text-sm font-bold">{product.rating}</span>
                          <span className="font-body text-xs text-muted-foreground">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <h3 className="font-heading text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mb-3">
                          by <span className="font-semibold text-foreground">{product.creator}</span>
                        </p>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="font-heading text-3xl font-bold text-primary">
                              {product.price}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="font-body text-sm font-medium">
                              {product.students 
                                ? product.students.toLocaleString()
                                : product.downloads.toLocaleString()
                              }
                            </span>
                          </div>
                        </div>
                        <Button variant="default" className="w-full h-12 text-base group/btn">
                          {product.type === "Course" ? "Enroll Now" : "Purchase"}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Sparkles className="w-16 h-16 text-white/90 mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Share Your Expertise?
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Turn your knowledge into income. Create and sell digital products to thousands of eager learners worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glass" size="xl" asChild className="group">
                <Link to="/create-product">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your Product
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>

            {/* Success metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-8 mt-16 flex-wrap"
            >
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-1">$2M+</div>
                <div className="font-body text-sm text-white/80">Creator Earnings</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-1">15K+</div>
                <div className="font-body text-sm text-white/80">Happy Creators</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white mb-1">98%</div>
                <div className="font-body text-sm text-white/80">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;