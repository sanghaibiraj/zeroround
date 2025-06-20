import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import TiltedCard from "../Animations/TiltedCard"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <TiltedCard
      altText={description}
      containerHeight="300px"
      containerWidth="300px"  
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
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
      }
    />
  )
}
