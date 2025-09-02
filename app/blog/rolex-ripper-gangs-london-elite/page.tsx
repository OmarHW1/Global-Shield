import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react"

export const metadata = {
  title: "The Rise of Rolex Ripper Gangs: What London's Elite Need to Know | Global Shield Protection",
  description: "Sophisticated criminal networks are targeting luxury watch owners across London's affluent districts.",
  openGraph: {
    title: "The Rise of Rolex Ripper Gangs: What London's Elite Need to Know",
    description:
      "Sophisticated criminal networks are targeting luxury watch owners across London's affluent districts.",
    images: ["/images/luxury-gold-rolex-watch.jpg"],
  },
}

export default function RolexRipperGangsLondonElite() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/luxury-gold-rolex-watch.jpg"
            alt="Luxury gold Rolex watch with green dial"
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
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-200">
              Industry Article
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Rise of "Rolex Ripper" Gangs: What London's Elite Need to Know
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Sophisticated criminal networks are targeting luxury watch owners across London's affluent districts.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              14 January 2025
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Global Shield Security Team
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {/* Content placeholder - ready for user to provide content */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Article Content Ready</h3>
              <p className="text-gray-600">This page is prepared for the Rolex Ripper gangs analysis content.</p>
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

            <Link href="/blog/george-clarke-knifepoint-robbery-analysis" className="group">
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src="/london-street-scene-with-security-professional.png"
                    alt="George Clarke robbery analysis"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">
                    George Clarke Knifepoint Robbery Analysis
                  </h3>
                  <p className="text-gray-600 text-sm">Why public figures need close protection services.</p>
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
          <h2 className="text-4xl font-bold mb-6">Stay Safe from Luxury Watch Theft</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn how to protect yourself from sophisticated watch theft gangs with professional security guidance and
            close protection services.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/services/close-protection">
              Explore Close Protection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
