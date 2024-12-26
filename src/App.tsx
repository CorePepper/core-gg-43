import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // ← BrowserRouter を HashRouter に変更
import Index from "./pages/Index";
import Reviews from "./pages/Reviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* ← BrowserRouter を HashRouter に変更 */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </HashRouter> {/* ← BrowserRouter を HashRouter に変更 */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
