import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  ExternalLink,
  Copy,
  Share2,
  Facebook
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
  theme: "rose-garden" | "ocean-blue" | "professional-slate" | "dark-mode" | "sunset-vibes";
  fontStyle: "modern-sans" | "elegant-serif" | "playful-mono";
  buttonStyle: "rounded" | "square" | "minimal";
  linkName: string;
  socials: {
    youtube?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export const CreviaLinkBuilder = () => {
  const { toast } = useToast();
  const [isPreview, setIsPreview] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: "Your Name",
    bio: "Creator • Designer • Developer",
    profileImage: "",
    theme: "rose-garden",
    fontStyle: "modern-sans",
    buttonStyle: "rounded",
    linkName: "demouser",
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

  const handleCopyLink = () => {
    const link = `crevia.app/${profile.linkName}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link copied!",
      description: "Your Crevia Link has been copied to clipboard"
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Share functionality coming soon!"
    });
  };

  const getThemeStyles = (theme: ProfileData["theme"]) => {
    const themes = {
      "rose-garden": "bg-gradient-to-b from-pink-50 to-white",
      "ocean-blue": "bg-gradient-to-b from-blue-50 to-white",
      "professional-slate": "bg-gradient-to-b from-slate-100 to-white",
      "dark-mode": "bg-gradient-to-b from-gray-900 to-gray-800 text-white",
      "sunset-vibes": "bg-gradient-to-b from-orange-50 to-amber-50"
    };
    return themes[theme];
  };

  const getButtonTheme = (theme: ProfileData["theme"]) => {
    const themes = {
      "rose-garden": "bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white",
      "ocean-blue": "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
      "professional-slate": "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white",
      "dark-mode": "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white",
      "sunset-vibes": "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
    };
    return themes[theme];
  };

  const getFontClass = (fontStyle: ProfileData["fontStyle"]) => {
    const fonts = {
      "modern-sans": "font-sans",
      "elegant-serif": "font-serif",
      "playful-mono": "font-mono"
    };
    return fonts[fontStyle];
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
      <div className={`min-h-screen py-12 ${getThemeStyles(profile.theme)}`}>
        <div className="max-w-2xl mx-auto px-4">
          <Button 
            onClick={() => setIsPreview(false)}
            variant="outline"
            className="mb-6"
          >
            Back to Editor
          </Button>

          {/* Preview Mode */}
          <div className={`${getFontClass(profile.fontStyle)}`}>
            <div className="max-w-xl mx-auto px-4 py-8">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg overflow-hidden">
                  {profile.profileImage ? (
                    <img src={profile.profileImage} alt={profile.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${getButtonTheme(profile.theme)}`}>
                      <ImageIcon className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
                <h1 className="text-3xl font-bold mb-2" style={{color: profile.theme === "dark-mode" ? "#fff" : "#6C1B1B"}}>{profile.name}</h1>
                <p className={`mb-6 ${profile.theme === "dark-mode" ? "text-gray-300" : "text-gray-600"}`}>{profile.bio}</p>
              </div>

              {/* Content Blocks */}
              <div className="space-y-3 mb-8">
                {blocks.filter(b => b.visible).map(block => {
                  const Icon = getBlockIcon(block.type);
                  return (
                    <button
                      key={block.id}
                      className={`w-full p-4 ${
                        profile.buttonStyle === "rounded" ? "rounded-full" : 
                        profile.buttonStyle === "square" ? "rounded-none" : 
                        "rounded-lg"
                      } ${getButtonTheme(profile.theme)} shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-medium`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{block.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mb-8">
                {profile.socials.instagram && (
                  <button className={`w-12 h-12 rounded-full ${getButtonTheme(profile.theme)} shadow-md hover:shadow-lg transition-all flex items-center justify-center`}>
                    <Instagram className="w-5 h-5" />
                  </button>
                )}
                {profile.socials.twitter && (
                  <button className={`w-12 h-12 rounded-full ${getButtonTheme(profile.theme)} shadow-md hover:shadow-lg transition-all flex items-center justify-center`}>
                    <Twitter className="w-5 h-5" />
                  </button>
                )}
                {profile.socials.youtube && (
                  <button className={`w-12 h-12 rounded-full ${getButtonTheme(profile.theme)} shadow-md hover:shadow-lg transition-all flex items-center justify-center`}>
                    <Youtube className="w-5 h-5" />
                  </button>
                )}
                {profile.socials.linkedin && (
                  <button className={`w-12 h-12 rounded-full ${getButtonTheme(profile.theme)} shadow-md hover:shadow-lg transition-all flex items-center justify-center`}>
                    <Linkedin className="w-5 h-5" />
                  </button>
                )}
                {profile.socials.facebook && (
                  <button className={`w-12 h-12 rounded-full ${getButtonTheme(profile.theme)} shadow-md hover:shadow-lg transition-all flex items-center justify-center`}>
                    <Facebook className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button className={`${getButtonTheme(profile.theme)} ${
                  profile.buttonStyle === "rounded" ? "rounded-full" : 
                  profile.buttonStyle === "square" ? "rounded-none" : 
                  "rounded-lg"
                } px-8`}>
                  Create Your Link in Bio
                </Button>
              </div>

              {/* Footer */}
              <div className="text-center mt-8">
                <p className={`text-sm ${profile.theme === "dark-mode" ? "text-gray-400" : "text-gray-500"}`}>
                  © 2025 Crevia - Empowering African Creators
                </p>
              </div>
            </div>
          </div>
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

      {/* Link Sharing Section */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-primary" />
            Your Link in Bio
          </CardTitle>
          <CardDescription>Share this link to showcase all your products, events, and programs in one place</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Your Link Name</Label>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-muted-foreground">crevia.app/</span>
              <Input 
                value={profile.linkName}
                onChange={(e) => setProfile({...profile, linkName: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '')})}
                placeholder="yourname"
                className="flex-1"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Only lowercase letters and numbers allowed</p>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleCopyLink} variant="default" className="flex-1">
              <Copy className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
            <Button onClick={handleShare} variant="outline" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button onClick={() => setIsPreview(true)} variant="outline" className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>

          <div className="p-3 bg-muted rounded-lg border border-dashed">
            <p className="text-sm font-mono text-center">
              <LinkIcon className="w-4 h-4 inline mr-1" />
              crevia.app/{profile.linkName}
            </p>
          </div>
        </CardContent>
      </Card>

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
            <Label>Theme</Label>
            <RadioGroup value={profile.theme} onValueChange={(value) => setProfile({...profile, theme: value as ProfileData["theme"]})}>
              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="rose-garden" id="rose-garden" />
                    <Label htmlFor="rose-garden" className="cursor-pointer font-normal">Rose Garden</Label>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-500"></div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="ocean-blue" id="ocean-blue" />
                    <Label htmlFor="ocean-blue" className="cursor-pointer font-normal">Ocean Blue</Label>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="professional-slate" id="professional-slate" />
                    <Label htmlFor="professional-slate" className="cursor-pointer font-normal">Professional Slate</Label>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-700 to-slate-800"></div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="dark-mode" id="dark-mode" />
                    <Label htmlFor="dark-mode" className="cursor-pointer font-normal">Dark Mode</Label>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"></div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="sunset-vibes" id="sunset-vibes" />
                    <Label htmlFor="sunset-vibes" className="cursor-pointer font-normal">Sunset Vibes</Label>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Font Style */}
          <div>
            <Label>Font Style</Label>
            <RadioGroup value={profile.fontStyle} onValueChange={(value) => setProfile({...profile, fontStyle: value as ProfileData["fontStyle"]})}>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="modern-sans" id="modern-sans" />
                  <Label htmlFor="modern-sans" className="cursor-pointer font-normal">Modern Sans</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="elegant-serif" id="elegant-serif" />
                  <Label htmlFor="elegant-serif" className="cursor-pointer font-normal font-serif">Elegant Serif</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="playful-mono" id="playful-mono" />
                  <Label htmlFor="playful-mono" className="cursor-pointer font-normal font-mono">Playful Mono</Label>
                </div>
              </div>
            </RadioGroup>
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
              <Input 
                placeholder="Facebook URL"
                value={profile.socials.facebook || ""}
                onChange={(e) => setProfile({...profile, socials: {...profile.socials, facebook: e.target.value}})}
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
