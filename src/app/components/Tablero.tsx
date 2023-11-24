import React, { useState } from "react";
import Celda from "./Celda";

const Tablero: React.FC = () => {
  const [tablero, setTablero] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index: number) => {
    if (calcularGanador(tablero) || tablero[index]) {
      return;
    }

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = xIsNext ? "X" : "O";
    setTablero(nuevoTablero);
    setXIsNext(!xIsNext);
  };

  const returnCeldas = (index: number) => (
    <Celda
      key={index}
      value={tablero[index]}
      onClick={() => handleClick(index)}
      isRightBorder={index % 3 !== 2}
      isBottomBorder={index < 6} //si es menor a 6 es true
    />
  );

  const calcularGanador = (squares: (string | null)[]) => {
    const lineasGanadoras: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lineasGanadoras) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const ganador = calcularGanador(tablero);
  const status = ganador
    ? `Ganador: ${ganador}`
    : `Siguiente jugador: ${xIsNext ? "X" : "O"}`;

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className='text-center'>
      <h1>Tablero</h1>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {tablero.map((_, index) => returnCeldas(index))}
      </div>
      <div>{status}</div>
      {ganador && (
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={reiniciarJuego}
        >
          Reiniciar Juego
        </button>
      )}
    </div>
  );
};

export default Tablero;
