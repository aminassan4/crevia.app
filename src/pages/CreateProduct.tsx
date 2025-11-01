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
  Eye,
  Star,
  Users,
  Target,
  Clock,
  CheckCircle,
  Zap,
  TrendingUp,
  Award,
  Lightbulb,
  Play,
  Image,
  FileVideo,
  Headphones
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const CreateProduct = () => {
  const [productType, setProductType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    tags: [] as string[],
    content: "",
    learningObjectives: [] as string[],
    targetAudience: "",
    difficulty: "",
    duration: "",
    previewContent: "",
    requirements: [] as string[],
    features: [] as string[],
    bonusContent: [] as string[]
  });

  const productTypes = [
    {
      id: "course",
      title: "Online Course",
      description: "Comprehensive video-based learning with modules, quizzes, and certificates",
      icon: BookOpen,
      color: "text-primary",
      features: ["Video Lessons", "Interactive Quizzes", "Certificates", "Student Community"]
    },
    {
      id: "ebook",
      title: "eBook",
      description: "Digital book, guide, or comprehensive resource with bonus materials",
      icon: FileText,
      color: "text-secondary", 
      features: ["PDF Download", "Audio Version", "Bonus Worksheets", "Email Support"]
    },
    {
      id: "template",
      title: "Template Pack",
      description: "Professional templates, tools, and resources for immediate use",
      icon: Download,
      color: "text-primary",
      features: ["Multiple Formats", "Commercial License", "Video Tutorials", "Updates"]
    },
    {
      id: "video",
      title: "Video Content", 
      description: "High-quality video series with accompanying materials and resources",
      icon: Video,
      color: "text-secondary",
      features: ["HD Video", "Downloadable", "Transcripts", "Bonus Materials"]
    },
    {
      id: "audio",
      title: "Audio Content",
      description: "Podcasts, audiobooks, or audio courses with premium content",
      icon: Headphones,
      color: "text-primary",
      features: ["High Quality Audio", "Offline Access", "Transcripts", "Show Notes"]
    },
    {
      id: "bundle",
      title: "Content Bundle",
      description: "Complete package combining multiple content types and resources",
      icon: Award,
      color: "text-secondary",
      features: ["Multiple Products", "Exclusive Content", "Lifetime Access", "Priority Support"]
    }
  ];

  const difficultyLevels = [
    { id: "beginner", label: "Beginner", color: "bg-green-100 text-green-800" },
    { id: "intermediate", label: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
    { id: "advanced", label: "Advanced", color: "bg-red-100 text-red-800" },
    { id: "all-levels", label: "All Levels", color: "bg-blue-100 text-blue-800" }
  ];

  const contentTypes = [
    { id: "video", label: "Video Files", icon: FileVideo, accept: ".mp4,.mov,.avi" },
    { id: "document", label: "Documents", icon: FileText, accept: ".pdf,.doc,.docx" },
    { id: "image", label: "Images", icon: Image, accept: ".jpg,.png,.gif" },
    { id: "audio", label: "Audio Files", icon: Headphones, accept: ".mp3,.wav,.m4a" }
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

      {/* Template Pack Feature - Only Option */}
      {!productType && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Create Your Template Pack
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Share professional templates, tools, and resources with your audience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card 
                className="hover-lift cursor-pointer transition-all hover:border-primary border-2"
                onClick={() => setProductType("template")}
              >
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Download className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Template Pack</h3>
                  <p className="font-body text-base text-muted-foreground mb-6">
                    Professional templates, tools, and resources for immediate use
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Badge variant="secondary" className="justify-center py-2">Multiple Formats</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Commercial License</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Video Tutorials</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Free Updates</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Multi-Step Product Creation Form */}
      {productType && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header with Progress */}
              <div className="mb-12">
                <Button 
                  variant="ghost" 
                  onClick={() => setProductType("")}
                  className="mb-6"
                >
                  ← Back to Product Types
                </Button>
                
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-heading text-3xl font-bold mb-2">
                      Create {productTypes.find(t => t.id === productType)?.title}
                    </h2>
                    <p className="text-muted-foreground">Step {currentStep} of 4</p>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {productTypes.find(t => t.id === productType)?.title}
                  </Badge>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-secondary/20 rounded-full h-2 mb-8">
                  <div 
                    className="bg-gradient-hero h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="p-8">
                          <CardHeader className="px-0 pt-0">
                            <CardTitle className="font-heading text-2xl flex items-center">
                              <Lightbulb className="w-6 h-6 mr-2 text-primary" />
                              Product Details
                            </CardTitle>
                            <p className="text-muted-foreground">Tell us about your amazing product</p>
                          </CardHeader>
                          <CardContent className="px-0 space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="title" className="font-body text-base font-semibold">Product Title *</Label>
                              <Input
                                id="title"
                                placeholder="e.g. Complete UI/UX Design Masterclass"
                                value={formData.title}
                                onChange={(e) => handleInputChange("title", e.target.value)}
                                className="text-lg py-3"
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="description" className="font-body text-base font-semibold">Description *</Label>
                              <Textarea
                                id="description"
                                placeholder="Describe what your product offers, what problems it solves, and who it's perfect for..."
                                value={formData.description}
                                onChange={(e) => handleInputChange("description", e.target.value)}
                                className="min-h-[140px] text-base"
                                required
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="category" className="font-body text-base font-semibold">Category *</Label>
                                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                                  <SelectTrigger className="py-3">
                                    <SelectValue placeholder="Select a category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {categories.map((category) => (
                                      <SelectItem key={category} value={category}>
                                        {category}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="difficulty" className="font-body text-base font-semibold">Difficulty Level</Label>
                                <Select value={formData.difficulty} onValueChange={(value) => handleInputChange("difficulty", value)}>
                                  <SelectTrigger className="py-3">
                                    <SelectValue placeholder="Select difficulty" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {difficultyLevels.map((level) => (
                                      <SelectItem key={level.id} value={level.id}>
                                        <Badge className={level.color} variant="secondary">
                                          {level.label}
                                        </Badge>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="target-audience" className="font-body text-base font-semibold">Target Audience</Label>
                                <Input
                                  id="target-audience"
                                  placeholder="e.g. Aspiring designers, entrepreneurs"
                                  value={formData.targetAudience}
                                  onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                                  className="py-3"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="duration" className="font-body text-base font-semibold">Duration/Length</Label>
                                <Input
                                  id="duration"
                                  placeholder="e.g. 8 hours, 200 pages, 12 modules"
                                  value={formData.duration}
                                  onChange={(e) => handleInputChange("duration", e.target.value)}
                                  className="py-3"
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Step 2: Pricing & Features */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                      >
                        <Card className="p-8">
                          <CardHeader className="px-0 pt-0">
                            <CardTitle className="font-heading text-2xl flex items-center">
                              <DollarSign className="w-6 h-6 mr-2 text-primary" />
                              Pricing & Value
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="px-0 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                              <div className="space-y-6">
                                <div className="space-y-2">
                                  <Label htmlFor="price" className="font-body text-base font-semibold">Price (USD) *</Label>
                                  <div className="relative">
                                    <DollarSign className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                                    <Input
                                      id="price"
                                      type="number"
                                      step="0.01"
                                      placeholder="99.00"
                                      value={formData.price}
                                      onChange={(e) => handleInputChange("price", e.target.value)}
                                      className="pl-12 text-lg py-3"
                                      required
                                    />
                                  </div>
                                  <p className="text-sm text-muted-foreground">Recommended: $49 - $299</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-semibold mb-2 flex items-center">
                                  <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                                  Pricing Insights
                                </h4>
                                <div className="text-sm text-muted-foreground space-y-1">
                                  <p>• Average course price: $97</p>
                                  <p>• Your category avg: $127</p>
                                  <p>• Recommended range: $79-$199</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Step 3: Content Upload */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="p-8">
                          <CardHeader className="px-0 pt-0">
                            <CardTitle className="font-heading text-2xl flex items-center">
                              <Upload className="w-6 h-6 mr-2 text-primary" />
                              Content Upload
                            </CardTitle>
                            <p className="text-muted-foreground">Upload your product files and materials</p>
                          </CardHeader>
                          <CardContent className="px-0 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              {contentTypes.map((type) => (
                                <div key={type.id} className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                                  <type.icon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                  <h3 className="font-semibold mb-2">{type.label}</h3>
                                  <p className="text-sm text-muted-foreground mb-4">
                                    Drag & drop or click to upload
                                  </p>
                                  <Button variant="outline" size="sm">
                                    Choose Files
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Step 4: Review & Publish */}
                    {currentStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="p-8">
                          <CardHeader className="px-0 pt-0">
                            <CardTitle className="font-heading text-2xl flex items-center">
                              <CheckCircle className="w-6 h-6 mr-2 text-primary" />
                              Review & Publish
                            </CardTitle>
                            <p className="text-muted-foreground">Final review of your product before publishing</p>
                          </CardHeader>
                          <CardContent className="px-0 space-y-6">
                            <div className="bg-muted p-6 rounded-lg">
                              <h3 className="font-heading text-xl font-bold mb-4">{formData.title || "Your Product Title"}</h3>
                              <p className="text-muted-foreground mb-4">{formData.description || "Your product description will appear here..."}</p>
                              <div className="flex items-center justify-between">
                                <Badge variant="secondary">{formData.category || "Category"}</Badge>
                                <span className="text-2xl font-bold text-primary">${formData.price || "0.00"}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card className="p-6">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="font-heading text-lg flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-primary" />
                          Product Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-0">
                        <div className="space-y-3">
                          {productTypes.find(t => t.id === productType)?.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="p-6 bg-gradient-hero text-white">
                      <CardContent className="p-0">
                        <h3 className="font-heading text-lg font-bold mb-3 flex items-center">
                          <Star className="w-5 h-5 mr-2" />
                          Success Tips
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3" />
                            Focus on solving real problems
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3" />
                            Create compelling previews
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3" />
                            Price competitively
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3" />
                            Engage with your audience
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 border-t">
                  <div>
                    {currentStep > 1 && (
                      <Button 
                        type="button"
                        variant="outline" 
                        size="lg"
                        onClick={() => setCurrentStep(prev => prev - 1)}
                      >
                        Previous Step
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="lg">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button 
                        type="button"
                        variant="hero" 
                        size="lg"
                        onClick={() => setCurrentStep(prev => prev + 1)}
                      >
                        Next Step
                      </Button>
                    ) : (
                      <div className="flex space-x-3">
                        <Button variant="outline" size="lg">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button type="submit" variant="hero" size="lg">
                          <Zap className="w-4 h-4 mr-2" />
                          Publish Product
                        </Button>
                      </div>
                    )}
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