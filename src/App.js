import React, { useState } from 'react';
import leaf from './leaf.png';
import { motion } from 'framer-motion';
import './App.css';

const numLeaves = 20;

const generateLeaves = () => {
  const leaves = [];
  for (let i = 0; i < numLeaves; i++) {
    const delay = Math.random() * 10;
    const duration = 10 + Math.random() * 10;
    const left = Math.random() * 100;
    const size = 30 + Math.random() * 20;

    leaves.push(
      <motion.img
        key={i}
        src={leaf}
        alt="leaf"
        className="falling-leaf"
        style={{ width: `${size}px` }}
        variants={{
          initial: { y: -100, opacity: 0, x: `${left}vw` },
          animate: {
            y: '100vh',
            opacity: 1,
            transition: {
              duration,
              ease: 'easeInOut',
              delay,
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }}
        initial="initial"
        animate="animate"
      />
    );
  }
  return leaves;
};

function App() {
  const [petals, setPetals] = useState([]);
  const [maxPetals] = useState(20); // Número máximo de pétalas
  const [percentage, setPercentage] = useState(0);

  const addPetal = () => {
    if (petals.length >= maxPetals) return;

    const phrase = prompt("Digite uma frase positiva para a nova pétala:");
    if (phrase && phrase.trim() !== "") {
      const totalPetals = maxPetals;
      const angle = (360 / totalPetals) * petals.length + 20; // Inclinação de 20 graus extra
      const newPetal = { text: phrase, angle };
      setPetals([...petals, newPetal]);

      const newPercentage = Math.floor(((petals.length + 1) / maxPetals) * 100);
      setPercentage(newPercentage);

      if (newPercentage === 100) {
        setTimeout(() => {
          alert("Parabéns! Todos completaram suas pétalas! Aqui vai a charada: O que é que quanto mais se tira, maior fica?");
        }, 500);
      }
    }
  };

  const mioloSize = 100 + (petals.length / maxPetals) * 100; // Miolo aumenta conforme o número de pétalas

  return (
    <div className="App">
      <header className="App-header">
        {generateLeaves()}

        <div className="flower">
          <motion.div
            className="flower-center"
            onClick={addPetal}
            style={{
              width: `${mioloSize}px`,
              height: `${mioloSize}px`,
            }}
            whileTap={{ scale: 0.9 }} // Efeito de "pressionar" ao clicar
          ></motion.div>

          {petals.map((petal, index) => (
            <Petal key={index} text={petal.text} angle={petal.angle} />
          ))}
        </div>

        <div className="progress-bar">
          {percentage}% das pétalas preenchidas
        </div>
      </header>
    </div>
  );
}

function Petal({ text, angle }) {
  const transformStyle = {
    transform: `rotate(${angle}deg) translateY(-80px)`, // Inclinação ajustada em 20 graus
    transformOrigin: '80% 100%',
  };

  return (
    <div className="petal" style={transformStyle}>
      <p>{text}</p>
    </div>
  );
}

export default App;
