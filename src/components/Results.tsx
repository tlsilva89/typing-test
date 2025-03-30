import { calculateScore } from '../utils/calculateScore';

interface ResultsProps {
  text: string;
  userInput: string;
  startTime: number | null;
  endTime: number | null;
  errors: number;
  onReset: () => void;
}

export const Results = ({
  text,
  /*userInput,*/
  startTime,
  endTime,
  errors,
  onReset,
}: ResultsProps) => {
  if (!endTime || !startTime) return null;

  const timeInSeconds = (endTime - startTime) / 1000;
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  
  const accuracy = ((text.length - errors) / text.length) * 100;
  const score = calculateScore(text.length, errors, timeInSeconds);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-md w-full mx-auto mt-8 animate-fade-in border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Resultados</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-600/20 p-4 rounded-lg">
          <p className="text-sm text-indigo-200">Precisão</p>
          <p className="text-3xl font-bold text-white">{accuracy.toFixed(1)}%</p>
        </div>
        
        <div className="bg-purple-600/20 p-4 rounded-lg">
          <p className="text-sm text-purple-200">Tempo</p>
          <p className="text-3xl font-bold text-white">
            {minutes > 0 ? `${minutes}m ` : ''}{seconds}s
          </p>
        </div>
        
        <div className="bg-pink-600/20 p-4 rounded-lg">
          <p className="text-sm text-pink-200">Erros</p>
          <p className="text-3xl font-bold text-white">{errors}</p>
        </div>
        
        <div className="bg-green-600/20 p-4 rounded-lg">
          <p className="text-sm text-green-200">Pontuação</p>
          <p className="text-3xl font-bold text-white">{score}/100</p>
        </div>
      </div>
      
      <button
        onClick={onReset}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Tentar Novamente
      </button>
    </div>
  );
};