import { CheckCircle, Target, Users, Lightbulb, Heart } from "lucide-react"

export default function Mission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
        <p className="text-xl mb-12 max-w-3xl text-green-100">
          We're driven by a clear purpose: to create digital experiences that transform businesses and delight users.
          Our mission guides everything we do.
        </p>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-800 to-teal-800 rounded-lg p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission Statement</h2>
          <p className="text-xl md:text-2xl italic max-w-4xl mx-auto">
            "To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and
            create lasting value in an ever-evolving digital landscape."
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Target className="text-green-400 h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="mb-6 text-green-100">
              We envision a world where technology seamlessly enhances human experiences and enables businesses to reach
              their full potential. We strive to be at the forefront of this digital transformation, setting new
              standards for excellence and innovation.
            </p>
            <p className="mb-6 text-green-100">
              Our long-term vision is to become the most trusted digital partner for forward-thinking organizations
              worldwide, known for our expertise, integrity, and the measurable impact we create for our clients.
            </p>
            <p className="text-green-100">
              We see a future where our solutions not only drive business success but also contribute positively to
              society by promoting accessibility, sustainability, and ethical technology practices.
            </p>
          </div>

          <div>
            <img src="/images/team-meeting.png" alt="Team vision session" className="rounded-lg shadow-xl" />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Heart className="text-green-400 h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-green-400 mb-4" />,
                title: "Innovation",
                description:
                  "We constantly push boundaries and embrace new technologies to find creative solutions to complex problems.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-green-400 mb-4" />,
                title: "Excellence",
                description:
                  "We strive for the highest quality in everything we do, from code to design to client communication.",
              },
              {
                icon: <Users className="h-10 w-10 text-green-400 mb-4" />,
                title: "Collaboration",
                description:
                  "We believe the best results come from true partnership with our clients and teamwork within our organization.",
              },
              {
                icon: <Target className="h-10 w-10 text-green-400 mb-4" />,
                title: "Integrity",
                description:
                  "We build relationships based on trust, transparency, and honesty, always doing what's right for our clients.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-lg text-center">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-green-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Strategic Goals</h2>

          <div className="space-y-6">
            {[
              {
                title: "Client Success",
                description:
                  "Deliver measurable results that help our clients achieve their business objectives and exceed their expectations.",
                metrics: [
                  "98% client satisfaction rate",
                  "85% client retention",
                  "40% average improvement in key performance metrics",
                ],
              },
              {
                title: "Technical Excellence",
                description:
                  "Maintain the highest standards of technical quality and stay at the forefront of digital innovation.",
                metrics: [
                  "Regular team training and certification",
                  "Contribution to open-source projects",
                  "Implementation of emerging technologies",
                ],
              },
              {
                title: "Team Growth",
                description:
                  "Nurture a diverse, talented team and provide opportunities for professional development and advancement.",
                metrics: [
                  "Employee satisfaction and retention",
                  "Skills development programs",
                  "Work-life balance initiatives",
                ],
              },
              {
                title: "Sustainable Growth",
                description:
                  "Expand our business in a way that's sustainable, ethical, and creates long-term value for all stakeholders.",
                metrics: ["Year-over-year revenue growth", "Geographic expansion", "New service offerings"],
              },
            ].map((goal, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">{goal.title}</h3>
                <p className="mb-4 text-green-100">{goal.description}</p>
                <div>
                  <h4 className="font-bold mb-2 text-green-300">Success Metrics:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-green-100">
                    {goal.metrics.map((metric, idx) => (
                      <li key={idx}>{metric}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Responsibility */}
        <div className="bg-gradient-to-r from-teal-800 to-green-800 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Social Responsibility</h2>
          <p className="text-xl mb-8 text-green-100">
            We believe in using our skills and resources to make a positive impact beyond our client work.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Environmental Sustainability</h3>
              <p className="text-green-100 mb-4">
                We're committed to reducing our environmental footprint through sustainable office practices, remote
                work options, and eco-friendly digital solutions.
              </p>
              <p className="text-green-100">Our goal is to achieve carbon neutrality by 2025.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Digital Inclusion</h3>
              <p className="text-green-100 mb-4">
                We design all our solutions with accessibility in mind, ensuring digital experiences are available to
                users of all abilities.
              </p>
              <p className="text-green-100">
                We also provide pro bono services to nonprofits working to bridge the digital divide.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Education & Mentorship</h3>
              <p className="text-green-100 mb-4">
                We support the next generation of digital professionals through internship programs, educational
                workshops, and mentorship opportunities.
              </p>
              <p className="text-green-100">Our team regularly volunteers at local schools and coding bootcamps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
