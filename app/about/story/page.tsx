export default function Story() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
        <p className="text-xl mb-12 max-w-3xl text-green-100">
          From humble beginnings to industry leadership, our journey has been defined by innovation, perseverance, and a
          commitment to excellence.
        </p>

        {/* Timeline */}
        <div className="relative border-l-4 border-green-500 pl-10 ml-6 space-y-20">
          {/* 2010 - Founding */}
          <div className="relative">
            <div className="absolute -left-14 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="absolute -left-24 top-0 text-green-300 font-bold">2010</div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Beginning</h2>
                <p className="mb-4 text-green-100">
                  Our agency was founded in 2010 by Alex Morgan, a former tech executive with a vision to create a
                  different kind of digital agency—one that combined technical excellence with strategic business
                  thinking.
                </p>
                <p className="mb-4 text-green-100">
                  Starting with just three team members in a small office space, we focused initially on web development
                  for local businesses. Our commitment to quality and client satisfaction quickly earned us a reputation
                  for excellence.
                </p>
                <p className="text-green-100">
                  Within our first year, we had grown to a team of eight and completed over 20 projects for clients
                  across various industries.
                </p>
              </div>
              <div>
                <img src="/images/office.png" alt="Our first office in 2010" className="rounded-lg shadow-xl" />
                <p className="text-sm text-green-300 mt-2 italic">Our first office space in 2010</p>
              </div>
            </div>
          </div>

          {/* 2013 - Growth */}
          <div className="relative">
            <div className="absolute -left-14 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div className="absolute -left-24 top-0 text-green-300 font-bold">2013</div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img src="/images/team-meeting.png" alt="Team expansion in 2013" className="rounded-lg shadow-xl" />
                <p className="text-sm text-green-300 mt-2 italic">Our growing team in 2013</p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Expansion & Recognition</h2>
                <p className="mb-4 text-green-100">
                  By 2013, we had expanded our services to include UI/UX design and digital marketing. Our team had
                  grown to 15 talented professionals, and we moved to a larger office to accommodate our growth.
                </p>
                <p className="mb-4 text-green-100">
                  This was also the year we won our first industry award for a comprehensive e-commerce solution we
                  developed for a retail client, which increased their online sales by 200% in the first six months.
                </p>
                <p className="text-green-100">
                  We began working with larger clients and more complex projects, establishing ourselves as a serious
                  player in the digital agency space.
                </p>
              </div>
            </div>
          </div>

          {/* 2016 - Innovation */}
          <div className="relative">
            <div className="absolute -left-14 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div className="absolute -left-24 top-0 text-green-300 font-bold">2016</div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Innovation & Leadership</h2>
                <p className="mb-4 text-green-100">
                  2016 marked a significant turning point as we launched our own proprietary content management system,
                  designed specifically for enterprise clients with complex needs. This innovation set us apart from
                  competitors and attracted high-profile clients.
                </p>
                <p className="mb-4 text-green-100">
                  We expanded our leadership team, bringing on Samantha Chen as Creative Director and David Wilson as
                  CTO to help guide our growing organization.
                </p>
                <p className="text-green-100">
                  By the end of 2016, we had a team of 30 and had opened a second office location to better serve
                  clients on the East Coast.
                </p>
              </div>
              <div>
                <img
                  src="/images/web-development.png"
                  alt="Product launch event in 2016"
                  className="rounded-lg shadow-xl"
                />
                <p className="text-sm text-green-300 mt-2 italic">Launch event for our proprietary CMS in 2016</p>
              </div>
            </div>
          </div>

          {/* 2019 - Global Expansion */}
          <div className="relative">
            <div className="absolute -left-14 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div className="absolute -left-24 top-0 text-green-300 font-bold">2019</div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img src="/images/team-meeting.png" alt="International team in 2019" className="rounded-lg shadow-xl" />
                <p className="text-sm text-green-300 mt-2 italic">Our international team gathering in 2019</p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Global Expansion</h2>
                <p className="mb-4 text-green-100">
                  In 2019, we took our first steps toward international expansion, opening an office in London to serve
                  European clients. Our team had grown to over 40 professionals across three locations.
                </p>
                <p className="mb-4 text-green-100">
                  We also launched our agency's first SaaS product, a digital asset management solution that quickly
                  gained traction in the market and created a new revenue stream for the business.
                </p>
                <p className="text-green-100">
                  By this point, we had worked with over 200 clients, including several Fortune 500 companies and
                  innovative startups that went on to achieve significant success.
                </p>
              </div>
            </div>
          </div>

          {/* Present Day */}
          <div className="relative">
            <div className="absolute -left-14 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              5
            </div>
            <div className="absolute -left-24 top-0 text-green-300 font-bold">Today</div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Where We Are Today</h2>
                <p className="mb-4 text-green-100">
                  Today, we're a team of over 50 digital experts across four global offices. We've evolved into a
                  full-service digital agency with specialized teams in development, design, strategy, and marketing.
                </p>
                <p className="mb-4 text-green-100">
                  We've completed more than 500 projects for clients in 15 countries, establishing ourselves as a leader
                  in creating digital experiences that drive business results.
                </p>
                <p className="text-green-100">
                  While we've grown significantly, we remain committed to the core values that defined us from the
                  beginning: innovation, excellence, integrity, and collaboration. These principles continue to guide
                  every project we undertake and every client relationship we build.
                </p>
              </div>
              <div>
                <img src="/images/office.png" alt="Our team today" className="rounded-lg shadow-xl" />
                <p className="text-sm text-green-300 mt-2 italic">Our headquarters today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 bg-gradient-to-r from-green-800 to-teal-800 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Looking to the Future</h2>
          <p className="text-xl mb-6 text-green-100">
            As we look ahead, we're excited about the opportunities to continue growing and evolving. Our vision for the
            future includes:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Expanding Our Global Reach</h3>
              <p className="text-green-100">
                We plan to open additional international offices to better serve clients around the world and tap into
                diverse talent pools.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Advancing Technology</h3>
              <p className="text-green-100">
                We're investing in emerging technologies like AI, AR/VR, and blockchain to create innovative solutions
                for our clients.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sustainable Practices</h3>
              <p className="text-green-100">
                We're committed to implementing environmentally sustainable practices throughout our business
                operations.
              </p>
            </div>
          </div>

          <p className="text-green-100">
            Whatever the future holds, we remain dedicated to our mission: helping businesses succeed in the digital
            world through innovative, strategic, and beautifully crafted digital experiences.
          </p>
        </div>
      </div>
    </div>
  )
}
