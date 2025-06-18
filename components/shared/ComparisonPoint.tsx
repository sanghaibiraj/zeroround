interface ComparisonPointProps {
  title: string
  description: string
  color: "red" | "green"
}

export function ComparisonPoint({ title, description, color }: ComparisonPointProps) {
  return (
    <div className="flex items-start">
      <div className={`w-2 h-2 bg-${color}-500 rounded-full mt-2 mr-4 flex-shrink-0`}></div>
      <p className="text-slate-300">
        <strong className="text-white">{title}:</strong> {description}
      </p>
    </div>
  )
}
