"use client"

import { AlertCircle, CheckCircle, Loader2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInterviewForm } from "@/context/InterviewFormContext"

export function FormSubmitSection() {
    const { isSubmitting, submitStatus, handleSubmit } = useInterviewForm()

    return (
        <div className="space-y-4">
            <div className="flex justify-end pt-6">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={(e) => handleSubmit(e)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Creating Interview...
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Create Interview
                        </>
                    )}
                </Button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-green-300">
                        Interview created successfully! You can now use it for practice.
                    </span>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-red-300">Failed to create interview. Please try again.</span>
                </div>
            )}
        </div>
    )
}
