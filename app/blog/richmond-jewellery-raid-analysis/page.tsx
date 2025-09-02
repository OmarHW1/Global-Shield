import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Share2 } from "lucide-react"

export default function RichmondJewelleryRaidAnalysis() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-jewellery-store-security.png"
            alt="Luxury jewellery store security"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
            Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A brazen daylight raid exposes critical gaps in high-value retail security protocols.
          </p>
        </div>
      </section>

      {/* Article Metadata */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>18 January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Global Shield Security Team</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Incident Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In May 2024, a Richmond jewellery store was raided in what was initially reported as a violent
                  robbery. Armed suspects allegedly made off with £1.38 million in luxury watches. Later, court
                  proceedings suggested the robbery may have been staged as part of an insurance scam.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Regardless of the disputed details, the event underscores the vulnerabilities of luxury retail
                  premises and the devastating financial and reputational costs of security breaches.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Luxury Retail is High-Risk</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">High-value assets on display</h3>
                    <p className="text-gray-700">
                      Visible, portable, and easily resold items create attractive targets for criminals.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Repeat targeting</h3>
                    <p className="text-gray-700">London jewellery districts are frequently hit by organised gangs.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Staff vulnerabilities</h3>
                    <p className="text-gray-700">Employees are often untrained in hostile situations.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Public access</h3>
                    <p className="text-gray-700">Shops must balance security with customer experience.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How Security Measures Could Have Prevented This Incident
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Site Security Presence</h3>
                    <p className="text-gray-700 mb-2">Trained operatives visibly deter smash-and-grab style raids.</p>
                    <p className="text-sm text-blue-600 font-medium">
                      Preventive Measure: Reduces perceived opportunity for criminals.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Control Systems</h3>
                    <p className="text-gray-700 mb-2">
                      Secure double-entry systems and ID verification limit unauthorised access.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Preventive Measure: Slows intruder movement and creates choke points.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Protective Surveillance</h3>
                    <p className="text-gray-700 mb-2">
                      Continuous monitoring of surrounding streets identifies loitering or pre-attack reconnaissance.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Preventive Measure: Disrupts hostile planning before the attack.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response Training</h3>
                    <p className="text-gray-700 mb-2">
                      Staff drilled in emergency protocols are less likely to make costly mistakes under pressure.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Preventive Measure: Protects both personnel and assets.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Shield Protection's Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide bespoke retail security services, integrating:
                </p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Specialist in-store operatives.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Discreet surveillance for surrounding streets.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Staff training for robbery response.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Liaison with police and private insurers.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways for Luxury Retailers</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Jewellery shops are prime targets — proactive measures are essential.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Staff alone cannot manage violent intrusions.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Integrated security blends deterrence, prevention, and rapid response.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Source</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Source:</strong>
                </p>
                <p className="text-sm text-gray-600">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Guardian – London jewellery shop robbery was staged, defendant tells court
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your High-Value Retail Business</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect your valuable inventory and customers with comprehensive retail security solutions designed for
            luxury businesses.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/request">
              Discuss Retail Security
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
