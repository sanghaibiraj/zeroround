import { TestimonialCard } from "../shared/TestimonialCard"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I was terrified of interviews until I found ZeroRound. The custom interview feature helped me prepare specifically for Google's process. I practiced for weeks and landed the job! The confidence I gained was incredible.",
      name: "A",
      title: "Software Engineer at Google",
      avatarLetter: "S",
      avatarColor: "blue"
    },
    {
      quote: "The pre-built finance interviews were spot-on! I went from stumbling over basic questions to confidently discussing complex scenarios. ZeroRound transformed my communication skills completely.",
      name: "M",
      title: "Investment Analyst at Goldman Sachs",
      avatarLetter: "M",
      avatarColor: "green"
    },
    {
      quote: "As someone with severe interview anxiety, ZeroRound was a lifesaver. The 24/7 practice availability meant I could work on my confidence at my own pace. I actually enjoy interviews now!",
      name: "E",
      title: "Marketing Manager at Spotify",
      avatarLetter: "E",
      avatarColor: "purple"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-slate-300">
            Join thousands of successful job seekers who conquered their interview anxiety
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
