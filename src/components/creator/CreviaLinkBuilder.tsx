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
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Edit,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContentBlock {
  id: string;
  type: "link" | "product" | "portfolio" | "event" | "collaboration";
  title: string;
  description?: string;
  url?: string;
  price?: string;
  image?: string;
  date?: string;
  visible: boolean;
}

interface ProfileData {
  name: string;
  bio: string;
  profileImage: string;
  theme: "light" | "dark" | "maroon";
  buttonStyle: "rounded" | "square" | "minimal";
  socials: {
    youtube?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const CreviaLinkBuilder = () => {
  const { toast } = useToast();
  const [isPreview, setIsPreview] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: "Your Name",
    bio: "Creator • Designer • Developer",
    profileImage: "",
    theme: "light",
    buttonStyle: "rounded",
    socials: {}
  });

  const [blocks, setBlocks] = useState<ContentBlock[]>([
    {
      id: "1",
      type: "product",
      title: "Ultimate UI/UX Design Course",
      description: "Master design principles and create stunning interfaces",
      price: "$99",
      image: "",
      visible: true
    },
    {
      id: "2",
      type: "link",
      title: "Check out my portfolio",
      url: "https://portfolio.com",
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
      case "product": return ShoppingBag;
      case "link": return LinkIcon;
      case "portfolio": return ImageIcon;
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
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-primary" />
                </div>
                <h1 className="font-heading text-3xl font-bold mb-2">{profile.name}</h1>
                <p className="text-muted-foreground mb-4">{profile.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                  {profile.socials.youtube && (
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Youtube className="w-5 h-5" />
                    </Button>
                  )}
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
                            {block.type === "product" ? "Buy Now" : "View"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
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

      {/* Profile Customization */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>Customize your profile appearance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input 
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              placeholder="Your name or brand"
            />
          </div>
          <div>
            <Label>Bio</Label>
            <Input 
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              placeholder="Short bio (max 150 characters)"
              maxLength={150}
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
            <Label>Social Links</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input 
                placeholder="YouTube URL"
                value={profile.socials.youtube || ""}
                onChange={(e) => setProfile({...profile, socials: {...profile.socials, youtube: e.target.value}})}
              />
              <Input 
                placeholder="Instagram URL"
                value={profile.socials.instagram || ""}
                onChange={(e) => setProfile({...profile, socials: {...profile.socials, instagram: e.target.value}})}
              />
              <Input 
                placeholder="Twitter URL"
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
          <CardDescription>Add and arrange your content</CardDescription>
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
                        {(block.type === "product" || block.type === "event") && (
                          <Input
                            value={block.price || ""}
                            onChange={(e) => updateBlock(block.id, { price: e.target.value })}
                            placeholder="Price"
                          />
                        )}
                        {(block.type === "link" || block.type === "portfolio") && (
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
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("product")}>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Product
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("portfolio")}>
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Portfolio
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("event")}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Event
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => addNewBlock("collaboration")}>
                    <Briefcase className="w-4 h-4 mr-2" />
                    Collaboration
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
