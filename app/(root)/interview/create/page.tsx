"use client"

import { Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { InterviewFormProvider } from "@/context/InterviewFormContext"
import { JobDetailsForm } from "@/components/interview/JobDetailsForm"
import { TechStacksForm } from "@/components/interview/TechStacksForm"
import { SampleQuestionsForm } from "@/components/interview/SampleQuestionsForm"
import { FormSubmitSection } from "@/components/interview/FormSubmitSection"

export default function CreateInterviewPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Custom Interview</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Design a personalized interview experience tailored to your specific needs and requirements
                    </p>
                </div>

                <Card className="bg-slate-800 border-slate-700">
                    <CardHeader>
                        <CardTitle className="text-white flex items-center">
                            <Brain className="h-6 w-6 mr-2 text-blue-400" />
                            Interview Details
                        </CardTitle>
                        <CardDescription className="text-slate-300">
                            Fill in the details below to create your custom interview
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <InterviewFormProvider>
                            <form onSubmit={(e) => {
                                const { handleSubmit } = require('@/context/InterviewFormContext').useInterviewForm();
                                handleSubmit(e);
                            }} className="space-y-6">
                                <JobDetailsForm />
                                <Separator className="bg-slate-600" />
                                <TechStacksForm />
                                <Separator className="bg-slate-600" />
                                <SampleQuestionsForm />
                                <FormSubmitSection />
                            </form>
                        </InterviewFormProvider>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
