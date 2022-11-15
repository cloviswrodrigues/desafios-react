import React from 'react';

const Question = ({ pergunta, getProximaPergunta, setNumeroAcerto }) => {
    const [ response, setResponse ] = React.useState(null);

    function handleChange({ target }) {
        setResponse(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (pergunta.resposta == response){
            setNumeroAcerto((anterior) => anterior + 1);
        }
        setResponse(null)
        if (response) getProximaPergunta();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{pergunta.pergunta}</p>
            {pergunta.options.map((option) => (
                <label key={option} style={{display: 'block', marginBottom: '.5rem'}}>
                    <input 
                    type="radio"
                    value={option}
                    checked={option == response} 
                    onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
            <button>Proxima</button>
        </form>
    )
}

export default Question;