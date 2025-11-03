import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Community from "./pages/Community";
import Communities from "./pages/Communities";
import Events from "./pages/Events";
import Products from "./pages/Products";
import Templates from "./pages/Templates";
import CreateEvent from "./pages/CreateEvent";
import CreatorDashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import CreateCommunity from "./pages/CreateCommunity";
import CreviaAI from "./pages/CreviaAI";
import CreviaConnect from "./pages/CreviaConnect";
import CreatorConnect from "./pages/CreatorConnect";
import BrandDashboard from "./pages/BrandDashboard";
import Onboarding from "./pages/Onboarding";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => (
  <>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/earn" element={<Earn />} />
      <Route path="/community" element={<Community />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/events" element={<Events />} />
      <Route path="/products" element={<Products />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/dashboard" element={<CreatorDashboard />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/create-community" element={<CreateCommunity />} />
      <Route path="/crevia-ai" element={<CreviaAI />} />
      <Route path="/crevia-connect" element={<CreviaConnect />} />
      <Route path="/creator-connect" element={<CreatorConnect />} />
      <Route path="/brand-dashboard" element={<BrandDashboard />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/pricing" element={<Pricing />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
