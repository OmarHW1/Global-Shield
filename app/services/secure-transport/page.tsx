import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Car,
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SecureTransportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-55">
          <Image
            src="/images/professional-chauffeur-service.jpg"
            alt="Professional chauffeur opening luxury vehicle door"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Secure Transport Services</h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {
                "High-security luxury vehicles and secure transportation solutions for individuals requiring enhanced safety. Our fleet of specialist protection vehicles offers discreet security while maintaining exceptional comfort and style for both business and personal travel."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Request Transport
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                >
                  View Fleet
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
              <h2 className="text-4xl font-bold mb-6 text-black">Vehicle Solutions</h2>
              <div className="w-24 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {
                  "Our secure transport services combine luxury travel with advanced safety measures, featuring vehicles designed to meet the highest security standards while preserving the comfort and discretion our clients expect."
                }
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Each vehicle in our fleet is equipped with advanced security features, communication systems, and
                emergency protocols. Our professional drivers are trained in defensive driving techniques and emergency
                response procedures.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">{"International travel support"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Trained Security Drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">GPS Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">24/7 Monitoring</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/mercedes-s-class-interior.jpg"
                alt="Mercedes S-Class luxury interior with quilted leather seats and ambient lighting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Fleet</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive range of vehicles to meet every security and comfort requirement.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: Car,
                title: "Executive Sedans",
                desc: "Luxury sedans perfect for business travel and city transportation, offering exceptional comfort, privacy, and style.",
                models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
              },
              {
                icon: Shield,
                title: "SUV Protection",
                desc: "High-profile SUVs delivering a commanding presence and premium comfort — ideal for public appearances and long-distance travel.",
                models: ["Range Rover", "Mercedes G-Wagon", "Mercedes GLS Maybach"],
              },
              {
                icon: Users,
                title: "Multi-Passenger Vehicles",
                desc: "Spacious and refined vehicles designed for family travel or group transportation, ensuring comfort and discretion for every passenger.",
                models: ["Mercedes V Class", "Mercedes Sprinter", "Custom Solutions"],
              },
            ].map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                      <vehicle.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-black">{vehicle.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{vehicle.desc}</p>

                    <div className="flex flex-wrap gap-3">
                      {vehicle.models.map((model, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Advanced Security Features</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Luxury Performance",
                desc: "Engineered for exceptional comfort, style, and peace of mind.",
              },
              {
                icon: Eye,
                title: "Surveillance Systems",
                desc: "360-degree camera coverage with night vision and real-time monitoring capabilities.",
              },
              {
                icon: MapPin,
                title: "GPS Tracking",
                desc: "Advanced tracking systems with emergency beacon and route optimization features.",
              },
              {
                icon: Clock,
                title: "Emergency Response",
                desc: "Direct communication with emergency services and rapid response protocols.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Transport Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible transportation solutions tailored to your specific security and comfort requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Transport",
                desc: "Daily transportation for business executives with flexible scheduling and route optimization.",
                features: ["Dedicated driver", "Flexible scheduling", "Business amenities", "Secure parking"],
              },
              {
                title: "Event Transportation",
                desc: "Secure transport to and from high-profile events, premieres, and public appearances.",
                features: ["Red carpet arrivals", "Media management", "Crowd control", "Emergency exits"],
              },
              {
                title: "Airport Transfers",
                desc: "VIP airport transfers with expedited security clearance and private terminal access.",
                features: ["Private terminals", "Fast-track security", "Luggage handling", "Flight monitoring"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
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
            <h2 className="text-4xl font-bold mb-6 text-black">How It Works</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures secure, comfortable transportation from booking to destination.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Risk Assessment",
                desc: "Evaluation of route security, destination threats, and transportation requirements.",
              },
              {
                step: "02",
                title: "Vehicle Selection",
                desc: "Matching the appropriate armored vehicle to your security level and comfort preferences.",
              },
              {
                step: "03",
                title: "Route Planning",
                desc: "Secure route optimization with alternative paths and emergency protocols established.",
              },
              {
                step: "04",
                title: "Secure Transport",
                desc: "Professional execution with real-time monitoring and communication throughout the journey.",
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
              <h2 className="text-4xl font-bold mb-6 text-black">Why Choose Our Transport Services?</h2>
              <div className="w-24 h-1 bg-black mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Certified Drivers</h3>
                    <p className="text-gray-600">
                      All drivers are professionally trained in defensive driving, emergency response, and client
                      protection protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Military-Grade Protection</h3>
                    <p className="text-gray-600">
                      Our vehicles meet international ballistic standards with comprehensive protection against multiple
                      threat types.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Round-the-clock service with rapid deployment capabilities for emergency transportation needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Discreet Operations</h3>
                    <p className="text-gray-600">
                      Luxury vehicles that blend seamlessly into any environment while providing maximum protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Request Secure Transport</h3>
              <p className="text-gray-600 mb-6">
                Contact us to discuss your transportation security requirements and receive a customized solution
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
                    Book Transport
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    View Fleet Details
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
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Close Protection</h3>
                  <p className="text-gray-600 text-sm">Personal bodyguard services for high-risk individuals</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/travel-security">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Travel Security</h3>
                  <p className="text-gray-600 text-sm">International travel risk assessment and protection</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/residential-security">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Residential Security</h3>
                  <p className="text-gray-600 text-sm">Comprehensive home and property protection</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
