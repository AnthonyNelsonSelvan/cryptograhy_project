import './App.css'
import { useState } from 'react';
import Home from './components/Home.jsx';
import Timeline from './components/Timeline.jsx';
import Playground from './components/Playground.jsx';
import Quiz from './components/Quiz.jsx';
import PreQuizInfo from './components/PreQuizInfo.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = {
    home: { title: 'Home' },
    timeline: { title: 'Timeline' },
    playground: { title: 'Playground' },
    readme : {title: 'ReadMe'},
    quiz: { title: 'Quiz' },
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'timeline':
        return <Timeline />;
      case 'playground':
        return <Playground />;
      case 'quiz':
        return <Quiz />;
      case 'readme':
        return <PreQuizInfo />
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200 font-inter text-slate-800 p-4 sm:p-8">
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 mb-8 bg-white/70 rounded-full shadow-lg border border-gray-200 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 sm:mb-0 sparkle-text">
          Cryptography Portal
        </h1>
        <nav className="flex space-x-2 sm:space-x-4">
          {Object.entries(navigation).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                activeSection === key
                  ? 'bg-sky-500 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              {value.title}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {renderSection()}
        </div>
      </main>
      

    </div>
)};

export default App;
