import { FeatureCard } from "../shared/FeatureCard"
import { CheckListItem } from "../shared/CheckListItem"
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  MessageSquare, 
  Clock, 
  PlusCircle, 
  CheckCircle 
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
      icon: <BookOpen className="h-12 w-12 text-purple-400 mb-4" />,
      title: "Pre-Built Interview Library",
      description: "Access thousands of professionally crafted interviews for every industry - tech, finance, healthcare, marketing, and more. From entry-level to executive positions.",
      color: "purple"
    },
    {
      icon: <Brain className="h-12 w-12 text-green-400 mb-4" />,
      title: "AI-Powered Analysis",
      description: "Get detailed feedback on your responses, body language, speaking pace, and confidence level. Our AI identifies areas for improvement and provides actionable suggestions.",
      color: "green"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-yellow-400 mb-4" />,
      title: "Conversational Skills Training",
      description: "Practice natural conversation flow, learn to handle difficult questions, and develop the ability to think clearly under pressure with our interactive AI interviewer.",
      color: "yellow"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-red-400 mb-4" />,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics. See confidence scores, response quality metrics, and track your journey from nervous to confident.",
      color: "red"
    },
    {
      icon: <Clock className="h-12 w-12 text-indigo-400 mb-4" />,
      title: "24/7 Practice Availability",
      description: "Practice whenever you want, wherever you are. No scheduling, no waiting - your AI interviewer is always ready to help you improve.",
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
