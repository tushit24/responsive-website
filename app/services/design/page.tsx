import Link from "next/link"
import { ArrowRight, Layers, PenTool, Eye, Users } from "lucide-react"

export default function Design() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img src="/images/ui-ux-design.jpeg" alt="UI/UX Design" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-xl mb-8 text-indigo-100">
              We create intuitive, engaging, and user-centered designs that elevate your digital products and deliver
              exceptional user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Design Services</h2>
            <p className="mb-8">
              Our design team combines creativity with strategic thinking to create digital experiences that are not
              only visually stunning but also highly functional and user-friendly.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <PenTool className="text-indigo-400 h-8 w-8" />,
                  title: "UI Design",
                  description: "Beautiful, modern interfaces that align with your brand and engage your users.",
                },
                {
                  icon: <Users className="text-indigo-400 h-8 w-8" />,
                  title: "UX Design",
                  description:
                    "User-centered design that creates intuitive, seamless experiences across all touchpoints.",
                },
                {
                  icon: <Layers className="text-indigo-400 h-8 w-8" />,
                  title: "Design Systems",
                  description:
                    "Scalable design systems that ensure consistency and efficiency across your digital products.",
                },
                {
                  icon: <Eye className="text-indigo-400 h-8 w-8" />,
                  title: "Usability Testing",
                  description: "Comprehensive testing to validate design decisions and optimize user experiences.",
                },
              ].map((service, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-indigo-100">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src="/images/ui-ux-design.jpeg" alt="UI/UX Design process" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Our Design Process */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Design Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description:
                  "We conduct thorough research to understand your users, business goals, and market context.",
              },
              {
                step: "02",
                title: "Ideation",
                description:
                  "We explore multiple design concepts and solutions through sketches, wireframes, and prototypes.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "We create high-fidelity designs with attention to detail, accessibility, and brand consistency.",
              },
              {
                step: "04",
                title: "Testing & Iteration",
                description: "We validate designs through user testing and refine based on feedback and insights.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{phase.title}</h3>
                <p className="text-indigo-100">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Design Principles</h2>
          <p className="max-w-2xl mx-auto text-indigo-100">
            These core principles guide our design process and ensure we deliver exceptional results for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "User-Centered",
              description:
                "We put users at the heart of everything we design, creating experiences that meet their needs and exceed their expectations.",
            },
            {
              title: "Purposeful",
              description:
                "Every design decision we make serves a specific purpose and aligns with your business objectives.",
            },
            {
              title: "Accessible",
              description:
                "We design inclusive experiences that work for all users, regardless of their abilities or circumstances.",
            },
            {
              title: "Consistent",
              description:
                "We maintain consistency across all touchpoints to create cohesive and intuitive user experiences.",
            },
            {
              title: "Delightful",
              description:
                "We add thoughtful details and interactions that create memorable and enjoyable experiences.",
            },
            {
              title: "Measurable",
              description: "We establish clear metrics to measure the success and impact of our design solutions.",
            },
          ].map((principle, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-all">
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-indigo-100">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gradient-to-b from-purple-900 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Design Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Redesign",
                client: "Fashion Brand",
                image: "/images/project-1.png",
                description: "A complete redesign that improved conversion rates by 35% and reduced cart abandonment.",
              },
              {
                title: "Mobile Banking App",
                client: "Financial Institution",
                image: "/images/project-1.png",
                description:
                  "An intuitive banking app that increased user engagement and received a 4.8/5 star rating.",
              },
              {
                title: "Healthcare Portal",
                client: "Medical Services Provider",
                image: "/images/project-1.png",
                description: "A patient portal that simplified appointment booking and improved patient satisfaction.",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-indigo-300 mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-indigo-100 mb-4">{project.description}</p>
                  <Link href="#" className="inline-flex items-center text-indigo-300 hover:text-indigo-100 font-medium">
                    View case study <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our design expertise can transform your digital products and delight your
            users.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 hover:bg-indigo-50 py-3 px-8 rounded-full text-lg font-medium transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full text-lg font-medium transition-colors"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
