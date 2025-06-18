import { MapPin, Mail } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@pathquestservices.ca</span>
            </div>
          </div>
          <div className="items-center space-x-2 hidden md:flex">
            <MapPin className="w-4 h-4" />
            <span>Serving all of Canada</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
