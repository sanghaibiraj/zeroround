"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import WhyNeededSection from "@/components/landing/WhyNeededSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import PricingSection from "@/components/landing/PricingSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import ContactSection from "@/components/landing/ContactSection"
import Footer from "@/components/landing/Footer"
import { isAuthenticated } from "@/lib/actions/auth.action"

export default function LandingPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const authStatus = await isAuthenticated()
				setIsLoggedIn(authStatus)
			} catch (error) {
				console.error("Authentication check failed:", error)
			}
		}

		checkAuth()
	}, [])

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<Navbar isLoggedIn={isLoggedIn} />
			<HeroSection />
			<WhyNeededSection />
			<FeaturesSection />
			<PricingSection />
			<TestimonialsSection />
			<ContactSection />
			<Footer />
		</div>
	)
}
