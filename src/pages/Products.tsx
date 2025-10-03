import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ShoppingBag,
  Search,
  Plus,
  Star,
  Filter,
  Play,
  Download,
  BookOpen,
  FileText,
  Video,
  Code
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
      tags: ["UI/UX", "Design", "Figma"]
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
      tags: ["Content", "Social Media", "Growth"]
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
      tags: ["Web Dev", "React", "Node.js"]
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
      tags: ["Marketing", "SEO", "Social Media"]
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
    { id: "design", name: "Design", count: allProducts.filter(p => p.category === "design").length, icon: Star },
    { id: "development", name: "Development", count: allProducts.filter(p => p.category === "development").length, icon: Code },
    { id: "business", name: "Business", count: allProducts.filter(p => p.category === "business").length, icon: FileText },
    { id: "marketing", name: "Marketing", count: allProducts.filter(p => p.category === "marketing").length, icon: Video }
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
              Digital <span className="bg-gradient-hero bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Discover courses, templates, eBooks, and digital resources created by African experts.
              Learn new skills and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/create-product">
                  <Plus className="w-5 h-5 mr-2" />
                  Sell Your Product
                </Link>
              </Button>
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {selectedCategory === "all" ? "All Products" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              {filteredProducts.length} products available
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const ProductIcon = getProductIcon(product.type);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift overflow-hidden h-full flex flex-col">
                    <div className={`h-48 bg-${product.image} flex items-center justify-center relative`}>
                      <ProductIcon className="w-16 h-16 text-white" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/40">
                          {product.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-body text-sm font-semibold">{product.rating}</span>
                            <span className="font-body text-xs text-muted-foreground">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-2">{product.title}</h3>
                        <p className="font-body text-sm text-muted-foreground mb-3">
                          by {product.creator}
                        </p>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-heading text-2xl font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="font-body text-sm text-muted-foreground">
                            {product.students 
                              ? `${product.students.toLocaleString()} students` 
                              : `${product.downloads.toLocaleString()} downloads`
                            }
                          </span>
                        </div>
                        <Button variant="default" className="w-full">
                          {product.type === "Course" ? "Enroll Now" : "Purchase"}
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
              Ready to Share Your Expertise?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Turn your knowledge into income. Create and sell digital products to thousands of learners.
              Start earning today.
            </p>
            <Button variant="glass" size="xl" asChild>
              <Link to="/create-product">
                <Plus className="w-5 h-5 mr-2" />
                Create Your Product
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
