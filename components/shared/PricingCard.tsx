import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  name: string
  description: string
  price: string
  interval: string
  features: string[]
  buttonText: string
  highlighted: boolean
}

export function PricingCard({ 
  name, 
  description, 
  price, 
  interval, 
  features, 
  buttonText, 
  highlighted 
}: PricingCardProps) {
  return (
    <Card className={`bg-slate-800 ${highlighted ? 'border-blue-500' : 'border-slate-700'} relative`}>
      {highlighted && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-white">{name}</CardTitle>
        <CardDescription className="text-slate-300">{description}</CardDescription>
        <div className="text-3xl font-bold text-white">
          {price}<span className="text-lg font-normal text-slate-400">{interval}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          className={`w-full ${
            highlighted 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
              : 'bg-slate-700 hover:bg-slate-600 text-white'
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
