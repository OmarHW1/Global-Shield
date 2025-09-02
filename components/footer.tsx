import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

// TikTok icon component since Lucide doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Motto */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4" aria-label="Global Shield Protection home">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%202.jpg-5xXvBinMsrA7UJsTCmifoICqy1NIjr.jpeg"
                alt="Global Shield Protection logo"
                width={36}
                height={36}
                unoptimized
                className="h-9 w-9 object-contain bg-transparent"
              />
              <div>
                <div className="font-bold text-xl">Global Shield Close Protection</div>
                <div className="text-sm text-gray-400 -mt-1">
                  Bespoke Close Protection | International Risk Management
                </div>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Precision, Discretion, Peace of Mind. Elite protection services for high-net-worth individuals,
              celebrities, executives, and diplomats worldwide.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/case-studies", label: "Case Studies" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>London, United Kingdom</p>
              <p>24/7 Emergency Line</p>
              <p>Phone Number +44 (0) 7497 580 732 </p>
              <p>info.globalshield@gmail.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/global.shield.protection/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Global Shield Close Protection. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
