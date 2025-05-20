import Link from "next/link"
import { ArrowRight, Smartphone, Layers, Zap, RefreshCw } from "lucide-react"

export default function MobileApps() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mobile-app-development.jpeg"
            alt="Mobile App Development"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl mb-8 text-blue-100">
              We create innovative, high-performance mobile applications that engage users and drive business growth
              across iOS, Android, and cross-platform environments.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mobile App Services</h2>
            <p className="mb-8">
              From concept to launch and beyond, our mobile development team delivers cutting-edge applications that
              provide seamless experiences across all devices and platforms.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Smartphone className="text-blue-400 h-8 w-8" />,
                  title: "Native App Development",
                  description:
                    "Platform-specific apps for iOS and Android that leverage the full capabilities of each operating system.",
                },
                {
                  icon: <Layers className="text-blue-400 h-8 w-8" />,
                  title: "Cross-Platform Development",
                  description:
                    "Efficient solutions using React Native or Flutter to build once and deploy across multiple platforms.",
                },
                {
                  icon: <Zap className="text-blue-400 h-8 w-8" />,
                  title: "Progressive Web Apps",
                  description:
                    "Web applications that offer app-like experiences with offline capabilities and fast performance.",
                },
                {
                  icon: <RefreshCw className="text-blue-400 h-8 w-8" />,
                  title: "App Maintenance & Updates",
                  description:
                    "Ongoing support, performance optimization, and feature enhancements to keep your app competitive.",
                },
              ].map((service, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-blue-100">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/mobile-app-development.jpeg"
                alt="Mobile app development"
                className="rounded-lg h-64 object-cover"
              />
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-64 flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">200+</h3>
                  <p className="text-blue-100">Mobile Apps Delivered</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg h-64 flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
                  <p className="text-blue-100">Average App Store Rating</p>
                </div>
              </div>
              <img
                src="/images/website-hosting-concept.jpeg"
                alt="Mobile app design"
                className="rounded-lg h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our App Development Process</h2>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your business requirements, target audience, and market to define the app's scope and objectives.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our designers create intuitive user interfaces and experiences tailored to your brand and user needs.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our developers build your app using clean, efficient code and the latest technologies.",
              },
              {
                step: "04",
                title: "Testing",
                description:
                  "Rigorous quality assurance across devices and scenarios ensures your app works flawlessly.",
              },
              {
                step: "05",
                title: "Launch & Support",
                description: "We handle app store submissions and provide ongoing maintenance and updates.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{phase.title}</h3>
                <p className="text-blue-100">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            We leverage the latest mobile technologies and frameworks to build fast, secure, and feature-rich
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Swift", category: "iOS" },
            { name: "Kotlin", category: "Android" },
            { name: "React Native", category: "Cross-Platform" },
            { name: "Flutter", category: "Cross-Platform" },
            { name: "Firebase", category: "Backend" },
            { name: "AWS Amplify", category: "Backend" },
            { name: "GraphQL", category: "API" },
            { name: "REST API", category: "API" },
          ].map((tech, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">{tech.name.charAt(0)}</span>
              </div>
              <h3 className="font-medium mb-1">{tech.name}</h3>
              <p className="text-sm text-blue-300">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Apps */}
      <div className="bg-gradient-to-b from-indigo-900 to-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Mobile Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Fitness Tracker",
                client: "Wellness Company",
                image: "/images/mobile-app-development.jpeg",
                description:
                  "A comprehensive fitness app with personalized workout plans, nutrition tracking, and social features.",
              },
              {
                title: "E-commerce Mobile App",
                client: "Retail Brand",
                image: "/images/mobile-app-development.jpeg",
                description:
                  "A feature-rich shopping app with AR try-on, personalized recommendations, and seamless checkout.",
              },
              {
                title: "Financial Management App",
                client: "FinTech Startup",
                image: "/images/mobile-app-development.jpeg",
                description: "A secure banking app with expense tracking, investment tools, and financial insights.",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-300 mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-blue-100 mb-4">{project.description}</p>
                  <Link href="#" className="inline-flex items-center text-blue-300 hover:text-blue-100 font-medium">
                    View case study <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Features That Set Our Apps Apart</h2>
            <p className="mb-8">
              We build mobile applications with advanced features and capabilities that deliver exceptional user
              experiences and drive business results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Offline Functionality",
                  description: "Apps that work seamlessly even without an internet connection.",
                },
                {
                  title: "Push Notifications",
                  description: "Targeted messaging to engage users and drive app retention.",
                },
                {
                  title: "Analytics Integration",
                  description: "Detailed insights into user behavior and app performance.",
                },
                {
                  title: "Secure Authentication",
                  description: "Multiple secure login options including biometric authentication.",
                },
                {
                  title: "Cloud Synchronization",
                  description: "Seamless data syncing across multiple devices and platforms.",
                },
                {
                  title: "Accessibility",
                  description: "Inclusive design that works for users of all abilities.",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-blue-300">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Why Choose Us for Mobile Development?</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Expert team with platform-specific expertise",
                  "Focus on performance optimization and battery efficiency",
                  "Rigorous testing across devices and operating systems",
                  "Seamless integration with existing systems and APIs",
                  "Ongoing support and maintenance after launch",
                  "Transparent development process with regular updates",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="text-blue-300 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your mobile app idea to life and create an exceptional
            user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-8 rounded-full text-lg font-medium transition-colors"
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
