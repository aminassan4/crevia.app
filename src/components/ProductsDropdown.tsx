import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Users, Package, Sparkles } from "lucide-react";

const ProductsDropdown = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-body text-sm text-muted-foreground hover:text-primary">
        Our Products
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          <li>
            <NavigationMenuLink asChild>
              <Link
                to="/crevia-connect"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <div className="text-sm font-heading font-semibold">Crevia Connect</div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-body">
                  Connect creators with brands for authentic partnerships
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                to="/create-product"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  <div className="text-sm font-heading font-semibold">Crevia Digital Products</div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-body">
                  Create and sell digital template packs
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                to="/crevia-ai"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div className="text-sm font-heading font-semibold">Crevia AI</div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-body">
                  AI-powered tools for creators
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProductsDropdown;
