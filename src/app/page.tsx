import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope, Sparkles, Heart, Shield, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { creditBenefits, features, testimonials } from "@/lib/data";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
  
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-1">
              <div className="space-y-6">
                <Badge
                  variant="glassPurple"
                  className="px-6 py-3 text-sm font-medium animate-pulse-glow"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Next-Gen Healthcare Platform
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Connect with doctors{" "}
                  <span className="gradient-title bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent">
                    anytime, anywhere
                  </span>
                </h1>
                <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Experience healthcare reimagined with our modern platform. Book appointments, 
                  consult via video, and manage your health journey seamlessly.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="glow-purple text-lg px-5 py-4 h-auto"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="glassPurple"
                  size="lg"
                  className="text-lg px-5 py-4 h-auto"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
                <div className="glass-dark border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
                  <div className="text-muted-foreground text-lg">Happy Patients</div>
                </div>
                <div className="glass-dark border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
                  <div className="text-muted-foreground text-lg">Expert Doctors</div>
                </div>
                <div className="glass-dark border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-muted-foreground text-lg">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge
              variant="glassPurple"
              className="px-6 py-3 text-sm font-medium mb-8"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              How It Works
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Our platform makes healthcare accessible with just a few clicks. 
              Experience the future of medical consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="glass-dark border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-6 relative z-10">
                    <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-6 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-white mb-4">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge
              variant="glassPurple"
              className="px-6 py-3 text-sm font-medium mb-8"
            >
              <Heart className="h-4 w-4 mr-2" />
              Affordable Healthcare
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Choose the perfect consultation package that fits your healthcare needs. 
              Transparent pricing, no hidden fees.
            </p>
          </div>

          <div className="mx-auto">
            {/* Clerk Pricing Table */}
            <div className="glass-dark border border-purple-500/20 rounded-2xl overflow-hidden">
              <Pricing />
            </div>

            {/* Description */}
            <Card className="mt-12 glass-dark border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-3 text-purple-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-2 rounded-full">
                        <svg
                          className="h-4 w-4 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge
              variant="glassPurple"
              className="px-6 py-3 text-sm font-medium mb-8"
            >
              <Star className="h-4 w-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Hear from patients and doctors who use our platform. 
              Real experiences from real people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-dark border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-purple-400 font-bold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="glass-dark border-purple-500/20 relative overflow-hidden">
            <CardContent className="p-12 md:p-16 lg:p-20 relative z-10">
              <div className="max-w-3xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Join thousands of users who have simplified their healthcare journey with our platform. 
                  Get started today and experience healthcare the way it should be.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    asChild
                    variant="gradient"
                    size="xl"
                    className="glow-purple"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="glassPurple"
                    size="xl"
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-purple-800/10 rounded-full blur-3xl -mr-40 -mt-40" />
              <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-indigo-800/10 rounded-full blur-3xl -ml-20 -mb-20" />
              <div className="absolute right-1/2 top-1/2 w-[200px] h-[200px] bg-blue-800/10 rounded-full blur-3xl" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
