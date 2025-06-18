import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30">
            🚀 AI-Powered Interview Mastery
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ace Every Interview with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ZeroRound
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform interview anxiety into confidence. Practice with our advanced AI, create custom interviews, or
            choose from thousands of pre-built scenarios. Build the skills you need to land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            No credit card required • 7-day free trial • Join 50,000+ users
          </p>
        </div>
      </div>
    </section>
  )
}
