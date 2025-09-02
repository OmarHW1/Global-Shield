import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react"

export const metadata = {
  title: "George Clarke Knifepoint Robbery: Why Public Figures Need Close Protection | Global Shield Protection",
  description:
    "A detailed security analysis of the George Clarke knifepoint robbery and how professional close protection could have prevented the incident.",
  openGraph: {
    title: "George Clarke Knifepoint Robbery: Why Public Figures Need Close Protection",
    description:
      "A detailed security analysis of the George Clarke knifepoint robbery and how professional close protection could have prevented the incident.",
    images: ["/london-street-scene-with-security-professional.png"],
  },
}

export default function GeorgeClarkeRobberyAnalysis() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/london-street-scene-with-security-professional.png"
            alt="London street security scene"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>

          <div className="mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
              Case Study
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            George Clarke Knifepoint Robbery: Why Public Figures Need Close Protection
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A shocking attack on a beloved TV presenter highlights the vulnerability of public figures in everyday
            situations.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              20 January 2025
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Global Shield Protection
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mb-6">Incident Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In July 2025, Channel 4 presenter George Clarke was robbed at knifepoint in central London. The assailant
              targeted Clarke for his high-value watch, threatening him with a blade before fleeing the scene. While
              Clarke escaped unharmed, he later described the ordeal as "traumatic" and admitted the incident could
              easily have turned fatal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              The robbery highlights the increasing risks facing public figures and high-net-worth individuals (HNWIs)
              in London, particularly those who move through the city without security support.
            </p>

            <h2 className="text-3xl font-bold text-black mb-6">Why Central London is High-Risk for Public Figures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Central London presents unique challenges for public figures, creating an environment where:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Visibility:</strong> TV personalities, athletes, and influencers are recognisable in public,
                making them easy targets.
              </li>
              <li>
                <strong>Valuable possessions:</strong> Luxury watches and jewellery are visible signals to organised
                gangs.
              </li>
              <li>
                <strong>Predictable movements:</strong> Media figures often attend known events, leaving routines
                vulnerable.
              </li>
              <li>
                <strong>Limited escape routes:</strong> Central streets and nightlife districts create choke points for
                attackers.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-6">
              How Close Protection Could Have Prevented This Incident
            </h2>

            <h3 className="text-2xl font-semibold text-black mb-4">1. Protective Surveillance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A close protection operative would have identified hostile intent before the attacker closed in.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Preventive Measure:</strong> Early warning and intervention before escalation.
            </p>

            <h3 className="text-2xl font-semibold text-black mb-4">2. Secure Movement Protocols</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clarke could have been escorted from venue to vehicle with minimal public exposure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Preventive Measure:</strong> Reduces time in uncontrolled environments.
            </p>

            <h3 className="text-2xl font-semibold text-black mb-4">3. Counter-Surveillance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professionals are trained to detect if a client is being followed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Preventive Measure:</strong> Breaks attacker planning before engagement.
            </p>

            <h3 className="text-2xl font-semibold text-black mb-4">4. Rapid Intervention</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Operatives are trained to shield clients and neutralise threats.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>Preventive Measure:</strong> De-escalates situations before harm occurs.
            </p>

            <h2 className="text-3xl font-bold text-black mb-6">Global Shield Protection's Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We specialise in low-profile close protection for high-visibility clients. Our teams balance safety with
              discretion, allowing public figures to maintain a normal lifestyle without constant disruption.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Advance planning with intelligence-led mapping of threat zones.</li>
              <li>
                Low-profile but effective escorting, so clients maintain normal routines without sacrificing safety.
              </li>
              <li>Discreet coordination with local law enforcement in high-risk districts.</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-6">Key Takeaways for Public Figures</h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Recognition increases exposure</strong> — fame is a risk multiplier.
              </li>
              <li>
                <strong>Luxury items attract attention</strong> — especially in public nightlife zones.
              </li>
              <li>
                <strong>Security ensures peace of mind</strong> — the right team makes incidents impossible before they
                happen.
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Source:</strong>
              </p>
              <p className="text-sm text-gray-600">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  The Scottish Sun – George Clarke breaks silence on 'traumatic' knifepoint robbery
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/knightsbridge-watch-attack-analysis" className="group">
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/harrods-knightsbridge-night.jpg"
                    alt="Knightsbridge security analysis"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">
                    Knightsbridge Watch Attack Analysis
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How close protection could have prevented tragedy in London's luxury district.
                  </p>
                </div>
              </article>
            </Link>

            <Link href="/blog/st-johns-wood-mansion-heist-analysis" className="group">
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/st-johns-wood-mansion.jpg"
                    alt="St John's Wood mansion heist analysis"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">
                    St John's Wood Mansion Heist Analysis
                  </h3>
                  <p className="text-gray-600 text-sm">How residential security could have prevented a £10M loss.</p>
                </div>
              </article>
            </Link>

            <Link href="/blog/richmond-jewellery-raid-analysis" className="group">
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src="/luxury-jewellery-store-security.png"
                    alt="Richmond jewellery raid analysis"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">
                    Richmond Jewellery Raid Analysis
                  </h3>
                  <p className="text-gray-600 text-sm">How retail security could have prevented a £1.3M loss.</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Concerned About Your Security?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Public figures face unique security challenges. Our close protection specialists provide discreet,
            professional security tailored to your lifestyle and public commitments.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/request">
              Schedule Security Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
