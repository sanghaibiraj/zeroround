"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { popularTechStacks } from "@/constants/interviewData"
import { useInterviewForm } from "@/context/InterviewFormContext"
import { Plus, X } from "lucide-react"

export function TechStacksForm() {
    const { 
        formData, 
        customTechStack, 
        setCustomTechStack, 
        addTechStack, 
        removeTechStack, 
        addCustomTechStack 
    } = useInterviewForm()

    return (
        <div className="space-y-4">
            <Label className="text-slate-300">Tech Stacks & Skills</Label>

            {/* Selected Tech Stacks */}
            {formData.techStacks.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {formData.techStacks.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30"
                        >
                            {tech}
                            <button type="button" onClick={() => removeTechStack(tech)} className="ml-2 hover:text-red-300">
                                <X className="h-3 w-3" />
                            </button>
                        </Badge>
                    ))}
                </div>
            )}

            {/* Popular Tech Stacks */}
            <div>
                <p className="text-sm text-slate-400 mb-2">Popular technologies:</p>
                <div className="flex flex-wrap gap-2">
                    {popularTechStacks.map((tech) => (
                        <Button
                            key={tech}
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => addTechStack(tech)}
                            disabled={formData.techStacks.includes(tech)}
                            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-50"
                        >
                            <Plus className="h-3 w-3 mr-1" />
                            {tech}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Custom Tech Stack Input */}
            <div className="flex gap-2">
                <Input
                    placeholder="Add custom technology or skill"
                    value={customTechStack}
                    onChange={(e) => setCustomTechStack(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCustomTechStack())}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Button
                    type="button"
                    onClick={addCustomTechStack}
                    disabled={!customTechStack.trim()}
                    className="bg-slate-700 hover:bg-slate-600"
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
