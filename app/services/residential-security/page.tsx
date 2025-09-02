import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Shield,
  Clock,
  Eye,
  Award,
  Camera,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Lock,
  Users,
  AlertTriangle,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResidentialSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Luxury residential estate with security"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Residential Security Services</h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive home and property protection for high-net-worth individuals and their families. Our
              residential security solutions combine advanced technology with professional personnel to create secure,
              private living environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Secure My Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                >
                  Security Assessment
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
              <h2 className="text-4xl font-bold mb-6 text-black">Complete Home Protection</h2>
              <div className="w-24 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our residential security services provide comprehensive protection for your home, family, and assets. We
                design customized security solutions that integrate seamlessly with your lifestyle while maintaining the
                highest levels of protection and privacy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From perimeter security and access control to surveillance systems and emergency response protocols, we
                create multi-layered defense systems that deter threats and provide peace of mind. Our dedicated 24/7
                in-house security team operates on rotating shifts to ensure continuous protection and immediate
                response capabilities around the clock.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">24/7 Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Armed Response Teams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Smart Home Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Emergency Protocols</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/security-monitoring-center.jpg"
                alt="Professional security monitoring center with multiple surveillance screens"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Security Solutions</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced security technologies and professional services tailored to your property and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Surveillance Systems",
                desc: "High-definition CCTV networks with night vision, motion detection, and remote monitoring capabilities.",
              },
              {
                icon: Lock,
                title: "Access Control",
                desc: "Biometric entry systems, smart locks, and visitor management for complete property access control.",
              },
              {
                icon: AlertTriangle,
                title: "Perimeter Security",
                desc: "Advanced perimeter detection systems including motion sensors, thermal imaging, and barrier protection.",
              },
              {
                icon: Users,
                title: "Security Personnel",
                desc: "Dedicated 24/7 in-house security team operating on rotating shifts, providing continuous on-site presence and rapid response capabilities.",
              },
              {
                icon: Zap,
                title: "Alarm Systems",
                desc: "Integrated alarm networks with silent alerts, panic buttons, and direct emergency service connection.",
              },
              {
                icon: Eye,
                title: "Monitoring Center",
                desc: "24/7 professional monitoring with immediate response protocols and emergency dispatch services.",
              },
            ].map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Protect */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Areas We Protect</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protecting high-value properties across the UK's most prestigious residential areas and exclusive
              neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Central London",
                desc: "Premium residential security for London's most exclusive areas including luxury homes and penthouses.",
                areas: ["Mayfair & Belgravia", "Kensington & Chelsea", "Knightsbridge", "Marylebone"],
              },
              {
                title: "North London",
                desc: "Comprehensive protection for prestigious residential areas and private estates in North London.",
                areas: ["Hampstead & Highgate", "Primrose Hill", "St. John's Wood", "Regent's Park"],
              },
              {
                title: "Home Counties",
                desc: "Securing luxury properties and private estates across the affluent areas surrounding London.",
                areas: ["Surrey & Berkshire", "Hertfordshire", "Buckinghamshire", "Oxfordshire"],
              },
            ].map((area, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-black">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.desc}</p>
                  <div className="space-y-2">
                    {area.areas.map((location, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">{location}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Properties We Protect</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Private Estates",
                desc: "Large residential properties with extensive grounds requiring comprehensive perimeter and internal security.",
              },
              {
                title: "Luxury Homes",
                desc: "High-value residential properties in exclusive neighborhoods with discreet security integration.",
              },
              {
                title: "Penthouses",
                desc: "High-rise luxury apartments requiring specialized access control and surveillance solutions.",
              },
              {
                title: "Vacation Properties",
                desc: "Secondary homes and holiday properties with remote monitoring and periodic security checks.",
              },
            ].map((property, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black">{property.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{property.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}

      {/* Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Security Process</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to residential security from initial assessment to ongoing protection.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Security Assessment",
                desc: "Comprehensive evaluation of your property, identifying vulnerabilities and security requirements.",
              },
              {
                step: "02",
                title: "Custom Design",
                desc: "Development of tailored security solutions integrating technology and personnel based on your needs.",
              },
              {
                step: "03",
                title: "Installation & Setup",
                desc: "Professional installation of security systems with minimal disruption to your daily routine.",
              },
              {
                step: "04",
                title: "Ongoing Monitoring",
                desc: "24/7 professional monitoring with regular system maintenance and security updates.",
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
              <h2 className="text-4xl font-bold mb-6 text-black">Why Choose Our Residential Security?</h2>
              <div className="w-24 h-1 bg-black mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Proven Expertise</h3>
                    <p className="text-gray-600">
                      Years of experience protecting high-profile residences with zero security breaches on our watch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Comprehensive Protection</h3>
                    <p className="text-gray-600">
                      Multi-layered security approach combining technology, personnel, and protocols for complete
                      coverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">24/7 Monitoring</h3>
                    <p className="text-gray-600">
                      Round-the-clock professional monitoring with our dedicated in-house security team on rotating
                      shifts, ensuring immediate response capabilities and emergency protocols are always active.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Discreet Integration</h3>
                    <p className="text-gray-600">
                      Security solutions that blend seamlessly with your home's aesthetics and your family's lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Secure Your Home</h3>
              <p className="text-gray-600 mb-6">
                Contact us for a confidential security assessment and receive a customized residential protection
                proposal.
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
                    Request Assessment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Speak to Security Expert
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
