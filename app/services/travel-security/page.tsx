import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  Shield,
  Clock,
  Eye,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  AlertTriangle,
  Briefcase,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TravelSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/international-travel-security.jpg"
            alt="International travel security operations"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Travel Security Services</h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              International travel risk assessment and protection services for high-profile individuals. Our global
              network ensures comprehensive security coverage wherever your business or personal travel takes you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Secure My Travel
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                >
                  Risk Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Global Travel Protection</h2>
              <div className="w-24 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our travel security services provide comprehensive protection for international and domestic travel,
                combining detailed risk assessments with on-ground security support to ensure safe passage in any
                destination.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From pre-travel intelligence briefings to arrival and departure security, we coordinate every aspect of
                your journey to minimize exposure to threats while maintaining your travel schedule and business
                objectives.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Global Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Risk Intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Local Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/luxury-private-jet.jpg"
                alt="Luxury private jet for executive travel security"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Security Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Travel Security Solutions</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security services covering every aspect of domestic and international travel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Risk Assessment",
                desc: "Detailed threat analysis for destinations including political, criminal, and terrorism risks with mitigation strategies.",
              },
              {
                icon: Shield,
                title: "Close Protection",
                desc: "Personal security officers providing protection during travel, meetings, and public appearances abroad.",
              },
              {
                icon: Plane,
                title: "Airport Security",
                desc: "VIP airport services including fast-track processing, private terminals, and secure transfers.",
              },
              {
                icon: MapPin,
                title: "Route Planning",
                desc: "Secure route optimization with alternative paths and emergency protocols for ground transportation.",
              },
              {
                icon: Eye,
                title: "Advance Teams",
                desc: "Advance security teams conducting site surveys and establishing security protocols before arrival.",
              },
              {
                icon: Clock,
                title: "Emergency Response",
                desc: "24/7 emergency support with evacuation capabilities and medical emergency coordination.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Types */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Travel Security by Purpose</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Business Travel",
                desc: "Executive protection for business meetings, conferences, and corporate events in high-risk locations.",
              },
              {
                icon: Users,
                title: "Family Vacations",
                desc: "Discreet family protection services ensuring safe and enjoyable travel experiences worldwide.",
              },
              {
                icon: Globe,
                title: "Diplomatic Missions",
                desc: "Specialized security for diplomatic travel with protocol expertise and government liaison.",
              },
              {
                icon: Award,
                title: "High-Profile Events",
                desc: "Security coordination for attendance at premieres, galas, and international high-profile events.",
              },
            ].map((travel, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <travel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black">{travel.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{travel.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Global Security Network</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our international network of security professionals provides local expertise and rapid response
              capabilities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Europe & UK",
                desc: "Comprehensive coverage across European capitals with specialized knowledge of local security protocols and diplomatic procedures.",
                locations: ["London", "Paris", "Monaco", "Berlin", "Rome", "Amsterdam"],
              },
              {
                title: "Americas",
                desc: "North and South American operations with expertise in business travel security and high-risk area protection.",
                locations: ["New York", "Los Angeles", "Toronto", "Mexico City", "São Paulo", "Buenos Aires"],
              },
              {
                title: "Asia Pacific & Middle East",
                desc: "Regional expertise covering major business centers and emerging markets with cultural sensitivity and local partnerships.",
                locations: ["Dubai", "Singapore", "Hong Kong", "Tokyo", "Sydney", "Mumbai"],
              },
            ].map((region, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-black">{region.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{region.desc}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-black text-sm">Key Locations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.locations.map((location, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Travel Security Process</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive security coverage from planning to safe return.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pre-Travel Intelligence",
                desc: "Comprehensive threat assessment and risk analysis for destinations with detailed security briefings.",
              },
              {
                step: "02",
                title: "Security Planning",
                desc: "Development of detailed security protocols including routes, accommodations, and emergency procedures.",
              },
              {
                step: "03",
                title: "Advance Deployment",
                desc: "Advance teams establish security measures and coordinate with local authorities and venues.",
              },
              {
                step: "04",
                title: "Travel Execution",
                desc: "Professional security coverage throughout the journey with real-time monitoring and support.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Why Choose Our Travel Security?</h2>
              <div className="w-24 h-1 bg-black mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Global Network</h3>
                    <p className="text-gray-600">
                      Extensive international network with local expertise and established relationships in major cities
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Intelligence-Led</h3>
                    <p className="text-gray-600">
                      Real-time threat intelligence and risk assessment capabilities providing up-to-date security
                      information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">24/7 Operations</h3>
                    <p className="text-gray-600">
                      Round-the-clock operations center providing continuous support and emergency response
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Successful protection of high-profile clients across diverse international destinations and
                      scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Plan Secure Travel</h3>
              <p className="text-gray-600 mb-6">
                Contact us to discuss your travel security requirements and receive a comprehensive risk assessment and
                protection proposal.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-black" />
                  <span className="text-gray-700">Available on request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-black" />
                  <span className="text-gray-700">info@globalshieldprotection.com</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link href="/request" className="block">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Request Travel Security
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Risk Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Related Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/close-protection">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Close Protection</h3>
                  <p className="text-gray-600 text-sm">Personal bodyguard services for high-risk individuals</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/secure-transport">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Secure Transport</h3>
                  <p className="text-gray-600 text-sm">Armored vehicles and secure transportation solutions</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/intelligence-surveillance">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Intelligence & Surveillance</h3>
                  <p className="text-gray-600 text-sm">Threat assessment and intelligence gathering</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
