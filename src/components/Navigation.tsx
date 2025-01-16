import { useState, useEffect } from "react";
import { TwitterIcon, Menu } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      setIsMenuOpen(false);
    }
  };

  const tabs = [
    { id: "products", label: "Product" },
    { id: "team", label: "Team" },
    { id: "company", label: "Company" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <TooltipProvider>
      <nav className="fixed top-0 left-0 w-full bg-navy/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <span className="text-gold text-2xl font-bold">CORE</span>
              <span className="text-white text-2xl font-bold">E-Sports</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`text-base font-medium transition-colors ${
                    activeTab === tab.id ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <a
                href="https://x.com/Core_official__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-twitter hover:text-twitter-dark transition-colors"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-gold transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" style={{ top: '80px' }}>
            <div className="fixed right-0 top-20 h-[calc(100vh-80px)] w-full max-w-sm bg-[#FFFBEA] transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col items-center justify-center h-full py-8 space-y-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`px-6 py-3 text-xl font-bold w-full text-center transition-colors ${
                      activeTab === tab.id ? 'text-[#D4AF37]' : 'text-[#1A202C] hover:text-[#D4AF37]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </TooltipProvider>
  );
};

export default Navigation;