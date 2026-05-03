import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Compass className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-lg">Career Compass</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-sm">
            Your AI-powered guide to finding and achieving your dream career.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/assessment" className="hover:text-foreground">Assessment</Link></li>
            <li><Link to="/roadmaps" className="hover:text-foreground">Roadmaps</Link></li>
            <li><Link to="/resources" className="hover:text-foreground">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© 2026 Career Compass. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-foreground">Twitter</Link>
          <Link to="#" className="hover:text-foreground">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
