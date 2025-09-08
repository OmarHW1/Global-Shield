"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Users,
  Globe,
  Clock,
  Award,
  Eye,
  Car,
  Home,
  Plane,
  UserCheck,
  Search,
  Star,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import { HeroRightModule, type HeroModuleType } from "@/components/hero-right-modules"

export default function HomePage() {
  const searchParams = useSearchParams()
  const moduleType = (searchParams.get("module") as HeroModuleType) || "mini-request"
  const showRight = moduleType !== "none"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/london-financial-district-hero.png"
            alt="London Financial District"
            fill
            className="object-cover -translate-x-2"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="flex justify-center mb-12">
            <Image
              src="/images/c2-white-logo.png"
              alt="Global Shield Close Protection Logo"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain opacity-90"
              priority
            />
          </div>

          <div className={showRight ? "grid lg:grid-cols-2 gap-16 items-start" : "flex items-center justify-center"}>
            {/* Left Column: Company Overview */}
            <div
              className={
                showRight
                  ? "space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-lg"
                  : "max-w-3xl text-center space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-lg"
              }
            >
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Bespoke Close Protection
                  <span className="block text-gray-300">International Risk Management</span>
                </h1>
                <div className={showRight ? "w-24 h-1 bg-white mb-8" : "w-24 h-1 bg-white mb-8 mx-auto"} />
                <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
                  Precision. Discretion. Peace of Mind.
                </h2>
                <p
                  className={
                    showRight
                      ? "text-lg text-gray-300 leading-relaxed mb-8 max-w-lg"
                      : "text-lg text-gray-300 leading-relaxed mb-8 mx-auto max-w-2xl"
                  }
                >
                  Global Shield Protection provides tailored security services for high-net-worth individuals,
                  celebrities, executives, and diplomats. With a team of elite professionals from military and
                  intelligence backgrounds, we ensure protection at the most sensitive and high-profile events
                  worldwide.
                </p>
              </div>

              <div
                className={
                  showRight ? "flex flex-col sm:flex-row gap-4" : "flex flex-col sm:flex-row gap-4 justify-center"
                }
              >
                <Link href="/request">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                    Request Protection
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Conditionally rendered module */}
            {showRight && (
              <div className="space-y-6">
                <HeroRightModule type={moduleType} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Elite Protection Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Global Shield Protection delivers world-class close protection services to high-net-worth individuals,
              celebrities, executives, and diplomats. Our team of military trained operatives provides discreet,
              professional security solutions tailored to your unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600 font-medium">VIP Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">Global</div>
              <div className="text-gray-600 font-medium">Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your specific needs and risk profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Close Protection",
                desc: "Personal bodyguard services for high-risk individuals",
                slug: "close-protection",
              },
              {
                icon: Car,
                title: "Secure Transport",
                desc: "Specialist vehicles and secure transportation solutions",
                slug: "secure-transport",
              },
              {
                icon: Home,
                title: "Residential Security",
                desc: "Comprehensive home and property protection",
                slug: "residential-security",
              },
              {
                icon: Plane,
                title: "Travel Security",
                desc: "International travel risk assessment and protection",
                slug: "travel-security",
              },
              {
                icon: UserCheck,
                title: "Celebrity/VIP Escort",
                desc: "Discreet protection for public figures and celebrities",
                slug: "celebrity-vip-escort",
              },
              {
                icon: Search,
                title: "Intelligence & Surveillance",
                desc: "Threat assessment and intelligence gathering",
                slug: "intelligence-surveillance",
              },
            ].map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Why Choose Global Shield</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Professionally Trained",
                desc: "Elite personnel with proven military and security backgrounds",
              },
              {
                icon: Eye,
                title: "Confidential & NDA Compliant",
                desc: "Absolute discretion and confidentiality guaranteed",
              },
              {
                icon: Clock,
                title: "24/7 International Coverage",
                desc: "Round-the-clock protection wherever you are",
              },
              {
                icon: Shield,
                title: "Tailored Risk Assessments",
                desc: "Customized security solutions for your unique needs",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO: Educational + City Coverage */}
      <section className="py-20 bg-gray-50" aria-label="Close protection guide and global city coverage">
        <div className="max-w-6xl px-4 mx-auto py-0">
          <header className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Close Protection Explained — How It Works & Where We Operate
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive guide to close protection for high-profile clients, plus operational insights for{" "}
              <strong>London</strong>, <strong>Paris</strong>, <strong>Monaco</strong>, <strong>Mykonos</strong>.
            </p>
          </header>

          <div className="prose prose-lg prose-gray max-w-4xl mx-auto">
            {/* What is Close Protection */}
            <h3 className="text-2xl font-bold text-black mb-4 mt-12">What Is Close Protection?</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-normal">
              <strong>Close protection</strong>, often referred to as <strong>bodyguard services</strong> or{" "}
              <strong>personal security</strong>, is the professional discipline of safeguarding a client’s life,
              privacy, and freedom of movement through advanced security measures. Our{" "}
              <strong>SIA-licensed close protection officers</strong> (CPOs) combine discreet physical presence with{" "}
              <strong>proactive risk assessment</strong> and <strong>operational planning</strong> to deter threats
              before they materialise. This ensures our clients can maintain their lifestyle and business activities
              while remaining <strong>safe</strong> and <strong>secure</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Unlike general security guards, <strong>close protection services</strong> integrate{" "}
              <strong>route planning</strong>, <strong>protective surveillance</strong>,{" "}
              <strong>secure transportation</strong>, <strong>residential security</strong>, and{" "}
              <strong>travel risk management</strong> into a single, intelligence-led operation. This holistic approach
              addresses vulnerabilities across every aspect of a client’s daily routine, whether in the UK or abroad.
            </p>

            {/* Who needs CP */}
            <h3 className="text-2xl font-bold text-black mb-4 mt-12">Who Needs Close Protection Services?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Typical beneficiaries include <strong>business executives</strong>,{" "}
              <strong>celebrities and public figures</strong>, <strong>high-net-worth families</strong>,{" "}
              <strong>diplomats and government officials</strong>, and{" "}
              <strong>individuals facing specific threats</strong>. Protection becomes particularly crucial during
              international travel, public appearances, high-value asset movements, and periods of elevated risk
              exposure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              If your profile, daily routine, or schedule follows predictable patterns,{" "}
              <strong>a tailored protection plan</strong> significantly reduces opportunities for{" "}
              <strong>hostile surveillance</strong> and <strong>targeted criminal activity</strong>. Our risk
              assessments identify vulnerabilities that clients may not have considered, from digital footprints to
              routine travel routes.
            </p>

            {/* How we operate */}
            <h3 className="text-2xl font-bold text-black mb-4 mt-12">How Our Protection Services Work</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every assignment begins with a confidential consultation and comprehensive risk assessment tailored to
              your specific circumstances. We combine protective surveillance, strategic movement planning, and{" "}
              <a href="/services/secure-transport" className="text-black underline hover:text-gray-700">
                secure transport solutions
              </a>{" "}
              to control exposure points whilst maintaining operational flexibility.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our{" "}
              <a href="/services/close-protection" className="text-black underline hover:text-gray-700">
                close protection officers
              </a>{" "}
              provide an adaptable security shield around principals, adjusting their posture based on threat levels and
              environmental factors. Where appropriate, we integrate{" "}
              <a href="/services/residential-security" className="text-black underline hover:text-gray-700">
                residential security measures
              </a>{" "}
              to create secure home environments and reduce overall attack surfaces.
            </p>

            {/* Why Global Shield */}
            <h3 className="text-2xl font-bold text-black mb-4 mt-12">Why Choose Global Shield Close Protection</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our protection teams consist of <strong>highly trained security professionals</strong> with specialist
              skills in <strong>risk assessment</strong>, <strong>threat prevention</strong>, and{" "}
              <strong>close protection</strong>. They operate under strict confidentiality agreements and uphold the
              highest professional standards. We adapt our operational posture—from discreet plain clothes deployment to
              a visible deterrent presence—according to your lifestyle, venue requirements, and media sensitivity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              The result is measured, unobtrusive protection that enables normal life whilst materially reducing
              security risks. Our approach prioritises <strong>discretion</strong> and <strong>professionalism</strong>,
              ensuring that protection enhances rather than restricts your daily activities and business operations.
            </p>

            {/* City-specific coverage */}
            <h3 className="text-2xl font-bold text-black mb-4 mt-12">
              Close Protection by City: Global Operational Insights
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We provide close protection services in <strong>London</strong>, across the{" "}
              <strong>United Kingdom</strong>, and <strong>internationally</strong> through our global network. Below
              are operational insights for key cities where we regularly deploy protection teams, helping clients
              understand location-specific security considerations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-black mb-3">London, United Kingdom</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London's security landscape includes targeted luxury watch robberies in Mayfair, hostile surveillance
                  near high-end retail districts, and persistent paparazzi pressure outside premium hotels and
                  entertainment venues. Our London close protection teams coordinate secure arrivals and departures,
                  strategic vehicle positioning, and venue liaison to maintain client privacy whilst managing
                  operational pace.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-black mb-3">Paris, France</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  High-footfall tourist zones and fashion industry events demand precise movement control and crowd
                  management expertise. Our Paris operations focus on discrete hotel exits, secure routing along the
                  Right Bank and Left Bank, and comprehensive contingency planning around protest activity and public
                  demonstrations that can disrupt travel plans.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-black mb-3">Monaco</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Monaco's seasonal population density, marina access requirements, and high-profile event calendar
                  (including Grand Prix week) necessitate layered security assets. Our Monaco protection services
                  encompass close protection officers, yacht access control, and secure transfers between private
                  villas, heliports, and luxury hotels throughout the principality.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-black mb-3">Mykonos, Greece</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mykonos’ vibrant nightlife, luxury villas, and busy summer crowds create a unique security landscape. 
                  High-profile visitors and seasonal congestion can heighten risks of opportunistic crime and privacy breaches. 
                  We provide discreet close protection and secure transport solutions, tailored to the island’s environment, 
                  ensuring both safety and unobtrusive service.
                </p>
              </div>
            </div>

            {/* Enhanced CTA inside the text block */}
            <div className="bg-gradient-to-r from-black to-gray-800 p-8 rounded-lg border border-gray-200 mt-12 text-white">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3 text-white">Ready to Secure Your Next Move?</h4>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    Whether you're planning international travel, hosting a high-profile event, or need ongoing
                    protection, our expert team provides tailored security solutions that adapt to your lifestyle and
                    requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Explore Protection Services
                    </a>
                    <a
                      href="/request"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Request Consultation
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Confidential consultation • 2-hour response time • No obligation
                  </p>
                </div>
              </div>
            </div>

            {/* Related Reading */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-black mb-4">Related Reading</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/case-studies" className="text-black underline hover:text-gray-700">
                    Case Studies: Real-World Protection Scenarios
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-black underline hover:text-gray-700">
                    Industry-Specific Security Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-black underline hover:text-gray-700">
                    Client Testimonials and Success Stories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Risks & How We Respond */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Real World Risks & How We Respond</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn how real-world risks unfold — and how our team would have kept our clients secure, discreetly and
              effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Knightsbridge Watch Attack Analysis */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                
                <h3 className="font-bold text-black mb-2">Knightsbridge Watch Attack</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "A targeted attack in London's luxury district exposes the risks facing high-net-worth individuals —
                  and the critical role of proactive security."
                </p>
                <Link href="/blog/knightsbridge-watch-attack-analysis">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Read Full Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Luxury Watch Robbery Analysis */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                
                <h3 className="font-bold text-black mb-2">Luxury Watch Robbery Prevention</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "A recent incident in Mayfair saw a targeted luxury watch robbery in broad daylight. Here's how we
                  would have prevented such an attack through proactive measures."
                </p>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Read Full Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Celebrity Stalker Case Study */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                
                <h3 className="font-bold text-black mb-2">Celebrity Stalking Campaign</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "When a Hollywood star faced escalating threats from an obsessive fan, our team implemented a
                  comprehensive protection strategy to neutralize the threat."
                </p>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Read Full Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Executive Protection Trends */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                
                <h3 className="font-bold text-black mb-2">Executive Protection Trends 2025</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "The landscape of executive protection continues to evolve with new technologies and threat vectors.
                  Key trends shaping close protection services."
                </p>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Read Full Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Residential Security Best Practices */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                
                <h3 className="font-bold text-black mb-2">Residential Security for UHNW Families</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Ultra-high-net-worth families require sophisticated residential security that balances protection
                  with privacy and comfort."
                </p>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Read Full Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* High-Profile Event Security */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                
                <h3 className="font-bold text-black mb-2">High-Profile Event Security</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Managing security for red carpet events, premieres, and high-profile gatherings requires specialized
                  expertise in crowd control and media management."
                </p>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Read Full Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/case-studies">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium">
                Read All Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Client Testimonials</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed italic">
                  "Really impressed with your professionalism and the quality of your work. They did also mention your
                  attire and the way you handled things on the job, which they appreciated."
                </p>
                <div className="font-medium text-black">- PA of an UHNWI</div>
                <div className="border-t pt-3">
                  <p className="text-gray-600 mb-4 leading-relaxed italic">"Very Professional"</p>
                  <div className="font-medium text-black">- HNWI</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "A selection of top experienced drivers from United International Chauffeurs, Scotland had the
                  pleasure of working closely with Global Shield Ltd on a 4 day VIP visit to Scotland. A thoroughly
                  enjoyable experience for the driving team working closely with such a consummate professional team."
                </p>
                <div className="font-medium text-black">United International Chauffeurs, Scotland</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "The team’s professionalism, attention to detail, and ability to operate seamlessly in high-pressure
                  environments were exceptional. A first-class service from start to finish.."
                </p>
                <div className="font-medium text-black">Executive Producer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us - Recruitment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Join Us</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Are you an elite security professional looking to join the world's most prestigious protection team? We're
              always seeking exceptional individuals with military, law enforcement, or specialized security
              backgrounds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">What We're Looking For</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Military or law enforcement background preferred
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    SIA Close Protection License (or ability to obtain)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Exceptional physical fitness and mental resilience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Impeccable presentation and communication skills
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Ability to travel internationally at short notice
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Absolute discretion and confidentiality
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Ready to Apply?</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Send us your CV and cover letter. We'll review your application and contact qualified candidates for a
                confidential interview.
              </p>

              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Email your application to: <br />
                    <a
                      href="mailto:careers@globalshieldprotection.com"
                      className="text-black font-medium hover:underline"
                    >
                      careers@globalshieldprotection.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  All applications are treated with strict confidentiality. Only successful candidates will be
                  contacted.
                  <strong>
                    {" "}
                    If you attempt to contact us through any method other than the careers email, your application will
                    be blacklisted.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Trusted Protection?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether in the UK or abroad, book a free confidential consultation today and discover how we can protect
            what matters most to you.
          </p>
          <Link href="/request">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
