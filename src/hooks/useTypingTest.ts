import { useState, useCallback, useEffect } from 'react';

const TEXT_SAMPLES = [
  "A velocidade na digitação é uma habilidade essencial na era digital, permitindo maior produtividade e eficiência em diversas áreas profissionais. Pratique regularmente para desenvolver musculatura de memória e reduzir erros comuns.",
  "Digitar sem olhar para o teclado é o objetivo de todo profissional que trabalha com computadores. Essa habilidade, conhecida como digitação tátil, pode aumentar sua produtividade em até 40% quando dominada corretamente.",
  "Erros de digitação são comuns no início do aprendizado, mas diminuem significativamente com a prática consistente. Foque primeiro na precisão, depois na velocidade, e você se tornará um expert em digitação rapidamente.",
  "A posição correta das mãos no teclado é fundamental: dedos curvados, polegares na barra de espaço e cada dedo responsável por uma área específica. Essa técnica, chamada de home row, é a base da digitação eficiente."
];

export const useTypingTest = () => {
  const [state, setState] = useState({
    text: "",
    userInput: '',
    startTime: null as number | null,
    endTime: null as number | null,
    isTestActive: false,
    errors: 0,
    currentTextIndex: -1,
  });

  // Seleciona um texto aleatório diferente do atual
  const getRandomTextIndex = useCallback((currentIndex: number) => {
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * TEXT_SAMPLES.length);
    }
    return newIndex;
  }, []);

  const resetTest = useCallback(() => {
    const newIndex = getRandomTextIndex(state.currentTextIndex);
    setState({
      text: TEXT_SAMPLES[newIndex],
      userInput: '',
      startTime: null,
      endTime: null,
      isTestActive: false,
      errors: 0,
      currentTextIndex: newIndex,
    });
  }, [state.currentTextIndex, getRandomTextIndex]);

  // Inicializa com um texto aleatório
  useEffect(() => {
    if (state.text === "") {
      const initialIndex = Math.floor(Math.random() * TEXT_SAMPLES.length);
      setState(prev => ({
        ...prev,
        text: TEXT_SAMPLES[initialIndex],
        currentTextIndex: initialIndex,
      }));
    }
  }, [state.text]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    
    if (!state.isTestActive && value.length === 1) {
      setState(prev => ({
        ...prev,
        isTestActive: true,
        startTime: Date.now(),
      }));
    }

    let errors = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== state.text[i]) {
        errors++;
      }
    }

    if (value.length === state.text.length) {
      setState(prev => ({
        ...prev,
        userInput: value,
        endTime: Date.now(),
        isTestActive: false,
        errors,
      }));
    } else {
      setState(prev => ({
        ...prev,
        userInput: value,
        errors,
      }));
    }
  };

  return {
    ...state,
    handleInputChange,
    resetTest,
  };
};