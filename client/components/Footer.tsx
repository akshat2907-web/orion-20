import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg gradient-primary">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Orion</span>
            </div>
            <p className="text-sm text-foreground/60">
              AI-powered smart study workspace for modern learners.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/dashboard"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-foreground/60 mb-4">
              Get the latest updates on study tips and features.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-white/50 border border-border/50 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="btn-primary text-sm px-4">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © 2024 Orion. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 text-sm">
            <a href="#privacy" className="text-foreground/60 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-foreground/60 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
