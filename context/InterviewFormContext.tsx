"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { InterviewFormData, FormErrors } from "@/constants/interviewData"

interface InterviewFormContextType {
    formData: InterviewFormData;
    errors: FormErrors;
    isGeneratingQuestions: boolean;
    isSubmitting: boolean;
    submitStatus: "idle" | "success" | "error";
    customTechStack: string;
    setCustomTechStack: (value: string) => void;
    handleInputChange: (field: string, value: string) => void;
    addTechStack: (tech: string) => void;
    removeTechStack: (tech: string) => void;
    addCustomTechStack: () => void;
    generateQuestionsWithAI: () => Promise<void>;
    validateForm: () => boolean;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

const InterviewFormContext = createContext<InterviewFormContextType | undefined>(undefined)

export const InterviewFormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<InterviewFormData>({
        jobRole: "",
        type: "",
        level: "",
        techStacks: [],
        sampleQuestions: "",
    })

    const [customTechStack, setCustomTechStack] = useState("")
    const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [errors, setErrors] = useState<FormErrors>({})

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const addTechStack = (tech: string) => {
        if (tech && !formData.techStacks.includes(tech)) {
            setFormData((prev) => ({
                ...prev,
                techStacks: [...prev.techStacks, tech],
            }))
        }
    }

    const removeTechStack = (tech: string) => {
        setFormData((prev) => ({
            ...prev,
            techStacks: prev.techStacks.filter((t) => t !== tech),
        }))
    }

    const addCustomTechStack = () => {
        if (customTechStack.trim()) {
            addTechStack(customTechStack.trim())
            setCustomTechStack("")
        }
    }

    const generateQuestionsWithAI = async () => {
        if (!formData.jobRole || !formData.type || !formData.level) {
            setErrors({
                jobRole: !formData.jobRole ? "Job role is required" : "",
                type: !formData.type ? "Interview type is required" : "",
                level: !formData.level ? "Difficulty level is required" : "",
            })
            return
        }

        setIsGeneratingQuestions(true)

        try {
            // Simulate AI API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            const techStacksText = formData.techStacks.length > 0 ? ` focusing on ${formData.techStacks.join(", ")}` : ""

            const generatedQuestions = `1. Can you walk me through your experience with ${formData.jobRole} roles?

2. What interests you most about this ${formData.jobRole} position?${techStacksText
                    ? `

3. How would you approach a project involving ${formData.techStacks[0] || "the main technology stack"}?`
                    : ""
                }

4. Describe a challenging situation you've faced in your previous work and how you handled it.

5. What are your strengths and how do they relate to this ${formData.jobRole} role?${formData.type === "technical"
                    ? `

6. Can you explain the difference between ${formData.techStacks[0] || "relevant technologies"} and ${formData.techStacks[1] || "alternative approaches"}?

7. How do you stay updated with the latest trends in ${formData.type} development?`
                    : ""
                }

8. Where do you see yourself in the next 3-5 years?

9. Do you have any questions about the role or our company?`

            setFormData((prev) => ({ ...prev, sampleQuestions: generatedQuestions }))
        } catch (error) {
            console.error("Error generating questions:", error)
        } finally {
            setIsGeneratingQuestions(false)
        }
    }

    const validateForm = () => {
        const newErrors: FormErrors = {}

        if (!formData.jobRole.trim()) newErrors.jobRole = "Job role is required"
        if (!formData.type) newErrors.type = "Interview type is required"
        if (!formData.level) newErrors.level = "Difficulty level is required"
        if (!formData.sampleQuestions.trim()) newErrors.sampleQuestions = "Sample questions are required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500))

            console.log("Submitting interview data:", formData)
            setSubmitStatus("success")

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    jobRole: "",
                    type: "",
                    level: "",
                    techStacks: [],
                    sampleQuestions: "",
                })
                setSubmitStatus("idle")
            }, 3000)
        } catch (error) {
            console.error("Error submitting interview:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const value = {
        formData,
        errors,
        isGeneratingQuestions,
        isSubmitting,
        submitStatus,
        customTechStack,
        setCustomTechStack,
        handleInputChange,
        addTechStack,
        removeTechStack,
        addCustomTechStack,
        generateQuestionsWithAI,
        validateForm,
        handleSubmit,
        setErrors
    }

    return (
        <InterviewFormContext.Provider value={value}>
            {children}
        </InterviewFormContext.Provider>
    )
}

export const useInterviewForm = () => {
    const context = useContext(InterviewFormContext)
    if (context === undefined) {
        throw new Error("useInterviewForm must be used within an InterviewFormProvider")
    }
    return context
}
