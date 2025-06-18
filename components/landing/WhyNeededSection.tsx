import { ComparisonPoint } from "../shared/ComparisonPoint"

export default function WhyNeededSection() {
  const problemPoints = [
    {
      title: "Interview Panic",
      description: "73% of students experience severe anxiety during interviews, leading to poor performance despite having the right qualifications."
    },
    {
      title: "Lack of Practice",
      description: "Most students go into interviews unprepared, having never experienced realistic interview scenarios."
    },
    {
      title: "Poor Communication",
      description: "Technical skills aren't enough - students struggle to articulate their thoughts clearly under pressure."
    },
    {
      title: "Missed Opportunities",
      description: "Talented individuals lose dream job offers simply because they couldn't showcase their abilities effectively."
    }
  ]

  const solutionPoints = [
    {
      title: "Build Confidence",
      description: "Practice in a safe environment until interviews feel natural and comfortable."
    },
    {
      title: "Improve Communication",
      description: "Develop clear, concise responses and learn to think on your feet."
    },
    {
      title: "Personalized Preparation",
      description: "Create custom interviews for specific companies or roles you're targeting."
    },
    {
      title: "Land Your Dream Job",
      description: "Transform from nervous candidate to confident professional who stands out."
    }
  ]

  return (
    <section id="why-needed" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Every Student Needs ZeroRound</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't let interview anxiety destroy your career opportunities. Be prepared, be confident, be successful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">The Problem</h3>
            <div className="space-y-4">
              {problemPoints.map((point, index) => (
                <ComparisonPoint 
                  key={index}
                  title={point.title} 
                  description={point.description} 
                  color="red" 
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">The ZeroRound Solution</h3>
            <div className="space-y-4">
              {solutionPoints.map((point, index) => (
                <ComparisonPoint 
                  key={index}
                  title={point.title} 
                  description={point.description} 
                  color="green" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
