import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar showAuthButtons={true} />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page not found</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Oops! The page you're looking for doesn't exist. Let's get you back
            on track.
          </p>
          <Link to="/" className="btn-primary gap-2 inline-flex items-center">
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
