import { FeatureCard } from "../shared/FeatureCard"
import { CheckListItem } from "../shared/CheckListItem"
import { 
  Brain,
  MessageSquare, 
  Clock, 
  PlusCircle, 
  CheckCircle,
  FileText 
} from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <PlusCircle className="h-12 w-12 text-blue-400 mb-4" />,
      title: "Create Custom Interviews",
      description: "Design your own interview scenarios tailored to specific companies, roles, or skills. Upload job descriptions and get personalized questions that match exactly what you'll face.",
      color: "blue"
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-400 mb-4" />,
      title: "Interview Taken by AI",
      description: "Experience realistic interviews conducted by our advanced AI. The system adapts to your responses and provides natural conversation flow just like a human interviewer would.",
      color: "purple"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-green-400 mb-4" />,
      title: "AI-Powered Feedback Generation",
      description: "Receive detailed feedback on your responses and interview performance. Our AI analyzes your answers to provide actionable suggestions for improvement. Note: video is not monitored.",
      color: "green"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-yellow-400 mb-4" />,
      title: "Train Your Conversational Skills",
      description: "Practice natural conversation flow, learn to handle difficult questions, and develop the ability to think clearly under pressure with our interactive AI interviewer.",
      color: "yellow"
    },
    {
      icon: <FileText className="h-12 w-12 text-red-400 mb-4" />,
      title: "Interview Based on Your Resume",
      description: "Upload your resume and get personalized interview questions specific to your experience, skills, and career path. Prepare for questions you're most likely to face.",
      color: "red"
    },
    {
      icon: <Clock className="h-12 w-12 text-indigo-400 mb-4" />,
      title: "24/7 Availability",
      description: "Practice whenever you want, wherever you are. No scheduling, no waiting - your AI interviewer is always ready to help you improve your interview skills.",
      color: "indigo"
    }
  ]

  const highlightFeatures = [
    "Industry-specific question banks for targeted preparation",
    "Real-time feedback on communication and presentation",
    "Behavioral and technical interview scenarios",
    "Mock interviews that feel like the real thing",
    "Confidence building through repeated practice",
    "Personalized improvement recommendations",
    "Interview anxiety reduction techniques",
    "Success tracking and performance analytics"
  ]

  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Interview Success</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to master interviews, from custom scenarios to AI-powered feedback
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-center mb-8">Why Students Choose ZeroRound</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {highlightFeatures.slice(0, 4).map((feature, index) => (
                <CheckListItem key={index} text={feature} />
              ))}
            </div>
            <div className="space-y-4">
              {highlightFeatures.slice(4).map((feature, index) => (
                <CheckListItem key={index} text={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
