"use client";

import React from "react";
import Celdas from "./Celdas";

interface BoardProps {
  gridData: Array<"X" | "O" | null>; //este es el tipo de dato que se va a usar en el tablero que son las celdas de la matriz
  onCellClick: (index: number) => void;
}

export default function Tablero({
  gridData,
  onCellClick,
}: BoardProps): JSX.Element {
  return (
    <div className='grid grid-cols-3 p-2 border'>
      {gridData.map((value, index) => (
        <Celdas key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}
