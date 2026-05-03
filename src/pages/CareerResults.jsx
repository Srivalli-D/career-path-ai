import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Briefcase, TrendingUp, BookOpen, Bookmark, Target, Bell, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useState } from "react";

export default function CareerResults() {
  const location = useLocation();
  const { answers } = location.state || {};
  const [savedCareers, setSavedCareers] = useState([]);
  const [activeReminders, setActiveReminders] = useState([]);

  const handleSaveCareer = (careerTitle) => {
    setSavedCareers(prev => [...prev, careerTitle]);
    alert(`Success! "${careerTitle}" has been saved to your profile.`);
  };

  const handleSetGoal = (careerTitle) => {
    const goal = prompt(`Set a goal for becoming a ${careerTitle}:`, "Complete certification by next month");
    if (goal) {
      alert(`Goal Set: "${goal}" has been added to your career roadmap.`);
    }
  };

  const handleSetReminder = (careerTitle) => {
    setActiveReminders(prev => [...prev, careerTitle]);
    alert(`Reminder Active: We will notify you about ${careerTitle} application deadlines.`);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Career Matches</h1>
        <p className="text-xl text-muted-foreground">Based on our AI analysis, here are the best career paths for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Product Manager", match: "98%", desc: "Bridges the gap between technical and business teams.", icon: <TrendingUp className="w-6 h-6 text-primary" /> },
          { title: "UX Researcher", match: "92%", desc: "Understands user needs to inform product design.", icon: <BookOpen className="w-6 h-6 text-primary" /> },
          { title: "Technical Writer", match: "85%", desc: "Creates clear documentation for complex systems.", icon: <Briefcase className="w-6 h-6 text-primary" /> }
        ].map((career, i) => (
          <Card key={i} className="flex flex-col h-full border-primary/20 bg-gradient-to-b from-background to-primary/5">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="bg-background p-3 rounded-xl shadow-sm border">{career.icon}</div>
                <div className="flex gap-2 items-center">
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs">
                    {career.match} Match
                  </span>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleSaveCareer(career.title)}>
                    <Bookmark className={`h-4 w-4 ${savedCareers.includes(career.title) ? "fill-primary text-primary" : ""}`} />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-xl">{career.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-muted-foreground mb-6 text-sm">{career.desc}</p>
              <div className="space-y-2 mb-4">
                <Button className="w-full text-xs h-9" variant="outline" onClick={() => handleSetGoal(career.title)}>
                  <Target className="h-3.5 w-3.5 mr-2" /> Set Goal
                </Button>
                <Button className="w-full text-xs h-9" variant="ghost" onClick={() => handleSetReminder(career.title)}>
                  <Bell className={`h-3.5 w-3.5 mr-2 ${activeReminders.includes(career.title) ? "text-primary" : ""}`} />
                  {activeReminders.includes(career.title) ? "Reminder Active" : "Remind Me"}
                </Button>
              </div>
              <Button className="w-full" asChild>
                <Link to="/auth">View Roadmap</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8">
        <Button size="lg" className="px-12" onClick={() => alert("All changes have been successfully saved to your cloud profile!")}>
          <CheckCircle2 className="h-4 w-4 mr-2" /> Save All Changes
        </Button>
        
        <Card className="w-full bg-primary text-primary-foreground border-none">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to take the next step?</h2>
              <p className="text-primary-foreground/80 max-w-xl text-sm">Create a free account to save your results, generate detailed learning roadmaps, and track your progress.</p>
            </div>
            <Button size="lg" variant="secondary" asChild className="shrink-0">
              <Link to="/auth">Sign Up Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

