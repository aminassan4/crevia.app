import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Calendar,
  MapPin,
  Video,
  Users,
  DollarSign,
  Plus,
  Upload,
  Clock,
  Globe,
  Ticket,
  Settings,
  Palette,
  Type,
  Sparkles,
  RefreshCw,
  Camera,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";

const CreateEvent = () => {
  const [eventType, setEventType] = useState("");
  const [isVirtual, setIsVirtual] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("minimal");
  const [selectedColor, setSelectedColor] = useState("primary");
  const [selectedFont, setSelectedFont] = useState("Inter");

  const eventCategories = [
    { id: "workshop", label: "Workshop" },
    { id: "conference", label: "Conference" },
    { id: "webinar", label: "Webinar" },
    { id: "masterclass", label: "Masterclass" },
    { id: "networking", label: "Networking Event" },
    { id: "bootcamp", label: "Bootcamp" },
    { id: "summit", label: "Summit" },
    { id: "meetup", label: "Meetup" }
  ];

  const eventThemes = [
    {
      id: "minimal",
      name: "Minimal",
      preview: "bg-gradient-to-br from-slate-50 to-slate-100",
      color: "from-slate-400 to-slate-600"
    },
    {
      id: "quantum",
      name: "Quantum", 
      preview: "bg-gradient-to-br from-blue-100 to-cyan-100",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "warp",
      name: "Warp",
      preview: "bg-gradient-to-br from-purple-100 to-pink-100", 
      color: "from-purple-600 to-pink-600"
    },
    {
      id: "emoji",
      name: "Emoji",
      preview: "bg-gradient-to-br from-yellow-100 to-orange-100",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "confetti", 
      name: "Confetti",
      preview: "bg-gradient-to-br from-pink-100 to-purple-100",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: "pattern",
      name: "Pattern", 
      preview: "bg-gradient-to-br from-indigo-100 to-blue-100",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "seasonal",
      name: "Seasonal",
      preview: "bg-gradient-to-br from-green-100 to-teal-100",
      color: "from-green-500 to-teal-500"
    }
  ];

  const colorOptions = [
    { id: "primary", name: "Primary", color: "bg-primary" },
    { id: "secondary", name: "Secondary", color: "bg-secondary" },
    { id: "blue", name: "Ocean Blue", color: "bg-blue-500" },
    { id: "purple", name: "Royal Purple", color: "bg-purple-500" },
    { id: "green", name: "Forest Green", color: "bg-green-500" },
    { id: "pink", name: "Rose Pink", color: "bg-pink-500" },
    { id: "orange", name: "Sunset Orange", color: "bg-orange-500" }
  ];

  const fontOptions = [
    { id: "inter", name: "Inter", style: "font-sans" },
    { id: "roboto", name: "Roboto", style: "font-sans" },
    { id: "poppins", name: "Poppins", style: "font-sans" },
    { id: "playfair", name: "Playfair Display", style: "font-serif" },
    { id: "merriweather", name: "Merriweather", style: "font-serif" }
  ];

  const features = [
    {
      icon: Users,
      title: "Attendee Management",
      description: "Manage registrations, send updates, and track attendance"
    },
    {
      icon: Ticket,
      title: "Ticketing System",
      description: "Sell tickets, offer discounts, and handle payments"
    },
    {
      icon: Video,
      title: "Virtual Events",
      description: "Host online events with integrated video conferencing"
    },
    {
      icon: Settings,
      title: "Event Analytics",
      description: "Track engagement, attendance, and revenue metrics"
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
              Create Your <span className="bg-gradient-hero bg-clip-text text-transparent">Event</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Plan and host amazing events that connect, educate, and inspire your audience.
              From workshops to conferences, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Creation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <div className={`h-48 ${eventThemes.find(t => t.id === selectedTheme)?.preview} flex items-center justify-center relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${eventThemes.find(t => t.id === selectedTheme)?.color} opacity-20`} />
                    <div className="text-center z-10">
                      <h3 className="text-3xl font-bold text-foreground mb-2">Event Name</h3>
                      <p className="text-muted-foreground">Fri, Sep 26 • 12:30 GMT+03:00</p>
                    </div>
                    <Camera className="absolute top-4 right-4 w-8 h-8 text-foreground/60 hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </Card>
              </motion.div>
              
              {/* Theme Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="font-heading text-xl font-semibold">Event Theme</h3>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-3 mb-6">
                    {eventThemes.map((theme) => (
                      <motion.div
                        key={theme.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative cursor-pointer rounded-lg overflow-hidden ${
                          selectedTheme === theme.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedTheme(theme.id)}
                      >
                        <div className={`aspect-square ${theme.preview} flex items-center justify-center`}>
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.color}`} />
                        </div>
                        <p className="text-xs text-center mt-2 font-medium">{theme.name}</p>
                        {theme.id === "seasonal" && (
                          <Badge className="absolute -top-1 -right-1 text-xs px-1 py-0.5 bg-primary">NEW</Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Color & Style Options */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label className="flex items-center space-x-2 mb-3">
                        <Palette className="w-4 h-4 text-primary" />
                        <span>Color</span>
                      </Label>
                      <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {colorOptions.map((color) => (
                            <SelectItem key={color.id} value={color.id}>
                              <div className="flex items-center space-x-2">
                                <div className={`w-4 h-4 rounded-full ${color.color}`} />
                                <span>{color.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="flex items-center space-x-2 mb-3">
                        <Type className="w-4 h-4 text-primary" />
                        <span>Font</span>
                      </Label>
                      <Select value={selectedFont} onValueChange={setSelectedFont}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fontOptions.map((font) => (
                            <SelectItem key={font.id} value={font.id}>
                              <span className={font.style}>{font.name}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="flex items-center space-x-2 mb-3">
                        <Zap className="w-4 h-4 text-primary" />
                        <span>Display</span>
                      </Label>
                      <Select defaultValue="auto">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto</SelectItem>
                          <SelectItem value="light">Light Mode</SelectItem>
                          <SelectItem value="dark">Dark Mode</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="font-heading text-2xl">Event Details</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="event-title">Event Title *</Label>
                        <Input 
                          id="event-title" 
                          placeholder="e.g. African Content Creators Summit"
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="event-description">Description *</Label>
                        <Textarea 
                          id="event-description" 
                          placeholder="Describe what your event is about..."
                          className="mt-2 min-h-[120px]"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Event Category *</Label>
                          <Select value={eventType} onValueChange={setEventType}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {eventCategories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="max-attendees">Max Attendees</Label>
                          <Input 
                            id="max-attendees" 
                            type="number"
                            placeholder="e.g. 100"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="event-date">Event Date *</Label>
                          <Input 
                            id="event-date" 
                            type="date"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="start-time">Start Time *</Label>
                          <Input 
                            id="start-time" 
                            type="time"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="end-time">End Time *</Label>
                          <Input 
                            id="end-time" 
                            type="time"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Switch 
                            id="virtual-event" 
                            checked={isVirtual}
                            onCheckedChange={setIsVirtual}
                          />
                          <Label htmlFor="virtual-event" className="flex items-center space-x-2">
                            <Video className="w-4 h-4" />
                            <span>Virtual Event</span>
                          </Label>
                        </div>

                        {!isVirtual ? (
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="venue-name">Venue Name</Label>
                              <Input 
                                id="venue-name" 
                                placeholder="e.g. iHub Nairobi"
                                className="mt-2"
                              />
                            </div>
                            <div>
                              <Label htmlFor="venue-address">Address</Label>
                              <Input 
                                id="venue-address" 
                                placeholder="Street address"
                                className="mt-2"
                              />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Label htmlFor="meeting-platform">Meeting Platform</Label>
                            <Select>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select platform" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="zoom">Zoom</SelectItem>
                                <SelectItem value="teams">Microsoft Teams</SelectItem>
                                <SelectItem value="meet">Google Meet</SelectItem>
                                <SelectItem value="custom">Custom Platform</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Switch 
                            id="paid-event" 
                            checked={isPaid}
                            onCheckedChange={setIsPaid}
                          />
                          <Label htmlFor="paid-event" className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4" />
                            <span>Paid Event</span>
                          </Label>
                        </div>

                        {isPaid && (
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="ticket-price">Ticket Price ($)</Label>
                              <Input 
                                id="ticket-price" 
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                className="mt-2"
                              />
                            </div>
                            <div>
                              <Label htmlFor="early-bird">Early Bird Price ($)</Label>
                              <Input 
                                id="early-bird" 
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                className="mt-2"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label>Event Banner</Label>
                        <div className="mt-2 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <p className="font-body text-muted-foreground">
                            Click to upload event banner (recommended: 1200x600px)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        onClick={() => {
                          // TODO: Implement event creation with Supabase
                          console.log("Create event");
                        }}
                      >
                        <Plus className="w-5 h-5 mr-2" />
                        Create Event
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
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      Event Features
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
                    <h3 className="font-heading text-lg font-bold mb-3">Event Success Tips</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Start promoting early
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Create engaging content
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Provide clear value proposition
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
                        Follow up with attendees
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-heading text-lg font-bold mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-primary" />
                      Event Visibility
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      Your event will be featured on our events page and promoted to relevant communities.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Auto-promoted</Badge>
                      <Badge variant="outline">Searchable</Badge>
                    </div>
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

export default CreateEvent;