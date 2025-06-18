import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InterviewCard } from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

export default async function Home() {
  const user: any = await getCurrentUser();
  const userInterviews: any = user?.id ? await getInterviewsByUserId(user.id) : [];
  const latestInterviews: any = user?.id ? await getLatestInterviews({ userId: user.id }) : [];

  const hasPastInterviews = userInterviews.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <main className="flex flex-col gap-10 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen p-6">
      {/* Hero Section */}
      <section className="card-cta flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-slate-700">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-3xl font-bold text-white">Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg text-slate-300">
            Practice on real interview questions & get instant feedback
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all">
              <Link href="/interview">Start an Interview</Link>
            </Button>
            <Button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-md transition-all">
              Credits: {user?.credits}
            </Button>
          </div>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* User Interviews Section */}
      <section className="flex flex-col gap-6 bg-slate-800/30 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-slate-700">
        <h2 className="text-2xl font-bold text-white">Your Interviews</h2>
        <div className="interviews-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasPastInterviews ? (
            userInterviews.map((interview: any) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className="text-slate-300">You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      {/* Latest Interviews Section */}
      <section className="flex flex-col gap-6 bg-slate-800/30 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-slate-700">
        <h2 className="text-2xl font-bold text-white">Take an Interview</h2>
        <div className="interviews-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasUpcomingInterviews ? (
            latestInterviews.map((interview: any) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className="text-slate-300">There are no new interviews available</p>
          )}
        </div>
      </section>
    </main>
  );
}

