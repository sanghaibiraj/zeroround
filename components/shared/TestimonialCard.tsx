import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import TiltedCard from "../Animations/TiltedCard"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatarLetter: string
  avatarColor: string
}

export function TestimonialCard({
  quote,
  name,
  title,
  avatarLetter,
  avatarColor
}: TestimonialCardProps) {
  return (
    <TiltedCard
      altText={avatarLetter}
      containerHeight="300px"
      containerWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-300 mb-4">{quote}</p>
            <div className="flex items-center">
              <div className={`w-10 h-10 bg-${avatarColor}-500 rounded-full flex items-center justify-center text-white font-semibold`}>
                {avatarLetter}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-slate-400">{title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      }
    />
  )
}
