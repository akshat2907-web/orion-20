import { useState } from "react";
import {
  ArrowRight,
  Check,
  BookOpen,
  Brain,
  BarChart3,
  Sparkles,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Landing() {
  const [authModal, setAuthModal] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("signup");
  const [showPassword, setShowPassword] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Smart Notes",
      description:
        "Organize notes with AI-powered tagging and automatic categorization",
    },
    {
      icon: Brain,
      title: "AI Generation",
      description:
        "Generate comprehensive notes from lecture recordings automatically",
    },
    {
      icon: BarChart3,
      title: "Study Analytics",
      description:
        "Track progress, analyze study patterns, and optimize learning",
    },
    {
      icon: Sparkles,
      title: "Smart Dashboard",
      description: "Centralized workspace for all your academic needs",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar showAuthButtons={true} />

      {/* Hero Section */}
      <div className="relative overflow-hidden flex-1">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                The future of studying is here
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">AI-Powered Study</span>
              <br />
              <span className="text-foreground">Workspace</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Orion transforms how you study. Smart notes, automatic lecture
              transcription, AI-powered insights, and beautiful analytics—all in
              one place.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={() => {
                  setAuthType("signup");
                  setAuthModal(true);
                }}
                className="btn-primary gap-2 inline-flex items-center justify-center"
              >
                Start Learning Free <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary gap-2 inline-flex items-center justify-center">
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-foreground/60 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Mock Dashboard Preview */}
          <div
            className="mt-20 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl border-2 border-white/40">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                    <p className="text-foreground/40 font-semibold">
                      Dashboard Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need to study smarter, not harder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass rounded-xl p-8 card-hover group"
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">
              Ready to transform your studies?
            </span>
          </h2>
          <p className="text-lg text-foreground/70 mb-10">
            Join thousands of students already using Orion to study smarter.
          </p>
          <button
            onClick={() => {
              setAuthType("signup");
              setAuthModal(true);
            }}
            className="btn-primary gap-2 inline-flex items-center text-lg px-8 py-4"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      {/* Auth Modal */}
      {authModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto border-2 border-white/40">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {authType === "login" ? "Sign In" : "Create Account"}
              </h2>
              <button
                onClick={() => setAuthModal(false)}
                className="text-foreground/60 hover:text-foreground"
              >
                ✕
              </button>
            </div>

            {/* Auth Forms */}
            {authType === "login" ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-white/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 rounded-lg bg-white/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-sm text-primary hover:text-secondary transition-colors mb-6"
                >
                  Forgot password?
                </button>
                <button type="submit" className="w-full btn-primary">
                  Sign In
                </button>
                <p className="text-center text-foreground/70 text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthType("signup")}
                    className="text-primary hover:text-secondary font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg bg-white/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-white/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 rounded-lg bg-white/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4" />
                  <label htmlFor="terms" className="text-sm text-foreground/70">
                    I agree to the Terms of Service
                  </label>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Create Account
                </button>
                <p className="text-center text-foreground/70 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthType("login")}
                    className="text-primary hover:text-secondary font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}

            {/* Security Badge */}
            <div className="flex items-center gap-2 justify-center mt-8 pt-6 border-t border-border/30 text-foreground/60 text-xs">
              <Lock className="w-3 h-3" />
              <span>Your data is encrypted and secure</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
