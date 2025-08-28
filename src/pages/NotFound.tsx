import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-md mx-auto">
        <div className="glass-card">
          <div className="mb-8">
            <div className="text-8xl font-poppins font-bold text-gradient mb-4">404</div>
            <h1 className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-4">
              Page Not Found
            </h1>
            <p className="text-text-secondary leading-relaxed mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring our amazing community!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-hero group">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
