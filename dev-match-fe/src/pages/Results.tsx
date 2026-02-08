import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { predictCareer } from "../services/api";
import { CareerResult } from "../types";
import { ArrowLeft, RefreshCw } from "lucide-react";

const Results = () => {
  const [result, setResult] = useState<CareerResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getResults = async () => {
      if (!location.state?.answers) {
        navigate("/");
        return;
      }

      try {
        setIsLoading(true);
        const answers = location.state.answers as string[][];
        const careerResult = await predictCareer(answers);
        setResult(careerResult);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to process your results. Please try again.");
        setIsLoading(false);
      }
    };

    getResults();
  }, [location.state, navigate]);

  const handleRetakeQuiz = () => {
    navigate("/quiz");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FFF8F0]">
        <RefreshCw className="w-8 h-8 animate-spin text-green-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#FFF8F0] to-white">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-md">
          <div className="text-xl text-red-600 mb-6 font-medium">{error}</div>
          <button
            onClick={handleRetakeQuiz}
            className="group bg-green-500 text-white font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 flex items-center gap-2 hover:bg-green-400 hover:scale-105 shadow-lg hover:shadow-green-200"
          >
            Retake Quiz
            <RefreshCw
              size={20}
              className="transition-transform duration-300 group-hover:rotate-180"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F0]">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Your Results<span className="text-green-500">!</span>
        </h1>

        <p className="text-base mb-8 text-gray-600">
          You'll be a great fit for:
        </p>

        {result?.career && (
          <div className="flex flex-col items-center gap-4">
            {/* Top Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-4 text-xs text-green-500">
                Data Science
              </div>
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-6 text-xs text-green-500">
                AI Engineering
              </div>
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-4 text-xs text-green-500">
                Cloud Computing
              </div>
            </div>

            {/* Middle Grid */}
            <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 max-w-5xl mx-auto">
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-6  text-xs text-green-500 self-center">
                Backend Developer
              </div>
              <div className="inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-8 text-lg font-bold text-green-500">
                {result.career}
              </div>
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-4 text-xs text-green-500 self-center">
                Q/A Engineering
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-4 text-xs text-green-500">
                Web Development
              </div>
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-4 text-xs text-green-500">
                Mobile Development
              </div>
              <div className="opacity-20 inline-block bg-transparent border-2 border-green-400 rounded-full py-2 px-4 text-xs text-green-500">
                Game Development
              </div>
            </div>

            <p className="text-base text-gray-600 max-w-2xl mx-auto mt-8">
              This career path perfectly aligns with your unique personality
              traits and preferences.
            </p>
          </div>
        )}

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handleGoHome}
            className="group bg-transparent border-2 border-green-400 text-green-500 font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2 hover:bg-green-500 hover:text-white"
          >
            <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Go Home
          </button>
          <button
            onClick={handleRetakeQuiz}
            className="group bg-green-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
          >
            Retake Quiz
            <RefreshCw className="transition-transform duration-300 group-hover:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
