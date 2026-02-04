import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, Sparkles } from "lucide-react";

export default function Navbar({ showAuthButtons = true }: { showAuthButtons?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg gradient-primary">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">
              Orion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/dashboard"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/news"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Updates
            </Link>
            <Link
              to="/insights"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Insights
            </Link>
            <Link
              to="/marketplace"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Resources
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {showAuthButtons && (
              <>
                <button className="btn-secondary text-sm">
                  <LogIn className="w-4 h-4 inline mr-2" />
                  Sign In
                </button>
                <button className="btn-primary text-sm">
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-primary/5 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/news"
              className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-primary/5 transition-colors"
            >
              Updates
            </Link>
            <Link
              to="/insights"
              className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-primary/5 transition-colors"
            >
              Insights
            </Link>
            <Link
              to="/marketplace"
              className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-primary/5 transition-colors"
            >
              Resources
            </Link>
            {showAuthButtons && (
              <div className="flex gap-2 pt-2">
                <button className="btn-secondary text-sm flex-1">
                  Sign In
                </button>
                <button className="btn-primary text-sm flex-1">
                  Get Started
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
