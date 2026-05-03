import { ArrowRight, Sparkles, Target, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-primary/5 to-background text-center px-4">
        <div className="container mx-auto max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Career Guidance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Discover Your Perfect <span className="text-primary">Career Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            Let our advanced AI analyze your skills, interests, and personality to recommend the ideal career trajectory and create a personalized roadmap to get you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/assessment">
                Take Free Assessment <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/auth">Sign In</Link>
            </Button>
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
