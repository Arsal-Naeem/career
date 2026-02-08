import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions, predictCareer } from '../services/api';
import { Question } from '../types';

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load questions. Please try again later.');
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleOptionSelect = (traits: string[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = traits;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleQuizComplete(newAnswers);
    }
  };

  const handleQuizComplete = async (finalAnswers: string[][]) => {
    try {
      setIsLoading(true);
      await predictCareer(finalAnswers);
      navigate('/results', { state: { answers: finalAnswers } });
    } catch (err) {
      setError('Failed to process your results. Please try again.');
      setIsLoading(false);
    }
  };

  if (isLoading && questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FFF8F0]">
        <div className="text-xl text-gray-800">Loading questions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FFF8F0]">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FFF8F0]">
        <div className="text-xl text-gray-800">No questions available. Please try again later.</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FFF8F0]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4 md:p-8 ">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Question {currentQuestionIndex + 1}
              <span className="text-green-500">.</span>
            </h2>
            <div className="text-sm font-medium text-gray-600">
              {Math.round(((currentQuestionIndex) / questions.length) * 100)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-8 text-gray-800">{currentQuestion.text}</h3>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={option._id || index}
              onClick={() => handleOptionSelect(option.traits)}
              className="w-full text-left p-3 md:p-5 border border-green-400 rounded-xl
                hover:bg-green-500 hover:text-white group
                transition-all duration-300 cursor-pointer
                text-green-500 bg-transparent"
            >
              <span className="block font-medium transition-colors duration-300">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;