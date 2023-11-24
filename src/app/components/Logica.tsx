"use client";

import React, { useState } from "react";

interface LogicaProps {}

const Logica = () => {
  const [gridData, setGridData] = useState<Array<"X" | "O" | null>>(
    Array(9).fill(null)
  );
  const [turno, setTurno] = useState<"X" | "O">("X");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<"X" | "O" | null>(null);
  const [empate, setEmpate] = useState<boolean>(false);

  const handleTurno = () => {
    setTurno(turno === "X" ? "O" : "X");
  };

  const handleCellClick = (index: number) => {
    if (gameOver || gridData[index]) {
      return;
    }

    const newGridData = [...gridData];
    newGridData[index] = turno;
    setGridData(newGridData);

    const currentWinner = checkWinner(newGridData);
    if (currentWinner) {
      setGameOver(true);
      setWinner(currentWinner);
    } else {
      if (newGridData.indexOf(null) === -1) {
        setGameOver(true);
        setEmpate(true);
      } else {
        handleTurno();
      }
    }
  };

  const handleRestart = () => {
    setGridData(Array(9).fill(null));
    setTurno("X");
    setGameOver(false);
    setWinner(null);
    setEmpate(false);
  };

  const filasGanadoras: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (
    currentGrid: Array<"X" | "O" | null>
  ): "X" | "O" | null => {
    let currentWinner: "X" | "O" | null = null;
    filasGanadoras.forEach((fila) => {
      const [a, b, c] = fila;
      if (
        currentGrid[a] &&
        currentGrid[a] === currentGrid[b] &&
        currentGrid[a] === currentGrid[c]
      ) {
        currentWinner = currentGrid[a];
      }
    });
    return currentWinner;
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='grid grid-cols-3  p-2 border'>
        {gridData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className='bg-gray-800 p-4 text-center border cursor-pointer hover:bg-gray-700'
          >
            {item}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className='mt-4'>
          <p>{empate ? "¡Empate! No hay ganadores." : `¡${winner} gana!`}</p>
          <button
            onClick={handleRestart}
            className='mt-2 bg-blue-500 text-white px-4 py-2'
          >
            Reiniciar Juego
          </button>
        </div>
      )}
    </div>
  );
};

export default Logica;
