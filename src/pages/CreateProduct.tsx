import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  Upload,
  DollarSign,
  Save,
  Eye
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const CreateProduct = () => {
  const [productType, setProductType] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    tags: [] as string[],
    content: ""
  });

  const productTypes = [
    {
      id: "course",
      title: "Online Course",
      description: "Video-based learning with modules and assessments",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      id: "ebook",
      title: "eBook",
      description: "Digital book or comprehensive guide",
      icon: FileText,
      color: "text-secondary"
    },
    {
      id: "template",
      title: "Template Pack",
      description: "Design templates, worksheets, or tools",
      icon: Download,
      color: "text-primary"
    },
    {
      id: "video",
      title: "Video Content",
      description: "Individual videos or video series",
      icon: Video,
      color: "text-secondary"
    }
  ];

  const categories = [
    "Design & Creative",
    "Business & Entrepreneurship", 
    "Technology & Programming",
    "Marketing & Sales",
    "Personal Development",
    "Health & Wellness",
    "Education & Training"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement product creation with Supabase
    console.log("Creating product:", { productType, ...formData });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Create Your <span className="bg-gradient-hero bg-clip-text text-transparent">Product</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Share your expertise and start earning by creating digital products that help others succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Type Selection */}
      {!productType && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What would you like to create?
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Choose the type of product that best fits your expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className="hover-lift cursor-pointer transition-all hover:border-primary"
                    onClick={() => setProductType(type.id)}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center ${type.color}`}>
                        <type.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-2">{type.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {type.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Creation Form */}
      {productType && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <Button 
                  variant="ghost" 
                  onClick={() => setProductType("")}
                  className="mb-4"
                >
                  ← Back to Product Types
                </Button>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {productTypes.find(t => t.id === productType)?.title}
                  </Badge>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Product Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="font-body">Product Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter your product title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="font-body"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="font-body">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what your product offers and who it's for"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="font-body min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="price" className="font-body">Price (USD)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="price"
                            type="number"
                            placeholder="0.00"
                            value={formData.price}
                            onChange={(e) => handleInputChange("price", e.target.value)}
                            className="pl-10 font-body"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category" className="font-body">Category</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger className="font-body">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category} className="font-body">
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Content Upload</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="font-body text-lg mb-2">Upload your content files</p>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        Drag and drop files here, or click to browse
                      </p>
                      <Button variant="outline">
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-center justify-between space-x-4">
                  <Button variant="outline" size="lg">
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </Button>
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="lg">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button type="submit" variant="hero" size="lg">
                      Publish Product
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CreateProduct;