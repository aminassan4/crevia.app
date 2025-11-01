import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  GripVertical, 
  Trash2, 
  Eye, 
  Save, 
  Link as LinkIcon,
  Image as ImageIcon,
  ShoppingBag,
  Calendar,
  Briefcase,
  Instagram,
  Twitter,
  Linkedin,
  Edit,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContentBlock {
  id: string;
  type: "link" | "offer" | "event" | "collaboration";
  title: string;
  description?: string;
  url?: string;
  price?: string;
  image?: string;
  date?: string;
  visible: boolean;
}

interface BrandProfile {
  name: string;
  bio: string;
  logo: string;
  website: string;
  theme: "light" | "dark" | "maroon";
  buttonStyle: "rounded" | "square" | "minimal";
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const BrandLinkBuilder = () => {
  const { toast } = useToast();
  const [isPreview, setIsPreview] = useState(false);
  const [profile, setProfile] = useState<BrandProfile>({
    name: "Your Brand",
    bio: "Building connections, one creator at a time",
    logo: "",
    website: "",
    theme: "maroon",
    buttonStyle: "rounded",
    socials: {}
  });

  const [blocks, setBlocks] = useState<ContentBlock[]>([
    {
      id: "1",
      type: "offer",
      title: "Brand Collaboration Package",
      description: "Exclusive partnership opportunities for creators",
      price: "$2,500",
      image: "",
      visible: true
    },
    {
      id: "2",
      type: "collaboration",
      title: "Open for Partnerships",
      description: "We're looking for creative minds to collaborate with",
      visible: true
    }
  ]);

  const [editingBlock, setEditingBlock] = useState<string | null>(null);

  const addNewBlock = (type: ContentBlock["type"]) => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type,
      title: `New ${type}`,
      description: "",
      url: "",
      visible: true
    };
    setBlocks([...blocks, newBlock]);
    setEditingBlock(newBlock.id);
  };

  const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, ...updates } : block
    ));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
    toast({
      title: "Block deleted",
      description: "Content block has been removed"
    });
  };

  const toggleVisibility = (id: string) => {
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, visible: !block.visible } : block
    ));
  };

  const handleSave = () => {
    toast({
      title: "Changes saved!",
      description: "Your Crevia Link has been updated successfully"
    });
  };

  const getBlockIcon = (type: ContentBlock["type"]) => {
    switch (type) {
      case "offer": return ShoppingBag;
      case "link": return LinkIcon;
      case "event": return Calendar;
      case "collaboration": return Briefcase;
    }
  };

  if (isPreview) {
    return (
      <div className="min-h-screen bg-secondary py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Button 
            onClick={() => setIsPreview(false)}
            variant="outline"
            className="mb-6"
          >
            Back to Editor
          </Button>

          {/* Preview Mode */}
          <Card className="border-2">
            <CardContent className="p-8">
              {/* Brand Profile Section */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-primary" />
                </div>
                <h1 className="font-heading text-3xl font-bold mb-2">{profile.name}</h1>
                <p className="text-muted-foreground mb-2">{profile.bio}</p>
                {profile.website && (
                  <a href={profile.website} className="text-primary hover:underline text-sm flex items-center justify-center gap-1">
                    <Globe className="w-4 h-4" />
                    {profile.website}
                  </a>
                )}
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-6">
                  {profile.socials.instagram && (
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  )}
                  {profile.socials.twitter && (
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Twitter className="w-5 h-5" />
                    </Button>
                  )}
                  {profile.socials.linkedin && (
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Content Blocks */}
              <div className="space-y-4">
                {blocks.filter(b => b.visible).map(block => {
                  const Icon = getBlockIcon(block.type);
                  return (
                    <Card key={block.id} className="hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading text-lg font-bold mb-1">{block.title}</h3>
                            {block.description && (
                              <p className="text-sm text-muted-foreground mb-2">{block.description}</p>
                            )}
                            {block.price && (
                              <p className="text-lg font-bold text-primary">{block.price}</p>
                            )}
                            {block.date && (
                              <p className="text-sm text-muted-foreground">{block.date}</p>
                            )}
                          </div>
                          <Button size="sm" className="flex-shrink-0">
                            {block.type === "offer" ? "Learn More" : "View Details"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Featured Badge */}
              {blocks.filter(b => b.visible).length > 0 && (
                <div className="text-center mt-8 pt-8 border-t">
                  <p className="text-xs text-muted-foreground">Powered by Crevia</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Actions */}
      <div className="flex justify-between items-center">
        <h2 className="font-heading text-2xl font-bold">Edit Your Crevia Link</h2>
        <div className="flex gap-2">
          <Button onClick={() => setIsPreview(true)} variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} className="bg-primary">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Brand Profile Customization */}
      <Card>
        <CardHeader>
          <CardTitle>Brand Profile</CardTitle>
          <CardDescription>Customize your brand presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Brand Name</Label>
            <Input 
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              placeholder="Your brand name"
            />
          </div>
          <div>
            <Label>Bio / Tagline</Label>
            <Input 
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              placeholder="Short bio (max 150 characters)"
              maxLength={150}
            />
          </div>
          <div>
            <Label>Website</Label>
            <Input 
              value={profile.website}
              onChange={(e) => setProfile({...profile, website: e.target.value})}
              placeholder="https://yourbrand.com"
            />
          </div>
          
          {/* Theme Selection */}
          <div>
            <Label>Color Theme</Label>
            <div className="flex gap-2 mt-2">
              {(["light", "dark", "maroon"] as const).map(theme => (
                <Button
                  key={theme}
                  variant={profile.theme === theme ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProfile({...profile, theme})}
                  className="capitalize"
                >
                  {theme}
                </Button>
              ))}
            </div>
          </div>

          {/* Button Style */}
          <div>
            <Label>Button Style</Label>
            <div className="flex gap-2 mt-2">
              {(["rounded", "square", "minimal"] as const).map(style => (
                <Button
                  key={style}
                  variant={profile.buttonStyle === style ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProfile({...profile, buttonStyle: style})}
                  className="capitalize"
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <Label>Social Media</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input 
                placeholder="Instagram URL"
                value={profile.socials.instagram || ""}
                onChange={(e) => setProfile({...profile, socials: {...profile.socials, instagram: e.target.value}})}
              />
              <Input 
                placeholder="Twitter / X URL"
                value={profile.socials.twitter || ""}
                onChange={(e) => setProfile({...profile, socials: {...profile.socials, twitter: e.target.value}})}
              />
              <Input 
                placeholder="LinkedIn URL"
                value={profile.socials.linkedin || ""}
                onChange={(e) => setProfile({...profile, socials: {...profile.socials, linkedin: e.target.value}})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Blocks */}
      <Card>
        <CardHeader>
          <CardTitle>Content Blocks</CardTitle>
          <CardDescription>Add and arrange your brand content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {blocks.map((block, index) => (
            <Card key={block.id} className="border-2">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <GripVertical className="w-5 h-5 text-muted-foreground mt-2 cursor-move" />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={block.visible ? "default" : "secondary"}>
                        {block.type}
                      </Badge>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleVisibility(block.id)}
                        >
                          <Eye className={`w-4 h-4 ${!block.visible && 'opacity-50'}`} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditingBlock(editingBlock === block.id ? null : block.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deleteBlock(block.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>

                    {editingBlock === block.id ? (
                      <div className="space-y-2">
                        <Input
                          value={block.title}
                          onChange={(e) => updateBlock(block.id, { title: e.target.value })}
                          placeholder="Title"
                        />
                        <Textarea
                          value={block.description || ""}
                          onChange={(e) => updateBlock(block.id, { description: e.target.value })}
                          placeholder="Description"
                          rows={2}
                        />
                        {(block.type === "offer" || block.type === "event") && (
                          <Input
                            value={block.price || ""}
                            onChange={(e) => updateBlock(block.id, { price: e.target.value })}
                            placeholder="Price or Budget"
                          />
                        )}
                        {block.type === "link" && (
                          <Input
                            value={block.url || ""}
                            onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                            placeholder="URL"
                          />
                        )}
                        {block.type === "event" && (
                          <Input
                            type="date"
                            value={block.date || ""}
                            onChange={(e) => updateBlock(block.id, { date: e.target.value })}
                          />
                        )}
                      </div>
                    ) : (
                      <div>
                        <h3 className="font-semibold">{block.title}</h3>
                        {block.description && (
                          <p className="text-sm text-muted-foreground">{block.description}</p>
                        )}
                        {block.price && (
                          <p className="text-sm font-bold text-primary mt-1">{block.price}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Block */}
          <Card className="border-2 border-dashed cursor-pointer hover:border-primary/50 transition-all">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-semibold mb-3">Add New Content Block</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("link")}>
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Link
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("offer")}>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Offer
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("event")}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Event
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("collaboration")}>
                    <Briefcase className="w-4 h-4 mr-2" />
                    Partnership
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
