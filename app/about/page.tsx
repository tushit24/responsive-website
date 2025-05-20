import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-teal-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team-meeting.png"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-teal-900/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Agency</h1>
            <p className="text-xl mb-8 text-green-100">
              We're a team of passionate digital experts committed to delivering exceptional results for our clients.
              With a focus on innovation and quality, we've been transforming businesses through technology since 2010.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="mb-8">
              At the heart of everything we do are our core values that guide our work, our relationships, and our
              vision for the future.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push boundaries to find creative solutions.",
                },
                {
                  title: "Excellence",
                  description: "We strive for the highest quality in every project we undertake.",
                },
                {
                  title: "Integrity",
                  description: "We build relationships based on trust, transparency and honesty.",
                },
                {
                  title: "Collaboration",
                  description: "We work together with our clients as true partners.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white/10 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-green-300">{value.title}</h3>
                  <p className="text-green-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/team-meeting.png" alt="Team meeting" className="rounded-lg h-48 object-cover" />
              <img src="/images/office.png" alt="Office space" className="rounded-lg h-48 object-cover mt-8" />
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Design work"
                className="rounded-lg h-48 object-cover"
              />
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Coding"
                className="rounded-lg h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Teaser */}
      <div className="bg-teal-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/office.png" alt="Company history" className="rounded-lg shadow-xl" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="mb-6">
                Founded in 2010, we started as a small team of three passionate developers working from a tiny office.
                Today, we've grown into a full-service digital agency with over 50 talented professionals across design,
                development, marketing, and strategy.
              </p>
              <p className="mb-6">
                Throughout our journey, we've remained committed to our founding principle: creating digital experiences
                that make a difference for our clients and their customers.
              </p>
              <Link href="/about/story" className="inline-flex items-center text-teal-300 hover:text-white font-medium">
                Read our full story <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team Teaser */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="max-w-2xl mx-auto text-green-100">
            Our diverse team of experts brings together decades of experience across technology, design, and business
            strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Alex Morgan",
              role: "CEO & Founder",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Former tech executive with 15+ years experience in digital transformation.",
            },
            {
              name: "Samantha Chen",
              role: "Creative Director",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Award-winning designer with background in UX/UI and brand strategy.",
            },
            {
              name: "David Wilson",
              role: "CTO",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Full-stack developer and architect with expertise in emerging technologies.",
            },
            {
              name: "Maria Rodriguez",
              role: "Client Success Director",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Dedicated to ensuring our clients achieve their business objectives.",
            },
          ].map((member, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image || "/images/team-1.png"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-300 mb-2">{member.role}</p>
                <p className="text-sm text-green-100">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/team"
            className="inline-flex items-center bg-green-700 hover:bg-green-600 text-white py-2 px-6 rounded-full transition-colors"
          >
            Meet the entire team <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-teal-900 to-green-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "300+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "12+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-green-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
