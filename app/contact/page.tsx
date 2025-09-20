"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageSquare, Shield } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isCooldown || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "contact"
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Start cooldown (30 seconds)
        setIsCooldown(true);
        setCooldown(30);

        const timer = setInterval(() => {
          setCooldown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setIsCooldown(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (err) {
      setSubmitStatus('error');
      console.error('Network error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your security needs? Our team is available 24/7 for consultations and emergency response.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                All communications are strictly confidential. Our team will respond within 2 hours during business
                hours, or immediately for emergency situations.
              </p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    We'll respond within 2 hours during business hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">Failed to send message</p>
                  <p className="text-red-700 text-sm mt-1">
                    Please try again or call our emergency line: +44 (0) 7497 580 732
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Please describe your security requirements and any specific concerns..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isCooldown || isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : isCooldown
                      ? `Please wait ${cooldown}s...`
                      : "Send Secure Message"
                  }
                </Button>
              </form>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <Shield className="w-4 h-4 inline mr-2" />
                  All communications are encrypted and protected by our confidentiality agreement.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-black">24/7 Emergency Line</h3>
                        <p className="text-gray-600">{"+44 (0) 7497 580 732"}</p>
                        <p className="text-sm text-gray-500 mt-1">Available for immediate response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-black">Email</h3>
                        <p className="text-gray-600">info@globalshield.co.uk</p>
                        <p className="text-sm text-gray-500 mt-1">Secure encrypted communication</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-black">Headquarters</h3>
                        <p className="text-gray-600">London, United Kingdom</p>
                        <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Secure Communication Methods */}
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Secure Communication</h3>
                <p className="text-gray-300 mb-6">
                  For highly sensitive matters, we offer additional secure communication channels:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5" />
                    <span>Signal: +44 (0) 7497 580 732 </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp: +44 (0) 7497 580 732 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Emergency Situations</h2>
          <p className="text-xl mb-6">
            If you are in immediate danger or require emergency protection services, contact us now.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
          >
            Emergency Hotline: +44 (0) 7497 580 732
          </Button>
        </div>
      </section>
    </div>
  )
}