import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12 md:py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-red-500/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white/20 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className=" text-4xl md:text-6xl font-bold leading-tight">
                Your Path to
                <span className="block text-red-400">Canada Starts Here</span>
              </h1>
              <p className=" text-lg md:text-xl text-blue-100 leading-relaxed">
                Expert guidance for student admissions, visas, loans, and
                skilled worker programs. We make your Canadian dream a reality
                with personalized support every step of the way.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Licensed Immigration Consultants</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>500+ Successful Cases</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>10+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 transform hover:scale-105">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Image
                src="/hero-illustration.jpg"
                alt="Canada Migration Pathway"
                width={500}
                height={500}
                className="w-full max-w-md md:max-w-lg"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
