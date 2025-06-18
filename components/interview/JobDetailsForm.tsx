"use client"

import { AlertCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { interviewTypes, difficultyLevels } from "@/constants/interviewData"
import { useInterviewForm } from "@/context/InterviewFormContext"

export function JobDetailsForm() {
    const { formData, errors, handleInputChange } = useInterviewForm()

    return (
        <div className="space-y-6">
            {/* Job Role */}
            <div className="space-y-2">
                <Label htmlFor="jobRole" className="text-slate-300">
                    Job Role / Interview Name *
                </Label>
                <Input
                    id="jobRole"
                    placeholder="e.g., Frontend Developer, Product Manager, Data Scientist"
                    value={formData.jobRole}
                    onChange={(e) => handleInputChange("jobRole", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                {errors.jobRole && (
                    <p className="text-red-400 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.jobRole}
                    </p>
                )}
            </div>

            {/* Interview Type and Level */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="type" className="text-slate-300">
                        Interview Type *
                    </Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                            <SelectValue placeholder="Select interview type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                            {interviewTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value} className="text-white hover:bg-slate-600">
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.type && (
                        <p className="text-red-400 text-sm flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.type}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="level" className="text-slate-300">
                        Difficulty Level *
                    </Label>
                    <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                            <SelectValue placeholder="Select difficulty level" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                            {difficultyLevels.map((level) => (
                                <SelectItem key={level.value} value={level.value} className="text-white hover:bg-slate-600">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full ${level.color} mr-2`}></div>
                                        {level.label}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.level && (
                        <p className="text-red-400 text-sm flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.level}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
