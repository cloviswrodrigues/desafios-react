import React from 'react';
import Perguntas from './ArrayQuestions';
import Question from './Question';


function App() {
  const [ perguntaNumero, setPerguntaNumero ] = React.useState(0);
  const [ currentQuestion, setCurrentQuestion ] = React.useState(Perguntas[0]);
  const [ showResultado, setShowResultado ] = React.useState(false);
  const [ numeroAcerto, setNumeroAcerto ] = React.useState(0);

  function getProximaPergunta(){
    if (perguntaNumero < (Perguntas.length - 1)) {
      setPerguntaNumero((anterior) => {
        let newNumero = anterior + 1
        setCurrentQuestion(Perguntas[newNumero])
        return newNumero
      });
    } else {
      setShowResultado(true);
    }      
  }

  return (
    <div className="App">
      {!showResultado ?
        <Question 
          pergunta={currentQuestion}
          getProximaPergunta={getProximaPergunta}
          setNumeroAcerto={setNumeroAcerto} /> 
      : 
        `Você Acertou ${numeroAcerto} de ${Perguntas.length}`
      }       
    </div>
  );
}

export default App;
