import { ArrowRight, Sparkles, Target, Compass, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-24 md:pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background text-center px-4">
        <div className="container mx-auto max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-xs font-medium transition-colors bg-primary/10 text-primary mb-8">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            AI-Powered Career Discovery Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Find Your Dream <span className="bg-gradient-to-r from-primary to-[#0ea5e9] bg-clip-text text-transparent">Career Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            A smart, AI-driven mentor that helps you discover, learn, and grow into the career made for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button size="lg" asChild className="text-base px-8 h-12 rounded-lg">
              <Link to="/assessment">
                <Compass className="w-4 h-4 mr-2" /> Take Free Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 h-12 rounded-lg bg-card/50 backdrop-blur-sm">
              <Link to="/career-results">
                <BarChart2 className="w-4 h-4 mr-2" /> Explore Careers
              </Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            {[
              { value: "50K+", label: "Career Paths Discovered" },
              { value: "92%", label: "Success Rate" },
              { value: "1,200+", label: "Learning Resources" },
              { value: "4.9/5", label: "User Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border shadow-sm">
                <span className="text-3xl font-bold text-primary mb-2">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-background px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Take Assessment</h3>
              <p className="text-muted-foreground">Answer a few questions about your skills, interests, and personality traits.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
              <p className="text-muted-foreground">Our AI engine processes your responses to find the best career matches.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Get Roadmap</h3>
              <p className="text-muted-foreground">Receive a detailed, step-by-step roadmap to achieve your new career goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
