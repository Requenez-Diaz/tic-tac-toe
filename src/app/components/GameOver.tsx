"use client";

import React from "react";

interface gameOverProps {
  empate: boolean;
  winner: "X" | "O" | null;
  onRestart: () => void;
}

export default function GameOver({
  empate,
  winner,
  onRestart,
}: gameOverProps): JSX.Element {
  return (
    <div className='mt-4'>
      <p>{empate ? "¡Han quedado empate" : `¡${winner} es el ganador!`}</p>
      <button
        onClick={onRestart}
        className='mt-2 bg-blue-500 text-white px-4 py-2'
      >
        Reiniciar Juego
      </button>
    </div>
  );
}
