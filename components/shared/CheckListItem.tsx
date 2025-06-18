import { CheckCircle } from "lucide-react"

interface CheckListItemProps {
  text: string
}

export function CheckListItem({ text }: CheckListItemProps) {
  return (
    <div className="flex items-center">
      <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
      <span className="text-slate-300">{text}</span>
    </div>
  )
}
