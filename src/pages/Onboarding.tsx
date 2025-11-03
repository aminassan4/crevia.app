import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, Instagram, Youtube, Globe } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [userRole, setUserRole] = useState<"creator" | "brand" | null>(null);
  const [loading, setLoading] = useState(false);

  // Step 1 data
  const [creatorTypes, setCreatorTypes] = useState<string[]>([]);
  const [brandType, setBrandType] = useState("");

  // Step 2 data
  const [mainGoal, setMainGoal] = useState("");

  // Step 3 data
  const [socialInstagram, setSocialInstagram] = useState("");
  const [socialTiktok, setSocialTiktok] = useState("");
  const [socialYoutube, setSocialYoutube] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    checkUserProfile();
  }, []);

  const checkUserProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/");
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("user_role, onboarding_completed")
      .eq("id", user.id)
      .single();

    if (profile?.onboarding_completed) {
      navigate(profile.user_role === "brand" ? "/brand-dashboard" : "/dashboard");
      return;
    }

    setUserRole(profile?.user_role as "creator" | "brand");
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const updateData: any = {
        onboarding_completed: true,
        main_goal: mainGoal,
      };

      if (userRole === "creator") {
        updateData.creator_type = creatorTypes;
        updateData.social_instagram = socialInstagram;
        updateData.social_tiktok = socialTiktok;
        updateData.social_youtube = socialYoutube;
      } else {
        updateData.brand_type = brandType;
        updateData.website_url = websiteUrl;
      }

      if (avatarUrl) {
        updateData.avatar_url = avatarUrl;
      }

      const { error } = await supabase
        .from("profiles")
        .update(updateData)
        .eq("id", user.id);

      if (error) throw error;

      toast({
        title: "Welcome to Crevia! 🎉",
        description: "Your profile has been set up successfully.",
      });

      navigate(userRole === "brand" ? "/brand-dashboard" : "/dashboard");
    } catch (error) {
      console.error("Error completing onboarding:", error);
      toast({
        title: "Error",
        description: "Failed to complete setup. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleCreatorType = (type: string) => {
    setCreatorTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return userRole === "creator" ? creatorTypes.length > 0 : brandType !== "";
    }
    if (currentStep === 2) {
      return mainGoal !== "";
    }
    return true;
  };

  if (!userRole) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-burgundy border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white rounded-2xl shadow-elegant p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
              Complete Your Setup
            </h1>
            <p className="text-muted-foreground">
              Help us personalize your Crevia experience
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${
                    step === currentStep
                      ? "bg-burgundy text-white"
                      : step < currentStep
                      ? "bg-burgundy/20 text-burgundy"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / 3) * 100} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Step {currentStep} of 3
            </p>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading font-semibold mb-2">
                      {userRole === "creator"
                        ? "Welcome to Crevia! What kind of creator are you?"
                        : "Welcome to Crevia! What best describes your brand?"}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {userRole === "creator"
                        ? "Select all that apply"
                        : "Choose the option that best fits"}
                    </p>
                  </div>

                  {userRole === "creator" ? (
                    <div className="space-y-3">
                      {[
                        { value: "content_creator", label: "Content Creator" },
                        { value: "designer", label: "Designer" },
                        { value: "educator", label: "Educator / Coach" },
                        { value: "fitness", label: "Fitness / Lifestyle" },
                        { value: "ugc", label: "UGC Creator" },
                        { value: "other", label: "Other" },
                      ].map((type) => (
                        <div
                          key={type.value}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            creatorTypes.includes(type.value)
                              ? "border-burgundy bg-burgundy/5"
                              : "border-muted hover:border-burgundy/30"
                          }`}
                          onClick={() => toggleCreatorType(type.value)}
                        >
                          <Checkbox
                            checked={creatorTypes.includes(type.value)}
                            onCheckedChange={() => toggleCreatorType(type.value)}
                          />
                          <Label className="cursor-pointer flex-1">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <RadioGroup value={brandType} onValueChange={setBrandType}>
                      <div className="space-y-3">
                        {[
                          { value: "agency", label: "Agency" },
                          { value: "small_business", label: "Small Business / Startup" },
                          { value: "corporate", label: "Corporate Brand" },
                          { value: "ecommerce", label: "E-commerce / Product Brand" },
                        ].map((type) => (
                          <div
                            key={type.value}
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              brandType === type.value
                                ? "border-burgundy bg-burgundy/5"
                                : "border-muted hover:border-burgundy/30"
                            }`}
                            onClick={() => setBrandType(type.value)}
                          >
                            <RadioGroupItem value={type.value} />
                            <Label className="cursor-pointer flex-1">
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  )}
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading font-semibold mb-2">
                      {userRole === "creator"
                        ? "What do you want to achieve with Crevia?"
                        : "What brings you to Crevia?"}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Choose your primary goal
                    </p>
                  </div>

                  <RadioGroup value={mainGoal} onValueChange={setMainGoal}>
                    <div className="space-y-3">
                      {(userRole === "creator"
                        ? [
                            { value: "sell_products", label: "Sell digital products" },
                            { value: "partner_brands", label: "Partner with brands" },
                            { value: "grow_audience", label: "Grow your audience" },
                            { value: "learn_upskill", label: "Learn and upskill" },
                          ]
                        : [
                            { value: "find_creators", label: "Find creators to collaborate with" },
                            { value: "launch_campaign", label: "Launch a campaign" },
                            { value: "build_awareness", label: "Build community awareness" },
                            { value: "explore_partnerships", label: "Explore brand partnerships" },
                          ]
                      ).map((goal) => (
                        <div
                          key={goal.value}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            mainGoal === goal.value
                              ? "border-burgundy bg-burgundy/5"
                              : "border-muted hover:border-burgundy/30"
                          }`}
                          onClick={() => setMainGoal(goal.value)}
                        >
                          <RadioGroupItem value={goal.value} />
                          <Label className="cursor-pointer flex-1">{goal.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading font-semibold mb-2">
                      {userRole === "creator"
                        ? "Let's personalize your Crevia experience"
                        : "We're setting up your Crevia Connect dashboard"}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Optional: Add your links and profile details
                    </p>
                  </div>

                  <div className="space-y-4">
                    {userRole === "creator" ? (
                      <>
                        <div>
                          <Label className="mb-2 flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            Instagram Username
                          </Label>
                          <Input
                            placeholder="@yourusername"
                            value={socialInstagram}
                            onChange={(e) => setSocialInstagram(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label className="mb-2 flex items-center gap-2">
                            <span className="w-4 h-4">🎵</span>
                            TikTok Username
                          </Label>
                          <Input
                            placeholder="@yourusername"
                            value={socialTiktok}
                            onChange={(e) => setSocialTiktok(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label className="mb-2 flex items-center gap-2">
                            <Youtube className="w-4 h-4" />
                            YouTube Channel
                          </Label>
                          <Input
                            placeholder="Channel URL or @handle"
                            value={socialYoutube}
                            onChange={(e) => setSocialYoutube(e.target.value)}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Label className="mb-2 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Website or Social Page
                          </Label>
                          <Input
                            placeholder="https://yourbrand.com"
                            value={websiteUrl}
                            onChange={(e) => setWebsiteUrl(e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <Label className="mb-2 flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        {userRole === "creator" ? "Profile Photo (Optional)" : "Brand Logo (Optional)"}
                      </Label>
                      <Input
                        type="url"
                        placeholder="Image URL"
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        You can add this later from your profile settings
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            <div className={currentStep === 1 ? "ml-auto" : ""}>
              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="min-w-32"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  disabled={loading}
                  className="min-w-32"
                >
                  {loading ? "Setting up..." : "Let's Go! 🚀"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;
