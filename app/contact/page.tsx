import { Mail, MapPin, Phone, Clock, Send } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img src="/images/office.png" alt="Office space" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl mb-8 text-gray-300">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Office</h3>
                  <p className="text-gray-300">123 Innovation Drive</p>
                  <p className="text-gray-300">Tech District</p>
                  <p className="text-gray-300">San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <Mail className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-300">info@digitalagency.com</p>
                  <p className="text-gray-300">support@digitalagency.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <Phone className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <Clock className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-300">Saturday: 10am - 2pm</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <div className="bg-gray-800 rounded-lg h-64 overflow-hidden">
                <img src="/images/map.png" alt="Office location map" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="privacy" className="mr-2 h-4 w-4" />
                <label htmlFor="privacy" className="text-sm text-gray-300">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "What is your typical project timeline?",
              answer:
                "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
            },
            {
              question: "Do you offer ongoing maintenance?",
              answer:
                "Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. Our team can handle regular updates, security monitoring, and content changes.",
            },
            {
              question: "What is your payment structure?",
              answer:
                "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we may establish milestone payments throughout the development process.",
            },
            {
              question: "Can you work with our existing brand guidelines?",
              answer:
                "We're experienced in working with established brand guidelines and ensuring all digital assets align with your existing brand identity and voice.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
