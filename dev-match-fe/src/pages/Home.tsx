import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/quiz");
  };

  const row1Careers = [
    "ENGINEERING & TECHNOLOGY",
    "ART & CREATIVITY",
    "AEROSPACE & AVIATION",
    "COMPUTER SCIENCE",
    "DATA SCIENCE",
    "ROBOTICS",
    "ARTIFICIAL INTELLIGENCE",
    "CYBER SECURITY",
    // Duplicate for seamless animation
    "ENGINEERING & TECHNOLOGY",
    "ART & CREATIVITY",
    "AEROSPACE & AVIATION",
    "COMPUTER SCIENCE",
    "DATA SCIENCE",
    "ROBOTICS",
    "ARTIFICIAL INTELLIGENCE",
    "CYBER SECURITY",
  ];

  const row2Careers = [
    "LAW AND ORDER",
    "MEDIA & ENTERTAINMENT",
    "MANAGEMENT & MARKETING",
    "FINANCE",
    "BUSINESS ANALYTICS",
    "ENTREPRENEURSHIP",
    "DIGITAL MARKETING",
    "E-COMMERCE",
    // Duplicate for seamless animation
    "LAW AND ORDER",
    "MEDIA & ENTERTAINMENT",
    "MANAGEMENT & MARKETING",
    "FINANCE",
    "BUSINESS ANALYTICS",
    "ENTREPRENEURSHIP",
    "DIGITAL MARKETING",
    "E-COMMERCE",
  ];

  const row3Careers = [
    "HEALTHCARE",
    "AGRICULTURE & FOOD PROCESSING",
    "SCIENCE & RESEARCH",
    "BIOTECHNOLOGY",
    "ENVIRONMENTAL SCIENCE",
    "PSYCHOLOGY",
    "RENEWABLE ENERGY",
    "MEDICAL RESEARCH",
    // Duplicate for seamless animation
    "HEALTHCARE",
    "AGRICULTURE & FOOD PROCESSING",
    "SCIENCE & RESEARCH",
    "BIOTECHNOLOGY",
    "ENVIRONMENTAL SCIENCE",
    "PSYCHOLOGY",
    "RENEWABLE ENERGY",
    "MEDICAL RESEARCH",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F0]">
      <div className="w-full text-center">
        <h1 className="px-8 text-4xl font-bold mb-4 text-gray-800">
          Passionate About Your Future<span className="text-green-500">?</span>
        </h1>
        <p className="px-6 text-base mb-12 text-gray-600 max-w-2xl mx-auto">
          Take the first step toward your dream career by choosing a field of
          interest and discovering the diverse career options it offers.
        </p>

        <div className="flex flex-col gap-4 mb-12 overflow-hidden w-full">
          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll-left whitespace-nowrap inline-flex">
              {row1Careers.map((career, index) => (
                <div
                  key={index}
                  className="inline-block bg-transparent border border-green-400 rounded-full py-2 px-6 text-sm text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 cursor-pointer mx-1"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll-right whitespace-nowrap inline-flex">
              {row2Careers.map((career, index) => (
                <div
                  key={index}
                  className="inline-block bg-transparent border border-green-400 rounded-full py-2 px-6 text-sm text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 cursor-pointer mx-2"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll-left whitespace-nowrap inline-flex">
              {row3Careers.map((career, index) => (
                <div
                  key={index}
                  className="inline-block bg-transparent border border-green-400 rounded-full py-2 px-6 text-sm text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 cursor-pointer mx-2"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleStartTest}
        className="group bg-green-500 text-black font-bold py-3 px-8 rounded-full text-base transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
      >
        Take Quiz Now
        <ArrowRight size={20} className="transition-transform duration-300 group-hover:rotate-[-15deg]" />
      </button>
    </div>
  );
};

export default Home;
