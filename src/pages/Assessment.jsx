import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export default function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    skills: "",
    interests: "",
    experience: ""
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      // Simulate API call to analyze results
      setTimeout(() => {
        navigate("/career-results", { state: { answers } });
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Career Assessment</CardTitle>
          <CardDescription>Step {step} of 3</CardDescription>
          <div className="w-full bg-secondary h-2 rounded-full mt-4">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(step / 3) * 100}%` }} 
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-medium">What are your top skills?</h3>
              <p className="text-muted-foreground text-sm">List 3-5 technical or soft skills you excel at.</p>
              <textarea 
                className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="e.g., Python, Project Management, Public Speaking..."
                value={answers.skills}
                onChange={(e) => setAnswers({...answers, skills: e.target.value})}
              />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-medium">What industries or topics interest you most?</h3>
              <p className="text-muted-foreground text-sm">What do you read about in your free time?</p>
              <textarea 
                className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="e.g., Renewable Energy, Healthcare Tech, Education..."
                value={answers.interests}
                onChange={(e) => setAnswers({...answers, interests: e.target.value})}
              />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-medium">How many years of professional experience do you have?</h3>
              <select 
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={answers.experience}
                onChange={(e) => setAnswers({...answers, experience: e.target.value})}
              >
                <option value="">Select experience level</option>
                <option value="entry">0-2 years (Entry Level)</option>
                <option value="mid">3-5 years (Mid Level)</option>
                <option value="senior">5+ years (Senior Level)</option>
              </select>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button 
            variant="outline" 
            onClick={() => setStep(step - 1)} 
            disabled={step === 1}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {step === 3 ? "Get Results" : "Continue"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
