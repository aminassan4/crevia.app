import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignUp: () => void;
}

const SignInModal = ({ open, onOpenChange, onSwitchToSignUp }: SignInModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual sign in logic with Supabase
    console.log("Sign in attempt:", { email, password });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-center">
            Welcome Back
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 font-body"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="font-body">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 font-body"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="font-body text-sm text-muted-foreground">Remember me</span>
            </label>
            <button
              type="button"
              className="font-body text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button type="submit" variant="hero" className="w-full">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 font-body text-sm text-muted-foreground">
              or
            </span>
          </div>

          <div className="text-center">
            <span className="font-body text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToSignUp}
                className="text-primary hover:underline font-semibold"
              >
                Join Kaizen
              </button>
            </span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;