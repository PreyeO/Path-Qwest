"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data";
import CTA from "./CTA";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">
            Comprehensive Canadian Immigration Services
          </h2>
          <p className="md:text-xl text-base text-gray-600 max-w-3xl mx-auto">
            From student admissions to permanent residency, we provide
            end-to-end support for all your Canadian immigration needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="md:w-16 md:h-16 h-12 w-12 bg-rose-100 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-rose-600" />
                </div>
                <CardTitle className="md:text-2xl text-lg text-gray-800 mt-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 md:text-base text-[14px]">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm text-gray-700 md:text-base text-[14px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button className="w-full flex justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-6">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <CTA />
      </div>
    </section>
  );
};

export default Services;
