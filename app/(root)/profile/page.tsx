"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Profile Page Coming Soon</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're working hard to bring you a personalized profile experience. 
          Check back soon for updates!
        </p>
        <div className="border-t border-border w-24 mx-auto my-8"></div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 hover:underline text-white"
        >
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
