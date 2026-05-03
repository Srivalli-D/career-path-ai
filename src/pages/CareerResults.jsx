import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Briefcase, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function CareerResults() {
  const location = useLocation();
  const { answers } = location.state || {};

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Career Matches</h1>
        <p className="text-xl text-muted-foreground">Based on our AI analysis, here are the best career paths for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Mock Data for Results */}
        {[
          { title: "Product Manager", match: "98%", desc: "Bridges the gap between technical and business teams.", icon: <TrendingUp className="w-6 h-6 text-primary" /> },
          { title: "UX Researcher", match: "92%", desc: "Understands user needs to inform product design.", icon: <BookOpen className="w-6 h-6 text-primary" /> },
          { title: "Technical Writer", match: "85%", desc: "Creates clear documentation for complex systems.", icon: <Briefcase className="w-6 h-6 text-primary" /> }
        ].map((career, i) => (
          <Card key={i} className="flex flex-col h-full border-primary/20 bg-gradient-to-b from-background to-primary/5">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="bg-background p-3 rounded-xl shadow-sm border">{career.icon}</div>
                <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                  {career.match} Match
                </span>
              </div>
              <CardTitle className="text-xl">{career.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-muted-foreground mb-6">{career.desc}</p>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/auth">View Roadmap</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary text-primary-foreground border-none">
        <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to take the next step?</h2>
            <p className="text-primary-foreground/80 max-w-xl">Create a free account to save your results, generate detailed learning roadmaps, and track your progress.</p>
          </div>
          <Button size="lg" variant="secondary" asChild className="shrink-0">
            <Link to="/auth">Save My Results <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
