# 📝 Teste de Digitação - React + TypeScript

Um aplicativo web moderno para testar e melhorar suas habilidades de digitação, calculando precisão, velocidade e pontuação final.

## ✨ Funcionalidades

- ✅ Teste de digitação com frases de ~200 caracteres
- 📊 Cálculo automático de precisão e velocidade
- ⏱️ Cronômetro integrado
- 🏆 Sistema de pontuação (0-100)
- 🔄 Multiplas frases aleatórias
- 📱 Design responsivo para mobile e desktop

## 🛠️ Tecnologias Utilizadas

| Tecnologia       | Descrição                           |
|------------------|-------------------------------------|
| React            | Biblioteca front-end                |
| TypeScript       | Tipagem estática                    |
| Tailwind CSS     | Estilização utilitária              |
| Vite             | Build tool e dev server             |
| PostCSS          | Processamento de CSS                |
| ESLint           | Linter para qualidade de código     |

## 📈 Como a Pontuação é Calculada

A pontuação máxima (100) é alcançada combinando **precisão perfeita** e **alta velocidade**:

### 🔍 Fórmula da Pontuação
```math
Pontuação = (Precisão × 0.7) + (VelocidadeNormalizada × 0.3)
```

### 🎯 Componentes da Pontuação

| Fator          | Valor Máximo | Peso | Como Alcançar               |
|----------------|--------------|------|-----------------------------|
| **Precisão**   | 70 pontos    | 70%  | 0 erros na digitação        |
| **Velocidade** | 30 pontos    | 30%  | ≥200 PPM (palavras/minuto)  |

- **Palavra = 5 caracteres**
- **Velocidade Normalizada**: `min(PPM, 200) / 2`

### 📊 Exemplo Prático
```typescript
// Texto de 200 caracteres (40 palavras):
calculateScore(200, 0, 30) // 100 pontos (0 erros + 200 PPM)
calculateScore(200, 2, 60) // ≈85 pontos (99% precisão + 100 PPM)
```

## 🖥️ Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/typing-test.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse:
```
http://localhost:5173
```

## 📦 Scripts Úteis

| Comando          | Descrição                     |
|------------------|-------------------------------|
| `npm run dev`    | Inicia servidor de desenvolvimento |
| `npm run build`  | Cria versão para produção     |
| `npm run lint`   | Verifica qualidade do código  |
| `npm run preview`| Pré-visualiza build de produção |

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

MIT License - Veja o arquivo [LICENSE](https://opensource.org/license/mit) para detalhes.

---

Desenvolvido com ❤️ por [Thiago Luciano](https://github.com/tlsilva89)
