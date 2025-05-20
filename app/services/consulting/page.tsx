import Link from "next/link"
import { ArrowRight, LineChart, Lightbulb, TrendingUp, Users, Target, BarChart } from "lucide-react"

export default function Consulting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/consulting-service.jpeg"
            alt="Digital Consulting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Consulting</h1>
            <p className="text-xl mb-8 text-gray-300">
              Strategic guidance and expertise to help your business navigate digital transformation, optimize
              processes, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Consulting Services</h2>
            <p className="mb-8">
              Our team of experienced consultants combines industry knowledge, technical expertise, and strategic
              thinking to help your business thrive in the digital landscape.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <LineChart className="text-teal-400 h-8 w-8" />,
                  title: "Digital Strategy",
                  description:
                    "Comprehensive digital roadmaps aligned with your business objectives and market opportunities.",
                },
                {
                  icon: <TrendingUp className="text-teal-400 h-8 w-8" />,
                  title: "Business Process Optimization",
                  description: "Streamlining operations and workflows to improve efficiency and reduce costs.",
                },
                {
                  icon: <Lightbulb className="text-teal-400 h-8 w-8" />,
                  title: "Technology Assessment",
                  description:
                    "Evaluating your current tech stack and recommending improvements to meet business needs.",
                },
                {
                  icon: <Users className="text-teal-400 h-8 w-8" />,
                  title: "Digital Transformation",
                  description:
                    "Guiding your organization through change to embrace digital opportunities and innovation.",
                },
              ].map((service, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/consulting-service.jpeg"
              alt="Digital consulting session"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consulting Approach</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description: "We conduct a thorough assessment of your current situation, challenges, and objectives.",
              },
              {
                step: "02",
                title: "Analyze",
                description:
                  "We identify opportunities, gaps, and potential solutions based on data and best practices.",
              },
              {
                step: "03",
                title: "Strategize",
                description: "We develop a tailored roadmap with clear recommendations and implementation plans.",
              },
              {
                step: "04",
                title: "Implement",
                description: "We guide you through execution, providing expertise and support at every step.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Our consultants bring specialized knowledge across a wide range of industries and digital disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="h-10 w-10 text-teal-400 mb-4" />,
              title: "E-commerce Strategy",
              description:
                "Optimizing online sales channels, customer journeys, and conversion funnels to drive revenue growth.",
            },
            {
              icon: <BarChart className="h-10 w-10 text-teal-400 mb-4" />,
              title: "Data Analytics",
              description:
                "Leveraging data to gain insights, inform decision-making, and identify business opportunities.",
            },
            {
              icon: <Users className="h-10 w-10 text-teal-400 mb-4" />,
              title: "Customer Experience",
              description:
                "Enhancing customer satisfaction and loyalty through improved digital touchpoints and journeys.",
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-teal-400 mb-4" />,
              title: "Digital Marketing",
              description:
                "Developing effective marketing strategies to increase brand awareness and customer acquisition.",
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-teal-400 mb-4" />,
              title: "Innovation Management",
              description: "Fostering a culture of innovation and implementing processes to bring new ideas to market.",
            },
            {
              icon: <LineChart className="h-10 w-10 text-teal-400 mb-4" />,
              title: "Technology Selection",
              description: "Evaluating and recommending the right technologies to meet your business requirements.",
            },
          ].map((expertise, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center">{expertise.icon}</div>
              <h3 className="text-xl font-bold mb-3">{expertise.title}</h3>
              <p className="text-gray-300">{expertise.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gradient-to-b from-slate-900 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation",
                client: "Manufacturing Company",
                image: "/images/consulting-service.jpeg",
                description:
                  "Guided a traditional manufacturer through digital transformation, resulting in 30% operational efficiency improvement.",
              },
              {
                title: "E-commerce Optimization",
                client: "Retail Brand",
                image: "/images/consulting-service.jpeg",
                description:
                  "Revamped online sales strategy and customer journey, increasing conversion rates by 45% and average order value by 25%.",
              },
              {
                title: "Data Strategy Implementation",
                client: "Financial Services Firm",
                image: "/images/consulting-service.jpeg",
                description:
                  "Developed and implemented a comprehensive data strategy that improved decision-making and created new revenue streams.",
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
                  <div className="text-teal-400 mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Link href="#" className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium">
                    Read case study <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "The strategic guidance provided by the consulting team transformed our approach to digital. Their insights were invaluable in helping us navigate our digital transformation journey.",
              author: "Jennifer Williams",
              position: "CIO, Enterprise Manufacturing",
              image: "/images/team-1.png",
            },
            {
              quote:
                "Their consultants took the time to truly understand our business challenges before proposing solutions. The resulting strategy addressed our specific needs and has delivered measurable results.",
              author: "Mark Thompson",
              position: "CEO, E-commerce Startup",
              image: "/images/team-1.png",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="italic text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-400"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-teal-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gradient-to-r from-gray-800 to-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Consulting Team</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Robert Chen",
                role: "Principal Consultant",
                image: "/images/team-1.png",
                expertise: "Digital Strategy, Business Transformation",
              },
              {
                name: "Sarah Johnson",
                role: "Senior Consultant",
                image: "/images/team-1.png",
                expertise: "E-commerce, Customer Experience",
              },
              {
                name: "Michael Davis",
                role: "Technology Consultant",
                image: "/images/team-1.png",
                expertise: "Enterprise Architecture, Cloud Solutions",
              },
              {
                name: "Amanda Wilson",
                role: "Data Strategy Consultant",
                image: "/images/team-1.png",
                expertise: "Analytics, Business Intelligence",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-teal-400 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-300">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-600 to-slate-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our expertise can help your business thrive in
            the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-teal-500 text-white hover:bg-teal-600 py-3 px-8 rounded-full text-lg font-medium transition-colors"
            >
              Schedule a Consultation
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
