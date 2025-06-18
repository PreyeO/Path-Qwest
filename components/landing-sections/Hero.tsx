import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { trustIndicators } from "@/data";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white text-gray-800 py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
                Your Path to
                <span className="block text-rose-500">Canada Starts Here</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed ">
                Expert guidance for student admissions, visas, loans, and
                skilled worker programs. We make your Canadian dream a reality
                with personalized support every step of the way.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cursor-pointer bg-rose-600 text-white px-8 py-6 rounded-lg hover:bg-rose-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 transform hover:scale-105">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button className=" cursor-pointer bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-6 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-gray-200 shadow-md">
              <Image
                src="/hero-illustration.jpg"
                alt="Canada Migration Pathway"
                width={500}
                height={500}
                className="w-full h-80 object-cover rounded-xl"
                priority
              />
            </div>

            {/* Success rate badge */}
            <div className="absolute -bottom-6 lg:-right-5 -right-2 bg-rose-600 text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
