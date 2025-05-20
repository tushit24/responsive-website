import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="Digital agency hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforming Ideas Into <span className="text-blue-400">Digital Reality</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We're a creative digital agency specializing in web development, design, and digital marketing solutions
              that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-medium transition-colors flex items-center gap-2"
              >
                Our Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-8 rounded-full text-lg font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We deliver exceptional digital experiences through our comprehensive range of services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              description:
                "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
              image: "/images/website-hosting-concept.jpeg",
              link: "/services/web-development",
            },
            {
              title: "Mobile Applications",
              description:
                "Native and cross-platform mobile apps that provide seamless experiences across all devices.",
              image: "/images/mobile-app-development.jpeg",
              link: "/services/mobile-apps",
            },
            {
              title: "UI/UX Design",
              description: "User-centered design that balances beautiful aesthetics with functional user experiences.",
              image: "/images/ui-ux-design.jpeg",
              link: "/services/design",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/15 transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4 text-blue-100">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-b from-indigo-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-xl mb-8 text-blue-100">
                With over a decade of experience in digital solutions, we've helped hundreds of businesses achieve their
                goals through technology and design.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team of developers, designers, and strategists",
                  "Tailored solutions that align with your business goals",
                  "Transparent communication throughout the project",
                  "Ongoing support and maintenance after launch",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600 rounded-lg opacity-20 animate-pulse"></div>
              <img
                src="/images/team-meeting.png"
                alt="Our team at work"
                className="rounded-lg relative z-10 border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Working with this team transformed our online presence. Our new website has increased conversions by 40% in just three months.",
              author: "Sarah Johnson",
              position: "Marketing Director, TechCorp",
              image: "/images/team-1.png",
            },
            {
              quote:
                "The mobile app they developed for us has received outstanding feedback from our users. The attention to detail and user experience is exceptional.",
              author: "Michael Chen",
              position: "CEO, AppStart Inc.",
              image: "/images/team-1.png",
            },
            {
              quote:
                "Their team took the time to understand our unique needs and delivered a solution that exceeded our expectations. Highly recommended!",
              author: "Emily Rodriguez",
              position: "Operations Manager, GrowthBiz",
              image: "/images/team-1.png",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/images/team-1.png"}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-400"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="italic text-blue-100">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life with our expert digital solutions.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-8 rounded-full text-lg font-medium transition-colors inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
