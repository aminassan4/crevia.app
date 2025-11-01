import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, LayoutDashboard, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SignInModal from "@/components/auth/SignInModal";
import SignUpModal from "@/components/auth/SignUpModal";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";
import ProductsDropdown from "./ProductsDropdown";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Check auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
    navigate("/");
  };

  const handleJoinCrevia = () => {
    setAuthMode("signup");
    setShowAuthModal(true);
  };

  const switchToSignIn = () => {
    setAuthMode("signin");
  };

  const switchToSignUp = () => {
    setAuthMode("signup");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/community" },
  ];

  const handleSignIn = () => {
    setAuthMode("signin");
    setShowAuthModal(true);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">C</span>
            </div>
            <span className="font-heading text-xl font-bold text-primary">
              Crevia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-body text-sm transition-colors hover:text-primary px-3 ${
                      isActive(link.path) ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <ProductsDropdown />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="outline"
                  onClick={handleSignIn}
                  className="font-body border-primary/30 hover:bg-primary/5"
                >
                  Log In
                </Button>
                <Button 
                  onClick={handleJoinCrevia}
                  className="font-body bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-body text-sm transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  {user ? (
                    <>
                      <Button variant="outline" size="sm" onClick={() => { navigate("/dashboard"); setIsOpen(false); }}>
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => { handleSignOut(); setIsOpen(false); }}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline"
                        onClick={() => { handleSignIn(); setIsOpen(false); }}
                        className="font-body border-primary/30"
                      >
                        Log In
                      </Button>
                      <Button 
                        onClick={() => { handleJoinCrevia(); setIsOpen(false); }}
                        className="font-body bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant"
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Auth Modal */}
      {authMode === "signin" ? (
        <SignInModal 
          open={showAuthModal}
          onOpenChange={setShowAuthModal}
          onSwitchToSignUp={switchToSignUp}
        />
      ) : (
        <SignUpModal 
          open={showAuthModal}
          onOpenChange={setShowAuthModal}
          onSwitchToSignIn={switchToSignIn}
        />
      )}
    </nav>
  );
};

export default Navigation;