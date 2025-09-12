import { useState } from 'react';

const Quiz = () => {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  const quizQuestions = [
    {
      question: 'Which ancient Indian text describes the Kautilya\'s Cipher?',
      options: ['The Vedas', 'The Arthashastra', 'The Ramayana', 'The Mahabharata'],
      correctAnswer: 'The Arthashastra',
    },
    {
      question: 'What is the primary function of a substitution cipher?',
      options: ['Rearranging letters', 'Replacing letters with others', 'Hiding a message in plain sight', 'Compressing a message'],
      correctAnswer: 'Replacing letters with others',
    },
    {
      question: 'Who is often referred to as the "father of cryptanalysis" for his work on frequency analysis?',
      options: ['Al-Kindi', 'Leonardo da Vinci', 'Julius Caesar', 'Ada Lovelace'],
      correctAnswer: 'Al-Kindi',
    },
    {
      question: 'Which famous World War II machine used rotors to create complex polyalphabetic substitution ciphers?',
      options: ['The Bletchley Park machine', 'The Enigma machine', 'The Lorenz machine', 'The Colossus'],
      correctAnswer: 'The Enigma machine',
    },
    {
      question: 'The Vigenère cipher is a type of cipher that uses multiple shifted alphabets based on a:',
      options: ['Passphrase', 'Secret key', 'Polyalphabetic table', 'Keyword'],
      correctAnswer: 'Keyword',
    },
    {
      question: 'What is the foundation of modern public-key cryptography?',
      options: ['Symmetric encryption', 'The RSA algorithm', 'The Caesar cipher', 'Quantum computing'],
      correctAnswer: 'The RSA algorithm',
    },
  ];

  const handleQuizChange = (questionIndex, selectedOption) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: selectedOption,
    });
  };

  const handleQuizSubmit = () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  return (
    <div className="p-8 space-y-6 bg-white/70 rounded-3xl shadow-lg border border-gray-200 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-slate-800">Knowledge Quiz</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleQuizSubmit(); }} className="space-y-6">
        {quizQuestions.map((q, qIndex) => (
          <div key={qIndex} className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
            <p className="font-semibold text-lg text-slate-700 mb-4">{q.question}</p>
            <div className="space-y-3">
              {q.options.map((option, oIndex) => (
                <label key={oIndex} className="flex items-center space-x-3 text-slate-600 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option}
                    checked={quizAnswers[qIndex] === option}
                    onChange={() => handleQuizChange(qIndex, option)}
                    className="form-radio h-5 w-5 text-sky-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-4 bg-lime-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-lime-600 transition-colors duration-200 transform hover:scale-105"
            disabled={quizSubmitted}
          >
            {quizSubmitted ? 'Submitted!' : 'Submit Answers'}
          </button>
        </div>
      </form>
      {quizSubmitted && (
        <div className="mt-8 text-center bg-sky-500 text-white p-6 rounded-2xl shadow-lg animate-fade-in">
          <h3 className="text-xl font-bold mb-2">Quiz Results</h3>
          <p className="text-2xl font-bold">Your score: {quizScore} / {quizQuestions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
