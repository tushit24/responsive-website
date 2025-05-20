export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
        <p className="text-xl mb-12 max-w-3xl text-green-100">
          Meet the talented professionals behind our success. Our diverse team brings together expertise across design,
          development, strategy, and client success.
        </p>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Alex founded our agency in 2010 after 15 years in tech leadership roles. With a background in both business and technology, he bridges the gap between strategic vision and technical execution. Alex holds an MBA from Stanford and a Computer Science degree from MIT.",
              },
              {
                name: "Samantha Chen",
                role: "Creative Director",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Samantha leads our creative team with over 12 years of experience in design. Her work has been recognized with multiple industry awards, and she's passionate about creating designs that are both beautiful and functional. Prior to joining us, she worked with several Fortune 500 brands.",
              },
              {
                name: "David Wilson",
                role: "CTO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "David oversees all technical aspects of our projects. With expertise in multiple programming languages and frameworks, he ensures we're always using the right technology for each client's needs. He previously led development teams at several successful startups.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-green-300 mb-4">{member.role}</p>
                  <p className="text-green-100">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Design Team</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Emma Lewis",
                role: "Senior UI/UX Designer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Specializes in creating intuitive user experiences with a focus on accessibility.",
              },
              {
                name: "Jason Park",
                role: "Visual Designer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Expert in brand identity, typography, and creating cohesive visual systems.",
              },
              {
                name: "Olivia Martinez",
                role: "Motion Designer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Brings interfaces to life with subtle animations and interactive elements.",
              },
              {
                name: "Ryan Thompson",
                role: "UX Researcher",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Conducts user testing and research to inform our design decisions.",
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
        </div>

        {/* Development Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Development Team</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Michael Brown",
                role: "Lead Developer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture.",
              },
              {
                name: "Sarah Johnson",
                role: "Frontend Developer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Specializes in creating responsive, accessible, and performant user interfaces.",
              },
              {
                name: "Daniel Lee",
                role: "Backend Developer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Expert in database design, API development, and system architecture.",
              },
              {
                name: "Priya Patel",
                role: "Mobile Developer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Creates native and cross-platform mobile applications with a focus on performance.",
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
        </div>

        {/* Marketing & Strategy Team */}
        <div>
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Marketing & Strategy Team</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Maria Rodriguez",
                role: "Client Success Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Ensures our clients achieve their business objectives through our digital solutions.",
              },
              {
                name: "James Wilson",
                role: "Digital Strategist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Develops comprehensive digital strategies aligned with business goals.",
              },
              {
                name: "Lisa Chen",
                role: "Content Strategist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Creates content strategies that engage audiences and drive conversions.",
              },
              {
                name: "Thomas Garcia",
                role: "SEO Specialist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Optimizes websites for search engines to increase visibility and traffic.",
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
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-20 bg-white/10 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-green-100">
            We're always looking for talented individuals to join our growing team. Check out our current openings or
            send us your resume.
          </p>
          <button className="bg-green-600 hover:bg-green-500 text-white py-3 px-8 rounded-lg transition-colors font-medium">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  )
}
