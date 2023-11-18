import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [divisiveis, setDivisiveis] = useState([]);

  const calcularSomatorio = () => {
    const num = parseInt(numero, 10);
    if (!isNaN(num)) {
      const divisiveisArray = [...Array(num).keys()]
        .filter(i => i % 3 === 0 || i % 5 === 0);
      setDivisiveis(divisiveisArray);
      
      const soma = divisiveisArray.reduce((a, b) => a + b, 0);
      setResultado(soma);
    } else {
      setResultado(null);
      setDivisiveis([]);
    }
  };

  return (
    <div className="App">
      <header className="wrapper">
        <h1 className='text'>Escribo Inovação para o Aprendizado</h1>
        <label >
          Digite um número:
          <input style={{margin:10}} type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>
        <button className="Submit" onClick={calcularSomatorio}>Calcular Somatório</button>
        {resultado !== null && (
          <p >O somatório dos valores divisíveis por 3 ou 5 até {numero} é: {resultado}</p>
        )}
        {divisiveis.length > 0 && (
          <p>Números divisíveis por 3 ou 5 até {numero}: {divisiveis.join(', ')}</p>
        )}
      </header>
    </div>
  );
}

export default App;
