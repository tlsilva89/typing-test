import { useTypingTest } from '../hooks/useTypingTest';
import { Results } from './Results';

export const TypingTest = () => {
  const {
    text,
    userInput,
    startTime,
    endTime,
    isTestActive,
    errors,
    handleInputChange,
    resetTest,
  } = useTypingTest();

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = 'character text-gray-400';
      
      if (index < userInput.length) {
        className += userInput[index] === char ? ' correct' : ' incorrect';
      }
      
      if (index === userInput.length && isTestActive) {
        className += ' current';
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-4">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Teste de Velocidade de Digitação
        </h1>
        
        <div className="mb-6 p-4 bg-gray-900 rounded-lg min-h-20">
          <p className="text-lg leading-relaxed select-none">{renderText()}</p>
        </div>
        
        <textarea
          value={userInput}
          onChange={handleInputChange}
          disabled={!!endTime}
          className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
          placeholder={endTime ? 'Teste concluído!' : 'Comece a digitar...'}
        />
        
        <div className="mt-4 flex justify-between text-sm text-gray-400">
          <span>Caracteres: {userInput.length}/{text.length}</span>
          <span>Erros: {errors}</span>
        </div>
      </div>
      
      {endTime && (
        <Results
          text={text}
          userInput={userInput}
          startTime={startTime}
          endTime={endTime}
          errors={errors}
          onReset={resetTest}
        />
      )}
    </div>
  );
};