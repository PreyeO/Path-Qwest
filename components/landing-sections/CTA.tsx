import React from "react";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="bg-rose-600 rounded-2xl px-6 py-12 md:px-16 text-center text-white shadow-md">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Start Your Canadian Journey?
      </h3>
      <p className="text-base md:text-xl text-rose-100 mb-6 max-w-2xl mx-auto">
        Book a free consultation and let our experts create a personalized plan
        for your success.
      </p>
      <Button className="bg-white text-rose-600 hover:bg-rose-100 font-semibold px-6 md:px-8 py-3 md:py-6 cursor-pointer rounded-lg transition-all duration-300">
        Schedule Free Consultation
      </Button>
    </div>
  );
};

export default CTA;
