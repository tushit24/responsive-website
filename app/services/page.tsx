export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl mb-8">Explore the services we offer.</p>

        <div className="grid md:grid-cols-3 gap-8 my-12">
          {["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6"].map((service, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">{service}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
