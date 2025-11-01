import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, Bell, CreditCard, Shield, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export const BrandSettings = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-3xl font-bold text-primary mb-2">
          Account Settings
        </h2>
        <p className="font-body text-muted-foreground">
          Manage your brand profile, billing, and preferences
        </p>
      </div>

      {/* Brand Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2 text-primary" />
              Brand Profile
            </CardTitle>
            <CardDescription>Update your brand information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="brand-name">Brand Name</Label>
              <Input id="brand-name" placeholder="Your Brand Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-email">Email</Label>
              <Input id="brand-email" type="email" placeholder="brand@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-website">Website</Label>
              <Input id="brand-website" type="url" placeholder="https://yourbrand.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-description">Brand Description</Label>
              <Textarea
                id="brand-description"
                placeholder="Tell us about your brand..."
                rows={4}
              />
            </div>
            <Button onClick={handleSaveSettings} className="bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Campaign Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about campaign progress and milestones
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Creator Messages</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when creators send you messages
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>New Proposals</Label>
                <p className="text-sm text-muted-foreground">
                  Get alerts when creators submit campaign proposals
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing Emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive tips, updates, and promotional content
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment & Billing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-primary" />
              Payment & Billing
            </CardTitle>
            <CardDescription>Manage your payment methods and billing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <CreditCard className="w-4 h-4 mr-2" />
              Add Payment Method
            </Button>
            <Separator />
            <div>
              <h4 className="font-semibold mb-2">Billing History</h4>
              <div className="space-y-2">
                {[
                  { date: "Nov 1, 2025", amount: "$1,200", status: "Paid" },
                  { date: "Oct 1, 2025", amount: "$980", status: "Paid" },
                  { date: "Sep 1, 2025", amount: "$1,450", status: "Paid" }
                ].map((invoice) => (
                  <div
                    key={invoice.date}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{invoice.date}</p>
                      <p className="text-sm text-muted-foreground">{invoice.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{invoice.amount}</p>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Security
            </CardTitle>
            <CardDescription>Manage your account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Password</h4>
                <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
              </div>
              <Button variant="outline" size="sm">
                Change Password
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Two-Factor Authentication</h4>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">Active Sessions</h4>
                <p className="text-sm text-muted-foreground">2 devices currently logged in</p>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
