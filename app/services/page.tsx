import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Shield,
  Car,
  Home,
  Plane,
  UserCheck,
  Search,
  Eye,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  Phone,
  Globe,
  Lock,
  Camera,
  Wifi,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions tailored to your unique risk profile and lifestyle requirements. From
            personal protection to residential security, we deliver world-class service with absolute discretion.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-black">Core Protection Services</h2>
            <div className="w-16 h-0.5 bg-black mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elite security solutions designed for high-net-worth individuals, celebrities, executives, and diplomats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Close Protection */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Close Protection</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Personal bodyguard services providing discreet, professional protection for high-risk individuals.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  24/7 personal protection
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Threat assessment & planning
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Event security coordination
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl" asChild>
                <Link href="/services/close-protection">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Secure Transport */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Secure Transport</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Armored vehicles and secure transportation solutions with trained drivers and route security.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Luxury vehicle fleet
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Trained security drivers
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Route planning & surveillance
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl" asChild>
                <Link href="/services/secure-transport">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Residential Security */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Residential Security</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive home and property protection with advanced security systems and personnel.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  24/7 property monitoring
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Access control systems
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Emergency response teams
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl" asChild>
                <Link href="/services/residential-security">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Travel Security */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Travel Security</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                International travel risk assessment and protection services for worldwide business and leisure.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Pre-travel risk assessment
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Airport & hotel security
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Emergency evacuation plans
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl" asChild>
                <Link href="/services/travel-security">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Celebrity/VIP Protection */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Celebrity/VIP Protection</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Specialized protection for public figures and high-profile individuals requiring absolute discretion.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Red carpet & event security
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Paparazzi management
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Privacy protection
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl" asChild>
                <Link href="/services/celebrity-vip-escort">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Intelligence & Surveillance */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">Intelligence & Surveillance</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced threat assessment and intelligence gathering services for proactive security measures.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Threat intelligence analysis
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Background investigations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                  Digital security audits
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl" asChild>
                <Link href="/services/intelligence-surveillance">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Specialized Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced security solutions for unique situations and specialized requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Cyber Security</h3>
                <p className="text-gray-600 text-sm">Digital protection and cyber threat mitigation</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Event Security</h3>
                <p className="text-gray-600 text-sm">Comprehensive security for private and corporate events</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Technical Surveillance</h3>
                <p className="text-gray-600 text-sm">Bug sweeping and electronic countermeasures</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Crisis Management</h3>
                <p className="text-gray-600 text-sm">Emergency response and crisis situation handling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Service Process</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering world-class security solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Confidential assessment of your security needs and risk profile through detailed consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Risk Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive threat analysis and vulnerability assessment of your lifestyle and environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Custom Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored security strategy development with detailed protocols and contingency planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless deployment of security measures with ongoing monitoring and adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Global Shield Services</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Absolute Discretion</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete confidentiality and NDA compliance in all our operations and client interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Availability</h3>
              <p className="text-gray-300 leading-relaxed">
                Round-the-clock service with immediate response capabilities for emergency situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-300 leading-relaxed">
                International network of security professionals providing seamless worldwide protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Elite Personnel</h3>
              <p className="text-gray-300 leading-relaxed">
                Ex-military and law enforcement professionals with proven track records in high-risk environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Global Service Coverage</h2>
              <div className="w-16 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our services extend across major cities and regions worldwide, with established networks in key
                locations to ensure seamless protection wherever your lifestyle or business takes you.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-black">Primary Locations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      London, UK
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      Paris, France
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      Dubai, UAE
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      Monaco
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 text-black">Extended Coverage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      New York, USA
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      Los Angeles, USA
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      Hong Kong
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-black mr-2" />
                      São Paulo, Brazil
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/earth-global-coverage-bw.jpg"
                alt="Global Service Coverage - Earth at Night"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Secure Your Peace of Mind?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Contact us today for a confidential consultation and discover how our tailored security services can protect
            what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium" asChild>
              <Link href="/request">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-medium bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              Emergency Hotline
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
