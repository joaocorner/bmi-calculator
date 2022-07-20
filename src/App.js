import './app.css';
import {
  useState
} from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("Você está abaixo do seu peso! Seu IMC:" + imc.toFixed(2))
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem("Você está no seu peso ideal! Seu IMC:" + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 29.9) {
      setMensagem("Você está levemente acima do seu peso! Seu IMC:" + imc.toFixed(2))
    } else if (imc >= 29.9 && imc < 34.9) {
      setMensagem("Você está obeso! Seu IMC:" + imc.toFixed(2))
    } else if (imc >= 34.9) {
      setMensagem("Você está com obesidade mórbida! Seu IMC:" + imc.toFixed(2))
    }
  }

  return ( <
    div className = "app" >
    <
    h1 > Calculadora IMC < /h1> <
    span > Preencha os campos abaixo para calcular seu IMC < /span>

    <
    div className = "area-input" >
    <
    input type = "text"
    placeholder = "Peso em kg Ex: 90"
    value = {
      peso
    }
    onChange = {
      (e) => setPeso(e.target.value)
    }
    /> <
    input type = "text"
    placeholder = "Altura em cm Ex: 180"
    value = {
      altura
    }
    onChange = {
      (e) => setAltura(e.target.value)
    }
    /> <
    button onClick = {
      calcularIMC
    } >
    Calcular <
    /button> < /
    div > <
    h2 > {
      mensagem
    } < /h2>  < /
    div >
  )
}