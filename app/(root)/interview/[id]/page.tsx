import { getInterviewsById } from '@/lib/actions/general.action';
import { getRandomInterviewCover } from '@/lib/utils';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { DisplayTechIcons } from '@/components/DisplayTechIcons';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { Agent } from '@/components/Agent';

const Page = async function ({ params }: RouteParams) {
    const { id } = await params
    const user = await getCurrentUser()
    const interview = await getInterviewsById(id)
    if (!interview) {
        redirect('/')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-row gap-6 justify-between items-center mb-8 bg-slate-800/50 p-5 rounded-xl shadow-lg'>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Image 
                                    src={getRandomInterviewCover()} 
                                    alt="cover-image" 
                                    width={60} 
                                    height={60} 
                                    className="rounded-full object-cover border-2 border-indigo-500/50"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                            </div>
                            <h2 className='capitalize text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                                {interview.role} Interview
                            </h2>
                        </div>
                        <div className="ml-0 sm:ml-4">
                            <DisplayTechIcons techStack={interview.techstack} />
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 rounded-lg shadow-md">
                        <p className="font-medium capitalize">{interview.type}</p>
                    </div>
                </div>
                
                <div className="bg-slate-800/30 rounded-xl p-6 shadow-xl backdrop-blur-sm mt-12">
                    <Agent 
                        userName={user?.name as string} 
                        userId={user?.id} 
                        interviewId={id} 
                        questions={interview.questions} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Page;