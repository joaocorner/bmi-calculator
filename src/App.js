export default function App(){
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Preencha os campos abaixo para calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso (kg) Ex: 90"
        />
        <input
          type="text"
          placeholder="Altura em (kg) Ex: 180"
        />
        <button>
          Calcular
        </button>
      </div>
      <h2>Seu IMC foi 30, você está acima do peso!</h2>
    </div>
  )
}