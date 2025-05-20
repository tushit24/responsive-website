import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react"

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/website-hosting-concept.jpeg"
            alt="Web development"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Web Development</h1>
            <p className="text-xl mb-8 text-purple-100">
              We build custom, high-performance websites and web applications that deliver exceptional user experiences
              and drive business results.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Web Development Services</h2>
            <p className="mb-8">
              From responsive websites to complex web applications, our development team creates tailored solutions that
              align with your business goals and exceed user expectations.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Globe className="text-purple-400 h-8 w-8" />,
                  title: "Custom Website Development",
                  description:
                    "Tailored websites designed to meet your specific business requirements and brand identity.",
                },
                {
                  icon: <Code className="text-purple-400 h-8 w-8" />,
                  title: "Web Application Development",
                  description:
                    "Complex web applications with advanced functionality, user management, and integrations.",
                },
                {
                  icon: <Smartphone className="text-purple-400 h-8 w-8" />,
                  title: "Responsive Design",
                  description: "Websites that provide optimal viewing experience across all devices and screen sizes.",
                },
                {
                  icon: <Database className="text-purple-400 h-8 w-8" />,
                  title: "E-commerce Solutions",
                  description: "Robust online stores with secure payment processing and inventory management.",
                },
              ].map((service, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-purple-100">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src="/images/web-development.png" alt="Web development process" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="bg-gradient-to-r from-purple-800 to-pink-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "We create wireframes and design mockups that align with your brand and user needs.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our developers build your website or application using the latest technologies and best practices.",
              },
              {
                step: "04",
                title: "Testing & Launch",
                description:
                  "We thoroughly test and optimize before launching your project to ensure everything works perfectly.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{phase.title}</h3>
                <p className="text-purple-100">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
          <p className="max-w-2xl mx-auto text-purple-100">
            We leverage the latest technologies and frameworks to build modern, scalable, and high-performance web
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React", image: "/placeholder.svg?height=200&width=200" },
            { name: "Next.js", image: "/placeholder.svg?height=200&width=200" },
            { name: "Node.js", image: "/placeholder.svg?height=200&width=200" },
            { name: "TypeScript", image: "/placeholder.svg?height=200&width=200" },
            { name: "Vue.js", image: "/placeholder.svg?height=200&width=200" },
            { name: "Angular", image: "/placeholder.svg?height=200&width=200" },
            { name: "PHP/Laravel", image: "/placeholder.svg?height=200&width=200" },
            { name: "WordPress", image: "/placeholder.svg?height=200&width=200" },
          ].map((tech, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-all">
              <img src={tech.image || "/placeholder.svg"} alt={tech.name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gradient-to-b from-pink-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Web Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                client: "Fashion Retailer",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "A custom e-commerce solution that increased online sales by 45% within three months of launch.",
              },
              {
                title: "SaaS Dashboard",
                client: "Tech Startup",
                image: "/placeholder.svg?height=600&width=800",
                description: "An intuitive admin dashboard that streamlined operations and improved user engagement.",
              },
              {
                title: "Educational Platform",
                client: "Online Learning Company",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "A comprehensive learning management system with interactive features and content delivery.",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/images/project-1.png"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-pink-300 mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-purple-100 mb-4">{project.description}</p>
                  <Link href="#" className="inline-flex items-center text-pink-300 hover:text-pink-100 font-medium">
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
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your web development vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 py-3 px-8 rounded-full text-lg font-medium transition-colors"
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
