"use client"

import React, { createContext, useContext, useState, ReactNode, FormEvent } from "react"
import { getCurrentUser } from "@/lib/actions/auth.action"
import { popularTechStacks } from "@/constants/interviewData"

type SubmitStatus = "idle" | "submitting" | "success" | "error"

interface FormData {
  jobRole: string;
  type: string;
  level: string;
  techStacks: string[];
  sampleQuestions: string;
}

interface FormErrors {
  jobRole?: string;
  type?: string;
  level?: string;
  sampleQuestions?: string;
}

interface InterviewFormContextType {
  formData: FormData;
  errors: FormErrors;
  isGeneratingQuestions: boolean;
  isSubmitting: boolean;
  submitStatus: SubmitStatus;
  customTechStack: string;
  setCustomTechStack: (value: string) => void;
  handleInputChange: (name: string, value: string) => void;
  addTechStack: (tech: string) => void;
  removeTechStack: (tech: string) => void;
  addCustomTechStack: () => void;
  generateQuestionsWithAI: () => Promise<void>;
  validateForm: () => boolean;
  handleSubmit: (e: FormEvent) => Promise<void>;
  setErrors: (errors: FormErrors) => void;
}

const InterviewFormContext = createContext<InterviewFormContextType | undefined>(undefined)

export function InterviewFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    jobRole: "",
    type: "",
    level: "",
    techStacks: [],
    sampleQuestions: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle")
  const [customTechStack, setCustomTechStack] = useState("")

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const addTechStack = (tech: string) => {
    if (!formData.techStacks.includes(tech)) {
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
    if (customTechStack.trim() && !formData.techStacks.includes(customTechStack.trim())) {
      addTechStack(customTechStack.trim())
      setCustomTechStack("")
    }
  }

  const generateQuestionsWithAI = async () => {
    if (isGeneratingQuestions || !formData.jobRole || !formData.type || !formData.level) {
      return
    }

    setIsGeneratingQuestions(true)

    try {
      // For simplicity, we'll generate some placeholder questions
      // In a real app, you'd call an AI service here
      const techStackString = formData.techStacks.join(", ")
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      const generatedQuestions = 
        `1. Tell me about your experience with ${techStackString}.\n` +
        `2. How would you solve problem related to ${formData.jobRole}?\n` +
        `3. Describe a challenging project you worked on as a ${formData.jobRole}.\n` +
        `4. How do you stay updated with the latest technologies in this field?\n` +
        `5. What's your approach to debugging complex issues?`
      
      setFormData((prev) => ({
        ...prev,
        sampleQuestions: generatedQuestions,
      }))
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("submitting")

    try {
      // Get current user
      const user: any = await getCurrentUser()
      
      if (!user) {
        throw new Error("User not authenticated")
      }
      
      if (user?.credits < 1) {
        throw new Error("Insufficient credits")
      }

      // Convert questions from text to array
      const questionsArray = formData.sampleQuestions
        .split("\n")
        .map(q => q.trim())
        .filter(q => q.length > 0);

      // Submit form data to the API
      const response = await fetch("/api/interview/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: formData.jobRole,
          level: formData.level,
          type: formData.type,
          techstack: formData.techStacks,
          questions: questionsArray,
          userId: user.id
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Failed to create interview")
      }

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
      }, 2000)
    } catch (error) {
      console.error("Error creating interview:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <InterviewFormContext.Provider
      value={{
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
      }}
    >
      {children}
    </InterviewFormContext.Provider>
  )
}

export function useInterviewForm() {
  const context = useContext(InterviewFormContext)
  if (context === undefined) {
    throw new Error("useInterviewForm must be used within an InterviewFormProvider")
  }
  return context
}
