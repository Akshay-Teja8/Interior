import { Link as WouterLink } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/logo.jpg" 
            alt="Interiors Vision Logo" 
            className="h-16 w-16 object-contain mb-6 hover:scale-105 transition-transform"
          />
          <h2 className="text-2xl font-bold font-display mb-2">Interiors Vision</h2>
          <p className="text-primary italic mb-6">"Simplicity beats complexity"</p>
          <div className="flex justify-center space-x-6 mb-8 text-muted-foreground">
            <WouterLink to="/" className="hover:text-primary transition-colors">Home</WouterLink>
            <WouterLink to="/about" className="hover:text-primary transition-colors">About</WouterLink>
            <WouterLink to="/services" className="hover:text-primary transition-colors">Services</WouterLink>
            <WouterLink to="/contact" className="hover:text-primary transition-colors">Contact</WouterLink>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Interiors Vision. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
