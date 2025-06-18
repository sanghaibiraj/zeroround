import React from "react";
import Link from "next/link";
import Logo from "../../components/shared/Logo";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated()
  if (!isUserAuthenticated) {
    redirect('/signin')
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <nav className="p-4 border-b border-slate-700 backdrop-blur-sm bg-slate-900/70 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <Logo />
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/profile" className="text-slate-300 hover:text-white transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-6">
        {children}
      </div>
    </div>
  );
}

export default RootLayout;