import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, Calendar as CalendarIcon, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "past" | "upcoming";
}

const CreateCommunity = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [communityName, setCommunityName] = useState("");
  const [about, setAbout] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState<"past" | "upcoming">("upcoming");

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addEvent = () => {
    if (!eventTitle || !selectedDate) {
      toast({
        title: "Missing information",
        description: "Please enter an event title and select a date.",
        variant: "destructive",
      });
      return;
    }

    const newEvent: Event = {
      id: Date.now().toString(),
      title: eventTitle,
      date: selectedDate,
      type: eventType,
    };

    setEvents([...events, newEvent]);
    setEventTitle("");
    setSelectedDate(undefined);
    setShowCalendar(false);
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const handleSubmit = () => {
    if (!communityName || !about) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Community Created! 🎉",
      description: "Your community has been successfully created.",
    });

    setTimeout(() => {
      navigate("/events");
    }, 1500);
  };

  const pastEvents = events.filter((e) => e.type === "past");
  const upcomingEvents = events.filter((e) => e.type === "upcoming");

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/events")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Create Your Community
          </h1>
          <p className="font-body text-xl text-muted-foreground">
            Build a space where your audience can connect and grow together
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Community Information</CardTitle>
              <CardDescription>Tell us about your community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Community Logo */}
              <div className="space-y-2">
                <Label htmlFor="logo">Community Logo</Label>
                <div className="flex items-center gap-4">
                  {logoPreview ? (
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => {
                          setLogo(null);
                          setLogoPreview("");
                        }}
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-24 h-24 border-2 border-dashed border-border rounded-2xl flex items-center justify-center">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <input
                      type="file"
                      id="logo"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("logo")?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Logo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Community Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Community Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your community name"
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                />
              </div>

              {/* About */}
              <div className="space-y-2">
                <Label htmlFor="about">About Your Community *</Label>
                <Textarea
                  id="about"
                  placeholder="Tell us what your community is about, what you offer, and what makes it special..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  rows={5}
                />
              </div>

              {/* Events Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Events (for credibility)</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCalendar(!showCalendar)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </div>

                {/* Add Event Form */}
                {showCalendar && (
                  <Card className="p-4 bg-muted/50">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventTitle">Event Title</Label>
                        <Input
                          id="eventTitle"
                          placeholder="Enter event title"
                          value={eventTitle}
                          onChange={(e) => setEventTitle(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Event Type</Label>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant={eventType === "past" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setEventType("past")}
                          >
                            Past Event
                          </Button>
                          <Button
                            type="button"
                            variant={eventType === "upcoming" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setEventType("upcoming")}
                          >
                            Upcoming Event
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Select Date</Label>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </div>

                      <Button type="button" onClick={addEvent} className="w-full">
                        Add Event
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Past Events */}
                {pastEvents.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold">Past Events</h3>
                    <div className="space-y-2">
                      {pastEvents.map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div>
                            <p className="font-body font-semibold">{event.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {event.date.toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEvent(event.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upcoming Events */}
                {upcomingEvents.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold">Upcoming Events</h3>
                    <div className="space-y-2">
                      {upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20"
                        >
                          <div>
                            <p className="font-body font-semibold">{event.title}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3" />
                              {event.date.toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEvent(event.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary/80"
                >
                  Create Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateCommunity;
