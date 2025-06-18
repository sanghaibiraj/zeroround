"use client"

import { AlertCircle, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useInterviewForm } from "@/context/InterviewFormContext"

export function SampleQuestionsForm() {
    const { 
        formData, 
        errors, 
        isGeneratingQuestions, 
        handleInputChange, 
        generateQuestionsWithAI 
    } = useInterviewForm()

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Label htmlFor="sampleQuestions" className="text-slate-300">
                    Sample Questions *
                </Label>
                <Button
                    type="button"
                    onClick={generateQuestionsWithAI}
                    disabled={isGeneratingQuestions || !formData.jobRole || !formData.type || !formData.level}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                    {isGeneratingQuestions ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <Sparkles className="h-4 w-4 mr-2" />
                            Generate with AI
                        </>
                    )}
                </Button>
            </div>
            <Textarea
                id="sampleQuestions"
                placeholder="Enter sample questions for this interview, one per line..."
                value={formData.sampleQuestions}
                onChange={(e) => handleInputChange("sampleQuestions", e.target.value)}
                rows={10}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            {errors.sampleQuestions && (
                <p className="text-red-400 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.sampleQuestions}
                </p>
            )}
            <p className="text-sm text-slate-400">
                Tip: Use the "Generate with AI" button to automatically create relevant questions based on your inputs
            </p>
        </div>
    )
}
