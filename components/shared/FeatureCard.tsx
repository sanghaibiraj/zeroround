import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <Card className={`bg-slate-800 border-slate-700 hover:border-${color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${color}-500/10`}>
      <CardHeader>
        {icon}
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
