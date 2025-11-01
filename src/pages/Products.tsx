import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag,
  Plus,
  Star,
  FileText,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Products = () => {
  const templatePack = {
    id: 1,
    title: "Crevia Template Pack",
    description: "Professional template pack for creators. Includes business plan templates, financial models, pitch decks, social media graphics, contract templates, and more.",
    price: "$49",
    rating: 4.9,
    reviews: 567,
    downloads: 2341,
    image: "gradient-hero",
    type: "Template Pack",
    tags: ["Business", "Templates", "Design", "Legal", "Marketing"],
    features: [
      "Business Plan Templates",
      "Financial Model Spreadsheets",
      "Pitch Deck Templates",
      "Social Media Graphics Bundle",
      "Contract Templates",
      "Invoice Templates",
      "Brand Identity Kit",
      "Marketing Materials"
    ]
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
              Crevia <span className="bg-gradient-hero bg-clip-text text-transparent">Template Pack</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Everything you need to start and grow your creator business. Professional templates designed specifically for African creators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="h-96 md:h-auto bg-gradient-hero flex items-center justify-center relative">
                    <FileText className="w-32 h-32 text-white" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/40">
                        {templatePack.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Product Details */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-body text-lg font-semibold">{templatePack.rating}</span>
                      <span className="font-body text-sm text-muted-foreground">
                        ({templatePack.reviews} reviews)
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl font-bold mb-4">{templatePack.title}</h2>
                    
                    <p className="font-body text-muted-foreground mb-6">
                      {templatePack.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {templatePack.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h3 className="font-heading text-xl font-bold mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {templatePack.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="font-body text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-heading text-4xl font-bold text-primary">
                          {templatePack.price}
                        </span>
                        <span className="font-body text-sm text-muted-foreground">
                          {templatePack.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                      <Button variant="default" size="lg" className="w-full">
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Purchase Template Pack
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Crevia Template Pack?
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Professionally designed, ready to use, and customizable for your unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Professional Quality",
                description: "Created by experts for African creators. Every template is designed with your success in mind."
              },
              {
                title: "Easy to Customize",
                description: "Simple to edit and adapt to your brand. No design experience required."
              },
              {
                title: "Lifetime Access",
                description: "One-time purchase gives you lifetime access to all templates and future updates."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full">
                  <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="font-body text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="font-body text-xl text-white/90 mb-8">
              Get instant access to all templates and start building your creator business today.
            </p>
            <Button variant="glass" size="xl">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Purchase Now - {templatePack.price}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;